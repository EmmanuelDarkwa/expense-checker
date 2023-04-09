import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './Expense.css';
import { useState } from 'react';



function Expense(props) {
  const [title, setTitle] = useState(props.title);
// const clickHandler = () => {}

const clickHandler = () => {
  setTitle('Updated!');
  console.log(title)
}

  return (
    <card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </card>
  );
}

export default Expense;
