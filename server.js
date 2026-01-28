const express = require('express');
const app = express();
const mongodb = require('./data/database');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(process.env.PORT || 3000, () => {
        console.log('Database is listening and node running at port ' +
        (process.envPORT || 3000));
        });
    }
})

