import React, {useContext} from 'react'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalContext } from '../Context/GlobalState'

const Body = () => {

  const { addTransaction } = useContext(GlobalContext);
  const Demotransaction = {
    transactionName : "",
    transactionAmount : 0
  }

  const [newTransaction, setNewTransaction] = React.useState(Demotransaction);

  const submitTransaction = (event) => {
    setNewTransaction(prevData => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Math.floor(Math.random() * 100000000),
      text : newTransaction.transactionName,
      amount : +newTransaction.transactionAmount
    }
    addTransaction(transaction);
  }

  return (
    <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction newTransaction={newTransaction} setNewTransaction={submitTransaction} onSubmit={onSubmit} />
    </div>
  )
}

export default Body
