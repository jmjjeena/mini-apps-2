import React, { Component } from 'react';
import { Input } from 'antd';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      searchedWord:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    const { searchedWord } = this.state;
    if (e.key === 'Enter') {
      // e.preventDefault();
      console.log('enter press here! ', searchedWord);
      this.setState({
        searchedWord: '',
      });
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      searchedWord: value
    });
  }


  render() {
    const { searchedWord } = this.state;
    const Search = Input.Search;
    return (
      <div>
        <Search
            onKeyPress={(e) => this.handleKeyPress(e)}
            value={searchedWord}
            onChange={(e) => this.handleChange(e)}
            placeholder="input search text"
            style={{ width : 200}}
          />
      </div>
    );
  }
}

export default SearchBar;