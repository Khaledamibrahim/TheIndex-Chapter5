import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    console.log(book);
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {book.authors.map(author => (

<Link
            <div key={author.name}>{author.name}</div>


          ))}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
