"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
// const app = express();
//
// app.get('/', (req, res) => {
//     res.send('this is homepage');
// });
//
// app.get('/api/stock', (req, res) => {
//     res.json(stocks);
// });
//
// app.get('/stock/:id', (req, res) => {
//     res.json(stocks.find( (stock) =>
//         stock.id == req.params.id
//     ))
// });
//
//
// app.listen(3000, 'localhost', () => {
//     console.log('server is runing ! address is http://localhost:3000');
// });
// define the wsServer by webSocket
var wsServer = new ws_1.Server({ port: 3001 });
// when this server connect with client, it will send message
wsServer.on('connection', function (websocket) {
    websocket.send('welcome to connect server');
    websocket.on('message', function (message) {
        console.log('received the message from client, and the message is: ' + message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send('this is timer message');
        });
    }
}, 2000);
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
