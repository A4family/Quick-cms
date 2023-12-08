const express = require('express');
const app = express();
const PORT = 8000;
const loaders = require('./bootstrap');
let startServer = () => {
    loaders.init(app);
    app.listen(PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Server starting at port ${PORT}`);
    })
}

startServer();