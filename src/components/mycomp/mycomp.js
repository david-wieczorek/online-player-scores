import React, { Component } from 'react';
import moment from 'moment';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class MyComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;

    if (error) {
      return (
        <p>
          {error.message}
        </p>
      );
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="data-bloc">
        {hits.map(hit =>
          <section key={hit.objectID}>
            <h4>
              {hit.author} - {moment(hit.created_at).format('DD/MM/YYYY')}
            </h4>
            <a href={hit.url}>
              <i className="fa fa-rss" aria-hidden="true" /> {hit.title}
            </a>
          </section>
        )}
      </div>
    );
  }
}

export default MyComp;
