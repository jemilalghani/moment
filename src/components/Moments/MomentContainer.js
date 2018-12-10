import React from 'react'
import './Moments.scss';

export default function MomentContainer(props) {
  const {mapped, title} = props;
  return (
    <div className="moment-container">
        {title}
      <div className="moment-wrapper">
        {mapped}
      </div>
    </div>
  )
}
