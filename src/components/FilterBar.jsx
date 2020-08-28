import React, { Component } from "react";

class FilterBar extends Component {
  render() {
    return (
      <div>
        <button>most upvoted</button>
        <button>most commented</button>
        <button>new</button>
      </div>
    );
  }
}

export default FilterBar;
