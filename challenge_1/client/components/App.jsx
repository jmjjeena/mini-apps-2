import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { PageHeader } from 'antd';
import { Input } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const Search = Input.Search;
    return (
      <div>
        <PageHeader
          title="Historical Events Finder"
        />
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width : 200}}
          />
        </div>
        <div className='react-paginate'>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
     );
  }
}

export default App;