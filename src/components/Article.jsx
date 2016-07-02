import React from 'react';
import { Link } from 'react-router';

export default class Article extends React.Component {
  render() {
    function renderAuthors() {
      if(this.props.authors.length > 0){
        return this.props.authors.map((author) => {
            <Link to={'/author/' + author.slug}>
              {author.name}
            </Link>
        });
      }
    }

    return (
      <div>
        <h1>{this.props.title}</h1>
        {/*renderAuthors()*/}
        <div dangerouslySetInnerHTML={{__html: this.props.html}} />
      </div>
    );
  }
}

Article.propTypes = {
  title: React.PropTypes.string.isRequired,
  html: React.PropTypes.string.isRequired,
  authors: React.PropTypes.array,
}
