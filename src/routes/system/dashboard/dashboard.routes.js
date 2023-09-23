const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layouts/master', {
        innerPage: "../dashboard"
    });
});

module.exports = router;