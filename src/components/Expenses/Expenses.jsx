/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

export default function Expenses({info}) {
  return (
    <Card className='expenses'>
      <ExpenseItem {...info[0]} />
      <ExpenseItem {...info[1]} />
      <ExpenseItem {...info[2]} />
      <ExpenseItem {...info[3]} />
    </Card>
  )
}