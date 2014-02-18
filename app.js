var connect = require('connect')
    , http = require('http');

var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static('public'));

var port = 8585;
console.log("Listening on " + port)
http.createServer(app).listen(port);
