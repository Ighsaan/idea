interface ProfileHeaderProps {
    ideaName: string,
    subtitle: string,
    logoUrl: string,
    created_at: string
}

export default function ProfileHeader(props: ProfileHeaderProps) {

    return (
        <div className="profile-header">
            <div className="profile-content">
                <div className="row">

                    <div className="col-md-2">
                        <img alt="logo" className="project-logo" src={props.logoUrl} />
                    </div>
                      <div className="col-md-10 profile-header-text">
                            <div className = "font-face-gm">
                                <p className="profile-header-name"> {props.ideaName} </p>
                                <p className="profile-header-caption">{props.subtitle}</p>
                                <p className="profile-header-date-created">Date Created: {props.created_at}</p>
                            </div> 
                        </div>   
                </div>
            </div>
        </div>
    )
}