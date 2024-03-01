var dbconfig = {
    development: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'user007'
    },
    production: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'user66007_db',
        password: 'P@ssw0rd',
        database: 'dbuser66'
    }
};
module.exports = dbconfig;