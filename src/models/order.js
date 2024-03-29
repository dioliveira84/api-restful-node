const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    customer: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'

    },
    number: {
        type: String,
        required: true,
        trim: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    Status: {
        types: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'

    },

    items: [{

        quantity: {
            type: Number,
            required: true,
            default: 1
        },

        price: {
            type: Number,
            required: true,

        },

        product: {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }

    }]

});

module.exports = mongoose.model('Order', schema);