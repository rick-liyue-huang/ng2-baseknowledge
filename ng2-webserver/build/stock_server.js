"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('this is homepage');
});
app.get('/stock', function (req, res) {
    res.json(stocks);
});
app.get('/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) {
        return stock.id == req.params.id;
    }));
});
app.listen(3000, 'localhost', function () {
    console.log('server is runing ! address is http://localhost:3000');
});
var Stock = (function () {
    function Stock(id, name, price, rating, percent, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.percent = percent;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, 'the 1st one', 1.90, 3.5, ((3.5 / 5) * 100).toFixed(2) + '%', 'this is the first one', ['IT', 'Elec']),
    new Stock(2, 'the 2nd one', 1.40, 4.5, ((4.5 / 5) * 100).toFixed(2) + '%', 'this is the second one', ['Finance', 'Elec']),
    new Stock(3, 'the 3rd one', 1.30, 1.5, ((1.5 / 5) * 100).toFixed(2) + '%', 'this is the third one', ['IT', 'Finance']),
    new Stock(4, 'the 4th one', 3.90, 3.0, ((3.0 / 5) * 100).toFixed(2) + '%', 'this is the fourth one', ['IT', 'Elec']),
    new Stock(5, 'the 5th one', 2.40, 4.5, ((4.5 / 5) * 100).toFixed(2) + '%', 'this is the fifth one', ['Finance', 'Elec']),
    new Stock(6, 'the 6th one', 1.70, 2.0, ((2.0 / 5) * 100).toFixed(2) + '%', 'this is the sixth one', ['IT', 'Elec']),
    new Stock(7, 'the 7th one', 6.80, 3.0, ((3.0 / 5) * 100).toFixed(2) + '%', 'this is the seventh one', ['IT', 'Finance']),
    new Stock(8, 'the 8th one', 8.50, 5.0, ((5.0 / 5) * 100).toFixed(2) + '%', 'this is the eighth one', ['IT', 'Elec']),
];
