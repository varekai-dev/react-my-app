import React from 'react';

import './post-list-item.css';

export default function PostListItem({
  label,
  onDelete,
  onToogleLike,
  onToogleImportant,
  important,
  like,
}) {
  let classNames = 'app-list-item d-flex justify-content-between';

  if (like) {
    classNames += ' like';
  }
  if (important) {
    classNames += ' important';
  }
  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onToogleLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm" onClick={onToogleImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
}
