import React, { useState } from 'react';
import { Progress } from  "antd";

const Analytics = ({allTransaction}) => {
    const categories = ["salary", "tip", "project", "food", "movie", "bills", "medical", "fees", "tax"];
    // Total Transaction
    const totalTransaction = allTransaction.length;
    const totalIncomeTransactions = allTransaction.filter(transaction => transaction.type === "income");
    const totalExpenseTransactions = allTransaction.filter(transaction => transaction.type === "expense");
    const totalIncomePercent = (totalIncomeTransactions.length / totalTransaction) * 100;
    const totalExpensePercent = (totalExpenseTransactions.length / totalTransaction) * 100;

    // Total  Turnover
    const totalTurnover = allTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnover = allTransaction
                                    .filter(transaction => transaction.type === "income")
                                    .reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenseTurnover = allTransaction
                                    .filter(transaction => transaction.type === "expense")
                                    .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totlaIncomeTurnoverPercent = (totalIncomeTurnover / totalTurnover) * 100;
    const totlaExpenseTurnoverPercent = (totalExpenseTurnover / totalTurnover) * 100;
  return (
    <>
        <div className="row m-2 d-flex justify-content-between">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        Total Transactions : {totalTransaction}
                    </div>
                    <div className="card-body">
                        <h5 className="text-success">Income : {totalIncomeTransactions.length}</h5>
                        <h5 className="text-danger">Expense : {totalExpenseTransactions.length}</h5>
                        <div>
                            <Progress 
                                type="circle" 
                                strokeColor={"green"} 
                                className="mx-2"
                                percent={totalIncomePercent.toFixed(0)}
                            />
                            <Progress 
                                type="circle" 
                                strokeColor={"red"} 
                                className="mx-2"
                                percent={totalExpensePercent.toFixed(0)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        Total Turnover : {totalTurnover}
                    </div>
                    <div className="card-body">
                        <h5 className="text-success">Income : {totalIncomeTurnover}</h5>
                        <h5 className="text-danger">Expense : {totalExpenseTurnover}</h5>
                        <div>
                            <Progress 
                                type="circle" 
                                strokeColor={"green"} 
                                className="mx-2"
                                percent={totlaIncomeTurnoverPercent.toFixed(0)}
                            />
                            <Progress 
                                type="circle" 
                                strokeColor={"red"} 
                                className="mx-2"
                                percent={totlaExpenseTurnoverPercent.toFixed(0)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <h5 className="cat-wise-income-heading">Category wise Income</h5>
                {
                    categories.map(category => {
                        const amount = allTransaction.filter(transaction => transaction.type === "income" && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0);
                        return (
                            amount > 0 && (
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h5>{category}</h5>
                                    <Progress percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                                </div>
                            </div>
                            )
                        )
                    })
                }
            </div>
            <div className="col-md-3">
                <h5 className="cat-wise-expense-heading">Category wise Expense</h5>
                {
                    categories.map(category => {
                        const amount = allTransaction.filter(transaction => transaction.type === "expense" && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0);
                        return (
                            amount > 0 && (
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h5>{category}</h5>
                                    <Progress percent={((amount / totalExpenseTurnover) * 100).toFixed(0)} />
                                </div>
                            </div>
                            )
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Analytics;