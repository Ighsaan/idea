export default function ProfileHeader(props) {
    
    return (
        <div className="profile-nav">
            
            <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row profile-nav-bar">
                            <div className="col-md-3 profile-nav-bar-item">
                                <p>ABOUT</p>
                            </div>
                            <div className="col-md-3 profile-nav-bar-item">
                                <p>RESOURCES</p>
                            </div>
                            <div className="col-md-3 profile-nav-bar-item">
                                <p>TIMELINE</p>
                            </div>
                            <div className="col-md-3 profile-nav-bar-item">
                                <p>COLLABORATORS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
            </div>
        </div>
    )
}
