import React from "react";
import {
  StyledProfileLayout,
  StyledUserImg,
} from "../styles/userProfileStyles";

function UserProfile(props) {
  const { user } = props;

  return (
    <StyledProfileLayout>
      <StyledUserImg src={user.avatar_url} alt={user.name} />
      <div>
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
      </div>
    </StyledProfileLayout>
  );
}

export default UserProfile;
