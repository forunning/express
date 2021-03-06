/*
* app.js入口模块
* --启动服务
* --做一些服务相关的配置
* --模板引擎
* --body-parser -解析表单post请求体
* --提供静态资源服务
* --挂在路由--app.use(router)
* --监听端口号启动服务
* */

let express= require('express')
let router=require('./router')

let app=express()

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

//公开资源
// app.use(express.static('public'))
// app.use(express.static('node_modules'))

// app.engine('html',require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

//把路由容器挂载到app服务中
app.use(router)

// server=app.listen(process.env.PORT || 3002,function () {
//     console.log('app is listening to port:'+server.address().port)
// });


module.exports = app;