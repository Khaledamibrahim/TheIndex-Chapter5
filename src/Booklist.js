import React, { Component } from "react";
import axios from "axios";
import BookTable from "./BookTable";
import Loading from "./Loading";
import SearchBar from "./SearchBar";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});
class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Book: {},
      loading: true,
      filteredBooks: []
    };
  }

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.state.Book.filter(book => {
      return `${book.title}  `.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks });
  };
  componentDidMount() {
    //const authorID = this.props.match.params.authorID;
    this.setState({ loading: true });
    instance
      .get(`/api/books/`)
      .then(res => res.data)
      // .then(res => console.log(res))
      .then(book => {
        this.setState({ Book: book, filteredBooks: book, loading: false });
        console.log(book);
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <div>
          <SearchBar changeHandler={this.filterBooks} />{" "}
          <BookTable books={this.state.filteredBooks} />
        </div>
      );
    }
  }
}

export default Booklist;
