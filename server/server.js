/**
 * Created by Administrator on 2018/1/3.
 */
const express = require('express')
const mongoose = require('mongoose')
//链接mongodb 并且使用react集合
const DB_URL = 'mongodb://127.0.0.1:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('链接mongo成功')
})
//类似于mysql的表 mongo里有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))
//新增数据
User.create({
    user: 'asdasd',
    age: 16
},function (err, doc) {
    if(!err) {
        console.log(doc)
    }else{
        console.log(err)
    }
})
//移除数据
User.remove({
    age:18
},function (err,doc) {
    console.log(doc)
})
//更新数据
User.update(
    {user:'asdasd'},{'$set':{age:26}},function (err,doc) {
    console.log(doc)
})
//新建app
const app = express()
app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>')
})
app.get('/data', function (req, res) {
    User.findOne({'user':'asdasd'},function (err,doc) {
       res.json(doc)
    })
    // res.json({name: 'immm', type: 'it122'})
})
app.listen(9093, function () {
    console.log('start in 9093')
})