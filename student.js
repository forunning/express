let mongoose = require('mongoose')
let Schema = mongoose.Schema

mongoose.connect('mongodb+srv://wufangjian:wufangjian@cluster0.0fjry.mongodb.net/index?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

let commentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    hobbies: {
        type: String,
    },
    fruits: {
        type: String,
    }
}, { versionKey: false })



module.exports = mongoose.model('User', commentSchema, 'user')

