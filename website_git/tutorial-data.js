// Tutorial Gamificado - Git: Consertando o Repositório Quebrado
// Duração: 4 horas | Narrativa: Mistério/Repositório quebrado

// Sistema de Pontos e Conquistas
const achievementSystem = {
    points: 0,
    achievements: [],
    level: 1,
    
    addPoints: function(amount, reason) {
        this.points += amount;
        this.checkLevelUp();
        return { points: this.points, reason: reason };
    },
    
    unlockAchievement: function(name, description, icon) {
        if (!this.achievements.find(a => a.name === name)) {
            this.achievements.push({ name, description, icon, unlockedAt: new Date() });
            return true;
        }
        return false;
    },
    
    checkLevelUp: function() {
        const newLevel = Math.floor(this.points / 100) + 1;
        if (newLevel > this.level) {
            this.level = newLevel;
            return true;
        }
        return false;
    }
};

// Narrativa Principal
const gameNarrative = {
    title: "MISSÃO: REPOSITÓRIO QUEBRADO",
    subtitle: "Uma aventura de 4 horas para dominar Git",
    intro: `
        <div style="background: rgba(0, 0, 0, 0.4); padding: 32px; border-radius: 12px; margin: 20px 0; border: 2px solid rgba(255, 68, 68, 0.3);">
            <h3 style="color: #ff4444; margin-bottom: 20px; font-size: 24px; text-align: center;">ALERTA CRÍTICO</h3>
            <div style="line-height: 1.8; font-size: 16px;">
                <p style="margin-bottom: 16px; color: #ffffff;">
                    Você recebeu uma chamada de emergência: o repositório do projeto <strong style="color: #00d4ff;">"Estação de Lançamento"</strong> está quebrado!
                </p>
                <p style="margin-bottom: 16px; color: #ffffff;">
                    O desenvolvedor anterior desapareceu e deixou o projeto em um estado crítico:
                </p>
                <ul style="margin-left: 30px; margin-bottom: 16px; color: #ffffff;">
                    <li>Commits perdidos no histórico</li>
                    <li>Branches desorganizadas</li>
                    <li>Arquivos importantes corrompidos ou deletados</li>
                    <li>Código principal não funciona mais</li>
                </ul>
                <p style="margin-bottom: 16px; color: #ffffff;">
                    <strong>Sua missão:</strong> Use Git para investigar, recuperar e reorganizar o repositório. 
                    Você precisa consertar tudo antes que seja tarde demais!
                </p>
                <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; margin-top: 20px;">
                    <p style="margin-bottom: 12px; color: #ffffff;">
                        <strong style="color: #00d4ff;">O que você vai fazer:</strong>
                    </p>
                    <ol style="margin-left: 20px; color: #ffffff; line-height: 2;">
                        <li><strong>Fase 1:</strong> Investigar o estado atual do repositório</li>
                        <li><strong>Fase 2:</strong> Recuperar arquivos perdidos usando Git</li>
                        <li><strong>Fase 3:</strong> Organizar código em branches apropriadas</li>
                        <li><strong>Fase 4:</strong> Preparar tudo para publicação</li>
                    </ol>
                </div>
                <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin-top: 20px;">
                    <p style="color: #00cc66; font-weight: 600; margin-bottom: 8px; font-size: 18px;">
                        Duração Total: 4 horas
                    </p>
                    <p style="color: #ffffff; margin-bottom: 8px;">
                        Você aprenderá todos os comandos essenciais do Git na prática
                    </p>
                    <p style="color: #ffffff; margin-bottom: 8px;">
                        Trabalhará com um projeto real de jogo em C#
                    </p>
                    <p style="color: #00cc66; font-weight: 600; margin-top: 12px;">
                        Ao final: Desafio Final - Publicar seu próprio jogo em uma plataforma real!
                    </p>
                </div>
            </div>
        </div>
    `,
    
    phases: [
        {
            id: 1,
            name: "FASE 1: INVESTIGAÇÃO",
            duration: 60,
            theme: "Descobrir o que aconteceu",
            objective: "Entender o estado atual do repositório e identificar problemas"
        },
        {
            id: 2,
            name: "FASE 2: RECUPERAÇÃO",
            duration: 60,
            theme: "Recuperar código perdido",
            objective: "Usar Git para restaurar arquivos e histórico perdidos"
        },
        {
            id: 3,
            name: "FASE 3: REORGANIZAÇÃO",
            duration: 60,
            theme: "Organizar e estruturar",
            objective: "Criar branches apropriadas e organizar commits"
        },
        {
            id: 4,
            name: "FASE 4: PREPARAÇÃO",
            duration: 60,
            theme: "Preparar para publicação",
            objective: "Configurar repositório remoto e preparar para deploy"
        }
    ]
};

// Módulos Gamificados (4 fases de 1h cada)
const tutorialModules = [
    {
        id: 1,
        name: 'FASE 1: INVESTIGAÇÃO',
        description: 'Descobrir o estado do repositório quebrado - 60 minutos',
        duration: 60,
        theme: 'investigation',
        steps: [1, 2, 3, 4, 5, 6, 7, 8],
        objective: 'Entender o que aconteceu com o repositório',
        rewards: { points: 50, achievement: 'Detetive Git' }
    },
    {
        id: 2,
        name: 'FASE 2: RECUPERAÇÃO',
        description: 'Recuperar código perdido usando Git - 60 minutos',
        duration: 60,
        theme: 'recovery',
        steps: [9, 10, 11, 12, 13, 14, 15, 16],
        objective: 'Restaurar arquivos e histórico perdidos',
        rewards: { points: 75, achievement: 'Arqueólogo do Código' }
    },
    {
        id: 3,
        name: 'FASE 3: REORGANIZAÇÃO',
        description: 'Organizar branches e commits - 60 minutos',
        duration: 60,
        theme: 'organization',
        steps: [17, 18, 19, 20, 21, 22, 23, 24],
        objective: 'Criar estrutura de branches apropriada',
        rewards: { points: 75, achievement: 'Arquiteto Git' }
    },
    {
        id: 4,
        name: 'FASE 4: PREPARAÇÃO PARA LANÇAMENTO',
        description: 'Preparar repositório para publicação - 60 minutos',
        duration: 60,
        theme: 'preparation',
        steps: [25, 26, 27, 28, 29, 30, 31, 32],
        objective: 'Configurar repositório remoto e preparar deploy',
        rewards: { points: 100, achievement: 'Mestre Git' }
    }
];

