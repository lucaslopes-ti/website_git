// Tutorial Data - Controle de Versões para Jogos Digitais
// Focado apenas em Git para controle de versão

const tutorialModules = [
    {
        id: 1,
        name: 'Módulo 1: Introdução ao Controle de Versão com Git',
        description: 'Entender Git, configurar, inicializar repositório, git add/commit, git log, git checkout, branches e merge',
        duration: 120, // 2 horas
        steps: [1, 2, 3, 4, 5, 6, 7, 8] // 8 passos
    },
    {
        id: 2,
        name: 'Módulo 2: Fundamentos Básicos do C#',
        description: 'Configurar ambiente, Hello World, variáveis, operadores, estruturas de decisão/repetição, métodos e strings',
        duration: 180, // 3 horas
        steps: [9, 10, 11, 12, 13, 14, 15, 16] // 8 passos
    },
    {
        id: 3,
        name: 'Módulo 3: Simulação de Projeto Integrado: Versionando Projeto C# com Git',
        description: 'Criar projeto C#, repositório Git, commits, branches, merge com conflitos, GitHub/GitLab, pull e push',
        duration: 180, // 3 horas
        steps: [17, 18, 19, 20, 21, 22, 23, 24] // 8 passos
    },
    {
        id: 4,
        name: 'Módulo 4: Conceitos de Planejamento, Integração e Publicação de Jogos Digitais',
        description: 'GDD simplificado, planejamento com Git/C#, testes básicos, documentação de publicações, interação com clientes',
        duration: 150, // 2.5 horas
        steps: [25, 26, 27, 28, 29] // 5 passos
    }
];

