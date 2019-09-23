// 阻塞代码
// var fs = require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log('程序执行结束！');

// 非阻塞代码
// var fs = require('fs');

// fs.readFile('input.txt', function(err, data) {
//     if(err) return console.log(err);
//     console.log(data.toString());
// });

// console.log('程序执行结束！');

var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('连接成功！');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
    console.log('数据接收成功！');
});

eventEmitter.emit('connection');

console.log('程序执行完毕！');


