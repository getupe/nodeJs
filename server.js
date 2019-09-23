var http = require('http');//使用 require 指令来载入 node 自带的 http 模块，并将实例化的 HTTP 赋值给变量 http。

http.createServer((request, response) => {//使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
// console.log('log');
// console.info('info');
// console.error('error');
// console.warn('warn');

// process
// console.log(process);
// process.on('exit', function(code) {

//     // 以下代码永远不会执行
//     setTimeout(function() {
//       console.log("该代码不会执行");
//     }, 0);
    
//     console.log('退出码为:', code);
// });
// console.log("程序执行结束");
// 输出到终端
// process.stdout.write("Hello World!" + "\n");

// // 通过参数读取
// console.log('------');
// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
//     console.log(array);
// });
// console.log('------');
// // 获取执行路径
// console.log(process.execPath);

// // 平台信息
// console.log(process.platform);

// console.log(process.env);

// // 输出当前目录
// console.log('当前目录: ' + process.cwd());

// // 输出当前版本
// console.log('当前版本: ' + process.version);

// // 输出内存使用情况
// console.log(process.memoryUsage());
