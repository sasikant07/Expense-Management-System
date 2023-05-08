const getAllTransaction = async (req, res) => {
    try {
        const transactions =await transactionModel.find();
        res.status(200).json({
            success: true,
            transactions,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
        })
    }
};

const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).json({
            success: true,
            newTransaction,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
        })
    }
};

module.exports = {getAllTransaction, addTransaction};