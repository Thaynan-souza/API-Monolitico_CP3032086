const userService = require('../services/user.service');

const criar = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email são obrigatórios.' });
    }

    try {
        const usuario = await userService.criarUsuario(nome, email);
        return res.status(201).json(usuario);
    } catch (erro) {
        if (erro.message.includes('UNIQUE')) {
            return res.status(400).json({ erro: 'Este email já está cadastrado.' });
        }
        
        console.error(erro);
        return res.status(500).json({ erro: 'Erro interno do servidor.' });
    }
};

const listar = async (req, res) => {
    try {
        const usuarios = await userService.listarUsuarios();
        return res.status(200).json(usuarios);
    } catch (erro) {
        console.error(erro);
        return res.status(500).json({ erro: 'Erro ao buscar usuários.' });
    }
};

const buscarUm = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await userService.buscarPorId(id);
        
        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        return res.status(200).json(usuario);
    } catch (erro) {
        console.error(erro);
        return res.status(500).json({ erro: 'Erro ao buscar o usuário.' });
    }
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, status } = req.body;

    if (!nome || !status) {
        return res.status(400).json({ erro: 'Nome e status são obrigatórios para atualizar.' });
    }

    try {
        const usuarioExiste = await userService.buscarPorId(id);
        
        if (!usuarioExiste) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        await userService.atualizarUsuario(id, nome, status);
        
        return res.status(200).json({ 
            id: Number(id), 
            nome, 
            email: usuarioExiste.email, 
            status 
        });

    } catch (erro) {
        console.error(erro);
        return res.status(500).json({ erro: 'Erro interno ao atualizar.' });
    }
};

const desativar = async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioExiste = await userService.buscarPorId(id);
        
        if (!usuarioExiste) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        await userService.desativarUsuario(id);
        
        return res.status(200).json({ mensagem: 'Usuário desativado com sucesso.' });
    } catch (erro) {
        console.error(erro);
        return res.status(500).json({ erro: 'Erro interno ao desativar.' });
    }
};

module.exports = { criar, listar, buscarUm, atualizar, desativar }; 