const express = require("express");
const { addTransaction, getAllTransaction } = require("../controllers/transactionController");

// router object
const router = express.Router();

// Routes

// POST || ADD TRANSACTION
router.post("/add-transaction", addTransaction);

// GET ||  GET TRANSACTION
router.post("/get-transaction", getAllTransaction);


module.exports = router;