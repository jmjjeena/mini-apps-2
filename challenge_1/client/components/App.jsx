import React, { Component } from 'react';
import axios from 'axios';
import { PageHeader } from 'antd';
import { Input } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const Search = Input.Search;
    return (
      <div>
        <PageHeader
          title="Historical Events Finder"
        />
        <div>
          <Search
            className="search"
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width : 200}}
          />
        </div>
      </div>
     );
  }
}

export default App;