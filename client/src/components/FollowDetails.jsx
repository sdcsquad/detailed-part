import React from 'react';
import InteriorFeatures from './followDetails/InteriorFeatures.jsx';

const FollowDetails = ({details}) => (
		<div>
			<div className="follow-details">
	        <div className="details">

	        	<InteriorFeatures data = {details.interiorFeatures}/>
	        	<SpaceAndAmenities data = {details.spacesAndMenities}/>
	        	<Construction data = {details.construction}/>
	        	<ExteriorFeatures data = {details.exteriorFeatures}/>
	        	<Parking data = {details.parking}/>
	        	<Other data = {details.other}/>
	        	<ActivityOnZillow data = {details.activityOnZillow}/>
	        	
	        </div>
	    </div>
    </div>
  )
export default FollowDetails;