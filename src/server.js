const express = require('express');
const app = express();
const PORT = 8000;
const loaders = require('./bootstrap');

loaders.init(app);

app.listen(PORT, (err) => {

    if(err) {
        console.log(`Error: ${err}`);
    }

    console.log(`Server starting at port ${PORT}`);
});