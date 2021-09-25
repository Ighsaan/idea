export default function ProfileHeader(props) {

    return (
        <div className="profile-header">
            <div className="profile-content">
                <div className="row">

                    <div className="col-md-2">
                        <img alt="logo" className="project-logo" src="https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/icon-vervet.png?alt=media&token=47ef7b2c-ace6-490a-bdbf-f74558bb6f40" />
                        </div>
                      <div className="col-md-10 profile-header-text">
                            <div className = "font-face-gm">
                                <p className="profile-header-name"> {props.ideaName} </p>
                                <p className="profile-header-caption">{props.subtitle}</p>
                                <p className="profile-header-date-created">Date Created: 19 September 2021</p>
                            </div> 
                        </div>   
                </div>
            </div>
        </div>
    )
}