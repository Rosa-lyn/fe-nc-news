import React from "react";

const UserProfile = (props) => {
  const { user } = props;
  return (
    <section>
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
    </section>
  );
};

export default UserProfile;
