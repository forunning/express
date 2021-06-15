/*
 * 路由模块
 * */
let express = require('express')
let router = express.Router()

let student = require('./student')



//获取所有数据行
router.post('/findall',(req, res) =>{
    student.find((err, students) =>{
        if (err) {
            res.json({status:500,message:'查询错误'})
        } else {
            res.json({status:200,message:'查询成功',data:students})
        }
    })
})

//获取所有数据行
router.post('/findone', (req, res) =>{
    let name = req.body.username
    student.findOne({username:name},(err,stu) =>{
        if (err) {
            res.json({status:500,message:'查询失败！'})
        } else {
            res.json({status:200,message:'查询成功',data:stu})
        }
    })
})

//添加数据行
router.post('/add', function (req, res) {
    // 获取表单数据----req.body
    req.body.labels = eval(req.body.labels);
    new student(req.body).save((err, ret) => {
        if (err) {
            res.json({status:500,message:'用户添加失败,请更换用户名重试！'})
        } else {
            res.json({status:200,message:'用户添加成功',data:req.body})
        }
    })
})

//删除数据行
router.post('/delete', (req, res) => {
    let name = req.body.username
    student.deleteOne({ username: name }, (err, doc) => {
        if (err) {
            res.json({status:500,message:'用户删除失败！'})
        } else {
            res.json({status:200,message:'用户删除成功',data:req.body})
        }
    })
})


//修改数据行
router.post('/update', function (req, res) {
    let name = req.body.username
    req.body.labels = eval(req.body.labels);
    student.updateOne({username:name}, req.body, function (err) {
        if (err) {
            res.json({status:500,message:'更新操作失败！'})
        }else{
            res.json({status:200,message:'更新成功',data:req.body})
        }
    })
})

module.exports = router

