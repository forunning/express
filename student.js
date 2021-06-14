let mongoose = require('mongoose')
let Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://wufangjian:wufangjian@cluster0.0fjry.mongodb.net/index?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(
    ()=>{console.log('database connect success!')},
    (err)=>{console.log('database connect fail!')}
)

let commentSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    },
    background: {
        type: Number,
        default: 1
    },
    labels: [
    ]
}, { versionKey: false })


//数据样本
// var user={
//     username:'wufangjian',
//     password:'root',
//     background:1,
//     labels:[
//         {
//             name:'百度',
//             http:'www.baidu.com'
//         }
//     ]
// }


module.exports = mongoose.model('User', commentSchema, 'user')

