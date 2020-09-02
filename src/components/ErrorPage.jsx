import React from "react";

const ErrorPage = (props) => {
  const { msg } = props;
  return (
    <div>
      {msg === "Topic not found :(" && (
        <section>
          <p>Sorry, we can't find that topic!</p>
          <img src="" alt="sad gif" />
        </section>
      )}
    </div>
  );
};

export default ErrorPage;
