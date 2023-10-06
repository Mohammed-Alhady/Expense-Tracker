import React from 'react'

const AddTransaction = (props) => {
    return (
        <>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={props.onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" name="transactionName" placeholder="Enter text..." onChange={props.setNewTransaction} />
            </div>
            <div className="form-control">
            <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
            </label>
            <input type="number" name="transactionAmount" placeholder="Enter amount..." onChange={props.setNewTransaction}/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTransaction
