import React from 'react';

const ActivityOnZillow = ({data}) => (
	<div>
		<div className="detail-title">
        Activity On Zillow
    </div>
    <div className="body">
        <div className="details module-group">
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="body">
                        <span className="detail-module-title">Days on Zillow:</span>
                        {data.daysOnZillow}
                    </div>
                    <div className="body">
                        <span className="detail-module-title">Views in the past 30 days:</span>
                        {data.pastThirtydayView}
                    </div>
                    <div className="body">
                        {data.savedLog}
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
)

export default ActivityOnZillow;