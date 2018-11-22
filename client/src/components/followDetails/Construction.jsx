import React from 'react';
import moment from 'moment';

const Construction = ({data}) => (
	<div>
		<div className="detail-title">
        construction
    </div>
    <div className="body">
        <div className="details module-group">
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Type and Style</div>
                    <div className="body">
                        {data.c_typeandstyle}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Dates</div>
                    <div className="body">
                        <span className="detail-module-title">Last remodel year: </span>
                        {moment(Date(data.c_builtin)).fromNow()}
                    </div>
                    <div className="body">
                        <span className="detail-module-title">Built in </span>
                        {moment(Date(data.c_remodel)).year()}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Materials</div>
                    <div className="body">
                        <span className="detail-module-title">Roof type: </span>
                        {data.c_roof}
                    </div>
                    <div className="body">
                        <span className="detail-module-title">Exterior material: </span>
                        {data.c_exterior}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Other Construction Features</div>
                    <div className="body">
                        <span className="detail-module-title">Stories: </span>
                        {data.c_other}
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
)

export default Construction;