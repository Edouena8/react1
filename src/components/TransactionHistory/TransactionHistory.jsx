import { TransactionElement } from "components/TransactionElement/TransactionElement";
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.historyTable}>
  <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
        <TransactionElement key={id} type={type} amount={amount} currency={currency}/>
    ))}
  </tbody>
</table>
    )
}