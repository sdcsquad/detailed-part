import React from 'react';
import ReactDOM from 'react-dom';
import FollowFact from './FollowFact.jsx';
import FollowDetails from './FollowDetails.jsx';
const FollowingContents = ({details}) => (
	<div className="following-contents">
      <FollowFact details = {details.factsAndFeatures}/>
      <FollowDetails details = {details}/>
  </div>
)

export default FollowingContents;