const tutorialSteps = [
    // ===== FASE 1: INVESTIGAÇÃO (60 min) =====
    {
        id: 1,
        module: 1,
        type: 'story',
        title: 'MISSÃO CRÍTICA RECEBIDA',
        instruction: `
            <div style="background: rgba(255, 68, 68, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid #ff4444; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ff4444; display: block; margin-bottom: 15px;">ALERTA DE EMERGÊNCIA</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    O repositório do projeto <strong>"Estação de Lançamento"</strong> está em estado crítico. 
                    O desenvolvedor anterior desapareceu e deixou tudo bagunçado.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>Sua primeira tarefa:</strong> Investigar o estado atual do repositório para entender o que aconteceu.
                </p>
                <p style="color: #00cc66; margin-top: 15px; font-weight: 600;">
                    Recompensa: 10 pontos | Conquista: "Detetive Iniciante"
                </p>
            </div>
            <div style="background: rgba(0, 102, 255, 0.15); padding: 15px; border-radius: 8px; border-left: 4px solid #0066ff; margin-top: 20px;">
                <p style="color: #ffffff; margin: 0; font-size: 15px; font-weight: 600;">
                    👉 Leia as informações acima e clique em <strong style="color: #00cc66;">"Próximo"</strong> para começar a investigação!
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>A Situação</h4>
            <p>Você está diante de um repositório Git quebrado. Sua missão é descobrir:</p>
            <ul>
                <li>O que existe no repositório?</li>
                <li>Qual o estado atual dos arquivos?</li>
                <li>Há histórico de commits?</li>
                <li>Existem branches?</li>
            </ul>
            <h4>Comandos de Investigação</h4>
            <p>Começaremos com comandos básicos do Git para entender a situação:</p>
            <ul>
                <li><code>git status</code> - Ver o estado atual</li>
                <li><code>git log</code> - Ver histórico de commits</li>
                <li><code>git branch</code> - Listar branches</li>
            </ul>
        `,
        hint: null,
        instructorTips: 'Este é o passo inicial da missão. Os alunos devem apenas ler e clicar em "Próximo" para começar.',
        validation: () => true,
        onSuccess: () => {
            achievementSystem.unlockAchievement('Detetive Iniciante', 'Começou a investigação', '🔍');
            achievementSystem.addPoints(10, 'Início da investigação');
            return 'Investigação iniciada! +10 pontos | Conquista desbloqueada: Detetive Iniciante';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 2,
        module: 1,
        type: 'tutorial',
        title: 'Investigar: Verificar se o repositório existe',
        instruction: `
            <div style="background: rgba(0, 102, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0066ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #0099ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Primeiro, vamos descobrir se este é um repositório Git válido. Use <code>git status</code> para investigar.
                </p>
                <p style="color: #999999; margin-top: 10px; font-size: 14px;">
                    Dica: Se não for um repositório Git, precisaremos inicializar um novo.
                </p>
            </div>
        `,
        command: 'git status',
        theory: `
            <h4>Comando: git status</h4>
            <p>Este comando mostra o estado atual do diretório de trabalho e área de staging.</p>
            <p><strong>O que ele revela:</strong></p>
            <ul>
                <li>Arquivos modificados que não foram adicionados</li>
                <li>Arquivos prontos para commit (staged)</li>
                <li>Arquivos não rastreados</li>
                <li>Qual branch você está</li>
            </ul>
        `,
        hint: 'Digite "git status" para ver o estado atual do repositório',
        instructorTips: 'git status é seu melhor amigo. Use-o sempre que tiver dúvidas sobre o estado do repositório.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 2 && parts[0] === 'git' && parts[1] === 'status';
        },
        onSuccess: (git) => {
            const result = git.status();
            if (!result.success) {
                return 'Este não é um repositório Git! Precisamos inicializar um. Continue para o próximo passo.';
            }
            return `Repositório encontrado! Estado atual: ${result.files.length} arquivo(s) | Branch: ${result.branch || 'Nenhum'}`;
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 3,
        module: 1,
        type: 'tutorial',
        title: 'Investigar: Verificar histórico de commits',
        instruction: `
            <div style="background: rgba(0, 102, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0066ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #0099ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Agora vamos investigar o histórico de commits. Use <code>git log</code> para ver o que foi feito anteriormente.
                </p>
            </div>
        `,
        command: 'git log',
        theory: `
            <h4>Comando: git log</h4>
            <p>Este comando mostra o histórico de commits do repositório.</p>
            <p><strong>Informações importantes:</strong></p>
            <ul>
                <li>Hash do commit (identificador único)</li>
                <li>Autor e data</li>
                <li>Mensagem do commit</li>
                <li>Ordem cronológica dos commits</li>
            </ul>
        `,
        hint: 'Digite "git log" para ver o histórico completo',
        instructorTips: 'O histórico de commits é como uma linha do tempo. Ele mostra tudo que aconteceu no projeto.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 2 && parts[0] === 'git' && parts[1] === 'log';
        },
        onSuccess: (git) => {
            const result = git.log();
            if (!result.success || result.commits.length === 0) {
                return 'Nenhum commit encontrado! O repositório está vazio ou foi recém-criado.';
            }
            return `Histórico encontrado! Total de commits: ${result.commits.length}`;
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 4,
        module: 1,
        type: 'tutorial',
        title: 'Investigar: Listar branches existentes',
        instruction: `
            <div style="background: rgba(0, 102, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0066ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #0099ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos ver quais branches existem no repositório. Use <code>git branch</code> para listar todas.
                </p>
            </div>
        `,
        command: 'git branch',
        theory: `
            <h4>Comando: git branch</h4>
            <p>Este comando lista todas as branches do repositório.</p>
            <p><strong>O que você precisa saber:</strong></p>
            <ul>
                <li>A branch atual é marcada com um asterisco (*)</li>
                <li>Branches são como linhas paralelas de desenvolvimento</li>
                <li>Cada branch pode ter commits diferentes</li>
            </ul>
        `,
        hint: 'Digite "git branch" para ver todas as branches',
        instructorTips: 'Branches permitem trabalhar em diferentes funcionalidades sem interferir umas nas outras.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 2 && parts[0] === 'git' && parts[1] === 'branch';
        },
        onSuccess: (git) => {
            const result = git.branch();
            if (!result.success || result.branches.length === 0) {
                return 'Nenhuma branch encontrada! Provavelmente só existe a branch main ou o repositório está vazio.';
            }
            return `Branches encontradas: ${result.branches.join(', ')} | Branch atual: ${result.current}`;
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 5,
        module: 1,
        type: 'tutorial',
        title: 'Ação: Inicializar repositório (se necessário)',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Se o repositório não estava inicializado, vamos criar um agora. Use <code>git init</code> para inicializar.
                </p>
                <p style="color: #999999; margin-top: 10px; font-size: 14px;">
                    Nota: Se já havia um repositório, este comando não causará problemas.
                </p>
            </div>
        `,
        command: 'git init',
        theory: `
            <h4>Comando: git init</h4>
            <p>Este comando inicializa um novo repositório Git no diretório atual.</p>
            <p><strong>O que acontece:</strong></p>
            <ul>
                <li>Cria uma pasta .git oculta</li>
                <li>Prepara o diretório para versionamento</li>
                <li>Cria uma branch inicial (geralmente "main" ou "master")</li>
            </ul>
        `,
        hint: 'Digite "git init" para inicializar o repositório',
        instructorTips: 'git init é o primeiro passo para começar a usar Git em qualquer projeto.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 2 && parts[0] === 'git' && parts[1] === 'init';
        },
        onSuccess: (git) => {
            const result = git.init();
            achievementSystem.addPoints(15, 'Repositório inicializado');
            return result.message + ' +15 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 6,
        module: 1,
        type: 'tutorial',
        title: 'Configurar: Definir identidade do desenvolvedor',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Configure sua identidade no Git. Você precisa configurar AMBAS as informações abaixo substituindo pelos seus dados:
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git config --global user.name "Seu Nome"</code>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git config --global user.email "seu@email.com"</code>
                <div id="configProgress" style="margin-top: 15px; padding: 12px; background: rgba(0, 0, 0, 0.3); border-radius: 6px;">
                    <p style="color: #ffaa00; font-weight: 600; margin-bottom: 8px;">Progresso da configuração:</p>
                    <p style="color: #ffffff; margin: 4px 0;" id="configNameStatus">• Nome: <span style="color: #ff4444;">Não configurado</span></p>
                    <p style="color: #ffffff; margin: 4px 0;" id="configEmailStatus">• Email: <span style="color: #ff4444;">Não configurado</span></p>
                    <p style="color: #999999; margin-top: 10px; font-size: 13px; font-style: italic;">Configure ambas as informações para avançar para o próximo passo.</p>
                </div>
            </div>
        `,
        command: 'git config --global',
        theory: `
            <h4>Configuração de Identidade</h4>
            <p>O Git precisa saber quem você é para associar seus commits a você.</p>
            <p><strong>Configurações importantes:</strong></p>
            <ul>
                <li><code>user.name</code> - Seu nome completo</li>
                <li><code>user.email</code> - Seu email (use um email profissional)</li>
                <li>A flag <code>--global</code> aplica para todos os repositórios</li>
            </ul>
            <p><strong>Importante:</strong> Você precisa configurar AMBAS as informações (nome e email) antes de poder avançar.</p>
        `,
        hint: 'Configure primeiro user.name e depois user.email. Ambos são obrigatórios!',
        instructorTips: 'Essas informações aparecerão em todos os seus commits. Use dados reais e profissionais. Lembre-se: configure ambas as informações!',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            // Validar formato: git config --global user.name "valor" ou user.email "valor"
            if (parts.length < 5) return false;
            if (parts[0] !== 'git' || parts[1] !== 'config' || parts[2] !== '--global') return false;
            
            const option = parts[3];
            if (option !== 'user.name' && option !== 'user.email') return false;
            
            // Extrair valor (pode estar entre aspas ou não)
            const value = cmd.match(/"([^"]+)"/)?.[1] || parts.slice(4).join(' ');
            if (!value || value.trim().length === 0) return false;
            
            return true;
        },
        onSuccess: (git, cmd) => {
            // Extrair opção e valor do comando
            const parts = cmd.trim().split(/\s+/);
            const option = parts[3];
            const valueMatch = cmd.match(/"([^"]+)"/);
            const value = valueMatch ? valueMatch[1] : parts.slice(4).join(' ');
            
            // Configurar no Git
            const result = git.config(option, value);
            
            // Atualizar interface visual
            setTimeout(() => {
                const nameStatus = document.getElementById('configNameStatus');
                const emailStatus = document.getElementById('configEmailStatus');
                
                if (option === 'user.name' && nameStatus) {
                    nameStatus.innerHTML = `• Nome: <span style="color: #00cc66;">✓ Configurado como "${value}"</span>`;
                } else if (option === 'user.email' && emailStatus) {
                    emailStatus.innerHTML = `• Email: <span style="color: #00cc66;">✓ Configurado como "${value}"</span>`;
                }
                
                // Verificar se ambas estão configuradas
                if (git.isConfigComplete()) {
                    const progressDiv = document.getElementById('configProgress');
                    if (progressDiv) {
                        progressDiv.style.background = 'rgba(0, 204, 102, 0.2)';
                        progressDiv.style.border = '2px solid #00cc66';
                        const statusMsg = progressDiv.querySelector('p:last-child');
                        if (statusMsg) {
                            statusMsg.innerHTML = '<strong style="color: #00cc66;">✓ Configuração completa! Você pode avançar para o próximo passo.</strong>';
                        }
                    }
                }
            }, 100);
            
            if (git.isConfigComplete()) {
                achievementSystem.addPoints(10, 'Identidade configurada');
                return result.message + ' Configuração completa! Ambos nome e email foram configurados. +10 pontos | Você pode avançar agora!';
            } else {
                const missing = [];
                if (!git.getConfig('user.name')) missing.push('nome');
                if (!git.getConfig('user.email')) missing.push('email');
                return result.message + ` Ainda falta configurar: ${missing.join(' e ')}. Configure ambas as informações para avançar.`;
            }
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 7,
        module: 1,
        type: 'challenge',
        title: 'Desafio: Criar arquivo de investigação',
        instruction: `
            <div style="background: rgba(255, 170, 0, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ffaa00; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ffaa00; display: block; margin-bottom: 15px;">DESAFIO:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Crie um arquivo chamado <code>INVESTIGACAO.md</code> documentando o que você descobriu sobre o repositório.
                </p>
                <p style="color: #999999; margin-top: 10px; font-size: 14px;">
                    Recompensa: 25 pontos | Tempo estimado: 10 minutos
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Documentando suas Descobertas</h4>
            <p>Um bom desenvolvedor documenta o que encontra. Crie um arquivo markdown com:</p>
            <ul>
                <li>Estado atual do repositório</li>
                <li>Número de commits encontrados</li>
                <li>Branches existentes</li>
                <li>Problemas identificados</li>
            </ul>
        `,
        hint: 'Você precisará criar o arquivo no editor e depois fazer commit',
        instructorTips: 'Documentação é crucial. Um arquivo INVESTIGACAO.md ajudará você a lembrar o que descobriu.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'INVESTIGACAO.md',
        codeCheck: (code) => {
            return code && code.length > 50 && 
                   (code.includes('repositório') || code.includes('investigação') || code.includes('descobri'));
        },
        onSuccess: (git) => {
            git.createFile('INVESTIGACAO.md', `# Relatório de Investigação

## Estado do Repositório
- Repositório inicializado: Sim
- Commits encontrados: [Documentar aqui]
- Branches existentes: [Documentar aqui]

## Problemas Identificados
[Listar problemas encontrados]

## Próximos Passos
[O que precisa ser feito]`);
            git.add('INVESTIGACAO.md');
            git.commit('Documentação inicial da investigação');
            achievementSystem.addPoints(25, 'Investigação documentada');
            return 'Arquivo de investigação criado e commitado! +25 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 8,
        module: 1,
        type: 'story',
        title: 'FASE 1 CONCLUÍDA',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">INVESTIGAÇÃO COMPLETA!</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    Você completou a primeira fase! Agora você sabe o estado atual do repositório.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>Próxima fase:</strong> Vamos recuperar o código que foi perdido ou corrompido.
                </p>
                <p style="color: #00cc66; margin-top: 15px; font-weight: 600;">
                    Conquista desbloqueada: "Detetive Git" | Total de pontos: ${achievementSystem.points}
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>O que você aprendeu:</h4>
            <ul>
                <li>Como investigar o estado de um repositório Git</li>
                <li>Como usar git status, git log e git branch</li>
                <li>Como inicializar um novo repositório</li>
                <li>Como configurar sua identidade</li>
            </ul>
            <h4>Preparado para a Fase 2?</h4>
            <p>Na próxima fase, você aprenderá a recuperar código perdido usando Git. Prepare-se!</p>
        `,
        hint: '',
        instructorTips: 'Parabéns! Você completou a investigação. Agora vamos para a recuperação.',
        validation: () => true,
        onSuccess: () => {
            achievementSystem.unlockAchievement('Detetive Git', 'Completou a fase de investigação', '🔍');
            return 'Fase 1 concluída! Conquista desbloqueada: Detetive Git';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    
    // ===== FASE 2: RECUPERAÇÃO (60 min) =====
    // Continuarei criando os próximos passos...
    // Por enquanto, vou criar a estrutura base e depois podemos expandir
    
    {
        id: 9,
        module: 2,
        type: 'story',
        title: 'FASE 2: RECUPERAÇÃO',
        instruction: `
            <div style="background: rgba(255, 107, 53, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ff6b35; display: block; margin-bottom: 15px;">NOVA MISSÃO</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    Você descobriu que vários arquivos importantes foram perdidos ou corrompidos. 
                    Agora você precisa usar Git para recuperá-los do histórico.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>Objetivo:</strong> Recuperar arquivos perdidos usando git checkout, git restore e navegação no histórico.
                </p>
                <p style="color: #ff6b35; margin-top: 15px; font-weight: 600;">
                    Duração: 60 minutos | Recompensa total: 75 pontos
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Recuperação com Git</h4>
            <p>Git mantém histórico completo de todas as versões de arquivos. Você pode:</p>
            <ul>
                <li>Ver versões anteriores de arquivos</li>
                <li>Restaurar arquivos deletados</li>
                <li>Voltar para versões anteriores</li>
                <li>Recuperar código perdido</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Git é como uma máquina do tempo. Você pode voltar a qualquer ponto do histórico.',
        validation: () => true,
        onSuccess: () => {
            return 'Fase 2 iniciada! Prepare-se para recuperar código perdido.';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 10,
        module: 2,
        type: 'tutorial',
        title: 'Recuperar: Criar arquivo perdido',
        instruction: `
            <div style="background: rgba(255, 107, 53, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ff6b35; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Primeiro, vamos criar um arquivo que foi perdido. Crie um arquivo <code>Player.cs</code> básico 
                    que representa o jogador no jogo "Estação de Lançamento".
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Recuperando Arquivos</h4>
            <p>Quando arquivos são perdidos, você pode:</p>
            <ul>
                <li>Criar novos arquivos baseados no que você sabe</li>
                <li>Buscar no histórico de commits</li>
                <li>Restaurar de branches antigas</li>
            </ul>
        `,
        hint: 'Use o editor para criar o arquivo Player.cs',
        instructorTips: 'Vamos começar criando arquivos básicos que foram perdidos. Depois aprenderemos a recuperar do histórico.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Player.cs',
        codeCheck: (code) => {
            return code && code.includes('class') && code.includes('Player');
        },
        onSuccess: (git) => {
            git.createFile('Player.cs', `using System;

namespace EstacaoLancamento
{
    public class Player
    {
        public string Nome { get; set; }
        public int Pontuacao { get; set; }
        
        public Player(string nome)
        {
            Nome = nome;
            Pontuacao = 0;
        }
        
        public void AdicionarPontos(int pontos)
        {
            Pontuacao += pontos;
        }
    }
}`);
            git.add('Player.cs');
            git.commit('Adiciona classe Player básica');
            achievementSystem.addPoints(15, 'Arquivo Player.cs criado');
            return 'Arquivo Player.cs criado e commitado! +15 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 11,
        module: 2,
        type: 'tutorial',
        title: 'Recuperar: Adicionar arquivo ao staging',
        instruction: `
            <div style="background: rgba(255, 107, 53, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ff6b35; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Agora vamos adicionar o arquivo ao staging area usando <code>git add</code>. 
                    Isso prepara o arquivo para ser commitado.
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git add Player.cs</code>
            </div>
        `,
        command: 'git add',
        theory: `
            <h4>Comando: git add</h4>
            <p>Este comando adiciona arquivos ao staging area (área de preparação).</p>
            <p><strong>Formas de usar:</strong></p>
            <ul>
                <li><code>git add arquivo.cs</code> - Adiciona um arquivo específico</li>
                <li><code>git add .</code> - Adiciona todos os arquivos modificados</li>
                <li>O staging area é onde você prepara arquivos antes de fazer commit</li>
            </ul>
        `,
        hint: 'Use git add Player.cs para adicionar o arquivo ao staging',
        instructorTips: 'git add é o passo intermediário entre modificar arquivos e fazer commit.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length >= 3 && parts[0] === 'git' && parts[1] === 'add' && parts[2] === 'Player.cs';
        },
        onSuccess: (git) => {
            const result = git.add('Player.cs');
            achievementSystem.addPoints(10, 'Arquivo adicionado ao staging');
            return result.message + ' +10 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 12,
        module: 2,
        type: 'tutorial',
        title: 'Recuperar: Fazer commit do arquivo recuperado',
        instruction: `
            <div style="background: rgba(255, 107, 53, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ff6b35; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Agora vamos fazer commit do arquivo recuperado. Use <code>git commit</code> com uma mensagem descritiva.
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git commit -m "Recupera arquivo Player.cs perdido"</code>
            </div>
        `,
        command: 'git commit',
        theory: `
            <h4>Comando: git commit</h4>
            <p>Este comando cria um snapshot permanente do estado atual do repositório.</p>
            <p><strong>Importante:</strong></p>
            <ul>
                <li>Sempre use mensagens descritivas</li>
                <li>Commits devem ser atômicos (uma mudança por vez)</li>
                <li>Commits são pontos de restauração no histórico</li>
            </ul>
        `,
        hint: 'Use git commit -m "mensagem" para fazer commit',
        instructorTips: 'Bons commits são a base de um histórico útil. Use mensagens claras e descritivas.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length >= 4 && parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m';
        },
        onSuccess: (git) => {
            const result = git.commit('Recupera arquivo Player.cs perdido');
            achievementSystem.addPoints(15, 'Commit realizado');
            return result.message + ' +15 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 13,
        module: 2,
        type: 'tutorial',
        title: 'Recuperar: Ver histórico de commits',
        instruction: `
            <div style="background: rgba(255, 107, 53, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ff6b35; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos verificar o histórico de commits para ver o que foi recuperado. Use <code>git log</code> novamente.
                </p>
            </div>
        `,
        command: 'git log',
        theory: `
            <h4>Navegando o Histórico</h4>
            <p>O git log mostra todos os commits em ordem cronológica reversa (mais recente primeiro).</p>
            <p><strong>Informações úteis:</strong></p>
            <ul>
                <li>Hash do commit (usado para checkout)</li>
                <li>Autor e data</li>
                <li>Mensagem do commit</li>
            </ul>
        `,
        hint: 'Digite git log para ver o histórico',
        instructorTips: 'O histórico de commits é sua linha do tempo. Use-o para entender o que aconteceu.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 2 && parts[0] === 'git' && parts[1] === 'log';
        },
        onSuccess: (git) => {
            const result = git.log();
            return `Histórico atualizado! Total de commits: ${result.commits.length}`;
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 14,
        module: 2,
        type: 'tutorial',
        title: 'Recuperar: Criar arquivo GameManager.cs',
        instruction: `
            <div style="background: rgba(255, 107, 53, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ff6b35; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos recuperar outro arquivo importante: <code>GameManager.cs</code>. 
                    Este arquivo gerencia a lógica principal do jogo.
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Recuperando Arquivos Essenciais</h4>
            <p>Um jogo precisa de componentes principais:</p>
            <ul>
                <li>Player - Representa o jogador</li>
                <li>GameManager - Gerencia a lógica do jogo</li>
                <li>Program - Ponto de entrada</li>
            </ul>
        `,
        hint: 'Crie o arquivo GameManager.cs no editor',
        instructorTips: 'GameManager é responsável por coordenar todas as partes do jogo.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'GameManager.cs',
        codeCheck: (code) => {
            return code && code.includes('class') && code.includes('GameManager');
        },
        onSuccess: (git) => {
            git.createFile('GameManager.cs', `using System;

namespace EstacaoLancamento
{
    public class GameManager
    {
        private Player player;
        private bool jogoRodando;
        
        public GameManager()
        {
            jogoRodando = false;
        }
        
        public void IniciarJogo(string nomeJogador)
        {
            player = new Player(nomeJogador);
            jogoRodando = true;
            Console.WriteLine($"Bem-vindo, {nomeJogador}!");
        }
        
        public void Atualizar()
        {
            if (!jogoRodando) return;
            // Lógica de atualização do jogo
        }
        
        public void FinalizarJogo()
        {
            jogoRodando = false;
            Console.WriteLine($"Pontuação final: {player.Pontuacao}");
        }
    }
}`);
            git.add('GameManager.cs');
            git.commit('Recupera arquivo GameManager.cs');
            achievementSystem.addPoints(15, 'GameManager.cs recuperado');
            return 'Arquivo GameManager.cs recuperado e commitado! +15 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 15,
        module: 2,
        type: 'challenge',
        title: 'Desafio: Recuperar arquivo Program.cs',
        instruction: `
            <div style="background: rgba(255, 170, 0, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ffaa00; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ffaa00; display: block; margin-bottom: 15px;">DESAFIO:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Recupere o arquivo <code>Program.cs</code> que é o ponto de entrada do jogo. 
                    Ele deve instanciar o GameManager e iniciar o jogo.
                </p>
                <p style="color: #999999; margin-top: 10px; font-size: 14px;">
                    Recompensa: 25 pontos | Tempo estimado: 10 minutos
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Program.cs - Ponto de Entrada</h4>
            <p>Em C#, o arquivo Program.cs contém o método Main(), que é onde o programa começa.</p>
            <p><strong>Estrutura esperada:</strong></p>
            <ul>
                <li>Método Main() estático</li>
                <li>Criar instância do GameManager</li>
                <li>Iniciar o jogo</li>
            </ul>
        `,
        hint: 'Crie Program.cs com método Main que usa GameManager',
        instructorTips: 'Program.cs é o ponto de entrada de toda aplicação C#. Sem ele, o jogo não pode ser executado.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        codeCheck: (code) => {
            return code && code.includes('Main') && code.includes('GameManager');
        },
        onSuccess: (git) => {
            git.createFile('Program.cs', `using System;

namespace EstacaoLancamento
{
    class Program
    {
        static void Main(string[] args)
        {
            GameManager gameManager = new GameManager();
            gameManager.IniciarJogo("Jogador");
            
            // Loop principal do jogo
            while (true)
            {
                gameManager.Atualizar();
                
                Console.WriteLine("Pressione qualquer tecla para continuar (ou 'q' para sair)");
                var key = Console.ReadKey();
                if (key.KeyChar == 'q')
                {
                    break;
                }
            }
            
            gameManager.FinalizarJogo();
        }
    }
}`);
            git.add('Program.cs');
            git.commit('Recupera arquivo Program.cs - ponto de entrada');
            achievementSystem.addPoints(25, 'Program.cs recuperado');
            return 'Program.cs recuperado! O jogo agora pode ser executado. +25 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 16,
        module: 2,
        type: 'story',
        title: 'FASE 2 CONCLUÍDA',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">RECUPERAÇÃO COMPLETA!</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    Excelente trabalho! Você recuperou os arquivos principais: Player.cs, GameManager.cs e Program.cs.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>Próxima fase:</strong> Agora vamos organizar tudo usando branches apropriadas.
                </p>
                <p style="color: #00cc66; margin-top: 15px; font-weight: 600;">
                    Conquista desbloqueada: "Arqueólogo do Código" | Total de pontos: ${achievementSystem.points}
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>O que você aprendeu:</h4>
            <ul>
                <li>Como criar arquivos que foram perdidos</li>
                <li>Como usar git add para preparar arquivos</li>
                <li>Como fazer commits com mensagens descritivas</li>
                <li>Como verificar o histórico de commits</li>
            </ul>
            <h4>Preparado para a Fase 3?</h4>
            <p>Na próxima fase, você aprenderá a organizar seu código usando branches e merges.</p>
        `,
        hint: '',
        instructorTips: 'Parabéns! Você recuperou os arquivos essenciais. Agora vamos organizar tudo.',
        validation: () => true,
        onSuccess: () => {
            achievementSystem.unlockAchievement('Arqueólogo do Código', 'Recuperou código perdido', '🏺');
            return 'Fase 2 concluída! Conquista desbloqueada: Arqueólogo do Código';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    
    // ===== FASE 3: REORGANIZAÇÃO (60 min) =====
    {
        id: 17,
        module: 3,
        type: 'story',
        title: 'FASE 3: REORGANIZAÇÃO',
        instruction: `
            <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00d4ff; display: block; margin-bottom: 15px;">NOVA MISSÃO</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    Agora que recuperamos os arquivos, precisamos organizar o repositório. 
                    O código está tudo na branch main, mas deveria estar organizado em branches apropriadas.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>Objetivo:</strong> Criar branches organizadas e mover commits para as branches corretas.
                </p>
                <p style="color: #00d4ff; margin-top: 15px; font-weight: 600;">
                    Duração: 60 minutos | Recompensa total: 75 pontos
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Organização com Branches</h4>
            <p>Branches permitem trabalhar em diferentes funcionalidades sem interferir uma na outra:</p>
            <ul>
                <li><strong>main:</strong> Código estável e pronto para produção</li>
                <li><strong>develop:</strong> Código em desenvolvimento</li>
                <li><strong>feature/:</strong> Branches para novas funcionalidades</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Branches são como linhas paralelas de desenvolvimento. Use-as para organizar seu trabalho.',
        validation: () => true,
        onSuccess: () => {
            return 'Fase 3 iniciada! Vamos organizar o repositório usando branches.';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 18,
        module: 3,
        type: 'tutorial',
        title: 'Organizar: Criar branch develop',
        instruction: `
            <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00d4ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos criar uma branch <code>develop</code> para código em desenvolvimento. 
                    Use <code>git checkout -b develop</code> para criar e mudar para a nova branch.
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git checkout -b develop</code>
            </div>
        `,
        command: 'git checkout -b',
        theory: `
            <h4>Comando: git checkout -b</h4>
            <p>Este comando cria uma nova branch e muda para ela imediatamente.</p>
            <p><strong>Equivalente a:</strong></p>
            <ul>
                <li><code>git branch develop</code> - Cria a branch</li>
                <li><code>git checkout develop</code> - Muda para a branch</li>
            </ul>
        `,
        hint: 'Use git checkout -b develop para criar e mudar para a branch develop',
        instructorTips: 'A branch develop é onde o código em desenvolvimento vive antes de ir para produção.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 4 && parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts[3] === 'develop';
        },
        onSuccess: (git) => {
            const result = git.checkoutBranch('develop', true);
            achievementSystem.addPoints(10, 'Branch develop criada');
            return result.message + ' +10 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 19,
        module: 3,
        type: 'tutorial',
        title: 'Organizar: Criar branch feature/player',
        instruction: `
            <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00d4ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos criar uma branch específica para a funcionalidade do Player. 
                    Use <code>git checkout -b feature/player</code>.
                </p>
            </div>
        `,
        command: 'git checkout -b feature/player',
        theory: `
            <h4>Branches de Feature</h4>
            <p>Branches de feature seguem o padrão <code>feature/nome-da-funcionalidade</code>:</p>
            <ul>
                <li>Organiza funcionalidades separadamente</li>
                <li>Permite trabalhar sem interferir em outras partes</li>
                <li>Facilita code review e merge</li>
            </ul>
        `,
        hint: 'Use git checkout -b feature/player',
        instructorTips: 'Branches de feature permitem desenvolver funcionalidades isoladamente.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 4 && parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts[3] === 'feature/player';
        },
        onSuccess: (git) => {
            const result = git.checkoutBranch('feature/player', true);
            achievementSystem.addPoints(10, 'Branch feature/player criada');
            return result.message + ' +10 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 20,
        module: 3,
        type: 'tutorial',
        title: 'Organizar: Melhorar Player.cs na branch feature',
        instruction: `
            <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00d4ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Agora que estamos na branch feature/player, vamos melhorar o arquivo Player.cs 
                    adicionando mais funcionalidades.
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Trabalhando em Branches</h4>
            <p>Quando você está em uma branch de feature:</p>
            <ul>
                <li>Pode fazer mudanças sem afetar outras branches</li>
                <li>Commits ficam isolados nessa branch</li>
                <li>Pode experimentar sem medo</li>
            </ul>
        `,
        hint: 'Edite Player.cs no editor para adicionar funcionalidades',
        instructorTips: 'Branches permitem experimentar sem quebrar o código principal.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Player.cs',
        codeCheck: (code) => {
            return code && code.includes('class Player') && code.length > 200;
        },
        onSuccess: (git) => {
            const filename = 'Player.cs';
            const currentContent = git.getFile(filename)?.content || '';
            const improvedContent = `using System;

namespace EstacaoLancamento
{
    public class Player
    {
        public string Nome { get; set; }
        public int Pontuacao { get; set; }
        public int Vida { get; set; }
        public int Nivel { get; set; }
        
        public Player(string nome)
        {
            Nome = nome;
            Pontuacao = 0;
            Vida = 100;
            Nivel = 1;
        }
        
        public void AdicionarPontos(int pontos)
        {
            Pontuacao += pontos;
            VerificarNivelUp();
        }
        
        private void VerificarNivelUp()
        {
            if (Pontuacao >= Nivel * 100)
            {
                Nivel++;
                Vida = 100; // Restaura vida ao subir de nível
                Console.WriteLine($"Parabéns! Você subiu para o nível {Nivel}!");
            }
        }
        
        public void ReceberDano(int dano)
        {
            Vida -= dano;
            if (Vida <= 0)
            {
                Vida = 0;
                Console.WriteLine("Game Over!");
            }
        }
    }
}`;
            git.updateFile(filename, improvedContent);
            git.add(filename);
            git.commit('Melhora classe Player com sistema de vida e níveis');
            achievementSystem.addPoints(15, 'Player.cs melhorado');
            return 'Player.cs melhorado na branch feature/player! +15 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 21,
        module: 3,
        type: 'tutorial',
        title: 'Organizar: Fazer merge para develop',
        instruction: `
            <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00d4ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Agora vamos fazer merge da branch feature/player para develop. 
                    Primeiro mude para develop, depois faça o merge.
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git checkout develop</code>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git merge feature/player</code>
            </div>
        `,
        command: 'git merge',
        theory: `
            <h4>Comando: git merge</h4>
            <p>Este comando integra mudanças de uma branch em outra.</p>
            <p><strong>Processo:</strong></p>
            <ul>
                <li>1. Mude para a branch de destino (develop)</li>
                <li>2. Execute git merge nome-da-branch</li>
                <li>3. Git combina as mudanças automaticamente</li>
            </ul>
        `,
        hint: 'Primeiro faça checkout para develop, depois git merge feature/player',
        instructorTips: 'Merge é como unir duas linhas de desenvolvimento em uma só.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 3 && parts[0] === 'git' && parts[1] === 'merge';
        },
        onSuccess: (git) => {
            // Primeiro mudar para develop
            git.checkoutBranch('develop', false);
            // Depois fazer merge
            const result = git.merge('feature/player');
            achievementSystem.addPoints(15, 'Merge realizado');
            return result.message + ' +15 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 22,
        module: 3,
        type: 'tutorial',
        title: 'Organizar: Criar branch feature/gamemanager',
        instruction: `
            <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00d4ff; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos criar outra branch de feature para melhorar o GameManager. 
                    Use <code>git checkout -b feature/gamemanager</code>.
                </p>
            </div>
        `,
        command: 'git checkout -b feature/gamemanager',
        theory: `
            <h4>Criando Múltiplas Features</h4>
            <p>É comum ter várias branches de feature ao mesmo tempo:</p>
            <ul>
                <li>Cada desenvolvedor trabalha em sua feature</li>
                <li>Features são testadas isoladamente</li>
                <li>Depois são integradas em develop</li>
            </ul>
        `,
        hint: 'Use git checkout -b feature/gamemanager',
        instructorTips: 'Múltiplas branches permitem paralelizar o desenvolvimento.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 4 && parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts[3] === 'feature/gamemanager';
        },
        onSuccess: (git) => {
            const result = git.checkoutBranch('feature/gamemanager', true);
            achievementSystem.addPoints(10, 'Branch feature/gamemanager criada');
            return result.message + ' +10 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 23,
        module: 3,
        type: 'challenge',
        title: 'Desafio: Melhorar GameManager.cs',
        instruction: `
            <div style="background: rgba(255, 170, 0, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #ffaa00; margin: 15px 0;">
                <strong style="font-size: 18px; color: #ffaa00; display: block; margin-bottom: 15px;">DESAFIO:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Melhore o GameManager.cs adicionando um sistema de fases/missões e um loop de jogo mais completo.
                </p>
                <p style="color: #999999; margin-top: 10px; font-size: 14px;">
                    Recompensa: 25 pontos | Tempo estimado: 10 minutos
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Melhorando o GameManager</h4>
            <p>Um GameManager completo deve ter:</p>
            <ul>
                <li>Sistema de fases ou níveis</li>
                <li>Loop de jogo estruturado</li>
                <li>Gerenciamento de estado</li>
                <li>Interação com o Player</li>
            </ul>
        `,
        hint: 'Adicione métodos para gerenciar fases e melhorar o loop do jogo',
        instructorTips: 'O GameManager é o coração do jogo. Ele coordena tudo.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'GameManager.cs',
        codeCheck: (code) => {
            return code && code.includes('class GameManager') && 
                   (code.includes('Fase') || code.includes('Nivel') || code.includes('Missao')) &&
                   code.length > 300;
        },
        onSuccess: (git) => {
            const improvedContent = `using System;

namespace EstacaoLancamento
{
    public class GameManager
    {
        private Player player;
        private bool jogoRodando;
        private int faseAtual;
        private int totalFases;
        
        public GameManager()
        {
            jogoRodando = false;
            faseAtual = 1;
            totalFases = 3;
        }
        
        public void IniciarJogo(string nomeJogador)
        {
            player = new Player(nomeJogador);
            jogoRodando = true;
            faseAtual = 1;
            Console.WriteLine($"Bem-vindo, {nomeJogador}!");
            Console.WriteLine($"Você está na Fase {faseAtual} de {totalFases}");
        }
        
        public void Atualizar()
        {
            if (!jogoRodando) return;
            
            Console.WriteLine($"\\n=== FASE {faseAtual} ===");
            Console.WriteLine($"Vida: {player.Vida} | Pontos: {player.Pontuacao} | Nível: {player.Nivel}");
            
            // Simula progresso na fase
            player.AdicionarPontos(10);
            
            if (player.Pontuacao >= faseAtual * 50)
            {
                CompletarFase();
            }
        }
        
        private void CompletarFase()
        {
            Console.WriteLine($"\\nFase {faseAtual} completada!");
            faseAtual++;
            
            if (faseAtual > totalFases)
            {
                Console.WriteLine("\\nPARABÉNS! Você completou todas as fases!");
                FinalizarJogo();
            }
            else
            {
                Console.WriteLine($"Avance para a Fase {faseAtual}");
            }
        }
        
        public void FinalizarJogo()
        {
            jogoRodando = false;
            Console.WriteLine($"\\n=== RESUMO FINAL ===");
            Console.WriteLine($"Pontuação final: {player.Pontuacao}");
            Console.WriteLine($"Nível alcançado: {player.Nivel}");
        }
    }
}`;
            git.updateFile('GameManager.cs', improvedContent);
            git.add('GameManager.cs');
            git.commit('Adiciona sistema de fases ao GameManager');
            achievementSystem.addPoints(25, 'GameManager melhorado');
            return 'GameManager melhorado com sistema de fases! +25 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 24,
        module: 3,
        type: 'story',
        title: 'FASE 3 CONCLUÍDA',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">REORGANIZAÇÃO COMPLETA!</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    Excelente! Você organizou o repositório usando branches apropriadas. 
                    Agora temos uma estrutura profissional.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>Próxima fase:</strong> Vamos preparar o repositório para publicação e configuração remota.
                </p>
                <p style="color: #00cc66; margin-top: 15px; font-weight: 600;">
                    Conquista desbloqueada: "Arquiteto Git" | Total de pontos: ${achievementSystem.points}
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>O que você aprendeu:</h4>
            <ul>
                <li>Como criar e trabalhar com branches</li>
                <li>Como organizar código em branches de feature</li>
                <li>Como fazer merge de branches</li>
                <li>Como manter uma estrutura organizada</li>
            </ul>
            <h4>Preparado para a Fase 4?</h4>
            <p>Na próxima fase, você aprenderá a configurar repositório remoto e preparar para publicação.</p>
        `,
        hint: '',
        instructorTips: 'Parabéns! Você dominou a organização com branches. Agora vamos para a publicação.',
        validation: () => true,
        onSuccess: () => {
            achievementSystem.unlockAchievement('Arquiteto Git', 'Organizou branches e commits', '🏗️');
            return 'Fase 3 concluída! Conquista desbloqueada: Arquiteto Git';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    
    // ===== FASE 4: PREPARAÇÃO PARA LANÇAMENTO (60 min) =====
    {
        id: 25,
        module: 4,
        type: 'story',
        title: 'FASE 4: PREPARAÇÃO PARA LANÇAMENTO',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">ÚLTIMA FASE</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    O repositório está organizado! Agora precisamos prepará-lo para publicação. 
                    Isso inclui criar um README, configurar repositório remoto e preparar documentação.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>Objetivo:</strong> Preparar tudo para que o projeto possa ser publicado e colaborado.
                </p>
                <p style="color: #00cc66; margin-top: 15px; font-weight: 600;">
                    Duração: 60 minutos | Recompensa total: 100 pontos
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Preparação para Publicação</h4>
            <p>Antes de publicar, você precisa:</p>
            <ul>
                <li>Criar documentação (README.md)</li>
                <li>Configurar repositório remoto</li>
                <li>Garantir que tudo está commitado</li>
                <li>Preparar para colaboração</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Preparação é fundamental para publicação profissional.',
        validation: () => true,
        onSuccess: () => {
            return 'Fase 4 iniciada! Vamos preparar tudo para publicação.';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 26,
        module: 4,
        type: 'tutorial',
        title: 'Preparar: Criar README.md',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos criar um arquivo README.md que explica o projeto. 
                    Este é o primeiro arquivo que pessoas veem quando visitam seu repositório.
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>README.md - Documentação do Projeto</h4>
            <p>Um bom README deve conter:</p>
            <ul>
                <li>Nome e descrição do projeto</li>
                <li>Como instalar e executar</li>
                <li>Estrutura do projeto</li>
                <li>Informações sobre contribuição</li>
            </ul>
        `,
        hint: 'Crie README.md no editor com informações sobre o projeto',
        instructorTips: 'README.md é a porta de entrada do seu projeto. Faça-o bem feito!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'README.md',
        codeCheck: (code) => {
            return code && code.length > 100 && 
                   (code.includes('Estação') || code.includes('Lancamento') || code.includes('projeto'));
        },
        onSuccess: (git) => {
            git.createFile('README.md', `# Estação de Lançamento

## 📋 Descrição
Estação de Lançamento é um jogo desenvolvido em C# onde o jogador precisa completar várias fases para lançar sua nave espacial.

## 🚀 Como Executar
1. Certifique-se de ter o .NET SDK instalado
2. Clone o repositório
3. Execute: \`dotnet run\`

## 📁 Estrutura do Projeto
- \`Player.cs\` - Classe que representa o jogador
- \`GameManager.cs\` - Gerencia a lógica principal do jogo
- \`Program.cs\` - Ponto de entrada da aplicação

## 🎮 Funcionalidades
- Sistema de pontuação
- Sistema de níveis
- Sistema de fases
- Gerenciamento de vida do jogador

## 👥 Contribuindo
Este projeto faz parte de um tutorial de Git. Sinta-se livre para contribuir!

## 📝 Licença
Este projeto é educacional e está disponível para fins de aprendizado.`);
            git.add('README.md');
            git.commit('Adiciona README.md com documentação do projeto');
            achievementSystem.addPoints(15, 'README.md criado');
            return 'README.md criado e commitado! +15 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 27,
        module: 4,
        type: 'tutorial',
        title: 'Preparar: Criar arquivo .gitignore',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos criar um arquivo .gitignore para evitar que arquivos desnecessários sejam commitados 
                    (como binários, arquivos de build, etc).
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>.gitignore - Arquivos Ignorados</h4>
            <p>O .gitignore lista arquivos que o Git deve ignorar:</p>
            <ul>
                <li>Arquivos compilados (bin/, obj/)</li>
                <li>Arquivos de configuração local</li>
                <li>Arquivos temporários</li>
                <li>Dependências (node_modules/, packages/)</li>
            </ul>
        `,
        hint: 'Crie .gitignore no editor com padrões para arquivos C#',
        instructorTips: '.gitignore mantém seu repositório limpo, sem arquivos desnecessários.',
        showFiles: true,
        showEditor: true,
        requiredFile: '.gitignore',
        codeCheck: (code) => {
            return code && (code.includes('bin') || code.includes('obj') || code.includes('*.dll'));
        },
        onSuccess: (git) => {
            git.createFile('.gitignore', `# Build results
bin/
obj/
*.dll
*.exe
*.pdb

# Visual Studio
.vs/
*.suo
*.user

# Rider
.idea/

# VS Code
.vscode/

# OS
.DS_Store
Thumbs.db

# Logs
*.log`);
            git.add('.gitignore');
            git.commit('Adiciona .gitignore para projeto C#');
            achievementSystem.addPoints(10, '.gitignore criado');
            return '.gitignore criado! +10 pontos';
        },
        estimatedTime: 8
    },
    {
        id: 28,
        module: 4,
        type: 'tutorial',
        title: 'Preparar: Fazer merge final para main',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos fazer merge de develop para main, preparando o código estável para produção. 
                    Primeiro mude para main, depois faça merge de develop.
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git checkout main</code>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git merge develop</code>
            </div>
        `,
        command: 'git merge develop',
        theory: `
            <h4>Merge para Produção</h4>
            <p>Quando o código em develop está estável:</p>
            <ul>
                <li>Fazemos merge para main</li>
                <li>Main contém código pronto para produção</li>
                <li>Develop continua recebendo novas features</li>
            </ul>
        `,
        hint: 'Primeiro checkout main, depois git merge develop',
        instructorTips: 'main é onde vive o código de produção. Só deve receber código testado e estável.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 3 && parts[0] === 'git' && parts[1] === 'merge' && parts[2] === 'develop';
        },
        onSuccess: (git) => {
            git.checkoutBranch('main', false);
            const result = git.merge('develop');
            achievementSystem.addPoints(15, 'Merge para main realizado');
            return result.message + ' +15 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 29,
        module: 4,
        type: 'tutorial',
        title: 'Preparar: Criar branch release/v1.0.0',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos criar uma branch de release para a versão 1.0.0. 
                    Branches de release são usadas para preparar versões específicas para publicação.
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git checkout -b release/v1.0.0</code>
            </div>
        `,
        command: 'git checkout -b release/v1.0.0',
        theory: `
            <h4>Branches de Release</h4>
            <p>Branches de release seguem o padrão <code>release/versão</code>:</p>
            <ul>
                <li>Usadas para preparar versões específicas</li>
                <li>Permitem fazer ajustes finais antes do lançamento</li>
                <li>Quando prontas, são mergeadas em main</li>
            </ul>
        `,
        hint: 'Use git checkout -b release/v1.0.0',
        instructorTips: 'Branches de release ajudam a organizar versões do software.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length === 4 && parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts[3] === 'release/v1.0.0';
        },
        onSuccess: (git) => {
            const result = git.checkoutBranch('release/v1.0.0', true);
            achievementSystem.addPoints(10, 'Branch release criada');
            return result.message + ' +10 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 30,
        module: 4,
        type: 'tutorial',
        title: 'Preparar: Criar CHANGELOG.md',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos criar um CHANGELOG.md documentando as mudanças da versão 1.0.0. 
                    Este arquivo ajuda usuários a entender o que mudou em cada versão.
                </p>
            </div>
        `,
        command: null,
        theory: `
            <h4>CHANGELOG.md</h4>
            <p>Um changelog documenta:</p>
            <ul>
                <li>Mudanças em cada versão</li>
                <li>Funcionalidades adicionadas</li>
                <li>Bugs corrigidos</li>
                <li>Mudanças que quebram compatibilidade</li>
            </ul>
        `,
        hint: 'Crie CHANGELOG.md documentando a versão 1.0.0',
        instructorTips: 'CHANGELOG ajuda usuários a entender evolução do projeto.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'CHANGELOG.md',
        codeCheck: (code) => {
            return code && code.includes('1.0.0') && code.length > 100;
        },
        onSuccess: (git) => {
            git.createFile('CHANGELOG.md', `# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.0.0] - 2024-01-XX

### Adicionado
- Sistema de Player com pontuação, vida e níveis
- GameManager com sistema de fases
- Sistema de fases com 3 níveis
- Documentação completa (README.md)
- Estrutura de branches organizada (main, develop, feature/*)

### Mudanças
- Reorganização completa do código em branches apropriadas
- Melhorias no sistema de Player
- Sistema de fases implementado no GameManager

### Corrigido
- Arquivos perdidos recuperados
- Estrutura do repositório organizada

### Notas
Esta é a primeira versão estável do projeto Estação de Lançamento.`);
            git.add('CHANGELOG.md');
            git.commit('Adiciona CHANGELOG.md para versão 1.0.0');
            achievementSystem.addPoints(15, 'CHANGELOG.md criado');
            return 'CHANGELOG.md criado! +15 pontos';
        },
        estimatedTime: 10
    },
    {
        id: 31,
        module: 4,
        type: 'tutorial',
        title: 'Preparar: Simular configuração de repositório remoto',
        instruction: `
            <div style="background: rgba(0, 204, 102, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #00cc66; margin: 15px 0;">
                <strong style="font-size: 18px; color: #00cc66; display: block; margin-bottom: 15px;">Sua Tarefa:</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    Vamos simular a configuração de um repositório remoto. 
                    Use <code>git clone</code> para simular a conexão com um repositório remoto 
                    (como GitHub ou GitLab).
                </p>
                <code style="background: rgba(0, 0, 0, 0.5); color: #00cc66; padding: 12px 20px; border-radius: 6px; display: block; font-size: 14px; font-family: monospace; margin: 10px 0;">git clone https://github.com/usuario/estacao-lancamento.git</code>
            </div>
        `,
        command: 'git clone',
        theory: `
            <h4>Comando: git clone</h4>
            <p>Este comando copia um repositório remoto para sua máquina local.</p>
            <p><strong>O que acontece:</strong></p>
            <ul>
                <li>Baixa todos os arquivos</li>
                <li>Baixa todo o histórico</li>
                <li>Configura o remote origin automaticamente</li>
            </ul>
        `,
        hint: 'Use git clone com uma URL de repositório',
        instructorTips: 'git clone é o primeiro passo para trabalhar com repositórios remotos.',
        validation: (cmd) => {
            const parts = cmd.trim().split(/\s+/);
            return parts.length >= 3 && parts[0] === 'git' && parts[1] === 'clone';
        },
        onSuccess: (git) => {
            const result = git.clone('https://github.com/usuario/estacao-lancamento.git');
            achievementSystem.addPoints(15, 'Repositório remoto configurado');
            return result.message + ' +15 pontos | Repositório pronto para push!';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 32,
        module: 4,
        type: 'story',
        title: 'TODAS AS FASES CONCLUÍDAS!',
        instruction: `
            <div style="background: rgba(0, 212, 255, 0.15); padding: 24px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 15px 0;">
                <strong style="font-size: 20px; color: #00d4ff; display: block; margin-bottom: 15px;">PARABÉNS! MISSÃO COMPLETA!</strong>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px; line-height: 1.7;">
                    Você completou todas as 4 fases da missão! O repositório está completamente consertado, 
                    organizado e pronto para publicação.
                </p>
                <p style="color: #ffffff; margin: 10px 0; font-size: 16px;">
                    <strong>O que você conquistou:</strong>
                </p>
                <ul style="color: #ffffff; margin: 10px 0; padding-left: 20px; line-height: 1.8;">
                    <li>Investigou e entendeu o estado do repositório</li>
                    <li>Recuperou arquivos perdidos</li>
                    <li>Organizou código em branches apropriadas</li>
                    <li>Preparou tudo para publicação</li>
                </ul>
                <p style="color: #00d4ff; margin-top: 20px; font-weight: 600; font-size: 18px;">
                    Conquista desbloqueada: "Mestre Git" | Total de pontos: ${achievementSystem.points}
                </p>
                <div style="background: rgba(0, 212, 255, 0.2); padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <h4 style="color: #00d4ff; margin-bottom: 12px;">DESAFIO FINAL DESBLOQUEADO!</h4>
                    <p style="color: #ffffff; margin: 8px 0; line-height: 1.7;">
                        Agora você está pronto para o <strong>Desafio Final: Projeto Estação de Lançamento</strong>!
                    </p>
                    <p style="color: #ffffff; margin: 8px 0; line-height: 1.7;">
                        Use tudo que você aprendeu para criar seu próprio projeto do zero e publicá-lo em uma plataforma real.
                    </p>
                    <div style="background: rgba(0, 204, 102, 0.2); padding: 15px; border-radius: 6px; margin-top: 15px; border: 2px dashed #00cc66;">
                        <p style="color: #00cc66; font-weight: 600; margin-bottom: 8px;">🎮 PUBLICAR NO SITE DA UNIDADE:</p>
                        <p style="color: #ffffff; margin: 4px 0; font-size: 14px;">
                            Após completar o desafio, publique seu jogo no site da unidade para demonstrar que você concluiu a missão!
                        </p>
                        <p style="color: #ffffff; margin: 4px 0; font-size: 14px; font-style: italic;">
                            💡 Dica: Use o link do seu jogo publicado como prova de conclusão do desafio.
                        </p>
                    </div>
                    <p style="color: #00d4ff; margin-top: 12px; font-weight: 600;">
                        Duração: 2 horas | Recompensa: 200 pontos | Conquista: "Desenvolvedor Publicado"
                    </p>
                </div>
            </div>
        `,
        command: null,
        theory: `
            <h4>Resumo do que você aprendeu:</h4>
            <ul>
                <li>Investigação com git status, log e branch</li>
                <li>Recuperação de arquivos usando Git</li>
                <li>Organização com branches e merges</li>
                <li>Preparação para publicação</li>
                <li>Configuração de repositório remoto</li>
            </ul>
            <h4>Próximos Passos</h4>
            <p>Você está pronto para:</p>
            <ul>
                <li>Criar seu próprio projeto</li>
                <li>Gerenciar um repositório Git completo</li>
                <li>Colaborar em projetos</li>
                <li>Publicar jogos em plataformas</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Parabéns! Você completou toda a jornada de aprendizado Git. Agora é hora de criar seu próprio projeto!',
        validation: () => true,
        onSuccess: () => {
            achievementSystem.unlockAchievement('Mestre Git', 'Preparou repositório para publicação', '👑');
            achievementSystem.addPoints(100, 'Todas as fases completadas');
            return 'Todas as fases concluídas! Conquista desbloqueada: Mestre Git | +100 pontos';
        },
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    }
];

// Função helper para encontrar o módulo atual de um passo
function getCurrentModule(stepId) {
    return tutorialModules.find(module => module.steps && module.steps.includes(stepId));
}

// DESAFIO FINAL: Projeto Estação de Lançamento
const finalChallenge = {
    id: 'final',
    title: 'DESAFIO FINAL: PROJETO ESTAÇÃO DE LANÇAMENTO',
    duration: 120, // 2 horas adicionais após as 4h
    description: `
        <div style="background: rgba(0, 212, 255, 0.15); padding: 24px; border-radius: 8px; border-left: 4px solid #00d4ff; margin: 20px 0;">
            <h3 style="color: #00d4ff; margin-bottom: 16px;">MISSÃO FINAL</h3>
            <p style="margin-bottom: 12px; line-height: 1.8;">
                Você consertou o repositório! Agora é hora de criar seu próprio projeto do zero.
            </p>
            <p style="margin-bottom: 12px; line-height: 1.8;">
                <strong>Objetivo:</strong> Pegar um protótipo básico de jogo (seu "Hello World" evoluído) 
                e conduzi-lo por todo o pipeline de publicação até uma plataforma real.
            </p>
            <h4 style="color: #00d4ff; margin-top: 20px; margin-bottom: 12px;">ENTREGÁVEIS:</h4>
            <ol style="margin-left: 20px; line-height: 2;">
                <li><strong>Mini-GDD:</strong> Documento de Game Design simplificado</li>
                <li><strong>Repositório Git funcional:</strong> Com branches organizadas e commits significativos</li>
                <li><strong>Jogo publicado:</strong> No site da unidade (<strong style="color: #00ff88;">senaigamehub.vercel.app</strong>) ou itch.io</li>
            </ol>
            <div style="background: rgba(0, 204, 102, 0.15); padding: 16px; border-radius: 8px; border-left: 4px solid #00cc66; margin-top: 20px;">
                <p style="color: #ffffff; margin: 0; font-size: 15px; line-height: 1.6;">
                    <strong style="color: #00cc66;">📌 IMPORTANTE:</strong> Para demonstrar que você concluiu o desafio, publique seu jogo no site da unidade 
                    (<strong>senaigamehub.vercel.app</strong>) e compartilhe o link como prova de conclusão. 
                    Esta é a forma oficial de demonstrar que você dominou Git e publicou seu primeiro jogo!
                </p>
            </div>
            <p style="color: #00d4ff; font-weight: 600; margin-top: 20px;">
                ⏱️ Tempo: 2 horas | 💰 Recompensa: 200 pontos | 🏆 Conquista: "Desenvolvedor Publicado"
            </p>
            <div id="easterEggTrigger" style="cursor: pointer; text-align: center; margin-top: 15px; opacity: 0.3; transition: opacity 0.3s;">
                <p style="color: #666; font-size: 11px; margin: 0;">💡 Clique aqui 7 vezes para descobrir algo especial...</p>
            </div>
        </div>
    `,
    deliverables: [
        {
            name: 'Mini-GDD',
            description: 'Documento de Game Design simplificado explicando conceito, mecânicas e objetivo do jogo',
            file: 'MINI_GDD.md',
            points: 50
        },
        {
            name: 'Repositório Git Organizado',
            description: 'Repositório com pelo menos 3 branches (main, develop, feature) e 10+ commits bem documentados',
            checklist: [
                'Branch main criada',
                'Branch develop criada',
                'Pelo menos uma branch de feature',
                '10+ commits com mensagens descritivas',
                'README.md com instruções'
            ],
            points: 75
        },
        {
            name: 'Jogo Publicado',
            description: 'Jogo publicado no site da unidade (senaigamehub.vercel.app) ou itch.io',
            checklist: [
                'Build do jogo criado',
                'Arquivos enviados para plataforma',
                'Página do jogo configurada no site da unidade',
                'Screenshots/vídeo adicionados',
                'Link de acesso funcional',
                'Jogo disponível para demonstração'
            ],
            points: 75,
            easterEgg: '🎉 Parabéns! Você descobriu o Easter Egg! Publique seu jogo e compartilhe o link como prova de que você é um verdadeiro desenvolvedor! 🚀'
        }
    ],
    steps: [
        'Criar estrutura do projeto',
        'Escrever Mini-GDD',
        'Inicializar repositório Git',
        'Criar branches principais',
        'Desenvolver funcionalidades em branches separadas',
        'Fazer commits regulares',
        'Fazer merge para develop',
        'Preparar build final',
        'Publicar em plataforma',
        'Documentar processo'
    ]
};

// Export para uso global
window.tutorialSteps = tutorialSteps;
window.tutorialModules = tutorialModules;
window.getCurrentModule = getCurrentModule;
window.achievementSystem = achievementSystem;
window.gameNarrative = gameNarrative;
window.finalChallenge = finalChallenge;
