const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true  // `trim` is not needed for Number but doesn't cause issues
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,  // Change to Date instead of Number
        required: true
    },
    category: {  // Fix field name (from `Category` to `category`)
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,  // Increased to allow better descriptions
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);
