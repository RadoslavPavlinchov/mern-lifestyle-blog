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
    likes: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            text: String,
            createdAt: {
                type: mongoose.SchemaTypes.Date,
                default: Date.now
            },
            createdBy: {
                type:ObjectId,
                ref: 'User'
            }
        }
    ]
});

module.exports = new Model('Article', articleSchema);