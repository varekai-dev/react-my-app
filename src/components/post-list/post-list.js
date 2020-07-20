import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({ posts, onDelete, onToogleImportant, onToogleLike }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={id}>
        {/* <PostListItem label={item.label} important={item.important} /> */}
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToogleImportant={() => onToogleImportant(id)}
          onToogleLike={() => onToogleLike(id)}
        />
      </li>
    );
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
