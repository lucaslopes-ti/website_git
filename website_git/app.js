// App Principal - Controla o fluxo do tutorial interativo
// Modo Debug - desative em produção
const DEBUG_MODE = false;

// Função helper para logs condicionais
const debugLog = (...args) => {
    if (DEBUG_MODE) {
        console.log(...args);
    }
};

const debugError = (...args) => {
    console.error(...args); // Erros sempre são logados
};

class GitTutorialApp {
    constructor() {
        this.git = new GitSimulator();
        this.currentStep = null; // Inicia como null até o tutorial começar
        this.cursorGuide = null;
        this.startTime = null;
        this.timerInterval = null;
        this.stepCompleted = false; // Rastreia se o passo atual foi completado
        this.commandHistory = []; // Histórico de comandos
        this.historyIndex = -1; // Índice atual no histórico
        this.debounceTimers = {}; // Para debounce de eventos
        this.cachedElements = {}; // Cache de queries DOM
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
        this.setupWelcomeScreen();
    }

    setupWelcomeScreen() {
        const startBtn = document.getElementById('startTutorialBtn');
        const welcomeScreen = document.getElementById('welcomeScreen');
        const welcomeNarrative = document.getElementById('welcomeNarrative');
        const header = document.getElementById('header');
        const headerInfo = document.getElementById('headerInfo');
        const mainContent = document.getElementById('mainContent');
        const navigation = document.getElementById('navigation');

        // Inserir narrativa na tela de boas-vindas
        if (welcomeNarrative && window.gameNarrative) {
            welcomeNarrative.innerHTML = gameNarrative.intro;
        }

        debugLog('setupWelcomeScreen chamado', { startBtn, welcomeScreen, headerInfo });

        if (startBtn && welcomeScreen && headerInfo) {
            startBtn.addEventListener('click', () => {
                debugLog('Botão clicado! Iniciando tutorial...');
                welcomeScreen.style.display = 'none';
                if (header) header.style.display = 'block';
                headerInfo.style.display = 'flex';
                if (mainContent) mainContent.style.display = 'grid';
                if (navigation) navigation.style.display = 'flex';
                this.updateGamificationDisplay();
                this.updateAchievementsDisplay();
                
                // Iniciar tour guiado antes do tutorial
                setTimeout(() => {
                    this.startTour();
                }, 500);
            });
        } else {
            debugError('Elementos não encontrados:', { startBtn, welcomeScreen, headerInfo });
        }
    }

    setupElements() {
        this.elements = {
            terminalInput: document.getElementById('terminalInput'),
            terminalOutput: document.getElementById('terminalOutput'),
            instructionContent: document.getElementById('instructionContent'),
            instructionTitle: document.getElementById('instructionTitle'),
            stepType: document.getElementById('stepType'),
            theoryBox: document.getElementById('theoryBox'),
            theoryContent: document.getElementById('theoryContent'),
            hintBox: document.getElementById('hintBox'),
            hintText: document.getElementById('hintText'),
            exerciseBox: document.getElementById('exerciseBox'),
            exerciseContent: document.getElementById('exerciseContent'),
            exerciseSolution: document.getElementById('exerciseSolution'),
            exerciseSolutionCode: document.getElementById('exerciseSolutionCode'),
            cursorGuide: document.getElementById('cursorGuide'),
            progressFill: document.getElementById('progressFill'),
            progressText: document.getElementById('progressText'),
            currentModule: document.getElementById('currentModule'),
            stepInfo: document.getElementById('stepInfo'),
            timer: document.getElementById('timer'),
            currentBranch: document.getElementById('currentBranch'),
            commitCount: document.getElementById('commitCount'),
            fileCount: document.getElementById('fileCount'),
            gitGraph: document.getElementById('gitGraph'),
            codeEditor: document.getElementById('codeEditor'),
            codeTextarea: document.getElementById('codeTextarea'),
            fileSelector: document.getElementById('fileSelector'),
            saveFile: document.getElementById('saveFile'),
            resetFile: document.getElementById('resetFile'),
            prevStep: document.getElementById('prevStep'),
            nextStep: document.getElementById('nextStep'),
            showSolution: document.getElementById('showSolution'),
            restartTutorial: document.getElementById('restartTutorial'),
            feedbackModal: document.getElementById('feedbackModal'),
            modalBody: document.getElementById('modalBody'),
            modalClose: document.getElementById('modalClose'),
            pointsDisplay: document.getElementById('pointsDisplay'),
            levelDisplay: document.getElementById('levelDisplay'),
            achievementsList: document.getElementById('achievementsList')
        };
    }
    
    updateGamificationDisplay() {
        if (window.achievementSystem && this.elements.pointsDisplay && this.elements.levelDisplay) {
            // Atualizar pontos
            const points = window.achievementSystem.points || 0;
            this.elements.pointsDisplay.textContent = points;
            
            // Calcular e atualizar nível baseado nos pontos (100 pontos por nível)
            const currentLevel = Math.floor(points / 100) + 1;
            window.achievementSystem.level = currentLevel;
            this.elements.levelDisplay.textContent = currentLevel;
            
            debugLog('Gamificação atualizada:', { points, level: currentLevel });
        }
    }
    
