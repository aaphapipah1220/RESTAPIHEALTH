let mysql = require('mysql');

//buat konekasi database
const koneksi = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});

koneksi.connect((error) => {
    if(error) throw error;
    console.log('Mysql terkoneksi');
});

module.exports = koneksi;