// App Principal - Controla o fluxo do tutorial interativo
class GitTutorialApp {
    constructor() {
        this.git = new GitSimulator();
        this.currentStep = null; // Inicia como null até o tutorial começar
        this.cursorGuide = null;
        this.startTime = null;
        this.timerInterval = null;
        this.stepCompleted = false; // Rastreia se o passo atual foi completado
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
        const headerInfo = document.getElementById('headerInfo');

        console.log('setupWelcomeScreen chamado', { startBtn, welcomeScreen, headerInfo });

        if (startBtn && welcomeScreen && headerInfo) {
            startBtn.addEventListener('click', () => {
                console.log('Botão clicado! Iniciando tutorial...');
                welcomeScreen.style.display = 'none';
                headerInfo.style.display = 'flex';
                this.startTutorial();
            });
        } else {
            console.error('Elementos não encontrados:', { startBtn, welcomeScreen, headerInfo });
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
            modalClose: document.getElementById('modalClose')
        };
    }

    setupEventListeners() {
        // Terminal input
        this.elements.terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleCommand(e.target.value);
                e.target.value = '';
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
            const step = tutorialSteps[this.currentStep];
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

        // Code textarea change
        this.elements.codeTextarea.addEventListener('input', () => {
            this.updateCodeHighlight();
            this.checkCodeCompletion();
        });

        // Show solution button
        this.elements.showSolution.addEventListener('click', () => {
            this.toggleSolution();
        });

        // Cursor guide animation
        this.setupCursorGuide();
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
        console.log('startTutorial chamado');
        this.currentStep = 0;
        this.startTime = Date.now();
        this.startTimer();
        this.showStep(this.currentStep);
        console.log('Tutorial iniciado no passo:', this.currentStep);
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
        if (stepIndex < 0 || stepIndex >= tutorialSteps.length) {
            return;
        }

        const step = tutorialSteps[stepIndex];
        if (!step) {
            console.error('Step não encontrado no índice:', stepIndex);
            return;
        }

        this.currentStep = stepIndex;

        // Get current module
        const module = getCurrentModule ? getCurrentModule(step.id) : tutorialModules.find(m => m.steps.includes(step.id));
        
        // Update module and step info
        if (module) {
            this.elements.currentModule.textContent = module.name;
        }
        this.elements.stepInfo.textContent = `Passo ${stepIndex + 1}/${tutorialSteps.length}`;

        // Update step type badge
        this.elements.stepType.textContent = step.type === 'theory' ? 'Teoria' : 
                                            step.type === 'exercise' ? 'Exercício' : 'Tutorial';
        this.elements.stepType.className = `step-type ${step.type}`;

        // Update instruction - limpar primeiro e depois adicionar novo conteúdo
        this.elements.instructionContent.innerHTML = '';
        const instructionWrapper = document.createElement('div');
        instructionWrapper.innerHTML = `
            <h3>${step.title || 'Instrução'}</h3>
            <div>${step.instruction || ''}</div>
        `;
        this.elements.instructionContent.appendChild(instructionWrapper);
        
        // Remover instrução duplicada se já existe na instrução do passo
        // Não adicionar instrução automática se já está na instrução do passo

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
            console.error('Editor panel não encontrado!');
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
        const progress = ((stepIndex + 1) / tutorialSteps.length) * 100;
        this.updateProgress(progress);

        // Update navigation buttons
        this.elements.prevStep.disabled = stepIndex === 0;
        // Desabilitar botão próximo até que o passo seja completado (exceto para passos de teoria sem comando)
        if (step.command || step.showEditor || step.exercise) {
            this.elements.nextStep.disabled = true; // Desabilitado até completar
        } else {
            // Passos de teoria sem comando podem avançar imediatamente
            this.elements.nextStep.disabled = stepIndex === tutorialSteps.length - 1;
            // Se for passo de teoria sem comando, marcar como completo automaticamente
            if (!step.command && !step.showEditor && !step.exercise) {
                this.stepCompleted = true;
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
        const step = tutorialSteps[this.currentStep];
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
        console.log('handleCommand chamado:', command, 'currentStep:', this.currentStep);
        
        // Verificar se o tutorial foi iniciado
        if (this.currentStep === null || this.currentStep === undefined) {
            console.log('Tutorial não iniciado ainda');
            this.showMessage('Por favor, clique em "Começar Tutorial" primeiro.', 'error');
            return;
        }

        if (tutorialSteps.length === 0) {
            console.error('tutorialSteps está vazio!');
            this.showMessage('Erro: tutorial não carregado.', 'error');
            return;
        }

        const step = tutorialSteps[this.currentStep];
        console.log('Step atual:', step);
        
        if (!step) {
            console.error('Step não encontrado no índice:', this.currentStep);
            this.showMessage('Erro: passo do tutorial não encontrado.', 'error');
            return;
        }

        // Se o passo não requer comando, informar o usuário
        if (!step.command) {
            console.log('Passo não requer comando');
            this.addTerminalLine(`$ ${command}`, 'command');
            this.addTerminalLine('Esta etapa requer uma ação diferente. Siga as instruções no painel à esquerda.', 'error');
            this.showMessage('Esta etapa requer uma ação diferente. Siga as instruções.', 'error');
            return;
        }

        // Add command to terminal output
        this.addTerminalLine(`$ ${command}`, 'command');

        // Validate command
        console.log('Validando comando:', command, 'com função:', step.validation);
        if (step.validation && step.validation(command)) {
            console.log('Comando válido! Executando onSuccess...');
            // Execute command
            let result;
            try {
                result = step.onSuccess ? step.onSuccess(this.git, command) : 'Comando executado com sucesso!';
                console.log('Resultado do onSuccess:', result);
                if (typeof result !== 'string') {
                    result = result.success ? result.message : result.message || 'Comando executado!';
                }
            } catch (error) {
                console.error('Erro ao executar comando:', error);
                result = 'Erro ao executar comando: ' + error.message;
            }
            
            this.addTerminalLine(result, 'success');
            
            // Update visualization
            this.updateGitVisualization();
            this.updateGitStatus();

            // Marcar passo como completo
            this.stepCompleted = true;
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
                            <strong style="color: #3b82f6; display: block; margin-bottom: 8px;">📁 Arquivo criado!</strong>
                            <p style="color: #c9d1d9; margin: 5px 0; font-size: 15px;">O arquivo <strong style="color: #79c0ff;">${csFile}</strong> foi criado e está disponível no editor à direita.</p>
                            <p style="color: #c9d1d9; margin: 5px 0; font-size: 14px;">👉 <strong>Veja o editor:</strong> Role para a direita ou olhe o painel "Editor de Código" para ver o arquivo criado.</p>
                        `;
                    } else {
                        fileInstruction.innerHTML = `
                            <strong style="color: #3b82f6; display: block; margin-bottom: 8px;">📁 Arquivos criados!</strong>
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
                <strong style="color: #22c55e; display: block; margin-bottom: 10px; font-size: 16px;">✓ Comando executado com sucesso!</strong>
                <p style="color: #c9d1d9; margin: 8px 0; font-size: 15px;"><strong>🎯 Próxima ação:</strong> Clique no botão <strong style="color: #22c55e; background: rgba(34, 197, 94, 0.1); padding: 2px 6px; border-radius: 4px;">"Próximo"</strong> abaixo para continuar.</p>
                <p style="color: #c9d1d9; margin: 5px 0; font-size: 13px;">💡 Dica: O botão "Próximo" está pulsando em verde para chamar sua atenção!</p>
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
            
            // Mensagem de sucesso mais clara
            this.showMessage('Comando executado! Clique em "Próximo" para continuar.', 'success');
        } else {
            console.log('Comando inválido');
            this.addTerminalLine('Comando incorreto. Tente novamente.', 'error');
            if (step.hint) {
                this.addTerminalLine(`Dica: ${step.hint}`, 'error');
            }
            this.showMessage('Comando incorreto. Verifique a dica e tente novamente.', 'error');
        }
    }

    checkCodeCompletion() {
        const step = tutorialSteps[this.currentStep];
        
        if (!step.showEditor && !step.exercise) {
            return;
        }

        const code = this.elements.codeTextarea.value;
        
        // Check using exercise.check if available
        if (step.exercise && step.exercise.check) {
            if (step.exercise.check(code)) {
                if (!this.stepCompleted) {
                    this.stepCompleted = true;
                    this.elements.nextStep.disabled = false;
                    this.showMessage('Código correto! Excelente trabalho! Agora você pode avançar.', 'success');
                    // Salvar automaticamente quando o código estiver correto
                    const filename = this.elements.fileSelector.value;
                    if (filename) {
                        this.git.updateFile(filename, code);
                    }
                }
            }
        } else if (step.codeCheck) {
            // Fallback to old codeCheck
            if (step.codeCheck(code)) {
                if (!this.stepCompleted) {
                    this.stepCompleted = true;
                    this.elements.nextStep.disabled = false;
                    this.showMessage('Código correto! Agora você pode avançar para a próxima etapa.', 'success');
                    // Salvar automaticamente quando o código estiver correto
                    const filename = this.elements.fileSelector.value;
                    if (filename) {
                        this.git.updateFile(filename, code);
                    }
                }
            }
        }
    }

    loadFilesIntoSelector() {
        const state = this.git.getState();
        this.elements.fileSelector.innerHTML = '<option value="">Selecione um arquivo...</option>';
        
        console.log('Arquivos disponíveis:', state.files);
        
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
        
        console.log('Carregando arquivo:', filename);
        const file = this.git.getFile(filename);
        console.log('Arquivo encontrado:', file);
        
        if (file) {
            this.elements.codeTextarea.value = file.content;
            // Aguardar múltiplos frames para garantir que o DOM está completamente atualizado
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.updateCodeHighlight();
                });
            });
        } else {
            console.error('Arquivo não encontrado:', filename);
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
            console.warn('Elemento codeEditor não encontrado');
            return;
        }
        
        // Limpar conteúdo anterior
        this.elements.codeEditor.textContent = code;
        
        // Verificar se Prism está disponível
        if (typeof Prism === 'undefined' || !Prism.highlightElement) {
            console.warn('Prism não está disponível');
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
                console.warn('Elemento codeEditor não tem parent');
            }
        } catch (error) {
            console.warn('Erro ao fazer highlight do código:', error);
            // Se houver erro, apenas mostrar o código sem highlight
        }
    }

    addTerminalLine(text, type = 'normal') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        
        if (type === 'command') {
            line.innerHTML = `<span class="prompt">$</span><span class="text">${text}</span>`;
        } else {
            line.innerHTML = `<span class="text">${text}</span>`;
        }
        
        this.elements.terminalOutput.appendChild(line);
        this.elements.terminalOutput.scrollTop = this.elements.terminalOutput.scrollHeight;
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
        this.elements.progressText.textContent = Math.round(percentage) + '%';
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

    hideCursorGuide() {
        this.elements.cursorGuide.classList.remove('active');
    }

    getCurrentTarget() {
        const step = tutorialSteps[this.currentStep];
        if (step.command) {
            return this.elements.terminalInput;
        } else if (step.showEditor) {
            return this.elements.codeTextarea;
        }
        return null;
    }

    goToStep(stepIndex) {
        if (stepIndex >= 0 && stepIndex < tutorialSteps.length) {
            this.showStep(stepIndex);
        }
    }

    restartTutorial() {
        if (confirm('Tem certeza que deseja reiniciar o tutorial? Todo o progresso será perdido.')) {
            this.stopTimer();
            this.git.reset();
            this.elements.terminalOutput.innerHTML = '';
            this.currentStep = 0;
            this.startTime = Date.now();
            this.startTimer();
            this.showStep(this.currentStep);
            this.updateGitVisualization();
            this.updateGitStatus();
            this.showMessage('Tutorial reiniciado!', 'success');
        }
    }

    showMessage(message, type = 'success') {
        this.elements.modalBody.textContent = message;
        this.elements.modalBody.className = `modal-body ${type}`;
        this.elements.feedbackModal.classList.add('active');
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            this.hideModal();
        }, 3000);
    }

    hideModal() {
        this.elements.feedbackModal.classList.remove('active');
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new GitTutorialApp();
});

