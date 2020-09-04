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
      <section>
        <StyledVoteButton
          onClick={(event) => {
            this.updateVote(1);
          }}
          disabled={optimisticVotes === 1}
        >
          <span
            className="fas fa-arrow-up"
            role="img"
            aria-label="upvote"
          ></span>
        </StyledVoteButton>
        {votes + optimisticVotes}
        <StyledVoteButton
          onClick={() => {
            this.updateVote(-1);
          }}
          disabled={optimisticVotes === -1}
        >
          <span
            className="fas fa-arrow-down"
            role="img"
            aria-label="downvote"
          ></span>
        </StyledVoteButton>
      </section>
    );
  }
}

export default Voter;
