import React, { useState, useEffect } from 'react';

const BudgetTracker = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpense = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const amount = parseFloat(e.target.amount.value);
    setExpenses([...expenses, { name, amount }]);
    e.target.reset();
  };

  useEffect(() => {
    const sum = expenses.reduce((acc, e) => acc + e.amount, 0);
    setTotal(income - sum);
  }, [expenses, income]);

  return (
    <div>
      <h2>Budget Planner</h2>
      <input
        type="number"
        placeholder="Monthly Income"
        value={income}
        onChange={(e) => setIncome(parseFloat(e.target.value))}
      />
      <form onSubmit={addExpense}>
        <input name="name" placeholder="Expense name" required />
        <input name="amount" type="number" placeholder="Amount" required />
        <button type="submit">Add Expense</button>
      </form>
      <h3>Remaining: R {total.toFixed(2)}</h3>
      <ul>
        {expenses.map((e, i) => (
          <li key={i}>{e.name}: R {e.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;
