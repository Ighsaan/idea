import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ProfileHeader() {
    
    let { url } = useRouteMatch();
    return (
        <div className="profile-nav">
            
            <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row profile-nav-bar">
                            <div className="col-md-3 profile-nav-bar-item">
                                <Link to={`${url}/about`} style={{ textDecoration: 'none' }}><p>ABOUT</p></Link>
                            </div>
                            <div className="col-md-3 profile-nav-bar-item">
                                <Link to={`${url}/resources`} style={{ textDecoration: 'none' }}><p>RESOURCES</p></Link>
                            </div>
                            <div className="col-md-3 profile-nav-bar-item">
                                <Link to={`${url}/timeline`} style={{ textDecoration: 'none' }}><p>TIMELINE</p></Link>
                            </div>
                            <div className="col-md-3 profile-nav-bar-item">
                                <Link to={`${url}/collaborators`} style={{ textDecoration: 'none' }}><p>COLLABORATORS</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
            </div>

        </div>
    )
}
