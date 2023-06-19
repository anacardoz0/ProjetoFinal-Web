var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "yourusername",
password: "yourpassword"
});

/*DATABASE*/
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE sys_orcamentacao", function (err, result) {
if (err) throw err;
console.log("Database created!");
});
});

/*TABELAS */

/**carrinho**/
var sql = "CREATE TABLE carrinho (valor final varchar(30) not null, precound varchar(30) not null, nomeproduto varchar(255) not null, quantidade int(10))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Tabela criada!");
});

/**usuario**/
var sql = "CREATE TABLE usuario (email text not null, senha varchar(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Tabela criada!");
});

