import React from "react";
import styles from "./transactions.module.css";

const Transactions = ({ transactions }) => {
  const { transactionHistory, tableHead, tableRow } = styles;

  return (
    <table className={transactionHistory}>
      <thead>
        <tr className={tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          console.log(transaction);
          const { amount, currency, id, type } = transaction;

          return (
            <tr key={id} className={tableRow}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;
