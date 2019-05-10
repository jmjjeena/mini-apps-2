import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import ResultsList from './ResultsList.jsx';
import Pagination from './Pagination.jsx';
import { PageHeader } from 'antd';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord:'',
      results: [],
      pageCount: 1,
      currentPage: 1,
      // loading: true
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageClick =  this.handlePageClick.bind(this);
  }

  handleSearch(word) {
    const { currentPage } = this.state;
    axios.get(`/events?q=${word}&_page=${currentPage}`)
    .then((response) => {
      this.setState({
        results: response.data,
        // loading: false,
        searchWord: word,
        pageCount: Math.ceil(res.headers["x-total-count"] / 10)
      });
    })
    .catch((error) => {
      console.log('Oops! something went wrong', error);
    });
  }

  handlePageClick(page) {
    const { searchWord, currentPage } = this.state;
    let selected = page.selected + 1;
    this.setState({
      currentPage: selected
    }, () => {
      this.handleSearch(searchWord, currentPage);
    })
  }

  render() {
    const { results, pageCount } = this.state;
    console.log('results: ', results);
    return (
      <div>
        <div>
          <PageHeader
            title="Historical Events Finder"
          />
        </div>
        <div>
          <SearchBar handleSearch={this.handleSearch} />
        </div>
        <div>
          <ResultsList results={results}/>
        </div>
        <div>
          <Pagination
            pageCount={pageCount}
            handlePageClick={this.handlePageClick}
          />
        </div>
      </div>

    );
  };

  // render() {
  //   return (
  //     <div>
  //       <PageHeader
  //         title="Historical Events Finder"
  //       />
  //       <div className="search">
  //         <SearchBar />
  //       </div>
  //       <div className='react-paginate'>
  //         <ReactPaginate
  //           previousLabel={'<'}
  //           nextLabel={'>'}
  //           breakLabel={'...'}
  //           breakClassName={'break-me'}
  //           pageCount={this.state.pageCount}
  //           marginPagesDisplayed={2}
  //           pageRangeDisplayed={5}
  //           onPageChange={this.handlePageClick}
  //           containerClassName={'pagination'}
  //           subContainerClassName={'pages pagination'}
  //           activeClassName={'active'}
  //         />
  //       </div>
  //     </div>
  //    );
  // }
};

export default App;