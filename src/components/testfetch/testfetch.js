import React, { Component } from 'react';

const API = 'http://localhost:9000/test';

class Testfetch extends Component {
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
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hits: data.data, isLoading: false }))
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
              {hit.author}
            </h4>
            <p>
              {hit.test}
            </p>
          </section>
        )}
      </div>
    );
  }
}

export default Testfetch;
