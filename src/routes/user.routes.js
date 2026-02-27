const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = Router();

router.post('/', userController.criar);

router.get('/', userController.listar);

router.get('/:id', userController.buscarUm);

router.put('/:id', userController.atualizar);

router.delete('/:id', userController.desativar);

module.exports = router;