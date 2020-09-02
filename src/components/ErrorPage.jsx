import React from "react";

const ErrorPage = (props) => {
  const { msg } = props;
  return (
    <div>
      {msg === "Topic not found :(" && <p>Sorry, we can't find that topic!</p>}
      {msg === "User not found :(" && <p>Sorry, we can't find that user!</p>}
      <img
        src="https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif"
        alt="Tobey Maguire crying GIF"
      />
    </div>
  );
};

export default ErrorPage;
