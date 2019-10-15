import React from "react";
import styles from "./statistics.module.css";

function rgb() {
  let r, g, b;
  r = Math.floor(Math.random() * 200);
  g = Math.floor(Math.random() * 200);
  b = Math.floor(Math.random() * 200);
  return `rgb(${r}, ${g}, ${b})`;
}

const Statistics = ({ title, stats }) => {
  const { statistics, titleStyle, item, statList, label, percentage } = styles;

  return (
    <section className={statistics}>
      {title ? <h2 className={titleStyle}>{title}</h2> : null}
      <ul className={statList}>
        {stats.map((stat) => (
          <li style={{ backgroundColor: rgb() }} className={item} key={stat.id}>
            <span className={label}>{stat.label}</span>
            <span className={percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
