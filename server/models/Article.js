const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const { String, Number, ObjectId } = Schema.Types;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    article: {
        type: String,
        required: true,
        // maxlength: 50
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    creator: {
        type: ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: String
    }
});

module.exports = new Model('Article', articleSchema);