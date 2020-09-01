import React, { Component } from "react";
import { StyledVoteButton } from "../styles/voterButtonStyles";
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
    const { id, type } = this.props;
    return api.patchVotes(id, vote, type);
  }
  render() {
    const { votes } = this.props;
    const { optimisticVotes } = this.state;
    return (
      <div>
        <StyledVoteButton
          onClick={(event) => {
            this.updateVote(1);
          }}
          disabled={optimisticVotes === 1}
        >
          <span role="img" aria-label="thumbs-up">
            👍
          </span>
        </StyledVoteButton>
        {votes + optimisticVotes}
        <StyledVoteButton
          onClick={() => {
            this.updateVote(-1);
          }}
          disabled={optimisticVotes === -1}
        >
          <span role="img" aria-label="thumbs-down">
            👎
          </span>
        </StyledVoteButton>
      </div>
    );
  }
}

export default Voter;
