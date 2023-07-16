import css from './TransactionElement.module.css';

export const TransactionElement = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.tableValue}>{type}</td>
      <td className={css.tableValue}>{amount}</td>
      <td className={css.tableValue}>{currency}</td>
    </tr>
  );
};