    updateAchievementsDisplay() {
        if (!window.achievementSystem || !this.elements.achievementsList) return;
        
        const achievements = window.achievementSystem.achievements;
        const allAchievements = [
            { name: 'Detetive Iniciante', description: 'Começou a investigação', icon: '🔍', unlocked: achievements.some(a => a.name === 'Detetive Iniciante') },
            { name: 'Detetive Git', description: 'Completou a fase de investigação', icon: '🔍', unlocked: achievements.some(a => a.name === 'Detetive Git') },
            { name: 'Arqueólogo do Código', description: 'Recuperou código perdido', icon: '🏺', unlocked: achievements.some(a => a.name === 'Arqueólogo do Código') },
            { name: 'Arquiteto Git', description: 'Organizou branches e commits', icon: '🏗️', unlocked: achievements.some(a => a.name === 'Arquiteto Git') },
            { name: 'Mestre Git', description: 'Preparou repositório para publicação', icon: '👑', unlocked: achievements.some(a => a.name === 'Mestre Git') },
            { name: 'Desenvolvedor Publicado', description: 'Completou o desafio final', icon: '🚀', unlocked: achievements.some(a => a.name === 'Desenvolvedor Publicado') }
        ];
        
        this.elements.achievementsList.innerHTML = allAchievements.map(a => `
            <div class="achievement-item ${a.unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${a.icon}</div>
                <div class="achievement-info">
                    <div class="achievement-name">${a.name}</div>
                    <div class="achievement-description">${a.description}</div>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Terminal input com histórico de comandos
        this.elements.terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = e.target.value.trim();
                if (command) {
                    // Adicionar ao histórico se não for vazio
                    this.commandHistory.push(command);
                    this.historyIndex = this.commandHistory.length;
                    // Limitar histórico a 50 comandos
                    if (this.commandHistory.length > 50) {
                        this.commandHistory.shift();
                    }
                }
                this.handleCommand(command);
                e.target.value = '';
            }
        });

        // Navegação no histórico com setas
        this.elements.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.commandHistory.length > 0) {
                    if (this.historyIndex > 0) {
                        this.historyIndex--;
                    }
                    this.elements.terminalInput.value = this.commandHistory[this.historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.elements.terminalInput.value = this.commandHistory[this.historyIndex];
                } else {
                    this.historyIndex = this.commandHistory.length;
                    this.elements.terminalInput.value = '';
                }
            } else if (e.key === 'Tab') {
                // Autocomplete básico
                e.preventDefault();
                const input = e.target.value.trim();
                const suggestions = this.getCommandSuggestions(input);
                if (suggestions.length === 1) {
                    this.elements.terminalInput.value = suggestions[0];
                } else if (suggestions.length > 1) {
                    // Mostrar sugestões
                    this.showCommandSuggestions(suggestions);
                }
            }
        });

        // File selector
        this.elements.fileSelector.addEventListener('change', (e) => {
            this.loadFile(e.target.value);
        });

        // Save file
        this.elements.saveFile.addEventListener('click', () => {
            this.saveCurrentFile();
        });

        // Reset file
        this.elements.resetFile.addEventListener('click', () => {
            this.resetCurrentFile();
        });

        // Navigation
        this.elements.prevStep.addEventListener('click', () => {
            this.goToStep(this.currentStep - 1);
        });

        this.elements.nextStep.addEventListener('click', () => {
            // Verificar se o passo atual foi completado antes de avançar
            const steps = window.tutorialSteps;
            if (!steps || !steps[this.currentStep]) return;
            const step = steps[this.currentStep];
            
            // Verificação especial para passo de configuração (id 6)
            if (step.id === 6) {
                if (!this.git.isConfigComplete || !this.git.isConfigComplete()) {
                    this.showMessage('Configure ambas as informações (nome e email) antes de avançar.', 'error');
                    return;
                }
            }
            
            if (step && (step.command || step.showEditor || step.exercise)) {
                if (!this.stepCompleted) {
                    if (step.command) {
                        this.showMessage('Por favor, execute o comando correto antes de avançar.', 'error');
                    } else if (step.showEditor || step.exercise) {
                        this.showMessage('Por favor, complete o código conforme solicitado antes de avançar.', 'error');
                    }
                    return;
                }
            }
            this.goToStep(this.currentStep + 1);
        });

        this.elements.restartTutorial.addEventListener('click', () => {
            this.restartTutorial();
        });

        // Modal close
        this.elements.modalClose.addEventListener('click', () => {
            this.hideModal();
        });

        // Close modal on outside click
        this.elements.feedbackModal.addEventListener('click', (e) => {
            if (e.target === this.elements.feedbackModal) {
                this.hideModal();
            }
        });

        // Code textarea change - com debounce para melhor performance
        this.elements.codeTextarea.addEventListener('input', this.debounce(() => {
            this.updateCodeHighlight();
            this.checkCodeCompletion();
        }, 300, 'codeUpdate'));

        // Show solution button
        this.elements.showSolution.addEventListener('click', () => {
            this.toggleSolution();
        });

        // Help button
        const helpBtn = document.getElementById('helpBtn');
        const helpPanel = document.getElementById('helpPanel');
        const closeHelpBtn = document.getElementById('closeHelpBtn');
        
        if (helpBtn && helpPanel) {
            helpBtn.addEventListener('click', () => {
                helpPanel.style.display = helpPanel.style.display === 'none' ? 'block' : 'none';
            });
        }
        
        if (closeHelpBtn && helpPanel) {
            closeHelpBtn.addEventListener('click', () => {
                helpPanel.style.display = 'none';
            });
        }

        // Atalhos de teclado
        document.addEventListener('keydown', (e) => {
            // F1 - Ajuda
            if (e.key === 'F1') {
                e.preventDefault();
                if (helpPanel) {
                    helpPanel.style.display = helpPanel.style.display === 'none' ? 'block' : 'none';
                }
            }
            
            // Esc - Fechar modais/ajuda
            if (e.key === 'Escape') {
                if (helpPanel && helpPanel.style.display !== 'none') {
                    helpPanel.style.display = 'none';
                }
                if (this.elements.feedbackModal.classList.contains('active')) {
                    this.hideModal();
                }
            }
            
            // Ctrl + Setas - Navegação entre passos
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    if (!this.elements.prevStep.disabled) {
                        this.goToStep(this.currentStep - 1);
                    }
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    if (!this.elements.nextStep.disabled && this.stepCompleted) {
                        this.goToStep(this.currentStep + 1);
                    }
                }
            }
        });

        // Cursor guide animation
        this.setupCursorGuide();
        
        // Inicializar tooltips
        this.initTooltips();
    }

    setupCursorGuide() {
        document.addEventListener('mousemove', (e) => {
            // Cursor guide segue o mouse quando ativo
            if (this.elements.cursorGuide.classList.contains('active')) {
                const target = this.getCurrentTarget();
                if (target) {
                    const rect = target.getBoundingClientRect();
                    this.elements.cursorGuide.style.left = (rect.left + rect.width / 2 - 20) + 'px';
                    this.elements.cursorGuide.style.top = (rect.top + rect.height / 2 - 20) + 'px';
                }
            }
        });
    }

    startTutorial() {
        debugLog('startTutorial chamado');
        
        // Usar window.tutorialSteps que é exportado de tutorial-data.js
        const steps = window.tutorialSteps;
        
        if (!steps || steps.length === 0) {
            debugError('tutorialSteps não está disponível!', {
                window_tutorialSteps: typeof window.tutorialSteps,
                length: steps ? steps.length : 'N/A'
            });
            
            // Tentar esperar um pouco caso o script ainda esteja carregando
            setTimeout(() => {
                const retrySteps = window.tutorialSteps;
                if (retrySteps && retrySteps.length > 0) {
                    debugLog('tutorialSteps carregado após espera, iniciando tutorial...');
                    this.currentStep = 0;
                    this.startTime = Date.now();
                    this.startTimer();
                    this.showStep(this.currentStep);
                    debugLog('Tutorial iniciado no passo:', this.currentStep);
                } else {
                    debugError('tutorialSteps ainda não disponível após espera');
                    if (this.elements.instructionContent) {
                        this.elements.instructionContent.innerHTML = `
                            <div style="padding: 20px; color: #ff4444;">
                                <h3>Erro ao carregar tutorial</h3>
                                <p>Os dados do tutorial não foram carregados. Por favor, recarregue a página.</p>
                            </div>
                        `;
                    }
                    this.showMessage('Erro: tutorial não carregado. Recarregue a página.', 'error');
                }
            }, 1000);
            return;
        }
        
        this.currentStep = 0;
        this.startTime = Date.now();
        this.startTimer();
        this.showStep(this.currentStep);
        debugLog('Tutorial iniciado no passo:', this.currentStep, 'Total de steps:', steps.length);
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const hours = Math.floor(elapsed / 3600);
            const minutes = Math.floor((elapsed % 3600) / 60);
            const seconds = elapsed % 60;
            this.elements.timer.textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    showStep(stepIndex) {
        // Usar window.tutorialSteps que é exportado de tutorial-data.js
        const steps = window.tutorialSteps;
        
        if (!steps || steps.length === 0) {
            debugError('tutorialSteps não está disponível!', {
                window_tutorialSteps: typeof window.tutorialSteps,
                tutorialSteps: typeof tutorialSteps,
                length: steps ? steps.length : 'N/A'
            });
            this.elements.instructionContent.innerHTML = `
                <div style="padding: 20px; color: #ff4444;">
                    <h3>Erro ao carregar tutorial</h3>
                    <p>Os dados do tutorial não foram carregados. Por favor, recarregue a página.</p>
                </div>
            `;
            return;
        }

        if (stepIndex < 0 || stepIndex >= steps.length) {
            debugError('Step index fora do range:', stepIndex, 'Total de steps:', steps.length);
            return;
        }

        const step = steps[stepIndex];
        if (!step) {
            debugError('Step não encontrado no índice:', stepIndex);
            return;
        }

        debugLog('Mostrando passo:', stepIndex, 'Step:', step);

        // Animação suave ao mudar de passo
        this.elements.instructionContent.style.opacity = '0';
        setTimeout(() => {
            this.elements.instructionContent.style.opacity = '1';
        }, 150);

        this.currentStep = stepIndex;

        // Get current module - usar window.tutorialModules também
        const modules = window.tutorialModules;
        let module = null;
        
        // Tentar usar getCurrentModule se disponível
        if (window.getCurrentModule && typeof window.getCurrentModule === 'function') {
            module = window.getCurrentModule(step.id);
        }
        
        // Se não encontrou, buscar manualmente nos módulos
        if (!module && modules && Array.isArray(modules)) {
            module = modules.find(m => m.steps && m.steps.includes(step.id));
        }
        
        // Update module and step info
        if (module) {
            this.elements.currentModule.textContent = module.name;
        }
        this.elements.stepInfo.textContent = `Passo ${stepIndex + 1}/${steps.length}`;

        // Update step type badge
        const typeMap = {
            'theory': 'Teoria',
            'exercise': 'Exercício',
            'tutorial': 'Tutorial',
            'story': 'História',
            'challenge': 'Desafio'
        };
        this.elements.stepType.textContent = typeMap[step.type] || 'Tutorial';
        this.elements.stepType.className = `step-type ${step.type}`;

        // Update instruction - limpar primeiro e depois adicionar novo conteúdo
        this.elements.instructionContent.innerHTML = '';
        const instructionWrapper = document.createElement('div');
        instructionWrapper.className = 'instruction-wrapper';
        instructionWrapper.innerHTML = `
            <h3 class="instruction-title">${step.title || 'Instrução'}</h3>
            <div class="instruction-text">${step.instruction || ''}</div>
        `;
        this.elements.instructionContent.appendChild(instructionWrapper);
        
        // Adicionar animação de entrada
        setTimeout(() => {
            instructionWrapper.style.opacity = '1';
            instructionWrapper.style.transform = 'translateY(0)';
        }, 50);
        
        // Easter Egg - Detecta se estamos no passo 32 (desafio final desbloqueado)
        if (step.id === 32) {
            setTimeout(() => {
                this.setupEasterEgg();
            }, 1000);
        }

        // Show/hide theory box
        if (step.theory) {
            this.elements.theoryContent.innerHTML = step.theory;
            this.elements.theoryBox.style.display = 'block';
        } else {
            this.elements.theoryBox.style.display = 'none';
        }

        // Show/hide exercise box
        if (step.exercise) {
            this.elements.exerciseContent.innerHTML = `<p><strong>Desafio:</strong> ${step.exercise.description}</p>`;
            this.elements.exerciseBox.style.display = 'block';
            this.elements.exerciseSolution.style.display = 'none';
            this.elements.showSolution.style.display = 'block';
        } else {
            this.elements.exerciseBox.style.display = 'none';
            this.elements.showSolution.style.display = 'none';
        }

        // Show/hide hint - mais detalhado no modo instrutor
        if (step.hint) {
            this.elements.hintText.textContent = step.hint;
            this.elements.hintBox.style.display = 'block';
        } else {
            this.elements.hintBox.style.display = 'none';
        }

        // Mostrar dicas do instrutor se disponíveis
        if (step.instructorTips) {
            const existingBox = this.elements.instructionContent.querySelector('.instructor-box');
            if (existingBox) {
                existingBox.remove();
            }
            
            const instructorBox = document.createElement('div');
            instructorBox.className = 'instructor-box';
            instructorBox.innerHTML = `<h4>Dica:</h4><p>${step.instructorTips}</p>`;
            this.elements.instructionContent.appendChild(instructorBox);
        } else {
            const existingBox = this.elements.instructionContent.querySelector('.instructor-box');
            if (existingBox) {
                existingBox.remove();
            }
        }

        // Reset step completion status
        this.stepCompleted = false;
        
        // Para o passo de configuração (id 6), verificar se já está completo
        if (step.id === 6 && this.git.isConfigComplete) {
            this.stepCompleted = this.git.isConfigComplete();
        }

        // Se for passo de história ou teoria sem comando, executar onSuccess automaticamente
        if (!step.command && !step.showEditor && !step.exercise && step.onSuccess) {
            // Executar onSuccess para passos de história para atualizar pontos/conquistas
            try {
                const result = step.onSuccess(this.git);
                if (result && typeof result === 'string' && result.includes('pontos')) {
                    // Atualizar gamificação se houver pontos
                    if (window.achievementSystem) {
                        this.updateGamificationDisplay();
                        this.updateAchievementsDisplay();
                    }
                }
            } catch (error) {
                debugError('Erro ao executar onSuccess automático:', error);
            }
        }

        // Remover instrução de próximo passo se existir
        const existingNextInstruction = this.elements.instructionContent.querySelector('.next-instruction');
        if (existingNextInstruction) {
            existingNextInstruction.remove();
        }

        // Remover instrução de arquivo criado se existir
        const existingFileInstruction = this.elements.instructionContent.querySelector('.file-created-instruction');
        if (existingFileInstruction) {
            existingFileInstruction.remove();
        }

        // Remover animação do botão próximo
        this.elements.nextStep.classList.remove('pulse-animation');

        // Show/hide editor baseado no tipo de passo
        const editorPanel = document.getElementById('codeEditorPanel');
        if (!editorPanel) {
            debugError('Editor panel não encontrado!');
        } else {
            if (step.showEditor || step.type === 'exercise' || step.showFiles) {
                editorPanel.style.display = 'flex';
                // Aguardar um pouco para garantir que o Git está atualizado
                setTimeout(() => {
                    this.loadFilesIntoSelector();
                    if (step.requiredFile) {
                        // Verificar se o arquivo já existe antes de tentar carregar
                        const state = this.git.getState();
                        if (state.files.includes(step.requiredFile)) {
                            // Arquivo já existe, carregar
                            setTimeout(() => {
                                this.elements.fileSelector.value = step.requiredFile;
                                this.loadFile(step.requiredFile);
                            }, 150);
                        }
                        // Se o arquivo não existe ainda, não fazer nada - ele será carregado quando criado
                    } else if (step.showFiles) {
                        // Se showFiles está true, mostrar o primeiro arquivo disponível
                        const state = this.git.getState();
                        if (state.files.length > 0) {
                            // Priorizar arquivos .cs se existirem
                            const csFile = state.files.find(f => f.endsWith('.cs'));
                            const fileToLoad = csFile || state.files[0];
                            setTimeout(() => {
                                this.elements.fileSelector.value = fileToLoad;
                                this.loadFile(fileToLoad);
                            }, 150);
                        }
                    }
                }, 200);
            } else {
                // Não ocultar o editor se já houver arquivos carregados
                const state = this.git.getState();
                if (state.files.length > 0) {
                    // Manter o editor visível se houver arquivos
                    editorPanel.style.display = 'flex';
                } else {
                    editorPanel.style.display = 'none';
                }
            }
        }

        // Update progress
        const progress = steps ? ((stepIndex + 1) / steps.length) * 100 : 0;
        this.updateProgress(progress);
        
        // Adicionar indicador visual de fase
        this.updatePhaseIndicator(step.module);

        // Update navigation buttons
        this.elements.prevStep.disabled = stepIndex === 0;
        // Desabilitar botão próximo até que o passo seja completado (exceto para passos de teoria sem comando)
        if (step.command || step.showEditor || step.exercise) {
            // Para passos com ação, verificar se foi completado (não desabilitar sempre)
            // Para o passo de configuração (id 6), verificar se ambas as configurações estão completas
            if (step.id === 6 && this.git.isConfigComplete) {
                this.elements.nextStep.disabled = !this.git.isConfigComplete();
            } else {
                this.elements.nextStep.disabled = !this.stepCompleted;
            }
        } else {
            // Passos de teoria sem comando podem avançar imediatamente
            this.elements.nextStep.disabled = steps ? (stepIndex === steps.length - 1) : true;
            // Se for passo de história ou teoria sem comando, marcar como completo automaticamente
            if (!step.command && !step.showEditor && !step.exercise) {
                this.stepCompleted = true;
                // Para passos de história, destacar o botão próximo
                if (step.type === 'story') {
                    setTimeout(() => {
                        this.elements.nextStep.classList.add('pulse-animation');
                    }, 500);
                }
            }
        }

        // Show cursor guide
        if (step.command) {
            this.showCursorGuide(this.elements.terminalInput);
        } else if (step.showEditor) {
            this.showCursorGuide(this.elements.codeTextarea);
        }

        // Focus on appropriate input
        setTimeout(() => {
            if (step.command) {
                this.elements.terminalInput.focus();
            } else if (step.showEditor) {
                this.elements.codeTextarea.focus();
            }
        }, 500);
    }

    toggleSolution() {
        const steps = window.tutorialSteps;
        if (!steps || !steps[this.currentStep]) return;
        const step = steps[this.currentStep];
        if (step.exercise) {
            const isVisible = this.elements.exerciseSolution.style.display !== 'none';
            this.elements.exerciseSolution.style.display = isVisible ? 'none' : 'block';
            if (!isVisible) {
                this.elements.exerciseSolutionCode.textContent = step.exercise.solution;
                Prism.highlightElement(this.elements.exerciseSolutionCode);
            }
        }
    }

    handleCommand(command) {
        debugLog('handleCommand chamado:', command, 'currentStep:', this.currentStep);
        
        // Verificar se o tutorial foi iniciado
        if (this.currentStep === null || this.currentStep === undefined) {
            debugLog('Tutorial não iniciado ainda');
            this.showMessage('Por favor, clique em "Começar Tutorial" primeiro.', 'error');
            return;
        }

        const steps = window.tutorialSteps;
        if (!steps || steps.length === 0) {
            debugError('tutorialSteps está vazio!');
            this.showMessage('Erro: tutorial não carregado.', 'error');
            return;
        }

        const step = steps[this.currentStep];
        debugLog('Step atual:', step);
        
        if (!step) {
            debugError('Step não encontrado no índice:', this.currentStep);
            this.showMessage('Erro: passo do tutorial não encontrado.', 'error');
            return;
        }

        // Se o passo não requer comando, informar o usuário de forma mais amigável
        if (!step.command) {
            debugLog('Passo não requer comando');
            this.addTerminalLine(`$ ${command}`, 'command');
            
            // Mensagem diferente para passos de história vs outros tipos
            if (step.type === 'story') {
                this.addTerminalLine('Esta é uma etapa de introdução. Leia as instruções e clique em "Próximo" para avançar para a primeira tarefa prática.', 'info');
                this.showMessage('Esta etapa é apenas uma introdução. Clique em "Próximo" para começar a usar comandos Git.', 'info');
            } else {
                this.addTerminalLine('Esta etapa requer uma ação diferente. Siga as instruções no painel à esquerda.', 'info');
                this.showMessage('Esta etapa requer uma ação diferente. Siga as instruções.', 'info');
            }
            return;
        }

        // Add command to terminal output
        this.addTerminalLine(`$ ${command}`, 'command');

        // Validate command
        debugLog('Validando comando:', command, 'com função:', step.validation);
        if (step.validation && step.validation(command)) {
            debugLog('Comando válido! Executando onSuccess...');
            // Execute command
            let result;
            try {
                result = step.onSuccess ? step.onSuccess(this.git, command) : 'Comando executado com sucesso!';
                debugLog('Resultado do onSuccess:', result);
                if (typeof result !== 'string') {
                    result = result.success ? result.message : result.message || 'Comando executado!';
                }
                
                // Extrair pontos do resultado se houver
                if (typeof result === 'string' && result.includes('pontos')) {
                    // Atualizar gamificação imediatamente após pontos serem adicionados
                    if (window.achievementSystem) {
                        this.updateGamificationDisplay();
                        this.updateAchievementsDisplay();
                    }
                }
            } catch (error) {
                debugError('Erro ao executar comando:', error);
                result = 'Erro ao executar comando: ' + error.message;
            }
            
            // Adicionar feedback visual ao comando correto
            this.elements.terminalInput.classList.add('success-flash');
            setTimeout(() => {
                this.elements.terminalInput.classList.remove('success-flash');
            }, 500);
            
            this.addTerminalLine(result, 'success');
            
            // Update visualization
            this.updateGitVisualization();
            this.updateGitStatus();
            
            // Atualizar gamificação SEMPRE após comandos válidos
            if (window.achievementSystem) {
                // Forçar atualização imediata
                this.updateGamificationDisplay();
                this.updateAchievementsDisplay();
            }

            // Marcar passo como completo apenas se ambas as configurações estiverem completas
            // Para o passo de configuração (id 6), verificar se ambas estão configuradas
            if (step.id === 6 && this.git.isConfigComplete) {
                this.stepCompleted = this.git.isConfigComplete();
            } else {
                this.stepCompleted = true;
            }
            
            // Se não completou, não habilitar botão próximo
            if (!this.stepCompleted) {
                this.elements.nextStep.disabled = true;
                // Não mostrar animação ou mensagem de sucesso se ainda falta configurar
                return; // Não continuar com o resto do código se não completou
            }
            
            this.elements.nextStep.disabled = false;

            // Destacar o botão "Próximo" para indicar que pode avançar
            this.elements.nextStep.classList.add('pulse-animation');
            // Manter a animação por mais tempo para ser mais visível
            setTimeout(() => {
                if (this.elements.nextStep.classList.contains('pulse-animation')) {
                    this.elements.nextStep.classList.remove('pulse-animation');
                }
            }, 5000);

            // Se o passo criou arquivos ou requer mostrar o editor, mostrar agora
            const state = this.git.getState();
            if (state.files.length > 0) {
                const editorPanel = document.getElementById('codeEditorPanel');
                if (editorPanel) {
                    // Sempre mostrar o editor se houver arquivos criados
                    editorPanel.style.display = 'flex';
                    
                    // Adicionar instrução visual clara sobre o arquivo criado
                    const fileInstruction = document.createElement('div');
                    fileInstruction.className = 'file-created-instruction';
                    fileInstruction.style.cssText = 'background: rgba(59, 130, 246, 0.15); padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 15px 0;';
                    
                    const csFile = state.files.find(f => f.endsWith('.cs'));
                    if (csFile) {
                        fileInstruction.innerHTML = `
                            <strong style="color: #3b82f6; display: block; margin-bottom: 8px;">Arquivo criado!</strong>
                            <p style="color: #c9d1d9; margin: 5px 0; font-size: 15px;">O arquivo <strong style="color: #79c0ff;">${csFile}</strong> foi criado e está disponível no editor à direita.</p>
                            <p style="color: #c9d1d9; margin: 5px 0; font-size: 14px;"><strong>Veja o editor:</strong> Role para a direita ou olhe o painel "Editor de Código" para ver o arquivo criado.</p>
                        `;
                    } else {
                        fileInstruction.innerHTML = `
                            <strong style="color: #3b82f6; display: block; margin-bottom: 8px;">Arquivos criados!</strong>
                            <p style="color: #c9d1d9; margin: 5px 0;">${state.files.length} arquivo(s) criado(s) e disponível(is) no editor à direita.</p>
                        `;
                    }
                    
                    // Remover instrução anterior se existir
                    const existingFileInstruction = this.elements.instructionContent.querySelector('.file-created-instruction');
                    if (existingFileInstruction) {
                        existingFileInstruction.remove();
                    }
                    
                    this.elements.instructionContent.appendChild(fileInstruction);
                    
                    // Aguardar um pouco antes de carregar arquivos para garantir que tudo está pronto
                    setTimeout(() => {
                        this.loadFilesIntoSelector();
                        // Se houver arquivo .cs criado, mostrar automaticamente
                        const csFile = state.files.find(f => f.endsWith('.cs'));
                        if (csFile) {
                            // Aguardar mais um pouco para garantir que o seletor foi atualizado
                            setTimeout(() => {
                                const stateAfter = this.git.getState();
                                if (stateAfter.files.includes(csFile)) {
                                    this.elements.fileSelector.value = csFile;
                                    this.loadFile(csFile);
                                }
                            }, 300);
                        } else if (state.files.length > 0) {
                            setTimeout(() => {
                                this.elements.fileSelector.value = state.files[0];
                                this.loadFile(state.files[0]);
                            }, 300);
                        }
                    }, 500);
                }
            }

            // Mostrar instrução clara de próximo passo
            const nextInstruction = document.createElement('div');
            nextInstruction.className = 'next-instruction';
            nextInstruction.style.cssText = 'background: rgba(34, 197, 94, 0.15); padding: 15px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 15px 0;';
            nextInstruction.innerHTML = `
                <strong style="color: #22c55e; display: block; margin-bottom: 10px; font-size: 16px;">Comando executado com sucesso!</strong>
                <p style="color: #c9d1d9; margin: 8px 0; font-size: 15px;"><strong>Próxima ação:</strong> Clique no botão <strong style="color: #22c55e; background: rgba(34, 197, 94, 0.1); padding: 2px 6px; border-radius: 4px;">"Próximo"</strong> abaixo para continuar.</p>
                <p style="color: #c9d1d9; margin: 5px 0; font-size: 13px;">Dica: O botão "Próximo" está pulsando em verde para chamar sua atenção!</p>
            `;
            
            // Remover instrução anterior se existir
            const existingInstruction = this.elements.instructionContent.querySelector('.next-instruction');
            if (existingInstruction) {
                existingInstruction.remove();
            }
            
            this.elements.instructionContent.appendChild(nextInstruction);
            
            // Scroll suave até a instrução
            setTimeout(() => {
                nextInstruction.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 200);
            
            // Mensagem de sucesso mais clara com ícone
            const successMessage = '✓ Comando executado com sucesso! Clique em "Próximo" para continuar.';
            this.showMessage(successMessage, 'success');
        } else {
            debugLog('Comando inválido');
            
            // Adicionar feedback visual ao comando incorreto
            this.elements.terminalInput.classList.add('error-flash');
            setTimeout(() => {
                this.elements.terminalInput.classList.remove('error-flash');
            }, 500);
            
            this.addTerminalLine('Comando incorreto. Tente novamente.', 'error');
            if (step.hint) {
                this.addTerminalLine(`Dica: ${step.hint}`, 'info');
            }
            this.showMessage('Comando incorreto. Verifique a dica e tente novamente.', 'error');
        }
    }

    checkCodeCompletion() {
        const steps = window.tutorialSteps;
        if (!steps || !steps[this.currentStep]) return;
        const step = steps[this.currentStep];
        
        if (!step.showEditor && !step.exercise) {
            return;
        }

        const code = this.elements.codeTextarea.value.trim();
        
        // Verificar se há código válido
        if (!code || code.length < 10) {
            return;
        }
        
        // Check using exercise.check if available
        if (step.exercise && step.exercise.check) {
            if (step.exercise.check(code)) {
                if (!this.stepCompleted) {
                    this.completeCodeStep(step, code);
                }
            }
        } else if (step.codeCheck) {
            // Fallback to old codeCheck
            if (step.codeCheck(code)) {
                if (!this.stepCompleted) {
                    this.completeCodeStep(step, code);
                }
            }
        } else if (step.requiredFile && code.length > 50) {
            // Se tem arquivo requerido e código mínimo, considerar completo
            const fileName = step.requiredFile.split('.')[0];
            if (!this.stepCompleted && code.includes(fileName)) {
                this.completeCodeStep(step, code);
            }
        }
    }

    completeCodeStep(step, code) {
        this.stepCompleted = true;
        this.elements.nextStep.disabled = false;
        
        // Salvar automaticamente quando o código estiver correto
        const filename = this.elements.fileSelector.value;
        if (filename) {
            this.git.updateFile(filename, code);
        }
        
        // Executar onSuccess se disponível
        if (step.onSuccess) {
            try {
                const result = step.onSuccess(this.git);
                if (result && typeof result === 'string') {
                    this.showMessage(result, 'success');
                } else {
                    this.showMessage('Código correto! Excelente trabalho! Agora você pode avançar.', 'success');
                }
                
                // Atualizar gamificação se houver pontos/conquistas
                if (window.achievementSystem) {
                    this.updateGamificationDisplay();
                    this.updateAchievementsDisplay();
                }
                } catch (error) {
                    debugError('Erro ao executar onSuccess:', error);
                    this.showMessage('Código correto! Agora você pode avançar para a próxima etapa.', 'success');
                }
        } else {
            this.showMessage('Código correto! Agora você pode avançar para a próxima etapa.', 'success');
        }
        
        // Destacar o botão "Próximo"
        this.elements.nextStep.classList.add('pulse-animation');
        setTimeout(() => {
            if (this.elements.nextStep.classList.contains('pulse-animation')) {
                this.elements.nextStep.classList.remove('pulse-animation');
            }
        }, 5000);
        
        // Atualizar visualização
        this.updateGitVisualization();
        this.updateGitStatus();
    }

    loadFilesIntoSelector() {
        const state = this.git.getState();
        this.elements.fileSelector.innerHTML = '<option value="">Selecione um arquivo...</option>';
        
        debugLog('Arquivos disponíveis:', state.files);
        
        state.files.forEach(file => {
            const option = document.createElement('option');
            option.value = file;
            option.textContent = file;
            this.elements.fileSelector.appendChild(option);
        });
        
        // Se houver arquivos mas nenhum selecionado, selecionar o primeiro
        if (state.files.length > 0 && !this.elements.fileSelector.value) {
            // Priorizar arquivos .cs se existirem
            const csFile = state.files.find(f => f.endsWith('.cs'));
            const fileToLoad = csFile || state.files[0];
            this.elements.fileSelector.value = fileToLoad;
            this.loadFile(fileToLoad);
        }
    }

    loadFile(filename) {
        if (!filename) return;
        
        debugLog('Carregando arquivo:', filename);
        const file = this.git.getFile(filename);
        
        if (file) {
            debugLog('Arquivo encontrado:', file);
            this.elements.codeTextarea.value = file.content || '';
            // Aguardar múltiplos frames para garantir que o DOM está completamente atualizado
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.updateCodeHighlight();
                });
            });
        } else {
            debugError('Arquivo não encontrado:', filename);
            this.showMessage(`Arquivo '${filename}' não encontrado.`, 'error');
        }
    }

    saveCurrentFile() {
        const filename = this.elements.fileSelector.value;
        if (!filename) {
            this.showMessage('Selecione um arquivo primeiro.', 'error');
            return;
        }

        const content = this.elements.codeTextarea.value;
        const result = this.git.updateFile(filename, content);
        
        if (result.success) {
            this.showMessage(`Arquivo '${filename}' salvo com sucesso!`, 'success');
            this.addTerminalLine(`Arquivo '${filename}' modificado.`, 'success');
        } else {
            this.showMessage(result.message, 'error');
        }
    }

    resetCurrentFile() {
        const filename = this.elements.fileSelector.value;
        if (!filename) return;
        
        this.loadFile(filename);
        this.showMessage('Arquivo resetado para o estado original.', 'success');
    }

    updateCodeHighlight() {
        const code = this.elements.codeTextarea.value;
        if (!this.elements.codeEditor) {
            debugError('Elemento codeEditor não encontrado');
            return;
        }
        
        // Limpar conteúdo anterior
        this.elements.codeEditor.textContent = code;
        
        // Atualizar contador de linhas
        this.updateLineNumbers(code);
        
        // Verificar se Prism está disponível
        if (typeof Prism === 'undefined' || !Prism.highlightElement) {
            debugError('Prism não está disponível');
            return;
        }
        
        try {
            // Garantir que o elemento tem a classe language-csharp
            if (!this.elements.codeEditor.classList.contains('language-csharp')) {
                this.elements.codeEditor.className = 'language-csharp';
            }
            
            // Verificar se o elemento tem parent antes de fazer highlight
            if (this.elements.codeEditor.parentElement) {
                Prism.highlightElement(this.elements.codeEditor);
            } else {
                debugError('Elemento codeEditor não tem parent');
            }
        } catch (error) {
            debugError('Erro ao fazer highlight do código:', error);
            // Se houver erro, apenas mostrar o código sem highlight
        }
    }

    updateLineNumbers(code) {
        const lineNumbersEl = document.getElementById('lineNumbers');
        if (!lineNumbersEl) return;
        
        const lines = code.split('\n');
        const lineCount = lines.length || 1;
        
        let numbersHTML = '';
        for (let i = 1; i <= lineCount; i++) {
            numbersHTML += `${i}\n`;
        }
        
        lineNumbersEl.textContent = numbersHTML;
    }

    addTerminalLine(text, type = 'normal') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        
        // Ícones para diferentes tipos de mensagem
        const icons = {
            success: '<span class="terminal-icon success">✓</span>',
            error: '<span class="terminal-icon error">✗</span>',
            info: '<span class="terminal-icon info">ℹ</span>',
            warning: '<span class="terminal-icon warning">⚠</span>'
        };
        
        // Para tipo 'info', usar estilo de informação em vez de erro
        if (type === 'info') {
            line.style.color = '#79c0ff';
            line.style.fontStyle = 'italic';
        }
        
        if (type === 'command') {
            line.innerHTML = `<span class="prompt">$</span><span class="text">${text}</span>`;
        } else {
            const icon = icons[type] || '';
            line.innerHTML = `${icon}<span class="text">${text}</span>`;
        }
        
        this.elements.terminalOutput.appendChild(line);
        this.elements.terminalOutput.scrollTop = this.elements.terminalOutput.scrollHeight;
        
        // Adicionar animação de entrada
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 10);
    }

    updateGitVisualization() {
        const state = this.git.getState();
        
        if (!state.initialized) {
            this.elements.gitGraph.innerHTML = `
                <div class="git-graph-placeholder">
                    <p>Inicialize o repositório para ver a visualização</p>
                </div>
            `;
            return;
        }

        let html = '<svg width="100%" height="300" viewBox="0 0 800 300">';
        
        // Draw commits
        const commits = state.commits;
        commits.forEach((commit, index) => {
            const x = 100 + (index * 150);
            const y = 150;
            const radius = 30;
            
            // Circle
            html += `<circle cx="${x}" cy="${y}" r="${radius}" fill="#4299e1" stroke="#fff" stroke-width="2"/>`;
            
            // Commit ID
            html += `<text x="${x}" y="${y + 5}" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">${commit.id.substring(0, 4)}</text>`;
            
            // Commit message
            html += `<text x="${x}" y="${y + 60}" text-anchor="middle" fill="#cbd5e0" font-size="12">${commit.message.substring(0, 15)}</text>`;
            
            // Line to next commit
            if (index < commits.length - 1) {
                html += `<line x1="${x + radius}" y1="${y}" x2="${x + 150 - radius}" y2="${y}" stroke="#4299e1" stroke-width="3"/>`;
            }
        });
        
