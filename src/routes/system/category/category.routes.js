const express = require('express');
const router = express.Router();

const { container } = require('../../../bootstrap/container');
const CategoryController = container.resolve('categoryController');

router.get('/', CategoryController.index);
router.get('/create', CategoryController.create);
router.post('/create', CategoryController.store);
router.get('/edit/:id', CategoryController.edit);

module.exports = router;
