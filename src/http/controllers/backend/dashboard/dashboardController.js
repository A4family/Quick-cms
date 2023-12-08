class DashboardController {

    constructor (opts) {
        this.service = opts.dashboardService;
        this.index = this.index.bind(this);
    }

    async index(req, res) {
        const a = await this.service.index();
        console.log(a);
        res.render('layouts/master', {
            innerPage: "../dashboard"
        });
    }
}

module.exports = DashboardController;