        // Draw branches
        state.branches.forEach((branch, index) => {
            const y = 80 + (index * 40);
            html += `<text x="20" y="${y}" fill="#48bb78" font-size="14" font-weight="bold">${branch === state.currentBranch ? '→ ' : ''}${branch}</text>`;
        });
        
        html += '</svg>';
        this.elements.gitGraph.innerHTML = html;
    }

    updateGitStatus() {
        const state = this.git.getState();
        
        if (state.initialized) {
            this.elements.currentBranch.textContent = state.currentBranch || '-';
            this.elements.commitCount.textContent = state.commits.length;
            this.elements.fileCount.textContent = state.files.length;
        } else {
            this.elements.currentBranch.textContent = '-';
            this.elements.commitCount.textContent = '0';
            this.elements.fileCount.textContent = '0';
        }
    }

    updateProgress(percentage) {
        this.elements.progressFill.style.width = percentage + '%';
        this.elements.progressText.textContent = `${Math.round(percentage)}%`;
        
        // Adicionar animação quando progresso aumenta
        this.elements.progressFill.style.transition = 'width 0.5s ease';
    }

    updatePhaseIndicator(moduleId) {
        const progressBar = this.elements.progressFill;
        if (!progressBar) return;
        
        // Cores diferentes para cada fase
        const phaseColors = {
            1: '#ff4444', // Fase 1 - Vermelho (Investigação)
            2: '#ff6b35', // Fase 2 - Laranja (Recuperação)
            3: '#00d4ff', // Fase 3 - Azul claro (Reorganização)
            4: '#00cc66'  // Fase 4 - Verde (Preparação)
        };
        
        const color = phaseColors[moduleId] || '#0066ff';
        progressBar.style.background = `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`;
    }

    showCursorGuide(target) {
        if (!target) return;
        
        const updatePosition = () => {
            const rect = target.getBoundingClientRect();
            this.elements.cursorGuide.style.left = (rect.left + rect.width / 2 - 20) + 'px';
            this.elements.cursorGuide.style.top = (rect.top + rect.height / 2 - 20) + 'px';
        };
        
        updatePosition();
        this.elements.cursorGuide.style.opacity = '1';
        this.elements.cursorGuide.classList.add('active');
        
        // Update position periodically
        const interval = setInterval(updatePosition, 100);
        
        // Hide after some time or when user interacts
        setTimeout(() => {
            this.elements.cursorGuide.style.opacity = '0.5';
            clearInterval(interval);
        }, 5000);
        
        // Hide on interaction
        target.addEventListener('focus', () => {
            setTimeout(() => {
                this.elements.cursorGuide.style.opacity = '0.3';
            }, 2000);
        }, { once: true });
    }

    getCommandSuggestions(input) {
        const gitCommands = [
            'git init',
            'git status',
            'git add',
            'git commit',
            'git log',
            'git branch',
            'git checkout',
            'git merge',
            'git clone'
        ];
        
        if (!input || input.length < 2) return [];
        
        const lowerInput = input.toLowerCase();
        return gitCommands.filter(cmd => 
            cmd.toLowerCase().startsWith(lowerInput) || 
            cmd.toLowerCase().includes(lowerInput)
        );
    }

    showCommandSuggestions(suggestions) {
        // Criar ou atualizar elemento de sugestões
        let suggestionsEl = document.getElementById('commandSuggestions');
        if (!suggestionsEl) {
            suggestionsEl = document.createElement('div');
            suggestionsEl.id = 'commandSuggestions';
            suggestionsEl.className = 'command-suggestions';
            this.elements.terminalInput.parentElement.appendChild(suggestionsEl);
        }
        
        suggestionsEl.innerHTML = suggestions.map(s => 
            `<div class="suggestion-item">${s}</div>`
        ).join('');
        suggestionsEl.style.display = 'block';
        
        // Ocultar após alguns segundos
        setTimeout(() => {
            if (suggestionsEl) {
                suggestionsEl.style.display = 'none';
            }
        }, 3000);
    }

    getCurrentTarget() {
        const steps = window.tutorialSteps;
        if (!steps || !steps[this.currentStep]) return null;
        const step = steps[this.currentStep];
        if (step.command) {
            return this.elements.terminalInput;
        } else if (step.showEditor) {
            return this.elements.codeTextarea;
        }
        return null;
    }

    goToStep(stepIndex) {
        const steps = window.tutorialSteps;
        if (steps && stepIndex >= 0 && stepIndex < steps.length) {
            this.showStep(stepIndex);
        } else {
            debugError('Tentativa de ir para passo inválido:', stepIndex);
        }
    }

    restartTutorial() {
        if (confirm('Tem certeza que deseja reiniciar o tutorial? Todo o progresso será perdido.')) {
            this.stopTimer();
            this.git.reset();
            
            // Resetar sistema de conquistas
            if (window.achievementSystem) {
                window.achievementSystem.points = 0;
                window.achievementSystem.level = 1;
                window.achievementSystem.achievements = [];
            }
            
            this.elements.terminalOutput.innerHTML = '';
            this.currentStep = 0;
            this.stepCompleted = false;
            this.startTime = Date.now();
            this.startTimer();
            this.showStep(this.currentStep);
            this.updateGitVisualization();
            this.updateGitStatus();
            this.updateGamificationDisplay();
            this.updateAchievementsDisplay();
            this.showMessage('Tutorial reiniciado!', 'success');
        }
    }

    showMessage(message, type = 'success') {
        const icons = {
            success: '✓',
            error: '✗',
            warning: '⚠',
            info: 'ℹ'
        };
        
        const icon = icons[type] || icons.success;
        this.elements.modalBody.innerHTML = `<span class="message-icon">${icon}</span> ${message}`;
        this.elements.modalBody.className = `modal-body ${type}`;
        this.elements.feedbackModal.classList.add('active');
        
        // Auto-hide after 4 seconds (mais tempo para mensagens importantes)
        setTimeout(() => {
            this.hideModal();
        }, 4000);
    }

    hideModal() {
        this.elements.feedbackModal.classList.remove('active');
    }

    startTour() {
        this.tourSteps = [
            {
                element: 'headerInfo',
                title: 'Painel de Progresso',
                description: 'Aqui você vê seu progresso no tutorial, a fase atual, pontos ganhos, nível alcançado e tempo decorrido. Acompanhe sua evolução!',
                position: 'bottom'
            },
            {
                element: 'instructionContent',
                title: 'Painel de Instruções',
                description: 'Este é o painel principal onde você receberá todas as instruções, teoria e exercícios. Leia com atenção cada passo!',
                position: 'right'
            },
            {
                element: 'terminalOutput',
                title: 'Terminal Git',
                description: 'Aqui você digita e executa comandos Git. Use as setas ↑↓ para navegar no histórico de comandos e Tab para autocomplete.',
                position: 'top'
            },
            {
                element: 'gitGraph',
                title: 'Visualização Git',
                description: 'Esta visualização mostra seu repositório Git em tempo real: commits, branches e merges. Veja como suas ações afetam o repositório!',
                position: 'left'
            },
            {
                element: 'achievementsList',
                title: 'Conquistas',
                description: 'Complete desafios e desbloqueie conquistas! Cada conquista desbloqueada aparece aqui com sua descrição.',
                position: 'left'
            },
            {
                element: 'codeEditorPanel',
                title: 'Editor de Código',
                description: 'Quando precisar criar ou editar arquivos, use este editor. O contador de linhas ajuda na navegação do código.',
                position: 'top'
            },
            {
                element: 'nextStep',
                title: 'Navegação',
                description: 'Use os botões Anterior e Próximo para navegar entre os passos. O botão próximo só fica habilitado quando você completa o passo atual.',
                position: 'top'
            }
        ];

        this.currentTourStep = 0;
        this.showTourStep(0);
    }

    showTourStep(stepIndex) {
        const step = this.tourSteps[stepIndex];
        if (!step) {
            // Tour completo, iniciar tutorial
            this.endTour();
            return;
        }

        const overlay = document.getElementById('tourOverlay');
        const spotlight = document.getElementById('tourSpotlight');
        const tooltip = document.getElementById('tourTooltip');
        const title = document.getElementById('tourTitle');
        const description = document.getElementById('tourDescription');
        const stepInfo = document.getElementById('tourStepInfo');
        const prevBtn = document.getElementById('tourPrevBtn');
        const nextBtn = document.getElementById('tourNextBtn');
        const skipBtn = document.getElementById('tourSkipBtn');

        // Mostrar overlay
        overlay.style.display = 'block';

        // Obter elemento alvo
        const targetElement = document.getElementById(step.element);
        if (!targetElement) {
            debugError('Elemento do tour não encontrado:', step.element);
            this.currentTourStep++;
            setTimeout(() => this.showTourStep(this.currentTourStep), 100);
            return;
        }

        // Calcular posição do elemento
        const rect = targetElement.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        // Criar spotlight highlight
        const highlightPadding = 10;
        spotlight.style.cssText = `
            position: absolute;
            left: ${rect.left + scrollX - highlightPadding}px;
            top: ${rect.top + scrollY - highlightPadding}px;
            width: ${rect.width + (highlightPadding * 2)}px;
            height: ${rect.height + (highlightPadding * 2)}px;
            border-radius: 8px;
            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.75),
                        0 0 0 0 rgba(0, 102, 255, 0.5),
                        0 0 20px rgba(0, 102, 255, 0.5),
                        inset 0 0 0 2px rgba(0, 102, 255, 0.8);
            pointer-events: none;
            z-index: 10001;
            transition: all 0.3s ease;
            animation: pulseHighlight 2s ease-in-out infinite;
        `;

        // Atualizar conteúdo do tooltip
        title.textContent = step.title;
        description.textContent = step.description;
        stepInfo.textContent = `${stepIndex + 1}/${this.tourSteps.length}`;

        // Posicionar tooltip
        const tooltipWidth = 350;
        const tooltipHeight = 200;
        let tooltipLeft, tooltipTop;

        switch (step.position) {
            case 'top':
                tooltipLeft = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                tooltipTop = rect.top + scrollY - tooltipHeight - 20;
                break;
            case 'bottom':
                tooltipLeft = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                tooltipTop = rect.top + scrollY + rect.height + 20;
                break;
            case 'left':
                tooltipLeft = rect.left + scrollX - tooltipWidth - 20;
                tooltipTop = rect.top + scrollY + (rect.height / 2) - (tooltipHeight / 2);
                break;
            case 'right':
                tooltipLeft = rect.left + scrollX + rect.width + 20;
                tooltipTop = rect.top + scrollY + (rect.height / 2) - (tooltipHeight / 2);
                break;
            default:
                tooltipLeft = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                tooltipTop = rect.top + scrollY + rect.height + 20;
        }

        // Ajustar para não sair da tela
        tooltipLeft = Math.max(20, Math.min(tooltipLeft, window.innerWidth - tooltipWidth - 20));
        tooltipTop = Math.max(20, Math.min(tooltipTop, window.innerHeight - tooltipHeight - 20));

        tooltip.style.cssText = `
            position: absolute;
            left: ${tooltipLeft}px;
            top: ${tooltipTop}px;
            width: ${tooltipWidth}px;
            z-index: 10002;
        `;

        // Atualizar botões de navegação
        prevBtn.disabled = stepIndex === 0;
        nextBtn.textContent = stepIndex === this.tourSteps.length - 1 ? 'Começar Tutorial →' : 'Próximo →';

        // Event listeners
        prevBtn.onclick = () => {
            if (stepIndex > 0) {
                this.currentTourStep--;
                this.showTourStep(this.currentTourStep);
            }
        };

        nextBtn.onclick = () => {
            if (stepIndex < this.tourSteps.length - 1) {
                this.currentTourStep++;
                this.showTourStep(this.currentTourStep);
            } else {
                this.endTour();
            }
        };

        skipBtn.onclick = () => {
            this.endTour();
        };

        // Scroll suave até o elemento (com delay para garantir que o overlay está visível)
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reposicionar spotlight após scroll
            setTimeout(() => {
                const newRect = targetElement.getBoundingClientRect();
                const newScrollX = window.scrollX || window.pageXOffset;
                const newScrollY = window.scrollY || window.pageYOffset;
                
                spotlight.style.left = `${newRect.left + newScrollX - highlightPadding}px`;
                spotlight.style.top = `${newRect.top + newScrollY - highlightPadding}px`;
                
                // Reposicionar tooltip também
                let newTooltipLeft, newTooltipTop;
                switch (step.position) {
                    case 'top':
                        newTooltipLeft = newRect.left + (newRect.width / 2) - (tooltipWidth / 2);
                        newTooltipTop = newRect.top + newScrollY - tooltipHeight - 20;
                        break;
                    case 'bottom':
                        newTooltipLeft = newRect.left + (newRect.width / 2) - (tooltipWidth / 2);
                        newTooltipTop = newRect.top + newScrollY + newRect.height + 20;
                        break;
                    case 'left':
                        newTooltipLeft = newRect.left + newScrollX - tooltipWidth - 20;
                        newTooltipTop = newRect.top + newScrollY + (newRect.height / 2) - (tooltipHeight / 2);
                        break;
                    case 'right':
                        newTooltipLeft = newRect.left + newScrollX + newRect.width + 20;
                        newTooltipTop = newRect.top + newScrollY + (newRect.height / 2) - (tooltipHeight / 2);
                        break;
                    default:
                        newTooltipLeft = newRect.left + (newRect.width / 2) - (tooltipWidth / 2);
                        newTooltipTop = newRect.top + newScrollY + newRect.height + 20;
                }
                
                newTooltipLeft = Math.max(20, Math.min(newTooltipLeft, window.innerWidth - tooltipWidth - 20));
                newTooltipTop = Math.max(20, Math.min(newTooltipTop, window.innerHeight - tooltipHeight - 20));
                
                tooltip.style.left = `${newTooltipLeft}px`;
                tooltip.style.top = `${newTooltipTop}px`;
            }, 500);
        }, 100);
        
        // Adicionar classe de highlight ao elemento
        targetElement.classList.add('tour-highlighted');
        
        // Atualizar posições quando há scroll ou resize
        const updatePositions = () => {
            if (this.currentTourStep === stepIndex && overlay.style.display !== 'none') {
                const newRect = targetElement.getBoundingClientRect();
                const newScrollX = window.scrollX || window.pageXOffset;
                const newScrollY = window.scrollY || window.pageYOffset;
                
                spotlight.style.left = `${newRect.left + newScrollX - highlightPadding}px`;
                spotlight.style.top = `${newRect.top + newScrollY - highlightPadding}px`;
                
                let newTooltipLeft, newTooltipTop;
                switch (step.position) {
                    case 'top':
                        newTooltipLeft = newRect.left + (newRect.width / 2) - (tooltipWidth / 2);
                        newTooltipTop = newRect.top + newScrollY - tooltipHeight - 20;
                        break;
                    case 'bottom':
                        newTooltipLeft = newRect.left + (newRect.width / 2) - (tooltipWidth / 2);
                        newTooltipTop = newRect.top + newScrollY + newRect.height + 20;
                        break;
                    case 'left':
                        newTooltipLeft = newRect.left + newScrollX - tooltipWidth - 20;
                        newTooltipTop = newRect.top + newScrollY + (newRect.height / 2) - (tooltipHeight / 2);
                        break;
                    case 'right':
                        newTooltipLeft = newRect.left + newScrollX + newRect.width + 20;
                        newTooltipTop = newRect.top + newScrollY + (newRect.height / 2) - (tooltipHeight / 2);
                        break;
                    default:
                        newTooltipLeft = newRect.left + (newRect.width / 2) - (tooltipWidth / 2);
                        newTooltipTop = newRect.top + newScrollY + newRect.height + 20;
                }
                
                newTooltipLeft = Math.max(20, Math.min(newTooltipLeft, window.innerWidth - tooltipWidth - 20));
                newTooltipTop = Math.max(20, Math.min(newTooltipTop, window.innerHeight - tooltipHeight - 20));
                
                tooltip.style.left = `${newTooltipLeft}px`;
                tooltip.style.top = `${newTooltipTop}px`;
            }
        };
        
        // Adicionar listeners para scroll e resize
        const handleScroll = () => updatePositions();
        const handleResize = () => updatePositions();
        
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleResize);
        
        // Remover listeners anteriores se existirem
        if (this.tourScrollHandler) {
            window.removeEventListener('scroll', this.tourScrollHandler, true);
        }
        if (this.tourResizeHandler) {
            window.removeEventListener('resize', this.tourResizeHandler);
        }
        
        this.tourScrollHandler = handleScroll;
        this.tourResizeHandler = handleResize;
    }

    endTour() {
        const overlay = document.getElementById('tourOverlay');
        overlay.style.display = 'none';

        // Remover listeners
        if (this.tourScrollHandler) {
            window.removeEventListener('scroll', this.tourScrollHandler, true);
            this.tourScrollHandler = null;
        }
        if (this.tourResizeHandler) {
            window.removeEventListener('resize', this.tourResizeHandler);
            this.tourResizeHandler = null;
        }

        // Remover highlights
        document.querySelectorAll('.tour-highlighted').forEach(el => {
            el.classList.remove('tour-highlighted');
        });

        // Iniciar tutorial
        this.startTutorial();
    }

    // Debounce helper para otimizar eventos frequentes
    debounce(func, wait, key) {
        return (...args) => {
            if (this.debounceTimers[key]) {
                clearTimeout(this.debounceTimers[key]);
            }
            this.debounceTimers[key] = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Cache de elementos DOM para melhor performance
    getCachedElement(id) {
        if (!this.cachedElements[id]) {
            this.cachedElements[id] = document.getElementById(id);
        }
        return this.cachedElements[id];
    }

    initTooltips() {
        // Criar tooltips para elementos com data-tooltip
        document.querySelectorAll('[data-tooltip]').forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const tooltipText = e.target.getAttribute('data-tooltip');
                if (!tooltipText) return;
                
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = tooltipText;
                document.body.appendChild(tooltip);
                
                const rect = e.target.getBoundingClientRect();
                tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
                
                e.target._tooltip = tooltip;
            });
            
            element.addEventListener('mouseleave', (e) => {
                if (e.target._tooltip) {
                    e.target._tooltip.remove();
                    e.target._tooltip = null;
                }
            });
        });
    }

    setupEasterEgg() {
        const trigger = document.getElementById('easterEggTrigger');
        if (!trigger) return;
        
        let clickCount = 0;
        let easterEggActivated = false;
        
        trigger.addEventListener('click', () => {
            if (easterEggActivated) return;
            
            clickCount++;
            trigger.style.opacity = Math.min(0.3 + (clickCount * 0.1), 1);
            
            if (clickCount === 7) {
                easterEggActivated = true;
                this.activateEasterEgg();
            } else if (clickCount < 7) {
                // Feedback visual
                trigger.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    trigger.style.transform = 'scale(1)';
                }, 200);
            }
        });
        
        // Adicionar efeito hover
        trigger.addEventListener('mouseenter', () => {
            trigger.style.opacity = '0.7';
        });
        
        trigger.addEventListener('mouseleave', () => {
            if (!easterEggActivated) {
                trigger.style.opacity = '0.3';
            }
        });
    }

    activateEasterEgg() {
        // Criar modal do Easter Egg
        const easterEggModal = document.createElement('div');
        easterEggModal.className = 'easter-egg-modal';
        easterEggModal.innerHTML = `
            <div class="easter-egg-content">
                <div class="easter-egg-header">
                    <h2 style="color: #00ff88; margin: 0;">🎉 EASTER EGG DESCOBERTO! 🎉</h2>
                    <button class="easter-egg-close">&times;</button>
                </div>
                <div class="easter-egg-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 60px; animation: bounceEasterEgg 1s infinite;">🚀</div>
                    </div>
                    <p style="color: #ffffff; font-size: 18px; text-align: center; margin-bottom: 20px; line-height: 1.6;">
                        Parabéns! Você descobriu um <strong style="color: #00ff88;">Easter Egg</strong> secreto!
                    </p>
                    <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; border-radius: 8px; border: 2px solid #00ff88; margin-bottom: 20px;">
                        <p style="color: #ffffff; margin: 0; line-height: 1.8;">
                            <strong style="color: #00ff88;">Você é um verdadeiro explorador!</strong><br><br>
                            Ao publicar seu jogo no site da unidade, você não apenas demonstra que concluiu o desafio, 
                            mas também mostra que é um desenvolvedor dedicado que vai além do básico.<br><br>
                            <strong style="color: #00ff88;">Continue explorando e aprendendo!</strong> Cada commit que você faz 
                            é um passo em direção à maestria. 🎮✨
                        </p>
                    </div>
                    <p style="color: #00ff88; text-align: center; font-weight: 600; font-size: 16px;">
                        Bônus: +50 pontos extras por descobrir o Easter Egg! 🎁
                    </p>
                </div>
                <div class="easter-egg-footer">
                    <button class="btn-primary" id="easterEggCloseBtn">Fechar</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(easterEggModal);
        
        // Adicionar pontos extras
        if (window.achievementSystem) {
            window.achievementSystem.addPoints(50, 'Easter Egg descoberto');
            this.updateGamificationDisplay();
        }
        
        // Animar entrada
        setTimeout(() => {
            easterEggModal.style.opacity = '1';
            easterEggModal.querySelector('.easter-egg-content').style.transform = 'scale(1)';
        }, 10);
        
        // Fechar modal
        const closeBtn = document.getElementById('easterEggCloseBtn');
        const closeX = easterEggModal.querySelector('.easter-egg-close');
        
        const closeModal = () => {
            easterEggModal.style.opacity = '0';
            easterEggModal.querySelector('.easter-egg-content').style.transform = 'scale(0.9)';
            setTimeout(() => {
                easterEggModal.remove();
            }, 300);
        };
        
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (closeX) closeX.addEventListener('click', closeModal);
        
        // Fechar ao clicar fora
        easterEggModal.addEventListener('click', (e) => {
            if (e.target === easterEggModal) {
                closeModal();
            }
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new GitTutorialApp();
});

