export default function ProfileHeader(props) {
    
    return (
        <div className="profile-nav">
            
            <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row profile-nav-bar">
                            <div className="col-md-4 selected">
                                <p>About</p>
                            </div>
                            <div className="col-md-4">
                                <p>Timeline</p>
                            </div>
                            <div className="col-md-4">
                                <p>Collaborators</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
            </div>
        </div>
    )
}