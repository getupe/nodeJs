// const buf = Buffer.from('runoob', 'ascii');

// console.log(buf.toString('hex'));
// console.log(Buffer);

// 管道流
// const fs = require('fs');

// var readerStream = fs.createReadStream('input.txt');
// var writerStream = fs.createWriteStream('output.txt');

// readerStream.pipe(writerStream);

// console.log('程序执行完毕');

// 链式流

// 压缩
// var fs = require('fs');
// var zlib = require('zlib');

// // 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('文件压缩完成');

// 解压缩
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'));
  
console.log('文件解压完成。');