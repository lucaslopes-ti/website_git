// Git Simulator - Simula operações Git básicas
class GitSimulator {
    constructor() {
        this.repo = {
            initialized: false,
            currentBranch: null,
            branches: {},
            commits: [],
            files: {},
            stagingArea: [],
            remote: null,
            config: {
                'user.name': null,
                'user.email': null
            }
        };
    }

    init() {
        this.repo.initialized = true;
        this.repo.currentBranch = 'main';
        this.repo.branches['main'] = {
            name: 'main',
            commits: []
        };
        return { success: true, message: 'Repositório Git inicializado com sucesso!' };
    }

    clone(url) {
        if (!this.repo.initialized) {
            this.init();
        }
        this.repo.remote = url;
        return { success: true, message: `Repositório clonado de ${url}` };
    }

    checkoutBranch(branchName, createNew = false) {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado. Use git init primeiro.' };
        }

        if (createNew) {
            if (this.repo.branches[branchName]) {
                return { success: false, message: `Branch '${branchName}' já existe.` };
            }
            this.repo.branches[branchName] = {
                name: branchName,
                commits: [...this.repo.branches[this.repo.currentBranch].commits]
            };
        } else {
            if (!this.repo.branches[branchName]) {
                return { success: false, message: `Branch '${branchName}' não existe.` };
            }
        }

        this.repo.currentBranch = branchName;
        return { success: true, message: `Mudou para branch '${branchName}'` };
    }

    add(file) {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado.' };
        }

        if (file === '.') {
            // Adiciona todos os arquivos modificados
            Object.keys(this.repo.files).forEach(f => {
                if (!this.repo.stagingArea.includes(f)) {
                    this.repo.stagingArea.push(f);
                }
            });
            return { success: true, message: 'Todos os arquivos adicionados ao staging area.' };
        }

        if (!this.repo.stagingArea.includes(file)) {
            this.repo.stagingArea.push(file);
        }
        return { success: true, message: `Arquivo '${file}' adicionado ao staging area.` };
    }

    commit(message) {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado.' };
        }

        if (this.repo.stagingArea.length === 0) {
            return { success: false, message: 'Nenhum arquivo no staging area. Use git add primeiro.' };
        }

        const commit = {
            id: this.generateCommitId(),
            message: message,
            files: [...this.repo.stagingArea],
            branch: this.repo.currentBranch,
            timestamp: new Date()
        };

        this.repo.branches[this.repo.currentBranch].commits.push(commit);
        this.repo.commits.push(commit);
        this.repo.stagingArea = [];

        return { success: true, message: `Commit criado: ${message}`, commit: commit };
    }

    status() {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado.' };
        }

        return {
            success: true,
            branch: this.repo.currentBranch,
            staged: this.repo.stagingArea,
            files: Object.keys(this.repo.files),
            commits: this.repo.branches[this.repo.currentBranch].commits.length
        };
    }

    log() {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado.' };
        }

        return {
            success: true,
            commits: this.repo.commits,
            message: `Total de commits: ${this.repo.commits.length}`
        };
    }

    branch() {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado.' };
        }

        return {
            success: true,
            branches: Object.keys(this.repo.branches),
            current: this.repo.currentBranch,
            message: `Branches: ${Object.keys(this.repo.branches).join(', ')}`
        };
    }

    diff(branch1, branch2) {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado.' };
        }

        return {
            success: true,
            message: `Diferenças entre ${branch1} e ${branch2} mostradas.`
        };
    }

    merge(branchName) {
        if (!this.repo.initialized) {
            return { success: false, message: 'Repositório não inicializado.' };
        }

        if (!this.repo.branches[branchName]) {
            return { success: false, message: `Branch '${branchName}' não existe.` };
        }

        if (branchName === this.repo.currentBranch) {
            return { success: false, message: 'Não é possível fazer merge da mesma branch.' };
        }

        const mergeCommit = {
            id: this.generateCommitId(),
            message: `Merge branch '${branchName}' into ${this.repo.currentBranch}`,
            files: [],
            branch: this.repo.currentBranch,
            mergedFrom: branchName,
            timestamp: new Date()
        };

        this.repo.branches[this.repo.currentBranch].commits.push(mergeCommit);
        this.repo.commits.push(mergeCommit);

        return { success: true, message: `Merge realizado com sucesso.`, commit: mergeCommit };
    }

    createFile(filename, content) {
        this.repo.files[filename] = {
            name: filename,
            content: content,
            modified: true
        };
        return { success: true, message: `Arquivo '${filename}' criado.` };
    }

    updateFile(filename, content) {
        if (!this.repo.files[filename]) {
            return { success: false, message: `Arquivo '${filename}' não existe.` };
        }
        this.repo.files[filename].content = content;
        this.repo.files[filename].modified = true;
        return { success: true, message: `Arquivo '${filename}' atualizado.` };
    }

    getFile(filename) {
        return this.repo.files[filename] || null;
    }

    generateCommitId() {
        return Math.random().toString(36).substring(2, 9);
    }

    getState() {
        return {
            initialized: this.repo.initialized,
            currentBranch: this.repo.currentBranch,
            branches: Object.keys(this.repo.branches),
            commits: this.repo.commits,
            files: Object.keys(this.repo.files),
            stagingArea: this.repo.stagingArea
        };
    }

    config(option, value) {
        if (option === 'user.name' || option === 'user.email') {
            this.repo.config[option] = value;
            return { 
                success: true, 
                message: `Configuração '${option}' definida como '${value}'` 
            };
        }
        return { success: false, message: `Opção de configuração desconhecida: ${option}` };
    }

    getConfig(option) {
        return this.repo.config[option] || null;
    }

    isConfigComplete() {
        return this.repo.config['user.name'] !== null && this.repo.config['user.email'] !== null;
    }

    reset() {
        this.repo = {
            initialized: false,
            currentBranch: null,
            branches: {},
            commits: [],
            files: {},
            stagingArea: [],
            remote: null,
            config: {
                'user.name': null,
                'user.email': null
            }
        };
    }
}

// Export para uso global
window.GitSimulator = GitSimulator;

