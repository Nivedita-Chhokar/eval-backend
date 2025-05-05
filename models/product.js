const mongooose = require('mongoose');

const productSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['book', 'lamp'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const Product = mongooose.model('Product', productSchema);
module.exports = Product;
