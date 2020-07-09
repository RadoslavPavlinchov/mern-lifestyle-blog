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
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        required: true
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
    },
    usersLiked: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ]

});

module.exports = new Model('Article', articleSchema);