const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    try {
        const { title, amount, type, date, category, description } = req.body;

        // Convert `date` to a valid Date object
        const formattedDate = new Date(date);  
        if (isNaN(formattedDate)) {
            return res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD." });            
        }
        if(!title|| !category || !description || !date){
            return res.status(400).json({message:"All fields are required"})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message:"Amount must be a positive number"})
        }

        const expense = new ExpenseSchema({
            title,
            amount,
            type,   // Include `type`
            category,
            description,
            date: formattedDate  // Use the formatted Date object
        });

        console.log(expense);  // Debugging output

        await expense.save();  
        res.status(201).json({ message: "Expense added successfully",expense });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }

   
};

exports.getExpense = async (req, res) =>{
    try{
        const expenses=await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    }catch(error){
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteExpense = async (req, res) =>{
   const {id}=req.params;
   ExpenseSchema.findByIdAndDelete(id)
   .then((expense)=>{
    res.status(200).json({message:'Expense Deleted'})
   })
   .catch((err)=>{
    res.status(500).json({message:'Server Error'})
   })

}