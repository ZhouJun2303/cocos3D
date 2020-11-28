'use strict';

// 扩展内定义的方法
exports.methods = {
    log() {
        console.log('Hello World');
    },
};

// 当扩展被启动的时候执行
exports.load = {};

// 当扩展被关闭的时候执行
exports.unload = {};