import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListItem from './ListItem';

const Button = styled.button`
  font-size: 18px;
  font-weight: 300;
  background: #ffb21a;
  border-radius: 52px;
  color: #fff;
  padding: 16px 20px 15px;
  text-decoration: none;
  -webkit-transition: background 80ms linear, opacity 1s linear;
  transition: background 80ms linear, opacity 1s linear;
  white-space: nowrap;

  &:hover {
    background: #faa600;
  }

  &:focus {
    outline: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  state = {
    page: 0,
    list: []
  };
  componentDidMount() {
    this.loadMore();
  }
  renderList = () => {
    const { list } = this.state;
    return list.map(item => {
      return <ListItem key={item.title} item={item} />;
    });
  };
  loadMore = (page = 0) => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then(res =>
        this.setState(prevState => ({
          list: prevState.list.concat(res.data.hits),
          page
        }))
      );
  };
  render() {
    const { list, page } = this.state;
    return (
      list.length !== 0 && (
        <Wrapper>
          {this.renderList()}
          <Button onClick={() => this.loadMore(page + 1)}>Load More</Button>
        </Wrapper>
      )
    );
  }
}

export default App;
