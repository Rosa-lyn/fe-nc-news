import React from "react";

const ErrorPage = (props) => {
  const { msg } = props;
  return (
    <div>
      <p>Sorry! {msg}</p>
      <img
        src="https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif"
        alt="Tobey Maguire crying GIF"
      />
    </div>
  );
};

export default ErrorPage;
