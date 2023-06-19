const { response } = require('express');
var http = require('http');
var url = require('url');

http.createServer(
  res.setHeader("charset", "UTF-8");
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write("<html>");
res.write("<head>");
res.write("<title>Resposta...</title>");
res.write("</head>");

res.write("<body>");
res.write("<p>Cadastrando dados...</p>");

var querystring = url.parse(req.url, true).query;
var Produto = querystring['product'];
var ValorTotal = querystring['cart-total'];
var ValorUnd = querystring['valorund'];
var Email = querystring['email'];
var Senha = querystring['password'];

var SQL = "INSERT INTO carrinho VALUES ('" + Produto + "', '" + ValorTotal + "' '" + ValorUnd + "')";
console.log(SQL);

var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "sys-orcamentacao"
});

var SQL = "INSERT INTO usuario VALUES ('" + Email + "', '" + Senha + "')";
console.log(SQL);

var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "sys-orcamentacao"
});

if (Email != undefined && Senha != undefined) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Conexao realizada com sucesso");
    con.query(SQL, function(err, result) {
      if (err) throw err;
      console.log("Dados inseridos com sucesso!");
    });
  });
}
res.write("</body>");
res.write("</html>");