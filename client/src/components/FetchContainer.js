import React from 'react';

const FetchContainer = endpoint => {
  return Presentation => {
    class HOC extends React.Component {
      constructor() {
        super();
        this.state = {data: []};
      }
      componentDidMount() {
        fetch(endpoint)
        .then(res => res.json())
        .then(data => this.setState({ data }));
      }

      render() {
        return (
          <Presentation data={this.state.data} />
        );
      }
    }
    return HOC;
  }
}

export default FetchContainer;