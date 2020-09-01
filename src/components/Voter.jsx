import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
  };

  updateVote = (vote) => {
    this.patchVotes(vote);
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };

  patchVotes(vote) {
    const { article_id, type } = this.props;
    return api.patchVotes(article_id, vote, type);
  }
  render() {
    const { votes } = this.props;
    // console.log(this.props);
    const { optimisticVotes } = this.state;
    return (
      <div>
        <button
          onClick={(event) => {
            this.updateVote(1);
          }}
          disabled={optimisticVotes === 1}
        >
          <span role="img" aria-label="thumbs-up">
            👍
          </span>
        </button>
        {votes + optimisticVotes}
        <button
          onClick={() => {
            this.updateVote(-1);
          }}
          disabled={optimisticVotes === -1}
        >
          <span role="img" aria-label="thumbs-down">
            👎
          </span>
        </button>
      </div>
    );
  }
}

export default Voter;
