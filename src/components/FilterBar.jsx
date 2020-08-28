import React, { Component } from "react";
import { StyledFilterBar } from "../styles/lib";

class FilterBar extends Component {
  render() {
    return (
      <StyledFilterBar>
        <button>most upvoted</button>
        <button>most commented</button>
        <button>new</button>
      </StyledFilterBar>
    );
  }
}

export default FilterBar;
