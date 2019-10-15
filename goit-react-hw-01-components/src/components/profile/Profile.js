import React from "react";
import styles from "./profile.module.css";

const Profile = ({
  profile: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  const {
    profileContainer,
    avatarStyle,
    nameStyle,
    tagStyle,
    locationStyle,
    statsStyle,
    statsValue,
    statsList,
  } = styles;
  return (
    <section className={profileContainer}>
      <img src={avatar} alt={name} className={avatarStyle} />
      <h2 className={nameStyle}>{name}</h2>
      <p className={tagStyle}>@{tag}</p>
      <p className={locationStyle}>{location}</p>
      <ul className={statsStyle}>
        <li className={statsList}>
          <p>Followers</p>
          <p className={statsValue}>{followers}</p>
        </li>
        <li className={statsList}>
          <p>Views</p>
          <p className={statsValue}>{views}</p>
        </li>
        <li className={statsList}>
          <p>Likes</p>
          <p className={statsValue}>{likes}</p>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
