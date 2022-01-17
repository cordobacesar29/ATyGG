const { Router } = require('express');

const userController = require('../controllers/user.controller');

const router = Router();

router.get('/', userController.getAll);
router.post('/', userController.addOne);
router.patch('/:id', userController.updateOne);
router.delete('/:id', userController.deleteOne);

module.exports = router;
