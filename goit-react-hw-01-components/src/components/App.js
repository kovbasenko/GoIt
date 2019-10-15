import React from "react";
import Profile from "./profile/Profile";
import profile from "./profile.json";
import Statistics from "./statistics/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./friendList/FriendList";
import friends from "./friends.json";
import Transations from "./transactions/Transactions";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile profile={profile} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <Transations transactions={transactions} />
    </>
  );
};

export default App;
