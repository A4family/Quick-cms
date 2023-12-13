const { Category } = require('../../../../db/models');
const BaseController = require('../baseController');
class CategoryController extends BaseController {
  constructor (opts) {
    super(opts);
    this.service = opts.categoryService;
  }

  async index (req, res) {
    res.render('layouts/master', {
      innerPage: '../pages/category/index'
    });
  }

  async create (req, res) {
    res.render('layouts/master', {
      innerPage: '../pages/category/form'
    });
  }

  async edit (req, res) {
    res.send(req.params.id);
  }

  async store (req, res) {
     try {
        res.send('nice boy');
     } catch (err) {
      res.send(err);
     }
  }
}

module.exports = CategoryController;
