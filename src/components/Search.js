import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  }
  render() {
    var { keyword } = this.state;
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input
              name="keyword"
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa..."
              value={keyword}
              onChange={this.onChange}
            />
            <span className="input-group-btn">
              <button
                onClick={this.onSearch}
                type="submit"
                className="btn btn-primary"><i className="fa fa-search mr-5"></i>Tìm</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
