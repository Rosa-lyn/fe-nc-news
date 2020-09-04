import React from "react";

const ErrorPage = (props) => {
  const { msg } = props;
  return (
    <section>
      <p>Sorry! {msg}</p>
      <img
        src="https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif"
        alt="Tobey Maguire crying GIF"
      />
    </section>
  );
};

export default ErrorPage;
