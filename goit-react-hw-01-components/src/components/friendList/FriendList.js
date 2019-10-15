import React from "react";
import styles from "./friendList.module.css";

const FriendList = ({ friends }) => {
  const {
    friendList,
    item,
    status,
    avatarStyle,
    nameStyle,
    statusOffline,
  } = styles;

  return (
    <ul className={friendList}>
      {friends.map((friend) => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li className={item} key={id}>
            <span className={isOnline ? status : statusOffline}></span>
            <img className={avatarStyle} src={avatar} alt={name} width="90" />
            <p className={nameStyle}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
