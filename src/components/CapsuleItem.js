import React from 'react';

const CapsuleItem = ({capsule}) => {
  return (
    <div className="capsule-item">
      <div className="capsule-title">
        <h4>{capsule.title}</h4>
      </div>
      <div className="capsule-body">
        <span>{capsule.chapters.length}</span>
        <p>{capsule.summary}</p>
      </div>
    </div>
  );
};

export default CapsuleItem;
