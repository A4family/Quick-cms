class CategoryController {
  constructor (opts) {
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
    })
  }

  async edit (req, res) {
    res.send(req.params.id);
  }
}

module.exports = CategoryController;
