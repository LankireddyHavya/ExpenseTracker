const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
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

        const income = new IncomeSchema({
            title,
            amount,
            type,   // Include `type`
            category,
            description,
            date: formattedDate  // Use the formatted Date object
        });

        console.log(income);  // Debugging output

        await income.save();  
        res.status(201).json({ message: "Income added successfully", income });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }

   
};

exports.getIncome = async (req, res) =>{
    try{
        const incomes=await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
   const {id}=req.params;
   IncomeSchema.findByIdAndDelete(id)
   .then((income)=>{
    res.status(200).json({message:'Income Deleted'})
   })
   .catch((err)=>{
    res.status(500).json({message:'Server Error'})
   })

}