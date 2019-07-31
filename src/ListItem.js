import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Item = styled.div`
  border-radius: 10px;
  border: 1px solid grey;
  box-shadow: 0 1px 5px 0 grey;
  width: 80%;
  margin: 10px;
  padding: 5px;
  a {
    text-decoration: none;
    color: black;
  }
  .item__title {
    font-size: 20px;
    font-weight: 700;
    padding: 5px 10px;
  }
  .item__title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .item__author {
    font-size: 14px;
    font-weight: normal;
    padding: 0 10px;
  }

  .item__date {
    align-items: center;
    box-sizing: border-box;
    color: grey;
    font-size: 12px;
    font-style: italic;
    padding: 10px 5px 8px 10px;
  }
`;

const ListItem = ({ item }) => {
  return (
    <Item>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <div className="item__title">{item.title}</div>
      </a>
      <div className="item__author">By {item.author}</div>
      <div className="item__date">{moment(item.created_at).fromNow()}</div>
    </Item>
  );
};

export default ListItem;
