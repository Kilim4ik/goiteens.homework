import styles from "./Transactions.module.css";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.titles}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.tableLine}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
