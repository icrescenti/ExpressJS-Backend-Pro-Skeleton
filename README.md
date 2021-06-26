# backend-linker

## 1. Before executing

- connection.js

Please create the connection.js file, in the root folder of the project with the following content:

```
const mysql = require("mysql");
const Sequelize = require('sequelize');

const mysqlConnection = new Sequelize('dbname', 'username', 'password', {
    host: 'localhost',
    dialect:  'mysql'
});

mysqlConnection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = mysqlConnection;
```

And then, if the DB tables and models to use are equal, you are ready to go.