import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {
  render() {
    return (
      <div className="row mt-5">
        <Search onSearch={this.props.onSearch} />
        <Sort
          sortBy={this.props.sortBy}
          sortValue={this.props.sortValue}
          onSort={this.props.onSort} />
      </div>
    );
  }
}

export default Control;