const tutorialSteps = [
    // ===== MÓDULO 1: Introdução ao Controle de Versão com Git =====
    // Passo 1: Entender o que é Git e sua importância no desenvolvimento de jogos digitais
    {
        id: 1,
        module: 1,
        type: 'theory',
        title: 'Entender Git e sua Importância no Desenvolvimento de Jogos',
        instruction: 'Entenda o que é Git e por que é essencial no desenvolvimento de jogos digitais.',
        command: null,
        theory: `
            <h4>O que é Git?</h4>
            <p>Git é um sistema de controle de versão distribuído criado por Linus Torvalds em 2005. É usado por milhões de desenvolvedores ao redor do mundo.</p>
            
            <h4>Por que Git é importante no desenvolvimento de jogos?</h4>
            <ul>
                <li><strong>Controle de Versão:</strong> Rastreia todas as mudanças no código, permitindo voltar a versões anteriores</li>
                <li><strong>Trabalho em Equipe:</strong> Múltiplos desenvolvedores podem trabalhar simultaneamente sem conflitos</li>
                <li><strong>Experimentos Seguros:</strong> Teste novas funcionalidades sem quebrar o código que já funciona</li>
                <li><strong>Histórico Completo:</strong> Veja exatamente quando e por que cada mudança foi feita</li>
                <li><strong>Backup:</strong> Seu código está sempre seguro, mesmo se algo der errado</li>
            </ul>
            
            <h4>Git na Indústria de Jogos:</h4>
            <p>Empresas como Unity, Epic Games, e grandes estúdios usam Git para gerenciar projetos de milhões de linhas de código.</p>
            
            <h4>O que você vai aprender:</h4>
            <ul>
                <li>Como configurar e usar Git</li>
                <li>Como versionar código C#</li>
                <li>Como trabalhar com branches e merges</li>
                <li>Como colaborar em equipe</li>
                <li>Como usar Git em projetos de jogos</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Git é a ferramenta padrão da indústria. Dominar Git é essencial para qualquer desenvolvedor de jogos profissional.',
        validation: () => true,
        onSuccess: () => 'Agora vamos configurar o Git!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 10
    },
    // Passo 2: Instalar e configurar o Git (configurar nome e e-mail)
    {
        id: 2,
        module: 1,
        type: 'tutorial',
        title: 'Configurar Git (Nome e E-mail)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Configure seu nome e e-mail no Git usando os comandos abaixo:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: block; font-size: 16px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git config --global user.name "Seu Nome"</code>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: block; font-size: 16px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git config --global user.email "seu@email.com"</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">💡 <strong>Importante:</strong> Use seu nome real e e-mail profissional. Essas informações aparecerão nos commits.</p>
            </div>
        `,
        command: 'git config --global',
        theory: `
            <h4>Configuração Inicial do Git</h4>
            <p>Antes de usar Git, você precisa configurar sua identidade:</p>
            <ul>
                <li><code>git config --global user.name "Seu Nome"</code> - Define seu nome</li>
                <li><code>git config --global user.email "seu@email.com"</code> - Define seu e-mail</li>
            </ul>
            <p><strong>O que significa --global?</strong> Essas configurações serão aplicadas a todos os seus repositórios Git.</p>
            <h4>Por que isso é importante?</h4>
            <p>Sua identidade (nome e e-mail) aparecerá em todos os commits que você fizer. Isso é essencial para:</p>
            <ul>
                <li>Rastrear quem fez cada mudança</li>
                <li>Trabalhar em equipe</li>
                <li>Manter histórico profissional</li>
            </ul>
        `,
        hint: 'Digite: git config --global user.name "Seu Nome" (substitua por seu nome real)',
        instructorTips: 'Essa configuração é feita apenas uma vez. O Git guarda essas informações para todos os seus projetos futuros.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'config' && parts[2] === '--global' && 
                   (parts[3] === 'user.name' || parts[3] === 'user.email');
        },
        onSuccess: () => 'Git configurado com sucesso! Sua identidade está definida.',
        showFiles: false,
        showEditor: false,
        estimatedTime: 5
    },
    // Passo 3: Inicializar um repositório local com git init
    {
        id: 3,
        module: 1,
        type: 'tutorial',
        title: 'Inicializar Repositório Git',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Digite o comando abaixo no terminal e pressione <strong>Enter</strong>:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git init</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">Este comando cria um novo repositório Git na pasta atual.</p>
                <p style="margin-top: 10px; color: #c9d1d9; font-size: 13px;">💡 <strong>Depois de executar:</strong> Um arquivo Player.cs será criado e você verá instruções para continuar.</p>
            </div>
        `,
        command: 'git init',
        theory: `
            <h4>Comando git init</h4>
            <p>O comando <code>git init</code> é o primeiro passo para começar a usar Git em qualquer projeto:</p>
            <ul>
                <li>Cria uma pasta oculta <code>.git</code> que armazena todo o histórico</li>
                <li>Prepara a pasta atual para controle de versão</li>
                <li>É necessário executar apenas uma vez por projeto</li>
            </ul>
            <p><strong>Como usar:</strong> Digite <code>git init</code> no terminal abaixo e pressione Enter.</p>
        `,
        hint: 'Digite exatamente: git init (sem aspas)',
        instructorTips: 'Após executar git init, o Git começará a rastrear todas as mudanças nesta pasta. Você verá uma mensagem de sucesso confirmando que o repositório foi inicializado.',
        validation: (command) => command.trim() === 'git init',
        onSuccess: (git) => {
            const result = git.init();
            // Criar arquivo Player.cs inicial
            git.createFile('Player.cs', `using System;

public class Player
{
    public string Name { get; set; }
    public int Health { get; set; }
    
    public Player(string name)
    {
        Name = name;
        Health = 100;
    }
    
    public void TakeDamage(int damage)
    {
        Health -= damage;
        if (Health < 0) Health = 0;
    }
}`);
            return result.success ? 'Repositório Git inicializado com sucesso! Um arquivo Player.cs foi criado para você praticar.' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 3
    },
    // Passo 4: Adicionar arquivos ao repositório (git add) e realizar commit (git commit)
    {
        id: 4,
        module: 1,
        type: 'tutorial',
        title: 'Adicionar Arquivo ao Git (git add)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Adicione o arquivo Player.cs ao Git usando:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git add Player.cs</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">Este comando move o arquivo para a staging area (área de preparação).</p>
            </div>
        `,
        command: 'git add',
        theory: `
            <h4>Comando git add</h4>
            <p>O comando <code>git add</code> move arquivos para a staging area:</p>
            <ul>
                <li><code>git add arquivo.cs</code> - Adiciona um arquivo específico</li>
                <li><code>git add .</code> - Adiciona todos os arquivos modificados e novos</li>
                <li><code>git add pasta/</code> - Adiciona todos os arquivos de uma pasta</li>
            </ul>
            <p><strong>O que é staging area?</strong> É uma área intermediária onde você prepara arquivos antes de fazer commit.</p>
            <h4>Fluxo:</h4>
            <pre><code>Arquivo modificado → git add → Staging Area → git commit → Repositório</code></pre>
        `,
        hint: 'git add Player.cs adiciona o arquivo Player.cs ao staging area.',
        instructorTips: 'A staging area permite escolher quais mudanças serão commitadas. Você pode adicionar apenas alguns arquivos por vez.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'add' && parts.length >= 3;
        },
        onSuccess: (git, command) => {
            const parts = command.trim().split(' ');
            const fileName = parts.length >= 3 ? parts[2] : 'Player.cs';
            const result = git.add(fileName);
            return result.success ? `${result.message} Arquivo pronto para commit!` : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 3
    },
    {
        id: 5,
        module: 1,
        type: 'tutorial',
        title: 'Fazer Primeiro Commit (git commit)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Faça seu primeiro commit usando:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git commit -m "Inicializa projeto de jogo"</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">💡 <strong>Dica:</strong> Use uma mensagem descritiva que explique o que o commit faz.</p>
            </div>
        `,
        command: 'git commit -m',
        theory: `
            <h4>Comando git commit</h4>
            <p>O comando <code>git commit</code> salva um snapshot do estado atual dos arquivos no repositório.</p>
            <p><code>git commit -m "mensagem"</code> permite adicionar a mensagem diretamente na linha de comando.</p>
            <h4>Boas Práticas para Mensagens de Commit:</h4>
            <ul>
                <li>Seja descritivo e claro</li>
                <li>Use imperativo: "Adiciona sistema de inventário" (não "Adicionado sistema...")</li>
                <li>Primeira linha: resumo breve (até 50 caracteres)</li>
                <li>Linhas seguintes: explicação detalhada se necessário</li>
            </ul>
            <h4>Exemplos de Boas Mensagens:</h4>
            <ul>
                <li>"Inicializa projeto de jogo"</li>
                <li>"Adiciona classe Player com sistema de vida"</li>
                <li>"Corrige bug de colisão"</li>
            </ul>
        `,
        hint: 'git commit -m "mensagem" salva as mudanças no repositório com uma mensagem descritiva.',
        instructorTips: 'Mensagens de commit claras são essenciais para trabalhar em equipe. Facilita encontrar quando uma funcionalidade foi adicionada ou um bug foi corrigido.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m' && parts.length >= 4;
        },
        onSuccess: (git, command) => {
            // Extrair mensagem do commit
            const parts = command.trim().split(' ');
            let message = '';
            if (parts.length >= 4) {
                // Pegar tudo após -m (pode ter espaços na mensagem)
                message = parts.slice(3).join(' ').replace(/"/g, '');
            } else {
                message = 'Inicializa projeto de jogo';
            }
            const result = git.commit(message);
            return result.success ? `Commit realizado! "${message}" foi salvo no repositório.` : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },
    // Passo 5: Visualizar histórico de commits (git log)
    {
        id: 6,
        module: 1,
        type: 'tutorial',
        title: 'Visualizar Histórico de Commits (git log)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Visualize o histórico de commits usando:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git log</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">Ou use <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 4px 8px; border-radius: 4px;">git log --oneline</code> para versão compacta.</p>
            </div>
        `,
        command: 'git log',
        theory: `
            <h4>Comando git log</h4>
            <p>O comando <code>git log</code> mostra o histórico completo de commits:</p>
            <ul>
                <li><code>git log</code> - Mostra histórico completo com detalhes (autor, data, mensagem)</li>
                <li><code>git log --oneline</code> - Versão compacta, um commit por linha</li>
                <li><code>git log --graph</code> - Mostra visualização gráfica das branches</li>
                <li><code>git log -n 5</code> - Mostra apenas os últimos 5 commits</li>
            </ul>
            <h4>Informações Mostradas:</h4>
            <ul>
                <li><strong>Hash:</strong> ID único do commit</li>
                <li><strong>Autor:</strong> Quem fez o commit</li>
                <li><strong>Data:</strong> Quando foi feito</li>
                <li><strong>Mensagem:</strong> O que foi feito</li>
            </ul>
        `,
        hint: 'git log mostra todos os commits do repositório em ordem cronológica reversa (mais recentes primeiro).',
        instructorTips: 'Use git log --oneline para uma visão rápida. O histórico mostra quando cada funcionalidade foi adicionada, útil para entender a evolução do projeto.',
        validation: (command) => {
            const cmd = command.trim();
            return cmd === 'git log' || cmd === 'git log --oneline' || cmd.startsWith('git log ');
        },
        onSuccess: (git) => {
            const state = git.getState();
            return `Histórico exibido: ${state.commits.length} commit(s) encontrado(s).`;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 3
    },
    // Passo 3: Inicializar um repositório local com git init
    {
        id: 3,
        module: 1,
        type: 'tutorial',
        title: 'Inicializar Repositório Git',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Digite o comando abaixo no terminal e pressione <strong>Enter</strong>:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git init</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">Este comando cria um novo repositório Git na pasta atual.</p>
                <p style="margin-top: 10px; color: #c9d1d9; font-size: 13px;">💡 <strong>Depois de executar:</strong> Um arquivo Player.cs será criado e você verá instruções para continuar.</p>
            </div>
        `,
        command: 'git init',
        theory: `
            <h4>Comando git init</h4>
            <p>O comando <code>git init</code> é o primeiro passo para começar a usar Git em qualquer projeto:</p>
            <ul>
                <li>Cria uma pasta oculta <code>.git</code> que armazena todo o histórico</li>
                <li>Prepara a pasta atual para controle de versão</li>
                <li>É necessário executar apenas uma vez por projeto</li>
            </ul>
            <p><strong>Como usar:</strong> Digite <code>git init</code> no terminal abaixo e pressione Enter.</p>
        `,
        hint: 'Digite exatamente: git init (sem aspas)',
        instructorTips: 'Após executar git init, o Git começará a rastrear todas as mudanças nesta pasta. Você verá uma mensagem de sucesso confirmando que o repositório foi inicializado.',
        validation: (command) => command.trim() === 'git init',
        onSuccess: (git) => {
            const result = git.init();
            // Criar arquivo Player.cs inicial
            git.createFile('Player.cs', `using System;

public class Player
{
    public string Name { get; set; }
    public int Health { get; set; }
    
    public Player(string name)
    {
        Name = name;
        Health = 100;
    }
    
    public void TakeDamage(int damage)
    {
        Health -= damage;
        if (Health < 0) Health = 0;
    }
}`);
            return result.success ? 'Repositório Git inicializado com sucesso! Um arquivo Player.cs foi criado para você praticar.' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 3
    },
    // Passo 7: Criar e mudar entre branches (git branch e git checkout -b)
    {
        id: 8,
        module: 1,
        type: 'tutorial',
        title: 'Criar e Mudar entre Branches',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie uma nova branch usando:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git checkout -b feature/nova-funcionalidade</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">Este comando cria uma nova branch e muda para ela automaticamente.</p>
            </div>
        `,
        command: 'git checkout -b',
        theory: `
            <h4>Comandos de Branch:</h4>
            <ul>
                <li><code>git branch</code> - Lista todas as branches</li>
                <li><code>git branch nomeBranch</code> - Cria nova branch (mas não muda para ela)</li>
                <li><code>git checkout nomeBranch</code> - Muda para outra branch</li>
                <li><code>git checkout -b nomeBranch</code> - Cria e muda para nova branch (atalho)</li>
            </ul>
            <h4>O que são Branches?</h4>
            <p>Uma branch é uma linha independente de desenvolvimento. Permite trabalhar em funcionalidades isoladas sem afetar o código principal.</p>
            <h4>Por que usar Branches?</h4>
            <ul>
                <li>Trabalhar em novas funcionalidades sem risco</li>
                <li>Experimentar sem quebrar o código existente</li>
                <li>Trabalhar em equipe sem conflitos</li>
                <li>Manter versões diferentes do projeto</li>
            </ul>
        `,
        hint: 'git checkout -b cria uma nova branch e muda para ela automaticamente.',
        instructorTips: 'Use nomes descritivos para branches. "feature/inventario" é melhor que "nova-branch" ou "teste".',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts.length === 4;
        },
        onSuccess: (git, command) => {
            const parts = command.trim().split(' ');
            const branchName = parts[3] || 'feature/nova-funcionalidade';
            const result = git.checkoutBranch(branchName, true);
            return result.success ? `Branch '${branchName}' criada! Você está trabalhando nela agora.` : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },
    // Passo 6: Praticar voltar a um estado anterior com git checkout
    {
        id: 7,
        module: 1,
        type: 'tutorial',
        title: 'Voltar a um Estado Anterior (git checkout)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Use <code>git log</code> para ver o histórico e depois volte para um commit anterior:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git checkout &lt;hash-do-commit&gt;</code>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">💡 <strong>Dica:</strong> Use os primeiros 7 caracteres do hash do commit.</p>
            </div>
        `,
        command: 'git checkout',
        theory: `
            <h4>Comando git checkout</h4>
            <p>O comando <code>git checkout</code> permite navegar pelo histórico:</p>
            <ul>
                <li><code>git checkout &lt;hash&gt;</code> - Volta para um commit específico</li>
                <li><code>git checkout main</code> - Volta para a branch main</li>
                <li><code>git checkout nomeBranch</code> - Muda para outra branch</li>
            </ul>
            <h4>Estados Detached HEAD:</h4>
            <p>Quando você faz checkout em um commit específico, você entra em "detached HEAD". Isso significa que você está visualizando o código como estava naquele momento.</p>
            <p><strong>Para voltar:</strong> <code>git checkout main</code></p>
            <h4>Casos de Uso:</h4>
            <ul>
                <li>Ver código de uma versão anterior</li>
                <li>Comparar versões diferentes</li>
                <li>Recuperar código que foi perdido</li>
                <li>Entender o que mudou entre versões</li>
            </ul>
        `,
        hint: 'Use git log para ver os hashes dos commits. Depois use git checkout com o hash.',
        instructorTips: 'Navegar pelo histórico é muito útil para entender a evolução do projeto e recuperar código que funcionava antes.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'checkout' && parts.length >= 3;
        },
        onSuccess: (git, command) => {
            const parts = command.trim().split(' ');
            const target = parts[2];
            if (target === 'main') {
                git.checkoutBranch('main');
                return 'Voltou para branch main.';
            } else {
                // Simular checkout de commit (usando hash ou branch)
                return `Navegando para ${target}. Use 'git checkout main' para voltar.`;
            }
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },
    // Passo 8: Fazer merge de branches e resolver conflitos simples
    {
        id: 8,
        module: 1,
        type: 'tutorial',
        title: 'Fazer Merge de Branches e Resolver Conflitos',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Primeiro volte para main: <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 4px 8px; border-radius: 4px;">git checkout main</code></p>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Depois faça merge: <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 4px 8px; border-radius: 4px;">git merge feature/nova-funcionalidade</code></p>
                <p style="margin-top: 15px; color: #c9d1d9; font-size: 14px;">💡 <strong>Se houver conflitos:</strong> Resolva-os no editor e depois faça commit.</p>
            </div>
        `,
        command: 'git merge',
        theory: `
            <h4>Comando git merge</h4>
            <p>O comando <code>git merge</code> combina mudanças de uma branch em outra.</p>
            <h4>Processo de Merge:</h4>
            <ol>
                <li>Volte para a branch principal: <code>git checkout main</code></li>
                <li>Faça merge: <code>git merge nomeBranch</code></li>
                <li>Se houver conflitos, resolva-os</li>
                <li>Complete o merge com commit</li>
            </ol>
            <h4>Resolvendo Conflitos:</h4>
            <p>Conflitos acontecem quando o mesmo arquivo foi modificado de formas diferentes em ambas as branches.</p>
            <p>Git marca os conflitos com:</p>
            <pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
// Código da branch atual
=======
// Código da branch sendo mergeada
&gt;&gt;&gt;&gt;&gt;&gt;&gt; nomeBranch</code></pre>
            <p>Edite o arquivo, remova os marcadores e escolha qual código manter ou combine ambos.</p>
        `,
        hint: 'Primeiro git checkout main, depois git merge nomeBranch.',
        instructorTips: 'Sempre teste a funcionalidade na branch antes de fazer merge. Conflitos são normais em trabalho em equipe.',
        validation: (command) => {
            const cmd = command.trim();
            return cmd === 'git checkout main' || cmd.startsWith('git merge ');
        },
        onSuccess: (git, command) => {
            if (command.trim() === 'git checkout main') {
                git.checkoutBranch('main');
                return 'Mudou para branch main. Agora faça o merge.';
            } else {
                const parts = command.trim().split(' ');
                const branchName = parts[2] || 'feature/nova-funcionalidade';
                const result = git.merge(branchName);
                return result.success ? `Merge realizado! As mudanças de '${branchName}' foram integradas na main.` : result.message;
            }
        },
        showFiles: true,
        showEditor: true,
        estimatedTime: 10
    },

    // ===== MÓDULO 2: Fundamentos Básicos do C# =====
    // Passo 9: Configurar ambiente de desenvolvimento com Visual Studio ou VSCode
    {
        id: 9,
        module: 2,
        type: 'theory',
        title: 'Configurar Ambiente de Desenvolvimento',
        instruction: 'Aprenda sobre as ferramentas necessárias para desenvolver em C#.',
        command: null,
        theory: `
            <h4>Ferramentas de Desenvolvimento C#</h4>
            <p>Para desenvolver em C#, você precisa de:</p>
            <ul>
                <li><strong>Visual Studio:</strong> IDE completa da Microsoft, ideal para desenvolvimento .NET</li>
                <li><strong>Visual Studio Code:</strong> Editor leve e extensível, com extensão C#</li>
                <li><strong>.NET SDK:</strong> Kit de desenvolvimento necessário para compilar código C#</li>
            </ul>
            <h4>Instalação Recomendada:</h4>
            <ol>
                <li>Instale o .NET SDK (versão mais recente)</li>
                <li>Instale Visual Studio ou Visual Studio Code</li>
                <li>Se usar VSCode, instale a extensão "C#" (Microsoft)</li>
                <li>Configure o ambiente de desenvolvimento</li>
            </ol>
            <h4>Verificar Instalação:</h4>
            <p>Abra o terminal e digite:</p>
            <pre><code>dotnet --version</code></pre>
            <p>Se mostrar uma versão, está tudo certo!</p>
        `,
        hint: '',
        instructorTips: 'Para desenvolvimento de jogos com Unity, você pode usar Visual Studio ou Visual Studio Code. Ambos são excelentes opções.',
        validation: () => true,
        onSuccess: () => 'Ambiente configurado! Vamos criar nosso primeiro programa.',
        showFiles: false,
        showEditor: false,
        estimatedTime: 10
    },
    // Passo 10: Criar o primeiro programa "Hello World" em C#
    {
        id: 10,
        module: 2,
        type: 'exercise',
        title: 'Criar Programa "Hello World" em C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie um programa simples que exibe "Hello World" no console. Use o editor à direita.</p>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 14px;">💡 <strong>Estrutura básica:</strong> Uma classe Program com método Main que usa Console.WriteLine.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Estrutura Básica de um Programa C#</h4>
            <p>Todo programa C# precisa de:</p>
            <ul>
                <li><strong>Namespace:</strong> Organiza o código (opcional em programas simples)</li>
                <li><strong>Classe:</strong> Contém o código do programa</li>
                <li><strong>Método Main:</strong> Ponto de entrada do programa</li>
            </ul>
            <h4>Exemplo Básico:</h4>
            <pre><code>using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World");
    }
}</code></pre>
            <h4>Explicação:</h4>
            <ul>
                <li><code>using System;</code> - Permite usar classes do namespace System</li>
                <li><code>class Program</code> - Define uma classe chamada Program</li>
                <li><code>static void Main()</code> - Método principal que executa quando o programa inicia</li>
                <li><code>Console.WriteLine()</code> - Exibe texto no console</li>
            </ul>
        `,
        hint: 'Crie uma classe Program com método Main() que chama Console.WriteLine("Hello World").',
        instructorTips: 'Este é o primeiro passo para qualquer linguagem de programação. Pratique até entender a estrutura básica.',
        exercise: {
            description: 'Crie um programa que exibe "Hello World" no console.',
            solution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World");
    }
}`,
            check: (code) => {
                return code.includes('Console.WriteLine') && 
                       code.includes('Hello World') && 
                       code.includes('Main');
            }
        },
        validation: () => true,
        onSuccess: () => 'Parabéns! Você criou seu primeiro programa em C#!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        estimatedTime: 10
    },
    // Passo 11: Variáveis e tipos de dados (int, string, bool, etc.)
    {
        id: 11,
        module: 2,
        type: 'exercise',
        title: 'Variáveis e Tipos de Dados em C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie variáveis de diferentes tipos no editor. Declare pelo menos uma variável de cada tipo: int, string, bool e double.</p>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 14px;">💡 <strong>Dica:</strong> Use a sintaxe: <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 2px 6px; border-radius: 4px;">tipo nome = valor;</code></p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Variáveis em C#</h4>
            <p>Uma variável é um espaço na memória que armazena um valor. Antes de usar, você precisa declarar o tipo.</p>
            <h4>Tipos de Dados Principais:</h4>
            <ul>
                <li><strong>int:</strong> Números inteiros (ex: 10, -5, 100)</li>
                <li><strong>double:</strong> Números decimais (ex: 3.14, 2.5)</li>
                <li><strong>string:</strong> Texto (ex: "Olá", "Mundo")</li>
                <li><strong>bool:</strong> Valores verdadeiro/falso (true ou false)</li>
                <li><strong>char:</strong> Um único caractere (ex: 'A', 'b')</li>
            </ul>
            <h4>Exemplos de Declaração:</h4>
            <pre><code>int idade = 20;
double altura = 1.75;
string nome = "João";
bool ativo = true;
char letra = 'A';</code></pre>
            <h4>Regras Importantes:</h4>
            <ul>
                <li>Nomes de variáveis começam com letra ou _</li>
                <li>Nomes são case-sensitive (idade é diferente de Idade)</li>
                <li>Use nomes descritivos (idade é melhor que x)</li>
            </ul>
        `,
        hint: 'Declare variáveis usando: int numero = 10; string texto = "exemplo"; bool verdadeiro = true;',
        instructorTips: 'Entender tipos de dados é fundamental. Cada tipo tem um propósito específico e ocupa diferentes quantidades de memória.',
        exercise: {
            description: 'Declare variáveis de pelo menos 4 tipos diferentes: int, string, bool e double.',
            solution: `int idade = 20;
string nome = "Maria";
bool ativo = true;
double altura = 1.65;`,
            check: (code) => {
                const hasInt = /int\s+\w+\s*=/.test(code);
                const hasString = /string\s+\w+\s*=/.test(code);
                const hasBool = /bool\s+\w+\s*=/.test(code);
                const hasDouble = /double\s+\w+\s*=/.test(code);
                return hasInt && hasString && hasBool && hasDouble;
            }
        },
        validation: () => true,
        onSuccess: () => 'Ótimo! Você entendeu como declarar variáveis em C#!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        estimatedTime: 12
    },
    // Passo 12: Utilizar operadores básicos (aritméticos, relacionais, lógicos)
    {
        id: 12,
        module: 2,
        type: 'exercise',
        title: 'Operadores Básicos em C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Use operadores para realizar cálculos e comparações. Crie pelo menos uma operação aritmética, uma relacional e uma lógica.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Operadores em C#</h4>
            <p>Operadores permitem realizar operações com valores e variáveis.</p>
            <h4>Operadores Aritméticos:</h4>
            <ul>
                <li><code>+</code> - Adição</li>
                <li><code>-</code> - Subtração</li>
                <li><code>*</code> - Multiplicação</li>
                <li><code>/</code> - Divisão</li>
                <li><code>%</code> - Resto da divisão (módulo)</li>
            </ul>
            <h4>Operadores Relacionais:</h4>
            <ul>
                <li><code>==</code> - Igual a</li>
                <li><code>!=</code> - Diferente de</li>
                <li><code>&lt;</code> - Menor que</li>
                <li><code>&gt;</code> - Maior que</li>
                <li><code>&lt;=</code> - Menor ou igual</li>
                <li><code>&gt;=</code> - Maior ou igual</li>
            </ul>
            <h4>Operadores Lógicos:</h4>
            <ul>
                <li><code>&&</code> - E (AND) - ambos devem ser verdadeiros</li>
                <li><code>||</code> - OU (OR) - pelo menos um deve ser verdadeiro</li>
                <li><code>!</code> - NÃO (NOT) - inverte o valor</li>
            </ul>
            <h4>Exemplos:</h4>
            <pre><code>int soma = 5 + 3;           // 8
bool maior = 10 > 5;        // true
bool resultado = (5 > 3) && (2 < 4);  // true</code></pre>
        `,
        hint: 'Use operadores como: int resultado = 5 + 3; bool comparacao = 10 > 5; bool logico = true && false;',
        instructorTips: 'Operadores são a base da lógica de programação. Pratique até entender quando usar cada um.',
        exercise: {
            description: 'Use operadores aritméticos, relacionais e lógicos no seu código.',
            solution: `int soma = 5 + 3;
int produto = 4 * 2;
bool maior = 10 > 5;
bool igual = 5 == 5;
bool resultado = (5 > 3) && (2 < 4);`,
            check: (code) => {
                const hasAritmetic = /[\+\-\*\/\%]/.test(code);
                const hasRelational = /[<>!=]=?/.test(code);
                const hasLogical = /(&&|\|\|)/.test(code);
                return hasAritmetic && hasRelational && hasLogical;
            }
        },
        validation: () => true,
        onSuccess: () => 'Excelente! Você está usando operadores corretamente!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        estimatedTime: 15
    },
    // Passo 13: Estruturas de decisão (if, else, switch)
    {
        id: 13,
        module: 2,
        type: 'exercise',
        title: 'Estruturas de Decisão (if, else, switch)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie estruturas condicionais usando if/else e switch. Use pelo menos uma estrutura if/else e uma switch.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Estruturas de Decisão</h4>
            <p>Permitem que o programa execute diferentes ações baseadas em condições.</p>
            <h4>if/else:</h4>
            <pre><code>if (condicao)
{
    // código executado se condição for verdadeira
}
else
{
    // código executado se condição for falsa
}</code></pre>
            <h4>switch:</h4>
            <pre><code>switch (variavel)
{
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código padrão
        break;
}</code></pre>
            <h4>Exemplos Práticos:</h4>
            <pre><code>// if/else
int idade = 18;
if (idade >= 18)
{
    Console.WriteLine("Maior de idade");
}
else
{
    Console.WriteLine("Menor de idade");
}

// switch
string dia = "Segunda";
switch (dia)
{
    case "Segunda":
        Console.WriteLine("Início da semana");
        break;
    case "Sexta":
        Console.WriteLine("Final da semana");
        break;
    default:
        Console.WriteLine("Outro dia");
        break;
}</code></pre>
        `,
        hint: 'Use if/else para condições simples e switch para múltiplas opções de uma variável.',
        instructorTips: 'Estruturas condicionais são essenciais para criar lógica no código. Pratique diferentes cenários.',
        exercise: {
            description: 'Crie estruturas if/else e switch no seu código.',
            solution: `int idade = 20;
if (idade >= 18)
{
    Console.WriteLine("Maior de idade");
}
else
{
    Console.WriteLine("Menor de idade");
}

string dia = "Segunda";
switch (dia)
{
    case "Segunda":
        Console.WriteLine("Início");
        break;
    default:
        Console.WriteLine("Outro dia");
        break;
}`,
            check: (code) => {
                const hasIf = /if\s*\(/.test(code);
                const hasSwitch = /switch\s*\(/.test(code);
                return hasIf && hasSwitch;
            }
        },
        validation: () => true,
        onSuccess: () => 'Ótimo! Você está controlando o fluxo do programa!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        estimatedTime: 18
    },
    // Passo 14: Estruturas de repetição (for, while, do-while)
    {
        id: 14,
        module: 2,
        type: 'exercise',
        title: 'Estruturas de Repetição (for, while, do-while)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie loops usando for, while e do-while. Use pelo menos um tipo de loop no seu código.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Loops (Repetição)</h4>
            <p>Permitem executar o mesmo código várias vezes.</p>
            <h4>for:</h4>
            <pre><code>for (inicializacao; condicao; incremento)
{
    // código repetido
}</code></pre>
            <h4>while:</h4>
            <pre><code>while (condicao)
{
    // código repetido enquanto condição for verdadeira
}</code></pre>
            <h4>do-while:</h4>
            <pre><code>do
{
    // código executado pelo menos uma vez
} while (condicao);</code></pre>
            <h4>Exemplos:</h4>
            <pre><code>// for - contar de 1 a 10
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}

// while - repetir enquanto verdadeiro
int contador = 0;
while (contador < 5)
{
    Console.WriteLine(contador);
    contador++;
}

// do-while - executa pelo menos uma vez
int numero = 0;
do
{
    Console.WriteLine(numero);
    numero++;
} while (numero < 3);</code></pre>
            <h4>Quando Usar Cada Um:</h4>
            <ul>
                <li><strong>for:</strong> Quando você sabe quantas vezes quer repetir</li>
                <li><strong>while:</strong> Quando a condição pode ser falsa desde o início</li>
                <li><strong>do-while:</strong> Quando precisa executar pelo menos uma vez</li>
            </ul>
        `,
        hint: 'Use for para contar, while para repetir enquanto condição for verdadeira, e do-while para executar pelo menos uma vez.',
        instructorTips: 'Loops são fundamentais para processar dados e criar interatividade. Pratique criando diferentes tipos de loops.',
        exercise: {
            description: 'Crie pelo menos um loop usando for, while ou do-while.',
            solution: `// Loop for
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"Contagem: {i}");
}

// Loop while
int contador = 0;
while (contador < 3)
{
    Console.WriteLine($"Contador: {contador}");
    contador++;
}`,
            check: (code) => {
                const hasFor = /for\s*\(/.test(code);
                const hasWhile = /while\s*\(/.test(code);
                const hasDoWhile = /do\s*\{/.test(code);
                return hasFor || hasWhile || hasDoWhile;
            }
        },
        validation: () => true,
        onSuccess: () => 'Excelente! Você está usando loops para repetir código!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        estimatedTime: 18
    },
    // Passo 15: Definição e uso de métodos simples
    {
        id: 15,
        module: 2,
        type: 'exercise',
        title: 'Definição e Uso de Métodos em C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie métodos simples em C#. Crie pelo menos um método que recebe parâmetros e retorna um valor.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Métodos em C#</h4>
            <p>Métodos são blocos de código reutilizáveis que realizam uma tarefa específica.</p>
            <h4>Estrutura de um Método:</h4>
            <pre><code>modificador tipoRetorno NomeMetodo(parametros)
{
    // código do método
    return valor; // se retornar algo
}</code></pre>
            <h4>Exemplos:</h4>
            <pre><code>// Método sem retorno (void)
static void Saudacao()
{
    Console.WriteLine("Olá!");
}

// Método com retorno
static int Somar(int a, int b)
{
    return a + b;
}

// Método com parâmetros
static void ExibirMensagem(string nome)
{
    Console.WriteLine($"Olá, {nome}!");
}</code></pre>
            <h4>Chamando Métodos:</h4>
            <pre><code>Saudacao();                    // Chama método sem parâmetros
int resultado = Somar(5, 3);   // Chama método e armazena resultado
ExibirMensagem("João");        // Chama método com parâmetro</code></pre>
            <h4>Benefícios:</h4>
            <ul>
                <li>Organiza o código</li>
                <li>Evita repetição</li>
                <li>Facilita manutenção</li>
                <li>Torna o código mais legível</li>
            </ul>
        `,
        hint: 'Crie métodos usando: static tipoRetorno NomeMetodo(parametros) { return valor; }',
        instructorTips: 'Métodos são essenciais para código organizado e reutilizável. Pratique criando diferentes tipos de métodos.',
        exercise: {
            description: 'Crie pelo menos um método que recebe parâmetros e retorna um valor.',
            solution: `static int Somar(int a, int b)
{
    return a + b;
}

static void ExibirNome(string nome)
{
    Console.WriteLine($"Nome: {nome}");
}

static void Main()
{
    int resultado = Somar(5, 3);
    Console.WriteLine($"Resultado: {resultado}");
    ExibirNome("Maria");
}`,
            check: (code) => {
                const hasMethod = /static\s+\w+\s+\w+\s*\(/.test(code);
                const hasReturn = /return\s+/.test(code);
                const hasParameter = /\(\s*\w+\s+\w+/.test(code);
                return hasMethod && (hasReturn || hasParameter);
            }
        },
        validation: () => true,
        onSuccess: () => 'Excelente! Você está criando métodos reutilizáveis!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        estimatedTime: 20
    },
    // Passo 16: Manipulação básica de texto (strings)
    {
        id: 16,
        module: 2,
        type: 'exercise',
        title: 'Manipulação de Strings em C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Use métodos de string para manipular texto. Use pelo menos 3 métodos diferentes como Length, ToUpper, ToLower, Substring, ou Contains.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Manipulação de Strings</h4>
            <p>Strings em C# têm muitos métodos úteis para trabalhar com texto.</p>
            <h4>Métodos Comuns:</h4>
            <ul>
                <li><code>Length</code> - Retorna o número de caracteres</li>
                <li><code>ToUpper()</code> - Converte para maiúsculas</li>
                <li><code>ToLower()</code> - Converte para minúsculas</li>
                <li><code>Substring(inicio, tamanho)</code> - Extrai parte da string</li>
                <li><code>Contains(texto)</code> - Verifica se contém texto</li>
                <li><code>StartsWith(texto)</code> - Verifica se começa com texto</li>
                <li><code>EndsWith(texto)</code> - Verifica se termina com texto</li>
                <li><code>Replace(antigo, novo)</code> - Substitui texto</li>
                <li><code>Trim()</code> - Remove espaços no início e fim</li>
            </ul>
            <h4>Interpolação de Strings:</h4>
            <pre><code>string nome = "João";
int idade = 20;
string mensagem = $"Olá, {nome}! Você tem {idade} anos.";</code></pre>
            <h4>Concatenação:</h4>
            <pre><code>string texto1 = "Olá";
string texto2 = "Mundo";
string resultado = texto1 + " " + texto2;  // "Olá Mundo"</code></pre>
            <h4>Exemplos Práticos:</h4>
            <pre><code>string texto = "Hello World";
int tamanho = texto.Length;              // 11
string maiusculas = texto.ToUpper();      // "HELLO WORLD"
string minusculas = texto.ToLower();      // "hello world"
bool contem = texto.Contains("World");    // true
string parte = texto.Substring(0, 5);     // "Hello"</code></pre>
        `,
        hint: 'Use métodos como: texto.Length, texto.ToUpper(), texto.Contains("palavra"), texto.Substring(0, 5)',
        instructorTips: 'Manipulação de strings é muito comum em programação. Domine esses métodos para trabalhar eficientemente com texto.',
        exercise: {
            description: 'Use pelo menos 3 métodos diferentes de string no seu código.',
            solution: `string texto = "Hello World";
int tamanho = texto.Length;
string maiusculas = texto.ToUpper();
string minusculas = texto.ToLower();
bool contem = texto.Contains("World");
string parte = texto.Substring(0, 5);

Console.WriteLine($"Tamanho: {tamanho}");
Console.WriteLine($"Maiúsculas: {maiusculas}");
Console.WriteLine($"Contém 'World': {contem}");`,
            check: (code) => {
                const hasLength = /\.Length/.test(code);
                const hasToUpper = /\.ToUpper\(\)/.test(code);
                const hasToLower = /\.ToLower\(\)/.test(code);
                const hasContains = /\.Contains\(/.test(code);
                const hasSubstring = /\.Substring\(/.test(code);
                const count = [hasLength, hasToUpper, hasToLower, hasContains, hasSubstring].filter(Boolean).length;
                return count >= 3;
            }
        },
        validation: () => true,
        onSuccess: () => 'Parabéns! Você domina manipulação de strings em C#!',
        showFiles: true,
        showEditor: true,
        requiredFile: 'Program.cs',
        estimatedTime: 18
    },

    // ===== MÓDULO 3: Simulação de Projeto Integrado: Versionando Projeto C# com Git =====
    // Passo 17: Criar um projeto C# no ambiente configurado
    {
        id: 17,
        module: 3,
        type: 'exercise',
        title: 'Criar Projeto C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie uma estrutura de projeto C# completa. No editor, crie uma classe GameManager.cs com métodos básicos.</p>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 14px;">💡 <strong>Estrutura:</strong> Crie uma classe que representa o gerenciador do jogo.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Estrutura de um Projeto C#</h4>
            <p>Um projeto C# bem organizado possui:</p>
            <ul>
                <li><strong>Classes:</strong> Organizam o código em módulos</li>
                <li><strong>Namespaces:</strong> Agrupam classes relacionadas</li>
                <li><strong>Métodos:</strong> Implementam funcionalidades</li>
                <li><strong>Propriedades:</strong> Armazenam dados</li>
            </ul>
            <h4>Exemplo de Classe:</h4>
            <pre><code>using System;

namespace Jogo
{
    public class GameManager
    {
        public string NomeJogo { get; set; }
        public int Pontuacao { get; set; }
        
        public void IniciarJogo()
        {
            Console.WriteLine($"Jogo {NomeJogo} iniciado!");
        }
        
        public void AdicionarPontos(int pontos)
        {
            Pontuacao += pontos;
        }
    }
}</code></pre>
            <h4>Boas Práticas:</h4>
            <ul>
                <li>Use nomes descritivos para classes</li>
                <li>Organize código em namespaces</li>
                <li>Separe responsabilidades em classes diferentes</li>
            </ul>
        `,
        hint: 'Crie uma classe GameManager com propriedades e métodos para gerenciar o jogo.',
        instructorTips: 'Em projetos reais, você organiza o código em múltiplas classes e arquivos. Isso facilita manutenção e colaboração.',
        exercise: {
            description: 'Crie uma classe GameManager.cs com pelo menos uma propriedade e um método.',
            solution: `using System;

public class GameManager
{
    public string NomeJogo { get; set; }
    public int Pontuacao { get; set; }
    
    public void IniciarJogo()
    {
        Console.WriteLine($"Jogo {NomeJogo} iniciado!");
    }
    
    public void AdicionarPontos(int pontos)
    {
        Pontuacao += pontos;
    }
}`,
            check: (code) => {
                return code.includes('class') && code.includes('GameManager') && 
                       (code.includes('void') || code.includes('int') || code.includes('string'));
            }
        },
        validation: () => true,
        onSuccess: () => 'Projeto C# criado! Agora vamos versioná-lo com Git.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'GameManager.cs',
        estimatedTime: 15
    },
    // Passo 18: Criar repositório Git para o projeto
    {
        id: 18,
        module: 3,
        type: 'tutorial',
        title: 'Criar Repositório Git para o Projeto',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Inicialize um repositório Git para versionar seu projeto C#:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git init</code>
            </div>
        `,
        command: 'git init',
        theory: `
            <h4>Versionando Projeto C# com Git</h4>
            <p>Agora que você tem um projeto C#, é hora de versioná-lo com Git!</p>
            <h4>Por que versionar código C#?</h4>
            <ul>
                <li><strong>Histórico:</strong> Veja todas as mudanças feitas</li>
                <li><strong>Colaboração:</strong> Trabalhe em equipe sem conflitos</li>
                <li><strong>Backup:</strong> Seu código está sempre seguro</li>
                <li><strong>Experimentos:</strong> Teste novas funcionalidades sem risco</li>
            </ul>
            <h4>Workflow Básico:</h4>
            <ol>
                <li>Criar repositório Git (<code>git init</code>)</li>
                <li>Adicionar arquivos (<code>git add</code>)</li>
                <li>Fazer commit (<code>git commit</code>)</li>
                <li>Repetir conforme desenvolve</li>
            </ol>
        `,
        hint: 'Digite git init para criar um repositório Git no projeto.',
        instructorTips: 'Em projetos reais, você deve fazer git init logo no início do projeto. Isso permite rastrear todas as mudanças desde o começo.',
        validation: (command) => command.trim() === 'git init',
        onSuccess: (git) => {
            const result = git.init();
            return result.success ? 'Repositório Git criado! Agora vamos adicionar os arquivos do projeto.' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 3
    },
    // Passo 19: Adicionar e commitar códigos C# em diferentes etapas da simulação
    {
        id: 19,
        module: 3,
        type: 'tutorial',
        title: 'Adicionar e Commitar Códigos C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Adicione o arquivo GameManager.cs ao Git e faça seu primeiro commit:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git add GameManager.cs</code>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Depois:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git commit -m "Adiciona classe GameManager"</code>
            </div>
        `,
        command: 'git commit -m',
        theory: `
            <h4>Workflow Git Básico para Código C#</h4>
            <p>O processo de versionar código C# segue este fluxo:</p>
            <ol>
                <li><strong>Desenvolver:</strong> Crie ou modifique arquivos .cs</li>
                <li><strong>Verificar:</strong> Use <code>git status</code> para ver o que mudou</li>
                <li><strong>Adicionar:</strong> Use <code>git add</code> para preparar arquivos</li>
                <li><strong>Commitar:</strong> Use <code>git commit</code> para salvar mudanças</li>
            </ol>
            <h4>Boas Práticas:</h4>
            <ul>
                <li>Faça commits pequenos e frequentes</li>
                <li>Uma funcionalidade por commit</li>
                <li>Mensagens descritivas</li>
                <li>Commite apenas código funcional</li>
            </ul>
            <h4>Exemplo de Sequência:</h4>
            <pre><code>git add GameManager.cs
git commit -m "Adiciona classe GameManager com sistema de pontuação"

# Mais tarde, após modificar
git add GameManager.cs
git commit -m "Adiciona método de reiniciar jogo"</code></pre>
        `,
        hint: 'Primeiro git add, depois git commit -m "mensagem descritiva".',
        instructorTips: 'Commits frequentes facilitam identificar problemas e permitem voltar a versões anteriores facilmente. Em projetos reais, faça commits várias vezes por dia.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m' && parts.length >= 4;
        },
        onSuccess: (git, command) => {
            // Primeiro adiciona o arquivo
            git.add('GameManager.cs');
            // Depois faz commit
            const parts = command.trim().split(' ');
            const message = parts.length >= 4 ? parts.slice(3).join(' ').replace(/"/g, '') : 'Adiciona classe GameManager';
            const result = git.commit(message);
            return result.success ? `Commit realizado! "${message}" foi salvo no histórico.` : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },
    // Passo 20: Criar branch para nova funcionalidade (exemplo: implementar função de cálculo)
    {
        id: 20,
        module: 3,
        type: 'tutorial',
        title: 'Criar Branch para Nova Funcionalidade',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie uma nova branch para desenvolver uma funcionalidade sem afetar o código principal:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git checkout -b feature/sistema-calculo</code>
            </div>
        `,
        command: 'git checkout -b',
        theory: `
            <h4>Branches no Desenvolvimento de Jogos</h4>
            <p>Branches permitem trabalhar em funcionalidades isoladamente:</p>
            <ul>
                <li><strong>main/master:</strong> Código estável e funcional</li>
                <li><strong>feature/:</strong> Nova funcionalidade sendo desenvolvida</li>
                <li><strong>bugfix/:</strong> Correção de bugs</li>
                <li><strong>hotfix/:</strong> Correção urgente</li>
            </ul>
            <h4>Por que usar branches?</h4>
            <ul>
                <li>Trabalhe em novas funcionalidades sem quebrar o código principal</li>
                <li>Colabore com outros desenvolvedores sem conflitos</li>
                <li>Teste ideias experimentalmente</li>
                <li>Mantenha código estável separado</li>
            </ul>
            <h4>Comandos Importantes:</h4>
            <ul>
                <li><code>git checkout -b nomeBranch</code> - Cria e muda para nova branch</li>
                <li><code>git branch</code> - Lista todas as branches</li>
                <li><code>git checkout nomeBranch</code> - Muda para outra branch</li>
            </ul>
            <h4>Exemplo de Fluxo:</h4>
            <pre><code>git checkout -b feature/sistema-calculo
# Desenvolver funcionalidade...
git add .
git commit -m "Implementa sistema de cálculo"
# Depois fazer merge na main</code></pre>
        `,
        hint: 'Use git checkout -b seguido do nome da branch, por exemplo: git checkout -b feature/sistema-calculo',
        instructorTips: 'Em projetos profissionais, cada desenvolvedor trabalha em sua própria branch. Isso evita conflitos e permite revisão de código antes de integrar.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts.length >= 4;
        },
        onSuccess: (git, command) => {
            const parts = command.trim().split(' ');
            const branchName = parts.length >= 4 ? parts[3] : 'feature/sistema-calculo';
            git.checkoutBranch(branchName, true);
            return `Branch '${branchName}' criada! Você agora está trabalhando nesta branch.`;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 3
    },
    // Passo 21: Fazer commit paralelo das mudanças na branch
    {
        id: 21,
        module: 3,
        type: 'exercise',
        title: 'Fazer Commit na Branch',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Adicione um método de cálculo na classe GameManager.cs e faça commit na branch atual:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git add GameManager.cs</code>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git commit -m "Adiciona sistema de cálculo"</code>
            </div>
        `,
        command: 'git commit -m',
        theory: `
            <h4>Trabalhando em Branches</h4>
            <p>Quando você está em uma branch diferente de main, todos os commits ficam isolados nessa branch:</p>
            <ul>
                <li>Commits na branch não afetam main</li>
                <li>Você pode desenvolver livremente</li>
                <li>Pode fazer vários commits na branch</li>
                <li>Depois integra tudo de uma vez</li>
            </ul>
            <h4>Vantagens:</h4>
            <ul>
                <li>Desenvolva funcionalidades completas antes de integrar</li>
                <li>Teste sem risco no código principal</li>
                <li>Colabore sem conflitos</li>
                <li>Histórico organizado por funcionalidade</li>
            </ul>
            <h4>Fluxo na Branch:</h4>
            <pre><code>git checkout -b feature/nova-funcionalidade
# Desenvolver...
git add arquivo.cs
git commit -m "Primeira parte da funcionalidade"
# Desenvolver mais...
git add arquivo.cs
git commit -m "Segunda parte da funcionalidade"
# Quando completo, fazer merge</code></pre>
        `,
        hint: 'Adicione o arquivo com git add e depois faça commit com git commit -m "mensagem".',
        instructorTips: 'Commits frequentes na branch são essenciais. Cada commit deve representar uma parte funcional do código. Isso facilita revisão e rollback se necessário.',
        exercise: {
            description: 'Adicione um método de cálculo na classe GameManager e faça commit.',
            solution: `public int CalcularPontuacaoFinal(int pontosBase, int multiplicador)
{
    return pontosBase * multiplicador;
}`,
            check: (code) => {
                return code.includes('CalcularPontuacaoFinal') || code.includes('int') && code.includes('return');
            }
        },
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m' && parts.length >= 4;
        },
        onSuccess: (git, command) => {
            git.add('GameManager.cs');
            const parts = command.trim().split(' ');
            const message = parts.length >= 4 ? parts.slice(3).join(' ').replace(/"/g, '') : 'Adiciona sistema de cálculo';
            const result = git.commit(message);
            return result.success ? `Commit realizado na branch! "${message}" foi salvo.` : result.message;
        },
        showFiles: true,
        showEditor: true,
        requiredFile: 'GameManager.cs',
        estimatedTime: 8
    },
    // Passo 22: Praticar merge da branch na branch principal (master/main) com resolução de conflito
    {
        id: 22,
        module: 3,
        type: 'tutorial',
        title: 'Fazer Merge e Resolver Conflitos',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Volte para main e faça merge da branch:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git checkout main</code>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git merge feature/sistema-calculo</code>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 14px;">💡 <strong>Se houver conflitos:</strong> Resolva-os no editor e depois faça commit.</p>
            </div>
        `,
        command: 'git merge',
        theory: `
            <h4>Merge de Branches</h4>
            <p>Merge integra mudanças de uma branch em outra:</p>
            <ol>
                <li>Volte para a branch principal: <code>git checkout main</code></li>
                <li>Faça merge: <code>git merge nomeBranch</code></li>
                <li>Se houver conflitos, resolva-os</li>
                <li>Complete o merge com commit</li>
            </ol>
            <h4>O que são Conflitos?</h4>
            <p>Conflitos acontecem quando o mesmo arquivo foi modificado de formas diferentes em ambas as branches:</p>
            <ul>
                <li>Git marca as áreas em conflito</li>
                <li>Você decide qual código manter</li>
                <li>Pode combinar ambas as mudanças</li>
                <li>Ou escolher uma versão</li>
            </ul>
            <h4>Marcadores de Conflito:</h4>
            <pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
// Código da branch atual (main)
=======
// Código da branch sendo mergeada
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/sistema-calculo</code></pre>
            <h4>Como Resolver:</h4>
            <ol>
                <li>Edite o arquivo removendo os marcadores</li>
                <li>Escolha qual código manter ou combine ambos</li>
                <li>Salve o arquivo</li>
                <li>Faça <code>git add arquivo.cs</code></li>
                <li>Complete com <code>git commit</code></li>
            </ol>
        `,
        hint: 'Primeiro git checkout main, depois git merge nomeBranch. Se houver conflitos, resolva no editor.',
        instructorTips: 'Conflitos são normais em trabalho em equipe. Não é um erro - é uma oportunidade de revisar e melhorar o código. Sempre teste após resolver conflitos.',
        validation: (command) => {
            const cmd = command.trim();
            return cmd === 'git checkout main' || cmd.startsWith('git merge ');
        },
        onSuccess: (git, command) => {
            if (command.trim() === 'git checkout main') {
                git.checkoutBranch('main');
                return 'Voltou para branch main. Agora faça o merge.';
            } else {
                const parts = command.trim().split(' ');
                const branchName = parts.length >= 3 ? parts[2] : 'feature/sistema-calculo';
                const result = git.merge(branchName);
                if (result.success) {
                    return `Merge realizado! As mudanças de '${branchName}' foram integradas na main.`;
                } else {
                    return `Conflito detectado! ${result.message} Resolva os conflitos no editor e depois faça commit.`;
                }
            }
        },
        showFiles: true,
        showEditor: true,
        requiredFile: 'GameManager.cs',
        estimatedTime: 12
    },
    // Passo 23: Enviar o projeto para repositório remoto (GitHub ou GitLab)
    {
        id: 23,
        module: 3,
        type: 'theory',
        title: 'Enviar Projeto para Repositório Remoto',
        instruction: 'Aprenda sobre repositórios remotos e como enviar seu código para GitHub ou GitLab.',
        command: null,
        theory: `
            <h4>Repositórios Remotos</h4>
            <p>Repositórios remotos são cópias do seu projeto armazenadas em servidores:</p>
            <ul>
                <li><strong>GitHub:</strong> Plataforma mais popular para código</li>
                <li><strong>GitLab:</strong> Alternativa open-source</li>
                <li><strong>Bitbucket:</strong> Outra opção popular</li>
            </ul>
            <h4>Por que usar repositórios remotos?</h4>
            <ul>
                <li><strong>Backup:</strong> Seu código está seguro na nuvem</li>
                <li><strong>Colaboração:</strong> Vários desenvolvedores podem trabalhar juntos</li>
                <li><strong>Portfolio:</strong> Mostre seu trabalho para empregadores</li>
                <li><strong>Acesso:</strong> Acesse de qualquer lugar</li>
            </ul>
            <h4>Comandos Principais:</h4>
            <ul>
                <li><code>git remote add origin URL</code> - Adiciona repositório remoto</li>
                <li><code>git push -u origin main</code> - Envia código para remoto</li>
                <li><code>git pull</code> - Baixa mudanças do remoto</li>
                <li><code>git clone URL</code> - Baixa repositório completo</li>
            </ul>
            <h4>Fluxo Básico:</h4>
            <pre><code># 1. Criar repositório no GitHub/GitLab
# 2. Adicionar remoto
git remote add origin https://github.com/usuario/projeto.git

# 3. Enviar código
git push -u origin main

# 4. Trabalhar normalmente
git add .
git commit -m "Nova funcionalidade"
git push</code></pre>
            <h4>Em Projetos de Jogos:</h4>
            <p>Repositórios remotos são essenciais para:</p>
            <ul>
                <li>Compartilhar código com equipe</li>
                <li>Versionar builds e releases</li>
                <li>Documentar desenvolvimento</li>
                <li>Gerenciar issues e milestones</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Em projetos profissionais, sempre use repositórios remotos. GitHub é o padrão da indústria e essencial para qualquer desenvolvedor.',
        validation: () => true,
        onSuccess: () => 'Agora você entende como trabalhar com repositórios remotos!',
        showFiles: true,
        showEditor: false,
        estimatedTime: 10
    },
    // Passo 24: Fazer alterações e atualizações puxando e enviando para o repositório remoto (git pull e git push)
    {
        id: 24,
        module: 3,
        type: 'tutorial',
        title: 'Sincronizar com Repositório Remoto (pull e push)',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Simule sincronização com repositório remoto:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git pull</code>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">E depois:</p>
                <code style="background: rgba(0, 0, 0, 0.6); color: #56d364; padding: 12px 20px; border-radius: 6px; display: inline-block; font-size: 18px; font-family: monospace; border: 2px solid rgba(227, 179, 65, 0.3); text-shadow: 0 0 5px rgba(86, 211, 100, 0.5); margin: 10px 0;">git push</code>
            </div>
        `,
        command: 'git push',
        theory: `
            <h4>Sincronização com Repositório Remoto</h4>
            <p>Dois comandos principais mantêm seu código sincronizado:</p>
            <h4>git pull:</h4>
            <ul>
                <li>Baixa mudanças do repositório remoto</li>
                <li>Integra automaticamente no seu código local</li>
                <li>Sempre faça pull antes de começar a trabalhar</li>
                <li>Evita conflitos e mantém código atualizado</li>
            </ul>
            <h4>git push:</h4>
            <ul>
                <li>Envia suas mudanças locais para o remoto</li>
                <li>Compartilha seu trabalho com a equipe</li>
                <li>Faça push após commits importantes</li>
                <li>Mantenha repositório remoto atualizado</li>
            </ul>
            <h4>Fluxo de Trabalho Diário:</h4>
            <pre><code># Início do dia: atualizar código local
git pull origin main

# Trabalhar no código...
git add .
git commit -m "Nova funcionalidade"

# Enviar mudanças
git push origin main

# Repetir conforme necessário</code></pre>
            <h4>Boas Práticas:</h4>
            <ul>
                <li>Sempre faça pull antes de começar a trabalhar</li>
                <li>Faça push frequentemente (várias vezes por dia)</li>
                <li>Resolva conflitos antes de fazer push</li>
                <li>Comunique com equipe sobre mudanças grandes</li>
            </ul>
            <h4>Comandos Adicionais:</h4>
            <ul>
                <li><code>git fetch</code> - Baixa mudanças sem integrar</li>
                <li><code>git remote -v</code> - Lista repositórios remotos</li>
                <li><code>git status</code> - Verifica se está sincronizado</li>
            </ul>
        `,
        hint: 'Use git pull para baixar mudanças e git push para enviar suas mudanças.',
        instructorTips: 'Sincronização frequente evita conflitos grandes. Em equipes, sempre faça pull antes de trabalhar e push após commits importantes.',
        validation: (command) => {
            const cmd = command.trim();
            return cmd === 'git pull' || cmd === 'git pull origin main' || cmd === 'git push' || cmd === 'git push origin main';
        },
        onSuccess: (git, command) => {
            if (command.trim().includes('pull')) {
                return 'Mudanças baixadas do repositório remoto! Código local atualizado.';
            } else if (command.trim().includes('push')) {
                return 'Mudanças enviadas para o repositório remoto! Código compartilhado com a equipe.';
            }
            return 'Comando executado!';
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 8
    },

    // ===== MÓDULO 4: Conceitos de Planejamento, Integração e Publicação de Jogos Digitais =====
    // Passo 25: Entender o processo de levantamento de requisitos e criação de documentos (GDD simplificado)
    {
        id: 25,
        module: 4,
        type: 'theory',
        title: 'Levantamento de Requisitos e GDD Simplificado',
        instruction: 'Entenda como documentar requisitos e criar um Game Design Document (GDD) simplificado para jogos.',
        command: null,
        theory: `
            <h4>Levantamento de Requisitos</h4>
            <p>Antes de desenvolver um jogo, é essencial entender o que precisa ser criado:</p>
            <ul>
                <li><strong>Requisitos Funcionais:</strong> O que o jogo deve fazer (mecânicas, sistemas)</li>
                <li><strong>Requisitos Não Funcionais:</strong> Como o jogo deve funcionar (performance, qualidade)</li>
                <li><strong>Requisitos de Hardware:</strong> Plataformas e especificações técnicas</li>
                <li><strong>Requisitos de Software:</strong> Ferramentas e tecnologias necessárias</li>
            </ul>
            <h4>Game Design Document (GDD) Simplificado</h4>
            <p>Um GDD é um documento que descreve todos os aspectos do jogo:</p>
            <ul>
                <li><strong>Conceito:</strong> Ideia principal do jogo</li>
                <li><strong>Mecânicas:</strong> Como o jogo funciona</li>
                <li><strong>Arte:</strong> Estilo visual</li>
                <li><strong>Áudio:</strong> Música e efeitos sonoros</li>
                <li><strong>Narrativa:</strong> História (se houver)</li>
                <li><strong>Público-alvo:</strong> Para quem é o jogo</li>
            </ul>
            <h4>GDD com Git:</h4>
            <p>Você pode versionar seu GDD usando Git:</p>
            <pre><code># Criar arquivo GDD.md
git add GDD.md
git commit -m "Adiciona GDD inicial do jogo"</code></pre>
            <h4>Boas Práticas:</h4>
            <ul>
                <li>Mantenha o GDD atualizado</li>
                <li>Versionar mudanças no documento</li>
                <li>Compartilhe com equipe</li>
                <li>Use commits descritivos</li>
            </ul>
            <h4>Exemplo de Estrutura GDD:</h4>
            <pre><code># Nome do Jogo
## Conceito
## Mecânicas Principais
## Controles
## Público-alvo
## Plataformas
## Cronograma</code></pre>
        `,
        hint: '',
        instructorTips: 'Um GDD bem documentado ajuda toda a equipe a entender o projeto. Versionar com Git permite rastrear mudanças no design do jogo.',
        validation: () => true,
        onSuccess: () => 'Entendeu a importância de documentar requisitos! Vamos planejar o desenvolvimento.',
        showFiles: false,
        showEditor: false,
        estimatedTime: 15
    },
    // Passo 26: Planejar etapas do desenvolvimento usando Git e C# como suporte técnico
    {
        id: 26,
        module: 4,
        type: 'exercise',
        title: 'Planejar Desenvolvimento com Git e C#',
        instruction: `
            <div style="background: rgba(3, 102, 214, 0.15); padding: 20px; border-radius: 8px; border-left: 4px solid #0366d6; margin: 15px 0;">
                <strong style="font-size: 18px; color: #79c0ff; display: block; margin-bottom: 15px;">📝 Sua Tarefa:</strong>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 16px;">Crie um arquivo de planejamento (plano.md) descrevendo etapas do desenvolvimento e faça commit.</p>
                <p style="color: #c9d1d9; margin: 10px 0; font-size: 14px;">💡 <strong>Inclua:</strong> Etapas de desenvolvimento, uso de branches, commits planejados.</p>
            </div>
        `,
        command: null,
        theory: `
            <h4>Planejamento de Desenvolvimento</h4>
            <p>Um bom planejamento organiza o desenvolvimento:</p>
            <ul>
                <li><strong>Divisão em Etapas:</strong> Quebre o projeto em partes menores</li>
                <li><strong>Priorização:</strong> O que fazer primeiro</li>
                <li><strong>Branches:</strong> Uma branch por funcionalidade</li>
                <li><strong>Commits:</strong> Planeje commits frequentes</li>
            </ul>
            <h4>Exemplo de Planejamento:</h4>
            <pre><code>## Etapa 1: Sistema Básico
- Criar classe Player
- Branch: feature/player-system
- Commits: "Cria classe Player", "Adiciona movimentação"

## Etapa 2: Sistema de Combate
- Criar classe Combat
- Branch: feature/combat-system
- Commits: "Cria sistema de combate", "Adiciona dano"

## Etapa 3: Interface
- Criar classe UI
- Branch: feature/ui-system
- Commits: "Cria UI básica", "Adiciona HUD"</code></pre>
            <h4>Uso de Git no Planejamento:</h4>
            <ul>
                <li>Versionar plano de desenvolvimento</li>
                <li>Criar branches conforme planejado</li>
                <li>Documentar mudanças no plano</li>
                <li>Rastrear progresso com commits</li>
            </ul>
            <h4>Boas Práticas:</h4>
            <ul>
                <li>Planeje antes de começar</li>
                <li>Seja realista com prazos</li>
                <li>Ajuste plano conforme necessário</li>
                <li>Versionar mudanças no plano</li>
            </ul>
        `,
        hint: 'Crie um arquivo de texto descrevendo as etapas do desenvolvimento e depois faça commit.',
        instructorTips: 'Planejamento é essencial em projetos de jogos. Git ajuda a rastrear mudanças no plano e manter histórico de decisões.',
        exercise: {
            description: 'Crie um arquivo plano.md com etapas de desenvolvimento e faça commit.',
            solution: `# Plano de Desenvolvimento

## Etapa 1: Sistema Básico
- Criar classes fundamentais
- Branch: feature/core-systems

## Etapa 2: Funcionalidades
- Implementar mecânicas principais
- Branch: feature/gameplay

## Etapa 3: Polimento
- Ajustes finais
- Branch: feature/polish`,
            check: (code) => {
                return code.includes('Plano') || code.includes('Etapa') || code.includes('Branch');
            }
        },
        validation: () => true,
        onSuccess: () => 'Plano criado! Agora vamos simular testes básicos.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'plano.md',
        estimatedTime: 12
    },
    {
        id: 23,
        module: 4,
        type: 'tutorial',
        title: 'Listar Branches',
        instruction: 'Veja todas as branches disponíveis usando `git branch`.',
        command: 'git branch',
        theory: '',
        hint: 'git branch lista todas as branches do repositório.',
        instructorTips: 'A branch atual aparece marcada com * no git branch. Use git branch -a para ver branches remotas também.',
        validation: (command) => command.trim() === 'git branch',
        onSuccess: (git) => {
            const state = git.getState();
            return `Branches disponíveis: ${state.branches.join(', ')}`;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 2
    },
    {
        id: 24,
        module: 4,
        type: 'theory',
        title: 'Trabalhando em uma Branch',
        instruction: 'Entenda o workflow de desenvolvimento em branches.',
        command: null,
        theory: `
            <h4>Workflow com Branches:</h4>
            <ol>
                <li>Criar branch para nova funcionalidade</li>
                <li>Desenvolver e fazer commits na branch</li>
                <li>Testar a funcionalidade</li>
                <li>Voltar para main e fazer merge</li>
                <li>Deletar branch antiga (opcional)</li>
            </ol>
            <h4>Vantagens:</h4>
            <ul>
                <li>Código principal sempre estável</li>
                <li>Fácil de reverter mudanças problemáticas</li>
                <li>Múltiplas pessoas podem trabalhar simultaneamente</li>
                <li>Histórico organizado por funcionalidade</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Em projetos de jogos, é comum ter branches para diferentes sistemas: feature/combate, feature/inventario, feature/save-system.',
        validation: () => true,
        onSuccess: () => 'Vamos desenvolver uma funcionalidade na branch.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 10
    },
    {
        id: 25,
        module: 4,
        type: 'exercise',
        title: 'Exercício: Desenvolver em Branch',
        instruction: 'Na branch feature/inventario, simule o desenvolvimento adicionando arquivos e fazendo commits.',
        command: null,
        theory: '',
        hint: 'Crie arquivos, adicione com git add e faça commits com mensagens descritivas.',
        instructorTips: 'Pratique fazer commits pequenos e frequentes. Cada commit deve representar uma mudança lógica.',
        validation: () => true,
        onSuccess: () => 'Bom trabalho! Continue desenvolvendo na branch.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 15
    },
    {
        id: 26,
        module: 4,
        type: 'tutorial',
        title: 'Commit na Branch',
        instruction: 'Faça commit das mudanças na branch usando `git add` e `git commit -m "Adiciona sistema de inventário"`.',
        command: 'git commit -m',
        theory: '',
        hint: 'Lembre-se: git add primeiro, depois git commit.',
        instructorTips: 'Mensagens de commit claras ajudam a entender o que foi desenvolvido em cada branch.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m' && parts.length >= 4;
        },
        onSuccess: (git) => {
            git.add('.');
            const result = git.commit('Adiciona sistema de inventário');
            return result.success ? 'Commit realizado na branch feature/inventario!' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 27,
        module: 4,
        type: 'theory',
        title: 'Conceito de Merge',
        instruction: 'Aprenda como integrar mudanças de uma branch em outra.',
        command: null,
        theory: `
            <h4>O que é Merge?</h4>
            <p>Merge combina mudanças de uma branch em outra. É usado para integrar funcionalidades desenvolvidas separadamente.</p>
            <h4>Processo de Merge:</h4>
            <ol>
                <li>Desenvolver funcionalidade em branch separada</li>
                <li>Voltar para branch principal (main)</li>
                <li>Executar <code>git merge nomeBranch</code></li>
                <li>Resolver conflitos se houver</li>
                <li>Fazer commit do merge</li>
            </ol>
            <p><strong>Importante:</strong> Sempre faça merge na branch de destino (geralmente main).</p>
        `,
        hint: '',
        instructorTips: 'Merges podem gerar conflitos quando o mesmo arquivo foi modificado em ambas as branches. Git marca os conflitos para você resolver.',
        validation: () => true,
        onSuccess: () => 'Vamos praticar o merge!',
        showFiles: true,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 28,
        module: 4,
        type: 'tutorial',
        title: 'Fazer Merge',
        instruction: 'Volte para main com `git checkout main` e depois faça merge: `git merge feature/inventario`.',
        command: 'git merge',
        theory: '',
        hint: 'Primeiro git checkout main, depois git merge feature/inventario.',
        instructorTips: 'Sempre teste a funcionalidade na branch antes de fazer merge. Isso evita problemas na branch principal.',
        validation: (command) => command.trim() === 'git merge feature/inventario',
        onSuccess: (git) => {
            git.checkoutBranch('main');
            const result = git.merge('feature/inventario');
            return result.success ? 'Merge realizado com sucesso! As mudanças foram integradas na main.' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 29,
        module: 4,
        type: 'theory',
        title: 'Resolvendo Conflitos',
        instruction: 'Aprenda a lidar com conflitos de merge.',
        command: null,
        theory: `
            <h4>Quando Conflitos Ocorrem?</h4>
            <p>Conflitos acontecem quando o mesmo arquivo foi modificado de formas diferentes em duas branches que estão sendo mergeadas.</p>
            <h4>Marcadores de Conflito:</h4>
            <pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
// Código da branch atual (main)
=======
// Código da branch sendo mergeada
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/inventario</code></pre>
            <h4>Como Resolver:</h4>
            <ol>
                <li>Abra o arquivo com conflito</li>
                <li>Decida qual código manter ou combine ambos</li>
                <li>Remova os marcadores de conflito</li>
                <li>Adicione o arquivo resolvido: <code>git add arquivo</code></li>
                <li>Complete o merge: <code>git commit</code></li>
            </ol>
        `,
        hint: '',
        instructorTips: 'Conflitos são normais em trabalho em equipe. Comunicação prévia ajuda a evitar muitos conflitos. Use ferramentas visuais para resolver conflitos complexos.',
        validation: () => true,
        onSuccess: () => 'Agora você sabe como lidar com conflitos!',
        showFiles: true,
        showEditor: false,
        estimatedTime: 12
    },

    // ===== MÓDULO 5: Integração de Versões =====
    {
        id: 30,
        module: 5,
        type: 'theory',
        title: 'Integração de Componentes',
        instruction: 'Entenda como Git facilita a integração de diferentes componentes do jogo.',
        command: null,
        theory: `
            <h4>Componentes em Projetos de Jogos:</h4>
            <p>Um jogo digital integra:</p>
            <ul>
                <li><strong>Código:</strong> Scripts de gameplay, sistemas</li>
                <li><strong>Arte:</strong> Sprites, modelos 3D, texturas</li>
                <li><strong>Áudio:</strong> Músicas, efeitos sonoros</li>
                <li><strong>Configurações:</strong> Assets, builds, configurações</li>
            </ul>
            <h4>Git para Integração:</h4>
            <ul>
                <li>Cada componente pode ser desenvolvido em branch separada</li>
                <li>Merges controlam quando componentes são integrados</li>
                <li>Tags marcam versões completas integradas</li>
                <li>Histórico mostra quando cada componente foi adicionado</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Em equipes grandes, diferentes pessoas trabalham em diferentes componentes. Git coordena essa integração.',
        validation: () => true,
        onSuccess: () => 'Vamos praticar integração de componentes.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 10
    },
    {
        id: 31,
        module: 5,
        type: 'exercise',
        title: 'Exercício: Integração de Componentes',
        instruction: 'Crie branches para diferentes componentes (arte, áudio, código) e pratique integração através de merges.',
        command: null,
        theory: '',
        hint: 'Crie branches feature/arte, feature/audio, desenvolva em cada uma e faça merges na main.',
        instructorTips: 'Este exercício simula trabalho real em equipe. Pratique merges sequenciais e veja como o histórico se desenvolve.',
        validation: () => true,
        onSuccess: () => 'Excelente! Você está praticando integração real.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 20
    },
    {
        id: 32,
        module: 5,
        type: 'tutorial',
        title: 'Visualizar Integração no Histórico',
        instruction: 'Use `git log --graph --oneline` para ver visualmente como as branches foram integradas.',
        command: 'git log',
        theory: `
            <p>O comando <code>git log --graph --oneline</code> mostra:</p>
            <ul>
                <li>Visualização gráfica das branches</li>
                <li>Pontos de merge</li>
                <li>Como diferentes componentes foram integrados</li>
            </ul>
        `,
        hint: 'git log --graph mostra visualização gráfica do histórico.',
        instructorTips: 'A visualização gráfica ajuda a entender o fluxo de desenvolvimento e quando componentes foram integrados.',
        validation: (command) => command.trim().startsWith('git log'),
        onSuccess: () => 'Histórico visualizado! Você pode ver como as branches se integraram.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },
    {
        id: 33,
        module: 5,
        type: 'theory',
        title: 'Controle de Versões do Projeto',
        instruction: 'Aprenda estratégias para gerenciar versões do projeto completo.',
        command: null,
        theory: `
            <h4>Estratégias de Versionamento:</h4>
            <ul>
                <li><strong>Versionamento Semântico:</strong> v1.0.0, v1.1.0, v2.0.0</li>
                <li><strong>Tags para Releases:</strong> Marcar versões importantes</li>
                <li><strong>Branches de Release:</strong> Preparar versão final</li>
                <li><strong>Hotfixes:</strong> Correções urgentes em produção</li>
            </ul>
            <h4>Estrutura Recomendada:</h4>
            <ul>
                <li>main - Versão estável atual</li>
                <li>develop - Desenvolvimento ativo</li>
                <li>release/v1.0 - Preparação de release</li>
                <li>hotfix/critical - Correções urgentes</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Em projetos comerciais, versionamento adequado é essencial. Facilita rastreamento de bugs e deploy de updates.',
        validation: () => true,
        onSuccess: () => 'Você está aprendendo práticas profissionais!',
        showFiles: true,
        showEditor: false,
        estimatedTime: 12
    },
    {
        id: 34,
        module: 5,
        type: 'tutorial',
        title: 'Criar Tag de Versão',
        instruction: 'Crie uma tag para marcar a versão atual: `git tag v1.0.0 -m "Versão inicial"`.',
        command: 'git tag',
        theory: '',
        hint: 'git tag cria uma marca no commit atual.',
        instructorTips: 'Tags são imutáveis. Uma vez criada, não mude. Se precisar corrigir, crie uma nova tag.',
        validation: (command) => command.trim().startsWith('git tag'),
        onSuccess: () => 'Tag criada! Versão marcada no histórico.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 4
    },
    {
        id: 35,
        module: 5,
        type: 'theory',
        title: 'Testes de Integração',
        instruction: 'Entenda como Git suporta testes de integração.',
        command: null,
        theory: `
            <h4>Git para Testes:</h4>
            <p>Git facilita testes de integração:</p>
            <ul>
                <li><strong>Branches de teste:</strong> Criar ambiente isolado para testes</li>
                <li><strong>Reverter mudanças:</strong> Voltar para versão que funcionava</li>
                <li><strong>Comparar versões:</strong> Ver o que mudou entre testes</li>
                <li><strong>Commits de teste:</strong> Marcar builds testados</li>
            </ul>
            <h4>Workflow:</h4>
            <ol>
                <li>Desenvolver funcionalidade em branch</li>
                <li>Fazer merge em branch de teste</li>
                <li>Executar testes</li>
                <li>Se passar, fazer merge na main</li>
                <li>Se falhar, corrigir e repetir</li>
            </ol>
        `,
        hint: '',
        instructorTips: 'Testes automatizados podem ser integrados com Git através de hooks ou CI/CD. Isso garante qualidade antes do merge.',
        validation: () => true,
        onSuccess: () => 'Git e testes trabalham bem juntos!',
        showFiles: true,
        showEditor: false,
        estimatedTime: 10
    },
    {
        id: 36,
        module: 5,
        type: 'exercise',
        title: 'Exercício: Fluxo Completo de Integração',
        instruction: 'Pratique um fluxo completo: criar branch, desenvolver, testar, fazer merge e marcar versão.',
        command: null,
        theory: '',
        hint: 'Siga o workflow completo aprendido até agora.',
        instructorTips: 'Este exercício consolida todo o conhecimento. Pratique várias vezes até se sentir confortável.',
        validation: () => true,
        onSuccess: () => 'Parabéns! Você dominou o fluxo de integração.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 25
    },
    {
        id: 37,
        module: 5,
        type: 'tutorial',
        title: 'Commit Final do Módulo',
        instruction: 'Faça um commit final consolidando tudo que foi aprendido.',
        command: 'git commit -m',
        theory: '',
        hint: 'git add e git commit para finalizar.',
        instructorTips: 'Commits organizados facilitam manutenção futura. Seja descritivo nas mensagens.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m' && parts.length >= 4;
        },
        onSuccess: (git) => {
            git.add('.');
            const result = git.commit('Integração de componentes concluída');
            return result.success ? 'Módulo de integração concluído!' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },

    // ===== MÓDULO 6: Trabalho em Equipe =====
    {
        id: 38,
        module: 6,
        type: 'theory',
        title: 'Repositórios Remotos',
        instruction: 'Aprenda a trabalhar com repositórios remotos para colaboração.',
        command: null,
        theory: `
            <h4>Repositórios Remotos</h4>
            <p>Um repositório remoto é uma cópia do projeto hospedada em um servidor:</p>
            <ul>
                <li><strong>GitHub:</strong> Plataforma popular para hospedar código</li>
                <li><strong>GitLab:</strong> Alternativa open-source</li>
                <li><strong>Bitbucket:</strong> Outra opção popular</li>
            </ul>
            <h4>Vantagens:</h4>
            <ul>
                <li>Backup do código</li>
                <li>Colaboração facilitada</li>
                <li>Compartilhamento fácil</li>
                <li>Histórico centralizado</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Em projetos profissionais, o repositório remoto é a fonte da verdade. Todos trabalham a partir dele.',
        validation: () => true,
        onSuccess: () => 'Vamos configurar um repositório remoto.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 8
    },
    {
        id: 39,
        module: 6,
        type: 'tutorial',
        title: 'Adicionar Repositório Remoto',
        instruction: 'Adicione um repositório remoto usando `git remote add origin https://github.com/usuario/projeto.git`.',
        command: 'git remote add',
        theory: `
            <h4>Comandos de Remote:</h4>
            <ul>
                <li><code>git remote add origin URL</code> - Adiciona repositório remoto</li>
                <li><code>git remote -v</code> - Lista repositórios remotos</li>
                <li><code>git remote remove origin</code> - Remove repositório remoto</li>
            </ul>
        `,
        hint: 'git remote add origin URL adiciona um repositório remoto chamado origin.',
        instructorTips: 'Origin é o nome padrão para o repositório remoto principal. Você pode ter múltiplos remotos com nomes diferentes.',
        validation: (command) => command.trim().startsWith('git remote add'),
        onSuccess: (git) => {
            git.repo.remote = 'https://github.com/usuario/projeto.git';
            return 'Repositório remoto adicionado! Agora você pode sincronizar com o servidor.';
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 4
    },
    {
        id: 40,
        module: 6,
        type: 'theory',
        title: 'Push e Pull',
        instruction: 'Aprenda a sincronizar seu repositório local com o remoto.',
        command: null,
        theory: `
            <h4>git push</h4>
            <p>Envia seus commits locais para o repositório remoto:</p>
            <ul>
                <li><code>git push origin main</code> - Envia branch main para origin</li>
                <li><code>git push origin nomeBranch</code> - Envia branch específica</li>
                <li><code>git push -u origin main</code> - Envia e configura upstream</li>
            </ul>
            <h4>git pull</h4>
            <p>Baixa e integra mudanças do repositório remoto:</p>
            <ul>
                <li><code>git pull origin main</code> - Baixa mudanças da branch main</li>
                <li><code>git pull</code> - Baixa da branch rastreada</li>
            </ul>
            <h4>Fluxo de Trabalho:</h4>
            <ol>
                <li>Sempre faça <code>git pull</code> antes de trabalhar</li>
                <li>Faça suas mudanças e commits</li>
                <li>Faça <code>git push</code> para compartilhar</li>
            </ol>
        `,
        hint: '',
        instructorTips: 'Sempre pull antes de push para evitar conflitos. Se alguém já fez push, você precisa integrar primeiro.',
        validation: () => true,
        onSuccess: () => 'Vamos praticar push e pull.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 12
    },
    {
        id: 41,
        module: 6,
        type: 'tutorial',
        title: 'Fazer Push',
        instruction: 'Envie seus commits para o remoto usando `git push origin main`.',
        command: 'git push',
        theory: '',
        hint: 'git push envia commits locais para o repositório remoto.',
        instructorTips: 'No primeiro push, use git push -u origin main para configurar o tracking. Depois pode usar apenas git push.',
        validation: (command) => command.trim().startsWith('git push'),
        onSuccess: () => 'Push realizado! Seus commits foram enviados para o repositório remoto.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 4
    },
    {
        id: 42,
        module: 6,
        type: 'theory',
        title: 'Colaboração em Equipe',
        instruction: 'Aprenda boas práticas para trabalhar em equipe com Git.',
        command: null,
        theory: `
            <h4>Boas Práticas para Equipe:</h4>
            <ul>
                <li><strong>Commits pequenos e frequentes:</strong> Facilita revisão e merge</li>
                <li><strong>Mensagens descritivas:</strong> Outros precisam entender o que foi feito</li>
                <li><strong>Pull antes de trabalhar:</strong> Sempre atualize antes de começar</li>
                <li><strong>Branches por funcionalidade:</strong> Não trabalhe diretamente na main</li>
                <li><strong>Teste antes de push:</strong> Garanta que o código funciona</li>
            </ul>
            <h4>Comunicação:</h4>
            <ul>
                <li>Avise quando fazer merge grande</li>
                <li>Discuta conflitos complexos</li>
                <li>Use pull requests para revisão</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Em equipes grandes, comunicação é tão importante quanto conhecimento técnico. Use ferramentas como pull requests para revisão.',
        validation: () => true,
        onSuccess: () => 'Você está pronto para trabalhar em equipe!',
        showFiles: true,
        showEditor: false,
        estimatedTime: 10
    },
    {
        id: 43,
        module: 6,
        type: 'exercise',
        title: 'Exercício: Simulação de Trabalho em Equipe',
        instruction: 'Simule trabalho em equipe: crie múltiplas branches, desenvolva em paralelo, resolva conflitos e integre tudo.',
        command: null,
        theory: '',
        hint: 'Crie branches para diferentes desenvolvedores, simule mudanças simultâneas e pratique resolução de conflitos.',
        instructorTips: 'Este exercício simula situações reais de trabalho em equipe. Pratique até se sentir confortável com conflitos.',
        validation: () => true,
        onSuccess: () => 'Excelente! Você está preparado para trabalhar em equipe real.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 30
    },
    {
        id: 44,
        module: 6,
        type: 'theory',
        title: 'Curso Concluído',
        instruction: 'Parabéns! Você completou o curso de Controle de Versões para Jogos Digitais.',
        command: null,
        theory: `
            <h4>O que você aprendeu:</h4>
            <ul>
                <li>Conceitos fundamentais de controle de versão</li>
                <li>Comandos básicos do Git</li>
                <li>Trabalho com branches e merges</li>
                <li>Integração de componentes</li>
                <li>Colaboração em equipe</li>
                <li>Gerenciamento de versões</li>
            </ul>
            <h4>Próximos Passos:</h4>
            <ul>
                <li>Pratique com projetos reais</li>
                <li>Aprenda sobre .gitignore para excluir arquivos</li>
                <li>Explore GitHub/GitLab para colaboração</li>
                <li>Estude workflows avançados (Git Flow, GitHub Flow)</li>
                <li>Aprenda sobre hooks e automação</li>
            </ul>
            <p><strong>Continue praticando e aprendendo!</strong></p>
        `,
        hint: '',
        instructorTips: 'Este curso te deu uma base sólida. Continue praticando em projetos reais para consolidar o conhecimento.',
        validation: () => true,
        onSuccess: () => 'Parabéns por completar o curso!',
        showFiles: true,
        showEditor: false,
        estimatedTime: 5
    },

    // ===== MÓDULO 7: INTEGRAÇÃO DE COMPONENTES DE JOGOS =====
    {
        id: 45,
        module: 7,
        type: 'theory',
        title: 'Introdução à Integração de Componentes',
        instruction: 'Entenda como integrar diferentes componentes de um jogo digital usando controle de versão.',
        command: null,
        theory: `
            <h4>Integração de Componentes em Jogos</h4>
            <p>Um jogo digital é composto por vários componentes que precisam trabalhar juntos:</p>
            <ul>
                <li><strong>Código:</strong> Scripts de gameplay, sistemas, mecânicas</li>
                <li><strong>Arte:</strong> Sprites, modelos 3D, texturas, UI</li>
                <li><strong>Áudio:</strong> Músicas, efeitos sonoros, vozes</li>
                <li><strong>Configurações:</strong> Arquivos de projeto, builds, assets</li>
            </ul>
            <h4>Desafios da Integração:</h4>
            <ul>
                <li>Diferentes profissionais trabalham em componentes diferentes</li>
                <li>Mudanças em um componente podem afetar outros</li>
                <li>Necessidade de manter sincronização entre componentes</li>
                <li>Histórico de mudanças deve ser rastreável</li>
            </ul>
            <p><strong>Git resolve esses desafios:</strong> Permite versionar todos os componentes e integrar mudanças de forma controlada.</p>
        `,
        hint: '',
        instructorTips: 'A integração bem feita é essencial para o sucesso de um projeto de jogo. Git facilita esse processo.',
        validation: () => true,
        onSuccess: () => 'Vamos aprender a integrar componentes usando Git!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 15
    },
    {
        id: 46,
        module: 7,
        type: 'tutorial',
        title: 'Integração de Arte e Software',
        instruction: 'Vamos simular a integração de assets artísticos com código. Crie uma branch para trabalhar na integração.',
        command: 'git checkout -b',
        theory: `
            <h4>Integração de Arte e Código</h4>
            <p>Para integrar arte com código de forma organizada:</p>
            <ol>
                <li>Criar branch específica para integração</li>
                <li>Adicionar assets artísticos ao repositório</li>
                <li>Modificar código para usar os novos assets</li>
                <li>Testar a integração</li>
                <li>Fazer merge na branch principal</li>
            </ol>
            <h4>Boas Práticas:</h4>
            <ul>
                <li>Usar nomes descritivos para branches: <code>feature/integracao-arte-menu</code></li>
                <li>Commits pequenos e focados</li>
                <li>Testar antes de fazer merge</li>
                <li>Documentar mudanças importantes</li>
            </ul>
        `,
        hint: 'git checkout -b feature/integracao-arte cria uma nova branch e muda para ela.',
        instructorTips: 'Sempre trabalhe em branches separadas para integração. Isso permite testar antes de integrar na versão principal.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts.length === 4;
        },
        onSuccess: (git, command) => {
            const branchName = command ? command.trim().split(' ')[3] : 'feature/integracao-arte';
            git.checkoutBranch(branchName, true);
            // Criar arquivo de exemplo para integração
            git.createFile('Assets/Sprites/PlayerSprite.png', 'Sprite do jogador - versão 1.0');
            git.createFile('PlayerRenderer.cs', `using System;

public class PlayerRenderer
{
    public void RenderPlayer(string spritePath)
    {
        // Carrega e renderiza o sprite do jogador
        Console.WriteLine($"Renderizando sprite: {spritePath}");
    }
}`);
            return `Branch '${branchName}' criada! Arquivos de exemplo criados para simular integração de arte e código.`;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 20
    },
    {
        id: 47,
        module: 7,
        type: 'exercise',
        title: 'Exercício: Integrar Sprite com Código',
        instruction: 'Edite o arquivo PlayerRenderer.cs para integrar corretamente o sprite. Adicione um método LoadSprite() que recebe o caminho do sprite.',
        command: null,
        theory: `
            <h4>Integração Prática</h4>
            <p>Neste exercício, você vai:</p>
            <ol>
                <li>Editar o código para integrar o sprite</li>
                <li>Adicionar o método LoadSprite()</li>
                <li>Salvar as mudanças</li>
                <li>Fazer commit da integração</li>
            </ol>
        `,
        hint: 'O método LoadSprite deve receber uma string com o caminho do arquivo e carregar o sprite.',
        instructorTips: 'Após integrar, sempre teste para garantir que tudo funciona corretamente antes de fazer commit.',
        exercise: {
            description: 'Adicione um método LoadSprite(string path) à classe PlayerRenderer que carrega um sprite do caminho especificado.',
            solution: `public void LoadSprite(string path)
{
    // Carrega o sprite do caminho especificado
    if (File.Exists(path))
    {
        Console.WriteLine($"Sprite carregado: {path}");
    }
    else
    {
        Console.WriteLine($"Erro: Sprite não encontrado em {path}");
    }
}`,
            check: (code) => {
                return code.includes('LoadSprite') && code.includes('string') && code.includes('void');
            }
        },
        validation: () => true,
        onSuccess: () => 'Código integrado! Agora vamos fazer commit das mudanças.',
        showFiles: true,
        showEditor: true,
        requiredFile: 'PlayerRenderer.cs',
        estimatedTime: 25
    },
    {
        id: 48,
        module: 7,
        type: 'tutorial',
        title: 'Commit da Integração',
        instruction: 'Adicione os arquivos modificados e faça commit da integração: `git add .` seguido de `git commit -m "Integra sprites com código de renderização"`.',
        command: 'git commit -m',
        theory: `
            <h4>Commit de Integração</h4>
            <p>Após integrar componentes, é importante fazer commit descritivo:</p>
            <ul>
                <li>Mensagem clara do que foi integrado</li>
                <li>Mencionar quais componentes foram integrados</li>
                <li>Facilitar rastreamento no histórico</li>
            </ul>
            <p><strong>Exemplo de mensagem:</strong> "Integra sprites do jogador com sistema de renderização"</p>
        `,
        hint: 'Lembre-se: git add primeiro, depois git commit -m "mensagem descritiva".',
        instructorTips: 'Commits bem descritos facilitam entender o histórico de integração e encontrar problemas futuros.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m' && parts.length >= 4;
        },
        onSuccess: (git) => {
            git.add('.');
            const result = git.commit('Integra sprites com código de renderização');
            return result.success ? 'Integração commitada com sucesso! Agora vamos fazer merge na branch principal.' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 10
    },
    {
        id: 49,
        module: 7,
        type: 'tutorial',
        title: 'Integração de Versões com Merge',
        instruction: 'Volte para a branch main e faça merge da branch de integração: `git checkout main` seguido de `git merge feature/integracao-arte`.',
        command: 'git merge',
        theory: `
            <h4>Merge de Integração</h4>
            <p>Após testar a integração na branch separada, é hora de integrar na versão principal:</p>
            <ol>
                <li>Voltar para branch principal (main)</li>
                <li>Fazer merge da branch de integração</li>
                <li>Resolver conflitos se houver</li>
                <li>Testar novamente após merge</li>
            </ol>
            <h4>Vantagens:</h4>
            <ul>
                <li>Mantém branch principal estável</li>
                <li>Permite testar antes de integrar</li>
                <li>Facilita reversão se necessário</li>
            </ul>
        `,
        hint: 'Primeiro git checkout main, depois git merge nome-da-branch.',
        instructorTips: 'Sempre teste a integração antes de fazer merge. Se algo der errado, é fácil reverter.',
        validation: (command) => {
            return command.trim() === 'git merge feature/integracao-arte';
        },
        onSuccess: (git) => {
            git.checkoutBranch('main');
            const result = git.merge('feature/integracao-arte');
            return result.success ? 'Merge realizado! A integração de arte e código foi incorporada à versão principal.' : result.message;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 15
    },
    {
        id: 50,
        module: 7,
        type: 'theory',
        title: 'Sistema de Integração Contínua (CI/CD)',
        instruction: 'Entenda como sistemas de CI/CD podem automatizar a integração de componentes.',
        command: null,
        theory: `
            <h4>CI/CD para Jogos</h4>
            <p>CI/CD (Continuous Integration/Continuous Deployment) automatiza processos:</p>
            <ul>
                <li><strong>CI:</strong> Integração contínua - testes automáticos a cada commit</li>
                <li><strong>CD:</strong> Deploy contínuo - builds automáticos para testes</li>
            </ul>
            <h4>Benefícios:</h4>
            <ul>
                <li>Detecta problemas rapidamente</li>
                <li>Automatiza testes de integração</li>
                <li>Gera builds automaticamente</li>
                <li>Reduz erros humanos</li>
            </ul>
            <h4>Ferramentas Comuns:</h4>
            <ul>
                <li>GitHub Actions</li>
                <li>GitLab CI</li>
                <li>Jenkins</li>
                <li>Unity Cloud Build</li>
            </ul>
            <h4>Git e CI/CD:</h4>
            <p>Git é a base do CI/CD. Cada push pode disparar pipelines de teste e build automáticos.</p>
        `,
        hint: '',
        instructorTips: 'CI/CD é essencial em projetos grandes. Comece simples e evolua conforme necessário.',
        validation: () => true,
        onSuccess: () => 'Você entendeu como Git se integra com CI/CD! Vamos para testes de integração.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 20
    },

    // ===== MÓDULO 8: QA E TESTES DE INTEGRAÇÃO =====
    {
        id: 51,
        module: 8,
        type: 'theory',
        title: 'Testes de Integração em Jogos',
        instruction: 'Aprenda como realizar testes de integração para garantir que componentes funcionam juntos.',
        command: null,
        theory: `
            <h4>Testes de Integração</h4>
            <p>Testes de integração verificam se componentes diferentes funcionam corretamente juntos:</p>
            <ul>
                <li><strong>Arte + Código:</strong> Sprites carregam corretamente?</li>
                <li><strong>Áudio + Código:</strong> Sons tocam no momento certo?</li>
                <li><strong>UI + Lógica:</strong> Interface responde às ações?</li>
                <li><strong>Sistemas:</strong> Combate, inventário, save funcionam juntos?</li>
            </ul>
            <h4>Estratégias de Teste:</h4>
            <ul>
                <li><strong>Teste Incremental:</strong> Testa componente por componente</li>
                <li><strong>Teste Big Bang:</strong> Testa tudo de uma vez</li>
                <li><strong>Teste Top-Down:</strong> Começa pelo nível superior</li>
                <li><strong>Teste Bottom-Up:</strong> Começa pelos componentes base</li>
            </ul>
            <h4>Importância:</h4>
            <p>Componentes podem funcionar isoladamente, mas falhar quando integrados. Testes de integração identificam esses problemas.</p>
        `,
        hint: '',
        instructorTips: 'Testes de integração são essenciais antes de publicar. Eles revelam problemas que testes unitários não capturam.',
        validation: () => true,
        onSuccess: () => 'Vamos criar um plano de testes de integração usando Git!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 20
    },
    {
        id: 52,
        module: 8,
        type: 'exercise',
        title: 'Exercício: Criar Plano de Testes de Integração',
        instruction: 'Crie um documento PLANO_TESTES.md com um plano de testes de integração para o jogo. Inclua testes para integração arte+código, áudio+código e sistemas.',
        command: null,
        theory: `
            <h4>Plano de Testes</h4>
            <p>Um bom plano de testes inclui:</p>
            <ul>
                <li>Objetivo de cada teste</li>
                <li>Componentes a serem testados</li>
                <li>Passos para executar</li>
                <li>Resultado esperado</li>
                <li>Critérios de aprovação</li>
            </ul>
        `,
        hint: 'Use Git para criar e versionar o documento de testes.',
        instructorTips: 'Documentar testes facilita repetição e rastreamento de problemas.',
        exercise: {
            description: 'Crie um arquivo PLANO_TESTES.md com pelo menos 3 testes de integração diferentes.',
            solution: `# Plano de Testes de Integração

## Teste 1: Integração Arte + Código
- Objetivo: Verificar se sprites carregam corretamente
- Passos: Executar jogo, verificar sprites na tela
- Resultado esperado: Todos os sprites visíveis

## Teste 2: Integração Áudio + Código
- Objetivo: Verificar se sons tocam nos eventos corretos
- Passos: Executar ações, verificar áudio
- Resultado esperado: Sons tocam nos momentos corretos

## Teste 3: Integração de Sistemas
- Objetivo: Verificar se sistemas funcionam juntos
- Passos: Testar combate, inventário, save juntos
- Resultado esperado: Todos os sistemas funcionam integrados`,
            check: (content) => {
                return content.includes('Teste') && content.includes('Integração') && content.length > 100;
            }
        },
        validation: () => true,
        onSuccess: (git) => {
            git.createFile('PLANO_TESTES.md', `# Plano de Testes de Integração

## Teste 1: Integração Arte + Código
- Objetivo: Verificar se sprites carregam corretamente
- Passos: Executar jogo, verificar sprites na tela
- Resultado esperado: Todos os sprites visíveis

## Teste 2: Integração Áudio + Código
- Objetivo: Verificar se sons tocam nos eventos corretos
- Passos: Executar ações, verificar áudio
- Resultado esperado: Sons tocam nos momentos corretos

## Teste 3: Integração de Sistemas
- Objetivo: Verificar se sistemas funcionam juntos
- Passos: Testar combate, inventário, save juntos
- Resultado esperado: Todos os sistemas funcionam integrados`);
            return 'Plano de testes criado! Agora vamos versionar com Git.';
        },
        showFiles: true,
        showEditor: true,
        estimatedTime: 30
    },
    {
        id: 53,
        module: 8,
        type: 'tutorial',
        title: 'Versionamento de Builds de Teste',
        instruction: 'Crie uma branch de teste e adicione o plano de testes: `git checkout -b test/integracao` seguido de `git add PLANO_TESTES.md` e `git commit -m "Adiciona plano de testes de integração"`.',
        command: 'git checkout -b',
        theory: `
            <h4>Branches de Teste</h4>
            <p>É boa prática criar branches específicas para testes:</p>
            <ul>
                <li><code>test/integracao</code> - Testes de integração</li>
                <li><code>test/usabilidade</code> - Testes de usabilidade</li>
                <li><code>test/performance</code> - Testes de performance</li>
            </ul>
            <h4>Vantagens:</h4>
            <ul>
                <li>Isola testes do código principal</li>
                <li>Facilita rastreamento de testes</li>
                <li>Permite trabalhar em paralelo</li>
            </ul>
        `,
        hint: 'git checkout -b test/integracao cria uma branch de teste.',
        instructorTips: 'Usar branches de teste mantém o código principal limpo e organizado.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts.length === 4;
        },
        onSuccess: (git, command) => {
            const branchName = command ? command.trim().split(' ')[3] : 'test/integracao';
            git.checkoutBranch(branchName, true);
            git.add('PLANO_TESTES.md');
            git.commit('Adiciona plano de testes de integração');
            return `Branch de teste '${branchName}' criada! Plano de testes commitado.`;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 15
    },
    {
        id: 54,
        module: 8,
        type: 'tutorial',
        title: 'Marcar Builds com Tags',
        instruction: 'Volte para main e marque a versão atual com uma tag de build de teste: `git checkout main` seguido de `git tag -a v1.0.0-alpha -m "Build de teste de integração"`.',
        command: 'git tag',
        theory: `
            <h4>Tags para Builds</h4>
            <p>Tags marcam pontos específicos no histórico, ideais para builds:</p>
            <ul>
                <li><code>v1.0.0-alpha</code> - Versão alpha (teste interno)</li>
                <li><code>v1.0.0-beta</code> - Versão beta (teste público)</li>
                <li><code>v1.0.0</code> - Versão release</li>
            </ul>
            <h4>Versionamento Semântico:</h4>
            <p><code>vMAJOR.MINOR.PATCH</code></p>
            <ul>
                <li><strong>MAJOR:</strong> Mudanças incompatíveis</li>
                <li><strong>MINOR:</strong> Novas funcionalidades compatíveis</li>
                <li><strong>PATCH:</strong> Correções de bugs</li>
            </ul>
        `,
        hint: 'git tag -a nome-tag -m "mensagem" cria uma tag anotada.',
        instructorTips: 'Tags facilitam rastrear builds e voltar para versões específicas se necessário.',
        validation: (command) => {
            return command.trim().startsWith('git tag');
        },
        onSuccess: (git) => {
            git.checkoutBranch('main');
            return 'Tag criada! Build de teste marcado no histórico. Agora você pode facilmente voltar para esta versão se necessário.';
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 15
    },
    {
        id: 55,
        module: 8,
        type: 'theory',
        title: 'Documentação de Resultados de Testes',
        instruction: 'Entenda como documentar resultados de testes usando Git para rastreamento.',
        command: null,
        theory: `
            <h4>Documentação de Testes</h4>
            <p>Documentar resultados de testes é essencial:</p>
            <ul>
                <li><strong>Rastreabilidade:</strong> Saber quais testes foram executados</li>
                <li><strong>Histórico:</strong> Ver evolução dos testes</li>
                <li><strong>Comunicação:</strong> Compartilhar resultados com equipe</li>
                <li><strong>Melhoria:</strong> Identificar padrões de problemas</li>
            </ul>
            <h4>Estrutura de Documentação:</h4>
            <ul>
                <li>Data e versão testada</li>
                <li>Testes executados</li>
                <li>Resultados (passou/falhou)</li>
                <li>Bugs encontrados</li>
                <li>Próximos passos</li>
            </ul>
            <h4>Git para Documentação:</h4>
            <p>Use Git para versionar relatórios de teste. Cada commit representa uma sessão de testes.</p>
        `,
        hint: '',
        instructorTips: 'Boa documentação de testes economiza tempo e ajuda a identificar problemas rapidamente.',
        validation: () => true,
        onSuccess: () => 'Você entendeu como usar Git para documentar testes! Vamos para o planejamento de publicação.',
        showFiles: true,
        showEditor: false,
        estimatedTime: 15
    },

    // ===== MÓDULO 9: PLANEJAMENTO DE PUBLICAÇÃO =====
    {
        id: 56,
        module: 9,
        type: 'theory',
        title: 'Planejamento de Publicação de Jogos',
        instruction: 'Aprenda como planejar a publicação de um jogo digital de forma organizada.',
        command: null,
        theory: `
            <h4>Importância do Planejamento</h4>
            <p>Publicar um jogo requer planejamento cuidadoso:</p>
            <ul>
                <li><strong>Preparação:</strong> Garantir que tudo está pronto</li>
                <li><strong>Marketing:</strong> Criar expectativa antes do lançamento</li>
                <li><strong>Suporte:</strong> Preparar para suporte pós-lançamento</li>
                <li><strong>Updates:</strong> Planejar atualizações futuras</li>
            </ul>
            <h4>Elementos do Planejamento:</h4>
            <ul>
                <li>Escolha de plataformas</li>
                <li>Cronograma de publicação</li>
                <li>Preparação de assets (screenshots, vídeos, descrições)</li>
                <li>Configuração de builds</li>
                <li>Plano de marketing</li>
                <li>Suporte e atualizações</li>
            </ul>
            <h4>Git no Planejamento:</h4>
            <p>Use Git para versionar documentos de planejamento e acompanhar o progresso.</p>
        `,
        hint: '',
        instructorTips: 'Bom planejamento evita problemas e surpresas na hora da publicação. Comece cedo!',
        validation: () => true,
        onSuccess: () => 'Vamos criar um plano de publicação usando Git!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 20
    },
    {
        id: 57,
        module: 9,
        type: 'exercise',
        title: 'Exercício: Escolher Plataformas de Publicação',
        instruction: 'Crie um documento COMPARACAO_PLATAFORMAS.md comparando diferentes plataformas (Steam, Google Play, App Store) e escolha as melhores para seu jogo.',
        command: null,
        theory: `
            <h4>Plataformas de Publicação</h4>
            <p>Principais plataformas disponíveis:</p>
            <ul>
                <li><strong>Steam:</strong> PC, maior audiência, taxa $100</li>
                <li><strong>Google Play:</strong> Android, taxa $25</li>
                <li><strong>App Store:</strong> iOS, taxa $99/ano</li>
                <li><strong>Itch.io:</strong> Indie-friendly, taxa opcional</li>
                <li><strong>Epic Games Store:</strong> PC, alternativo ao Steam</li>
            </ul>
            <h4>Critérios de Escolha:</h4>
            <ul>
                <li>Público-alvo do jogo</li>
                <li>Custos de publicação</li>
                <li>Requisitos técnicos</li>
                <li>Políticas da plataforma</li>
                <li>Potencial de alcance</li>
            </ul>
        `,
        hint: 'Use Git para criar e versionar o documento de comparação.',
        instructorTips: 'Escolher as plataformas certas é crucial para o sucesso do jogo. Pesquise bem antes de decidir.',
        exercise: {
            description: 'Crie um documento comparando pelo menos 3 plataformas diferentes, incluindo prós e contras de cada uma.',
            solution: `# Comparação de Plataformas

## Steam
- Prós: Maior audiência, ferramentas completas
- Contras: Taxa $100, muito competitivo
- Ideal para: Jogos PC

## Google Play
- Prós: Taxa baixa ($25), fácil publicação
- Contras: Muitos apps, difícil destacar
- Ideal para: Jogos mobile Android

## App Store
- Prós: Qualidade, público pagante
- Contras: Taxa alta ($99/ano), processo rigoroso
- Ideal para: Jogos mobile iOS`,
            check: (content) => {
                return content.includes('Plataforma') || content.includes('Steam') || content.includes('Play') || content.includes('Store');
            }
        },
        validation: () => true,
        onSuccess: (git) => {
            git.createFile('COMPARACAO_PLATAFORMAS.md', `# Comparação de Plataformas de Publicação

## Steam
- Prós: Maior audiência, ferramentas completas
- Contras: Taxa $100, muito competitivo
- Ideal para: Jogos PC

## Google Play
- Prós: Taxa baixa ($25), fácil publicação
- Contras: Muitos apps, difícil destacar
- Ideal para: Jogos mobile Android

## App Store
- Prós: Qualidade, público pagante
- Contras: Taxa alta ($99/ano), processo rigoroso
- Ideal para: Jogos mobile iOS`);
            return 'Comparação de plataformas criada! Agora vamos criar o cronograma de publicação.';
        },
        showFiles: true,
        showEditor: true,
        estimatedTime: 30
    },
    {
        id: 58,
        module: 9,
        type: 'exercise',
        title: 'Exercício: Criar Cronograma de Publicação',
        instruction: 'Crie um documento CRONOGRAMA.md com um cronograma de publicação incluindo marcos importantes (preparação, builds, marketing, lançamento). Use branches do Git para marcar cada marco.',
        command: null,
        theory: `
            <h4>Cronograma de Publicação</h4>
            <p>Um bom cronograma inclui:</p>
            <ul>
                <li><strong>Fase 1 - Preparação:</strong> Assets, builds, documentação</li>
                <li><strong>Fase 2 - Marketing:</strong> Trailer, screenshots, press kit</li>
                <li><strong>Fase 3 - Testes:</strong> Beta testing, validação</li>
                <li><strong>Fase 4 - Lançamento:</strong> Publicação, monitoramento</li>
                <li><strong>Fase 5 - Pós-lançamento:</strong> Suporte, updates</li>
            </ul>
            <h4>Marcos Importantes:</h4>
            <ul>
                <li>Alpha build pronto</li>
                <li>Beta build pronto</li>
                <li>Marketing iniciado</li>
                <li>Build final pronto</li>
                <li>Data de lançamento</li>
            </ul>
            <h4>Git e Cronograma:</h4>
            <p>Use branches e tags para marcar cada marco do cronograma no Git.</p>
        `,
        hint: 'Crie branches ou tags para cada marco importante do cronograma.',
        instructorTips: 'Um cronograma realista ajuda a gerenciar expectativas e recursos. Inclua buffer para imprevistos.',
        exercise: {
            description: 'Crie um cronograma com pelo menos 5 marcos importantes e sugira branches/tags do Git para cada um.',
            solution: `# Cronograma de Publicação

## Marco 1: Alpha Build (Semana 1-2)
- Tag: v0.1.0-alpha
- Branch: release/alpha
- Tarefas: Build inicial, testes básicos

## Marco 2: Marketing Início (Semana 3)
- Tag: marketing-start
- Tarefas: Trailer, screenshots, press kit

## Marco 3: Beta Build (Semana 4-5)
- Tag: v0.9.0-beta
- Branch: release/beta
- Tarefas: Build beta, testes públicos

## Marco 4: Build Final (Semana 6)
- Tag: v1.0.0-rc
- Branch: release/v1.0.0
- Tarefas: Build final, validação

## Marco 5: Lançamento (Semana 7)
- Tag: v1.0.0
- Tarefas: Publicação, monitoramento`,
            check: (content) => {
                return content.includes('Marco') || content.includes('Semana') || content.includes('Tag') || content.includes('Branch');
            }
        },
        validation: () => true,
        onSuccess: (git) => {
            git.createFile('CRONOGRAMA.md', `# Cronograma de Publicação

## Marco 1: Alpha Build (Semana 1-2)
- Tag: v0.1.0-alpha
- Branch: release/alpha
- Tarefas: Build inicial, testes básicos

## Marco 2: Marketing Início (Semana 3)
- Tag: marketing-start
- Tarefas: Trailer, screenshots, press kit

## Marco 3: Beta Build (Semana 4-5)
- Tag: v0.9.0-beta
- Branch: release/beta
- Tarefas: Build beta, testes públicos

## Marco 4: Build Final (Semana 6)
- Tag: v1.0.0-rc
- Branch: release/v1.0.0
- Tarefas: Build final, validação

## Marco 5: Lançamento (Semana 7)
- Tag: v1.0.0
- Tarefas: Publicação, monitoramento`);
            git.add('CRONOGRAMA.md');
            git.commit('Adiciona cronograma de publicação');
            return 'Cronograma criado e versionado! Agora vamos para os métodos de publicação.';
        },
        showFiles: true,
        showEditor: true,
        estimatedTime: 25
    },

    // ===== MÓDULO 10: MÉTODOS DE PUBLICAÇÃO =====
    {
        id: 59,
        module: 10,
        type: 'theory',
        title: 'Métodos de Publicação de Jogos',
        instruction: 'Conheça os diferentes métodos e processos de publicação em diferentes plataformas.',
        command: null,
        theory: `
            <h4>Métodos de Publicação</h4>
            <p>Diferentes plataformas têm diferentes processos:</p>
            <ul>
                <li><strong>Steam Direct:</strong> Processo simples, taxa única</li>
                <li><strong>Steam Greenlight (antigo):</strong> Votação da comunidade</li>
                <li><strong>Self-Publishing:</strong> Publicação direta (mobile)</li>
                <li><strong>Publisher:</strong> Empresa publica por você</li>
            </ul>
            <h4>Processo Típico:</h4>
            <ol>
                <li>Preparação de assets</li>
                <li>Configuração de build</li>
                <li>Preenchimento de formulários</li>
                <li>Upload de build</li>
                <li>Revisão da plataforma</li>
                <li>Aprovação e publicação</li>
            </ol>
            <h4>Documentação Necessária:</h4>
            <ul>
                <li>Descrição do jogo</li>
                <li>Screenshots e vídeos</li>
                <li>Política de privacidade</li>
                <li>Termos de serviço</li>
                <li>Informações de classificação</li>
            </ul>
        `,
        hint: '',
        instructorTips: 'Cada plataforma tem requisitos específicos. Leia cuidadosamente a documentação antes de começar.',
        validation: () => true,
        onSuccess: () => 'Vamos aprender a configurar builds para publicação!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 20
    },
    {
        id: 60,
        module: 10,
        type: 'tutorial',
        title: 'Configuração de Build para Publicação',
        instruction: 'Crie uma branch de release e configure o build: `git checkout -b release/v1.0.0`. Depois crie um arquivo BUILD_CONFIG.md com as configurações de build.',
        command: 'git checkout -b',
        theory: `
            <h4>Branch de Release</h4>
            <p>Branch de release é criada quando o código está pronto para publicação:</p>
            <ul>
                <li>Somente bugfixes críticos</li>
                <li>Nenhuma nova funcionalidade</li>
                <li>Foco em estabilidade</li>
                <li>Preparação para produção</li>
            </ul>
            <h4>Configurações de Build:</h4>
            <ul>
                <li>Versão do jogo</li>
                <li>Plataforma alvo</li>
                <li>Otimizações</li>
                <li>Assets incluídos</li>
                <li>Configurações de debug</li>
            </ul>
        `,
        hint: 'git checkout -b release/v1.0.0 cria uma branch de release.',
        instructorTips: 'Branches de release permitem preparar publicação sem afetar desenvolvimento ativo.',
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'checkout' && parts[2] === '-b' && parts.length === 4;
        },
        onSuccess: (git, command) => {
            const branchName = command ? command.trim().split(' ')[3] : 'release/v1.0.0';
            git.checkoutBranch(branchName, true);
            git.createFile('BUILD_CONFIG.md', `# Configuração de Build

## Versão
- Versão: 1.0.0
- Build Number: 100

## Plataforma
- Alvo: Windows, Linux, Mac
- Arquitetura: x64

## Otimizações
- Build otimizado para produção
- Debug desabilitado
- Assets comprimidos

## Assets Incluídos
- Todos os sprites
- Todos os sons
- Todas as configurações`);
            git.add('BUILD_CONFIG.md');
            git.commit('Adiciona configuração de build para release');
            return `Branch de release '${branchName}' criada! Configuração de build adicionada.`;
        },
        showFiles: true,
        showEditor: false,
        estimatedTime: 20
    },
    {
        id: 61,
        module: 10,
        type: 'theory',
        title: 'Processo de Instalação e Configuração',
        instruction: 'Entenda como funciona o processo de instalação e configuração após publicação.',
        command: null,
        theory: `
            <h4>Instalação de Jogos</h4>
            <p>Após publicação, jogadores precisam instalar o jogo:</p>
            <ul>
                <li><strong>Download:</strong> Baixar arquivos do jogo</li>
                <li><strong>Instalação:</strong> Extrair e configurar</li>
                <li><strong>Primeira execução:</strong> Configurações iniciais</li>
                <li><strong>Atualizações:</strong> Sistema de patches</li>
            </ul>
            <h4>Considerações Técnicas:</h4>
            <ul>
                <li>Tamanho do download</li>
                <li>Tempo de instalação</li>
                <li>Requisitos de sistema</li>
                <li>Permissões necessárias</li>
                <li>Compatibilidade</li>
            </ul>
            <h4>Documentação para Usuários:</h4>
            <ul>
                <li>Guia de instalação</li>
                <li>Requisitos mínimos</li>
                <li>Troubleshooting comum</li>
                <li>FAQ</li>
            </ul>
            <h4>Git e Instalação:</h4>
            <p>Use Git para versionar documentos de instalação e guias de usuário.</p>
        `,
        hint: '',
        instructorTips: 'Uma instalação simples e documentada melhora muito a experiência do usuário.',
        validation: () => true,
        onSuccess: () => 'Vamos criar um guia de instalação usando Git!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 15
    },
    {
        id: 62,
        module: 10,
        type: 'exercise',
        title: 'Exercício: Criar Guia de Instalação',
        instruction: 'Crie um arquivo GUIA_INSTALACAO.md com instruções de instalação para diferentes plataformas. Adicione ao Git e faça commit.',
        command: null,
        theory: `
            <h4>Guia de Instalação</h4>
            <p>Um bom guia de instalação inclui:</p>
            <ul>
                <li>Requisitos do sistema</li>
                <li>Passos de instalação claros</li>
                <li>Screenshots ou imagens</li>
                <li>Solução de problemas comuns</li>
                <li>Links de suporte</li>
            </ul>
        `,
        hint: 'Use Git para criar e versionar o guia de instalação.',
        instructorTips: 'Um guia claro reduz suporte e melhora satisfação do usuário.',
        exercise: {
            description: 'Crie um guia de instalação com pelo menos instruções para 2 plataformas diferentes.',
            solution: `# Guia de Instalação

## Requisitos do Sistema
- Windows 10 ou superior
- 4GB RAM
- 2GB espaço em disco

## Instalação no Windows
1. Baixe o instalador
2. Execute o instalador
3. Siga as instruções na tela
4. Aguarde a conclusão

## Instalação no Linux
1. Extraia o arquivo .tar.gz
2. Execute: chmod +x jogo
3. Execute: ./jogo`,
            check: (content) => {
                return content.includes('Instalação') || content.includes('Requisitos') || content.includes('Windows') || content.includes('Linux');
            }
        },
        validation: () => true,
        onSuccess: (git) => {
            git.createFile('GUIA_INSTALACAO.md', `# Guia de Instalação

## Requisitos do Sistema
- Windows 10 ou superior
- 4GB RAM
- 2GB espaço em disco

## Instalação no Windows
1. Baixe o instalador
2. Execute o instalador
3. Siga as instruções na tela
4. Aguarde a conclusão

## Instalação no Linux
1. Extraia o arquivo .tar.gz
2. Execute: chmod +x jogo
3. Execute: ./jogo

## Solução de Problemas
- Se o jogo não iniciar, verifique os requisitos
- Verifique se tem drivers atualizados`);
            git.add('GUIA_INSTALACAO.md');
            git.commit('Adiciona guia de instalação');
            return 'Guia de instalação criado e versionado! Agora vamos para validação e documentação final.';
        },
        showFiles: true,
        showEditor: true,
        estimatedTime: 20
    },

    // ===== MÓDULO 11: VALIDAÇÃO E DOCUMENTAÇÃO =====
    {
        id: 63,
        module: 11,
        type: 'theory',
        title: 'Validação da Publicação',
        instruction: 'Aprenda como validar que tudo está pronto para publicação.',
        command: null,
        theory: `
            <h4>Validação Pré-Publicação</h4>
            <p>Antes de publicar, valide:</p>
            <ul>
                <li><strong>Funcionalidade:</strong> Jogo funciona corretamente?</li>
                <li><strong>Performance:</strong> Performance adequada?</li>
                <li><strong>Compatibilidade:</strong> Funciona em diferentes sistemas?</li>
                <li><strong>Documentação:</strong> Tudo está documentado?</li>
                <li><strong>Assets:</strong> Todos os assets estão incluídos?</li>
                <li><strong>Legal:</strong> Políticas e termos corretos?</li>
            </ul>
            <h4>Checklist de Validação:</h4>
            <ul>
                <li>Build testado em diferentes plataformas</li>
                <li>Todos os assets incluídos</li>
                <li>Documentação completa</li>
                <li>Política de privacidade</li>
                <li>Termos de serviço</li>
                <li>Screenshots e vídeos prontos</li>
                <li>Descrição do jogo revisada</li>
            </ul>
            <h4>Git na Validação:</h4>
            <p>Use Git para rastrear o processo de validação e documentar problemas encontrados.</p>
        `,
        hint: '',
        instructorTips: 'Validação cuidadosa evita problemas após publicação. Não tenha pressa nesta etapa!',
        validation: () => true,
        onSuccess: () => 'Vamos criar um checklist de validação usando Git!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 20
    },
    {
        id: 64,
        module: 11,
        type: 'exercise',
        title: 'Exercício: Criar Checklist de Validação',
        instruction: 'Crie um arquivo CHECKLIST_VALIDACAO.md com um checklist completo de validação pré-publicação. Adicione ao Git.',
        command: null,
        theory: `
            <h4>Checklist de Validação</h4>
            <p>Um checklist ajuda a garantir que nada seja esquecido:</p>
            <ul>
                <li>Itens específicos e verificáveis</li>
                <li>Organizados por categoria</li>
                <li>Com espaço para marcar conclusão</li>
                <li>Com notas sobre problemas encontrados</li>
            </ul>
        `,
        hint: 'Use Git para criar e versionar o checklist.',
        instructorTips: 'Um checklist completo é essencial para publicação profissional.',
        exercise: {
            description: 'Crie um checklist com pelo menos 10 itens de validação organizados por categoria.',
            solution: `# Checklist de Validação Pré-Publicação

## Funcionalidade
- [ ] Jogo inicia sem erros
- [ ] Todas as mecânicas funcionam
- [ ] Sem bugs críticos conhecidos

## Performance
- [ ] Performance adequada em sistemas mínimos
- [ ] Sem memory leaks
- [ ] Tempo de carregamento aceitável

## Documentação
- [ ] README completo
- [ ] Guia de instalação
- [ ] Política de privacidade`,
            check: (content) => {
                return content.includes('Checklist') || content.includes('[]') || content.length > 150;
            }
        },
        validation: () => true,
        onSuccess: (git) => {
            git.createFile('CHECKLIST_VALIDACAO.md', `# Checklist de Validação Pré-Publicação

## Funcionalidade
- [ ] Jogo inicia sem erros
- [ ] Todas as mecânicas funcionam
- [ ] Sem bugs críticos conhecidos
- [ ] Sistema de save/load funciona

## Performance
- [ ] Performance adequada em sistemas mínimos
- [ ] Sem memory leaks
- [ ] Tempo de carregamento aceitável
- [ ] FPS estável

## Documentação
- [ ] README completo
- [ ] Guia de instalação
- [ ] Política de privacidade
- [ ] Termos de serviço

## Assets
- [ ] Todas as imagens incluídas
- [ ] Todos os sons incluídos
- [ ] Fontes incluídas se necessário
- [ ] Screenshots prontos para loja

## Legal
- [ ] Política de privacidade
- [ ] Termos de serviço
- [ ] Classificação etária correta
- [ ] Direitos autorais`);
            git.add('CHECKLIST_VALIDACAO.md');
            git.commit('Adiciona checklist de validação');
            return 'Checklist de validação criado! Agora vamos documentar a integração de sistemas.';
        },
        showFiles: true,
        showEditor: true,
        estimatedTime: 25
    },
    {
        id: 65,
        module: 11,
        type: 'theory',
        title: 'Integração de Sistemas Externos',
        instruction: 'Entenda como integrar sistemas externos (Steamworks, analytics, etc) no processo de publicação.',
        command: null,
        theory: `
            <h4>Sistemas Externos Comuns</h4>
            <p>Jogos frequentemente integram sistemas externos:</p>
            <ul>
                <li><strong>Steamworks:</strong> Achievements, cloud saves, multiplayer</li>
                <li><strong>Analytics:</strong> Google Analytics, Unity Analytics</li>
                <li><strong>Crash Reporting:</strong> Sentry, Crashlytics</li>
                <li><strong>DRM:</strong> Proteção contra pirataria</li>
                <li><strong>IAP:</strong> Compras dentro do jogo</li>
            </ul>
            <h4>Considerações:</h4>
            <ul>
                <li>Dependências externas</li>
                <li>Configuração necessária</li>
                <li>Documentação de integração</li>
                <li>Testes específicos</li>
                <li>Versionamento de configurações</li>
            </ul>
            <h4>Git e Integração:</h4>
            <p>Use Git para versionar configurações de sistemas externos e documentar o processo de integração.</p>
        `,
        hint: '',
        instructorTips: 'Integrações externas adicionam complexidade. Documente bem e teste cuidadosamente.',
        validation: () => true,
        onSuccess: () => 'Vamos criar documentação de integração!',
        showFiles: false,
        showEditor: false,
        estimatedTime: 15
    },
    {
        id: 66,
        module: 11,
        type: 'exercise',
        title: 'Exercício: Criar Relatório Final de Publicação',
        instruction: 'Crie um documento RELATORIO_PUBLICACAO.md resumindo todo o processo de publicação: planejamento, integração, testes, validação e publicação. Faça um commit final marcando a conclusão.',
        command: 'git commit -m',
        theory: `
            <h4>Relatório Final</h4>
            <p>Um relatório final documenta:</p>
            <ul>
                <li>Processo completo seguido</li>
                <li>Decisões tomadas</li>
                <li>Problemas encontrados e soluções</li>
                <li>Lições aprendidas</li>
                <li>Próximos passos</li>
            </ul>
            <h4>Estrutura:</h4>
            <ul>
                <li>Resumo executivo</li>
                <li>Planejamento realizado</li>
                <li>Integração de componentes</li>
                <li>Testes executados</li>
                <li>Validação concluída</li>
                <li>Publicação realizada</li>
                <li>Conclusões</li>
            </ul>
            <h4>Git no Relatório:</h4>
            <p>Use Git para versionar o relatório e marcar a conclusão com uma tag final.</p>
        `,
        hint: 'Crie o relatório e depois faça commit final com git commit -m "Relatório final de publicação"',
        instructorTips: 'Um relatório completo é valioso para projetos futuros e documentação do processo.',
        exercise: {
            description: 'Crie um relatório final com pelo menos 5 seções cobrindo o processo completo de publicação.',
            solution: `# Relatório Final de Publicação

## Resumo Executivo
Este relatório documenta o processo completo de publicação do jogo...

## Planejamento
- Escolha de plataformas: Steam, Google Play
- Cronograma seguido conforme planejado

## Integração
- Componentes integrados com sucesso
- Testes de integração realizados

## Validação
- Checklist completo validado
- Pronto para publicação

## Publicação
- Build configurado
- Documentação completa
- Publicação realizada com sucesso`,
            check: (content) => {
                return content.includes('Relatório') || content.includes('Publicação') || content.length > 200;
            }
        },
        validation: (command) => {
            const parts = command.trim().split(' ');
            return parts[0] === 'git' && parts[1] === 'commit' && parts[2] === '-m' && parts.length >= 4;
        },
        onSuccess: (git) => {
            git.createFile('RELATORIO_PUBLICACAO.md', `# Relatório Final de Publicação

## Resumo Executivo
Este relatório documenta o processo completo de publicação do jogo, desde o planejamento até a publicação final.

## 1. Planejamento
- Plataformas escolhidas: Steam, Google Play
- Cronograma criado e seguido
- Assets de marketing preparados

## 2. Integração de Componentes
- Arte integrada com código
- Sistemas funcionando em conjunto
- Testes de integração realizados

## 3. Testes
- Testes de integração executados
- Builds de teste criados e validados
- Bugs corrigidos

## 4. Validação
- Checklist completo validado
- Documentação revisada
- Pronto para publicação

## 5. Publicação
- Build configurado para produção
- Documentação completa
- Publicação realizada com sucesso

## Conclusões
O processo de publicação foi concluído com sucesso. Todos os componentes foram integrados, testados e validados antes da publicação final.`);
            git.add('RELATORIO_PUBLICACAO.md');
            git.commit('Relatório final de publicação - Projeto concluído');
            git.checkoutBranch('main');
            git.merge('release/v1.0.0');
            return 'Relatório final criado! Projeto de publicação concluído com sucesso! Parabéns por completar todo o processo de planejamento e publicação de jogos digitais!';
        },
        showFiles: true,
        showEditor: true,
        estimatedTime: 30
    }
];

// Função helper para obter módulo atual
function getCurrentModule(stepId) {
    return tutorialModules.find(m => m.steps.includes(stepId));
}

// Export para uso global
window.tutorialSteps = tutorialSteps;
window.tutorialModules = tutorialModules;
window.getCurrentModule = getCurrentModule;
