const express = require("express");
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require("../controllers/transactionController");

// router object
const router = express.Router();

// Routes

// POST || ADD TRANSACTION
router.post("/add-transaction", addTransaction);

// POST || EDIT TRANSACTION
router.post("/edit-transaction", editTransaction);

// POST || EDIT TRANSACTION
router.post("/delete-transaction", deleteTransaction);

// GET ||  GET TRANSACTION
router.post("/get-transaction", getAllTransaction);


module.exports = router;