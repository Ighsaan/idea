export default function ProfileHeader(props) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    return (
        <div className="profile-header">
            <div className="profile-content">
                <div className="row">

                    <div className="col-md-2">
                        <img alt="logo" className="project-logo" src="https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/icon-vervet.png?alt=media&token=47ef7b2c-ace6-490a-bdbf-f74558bb6f40" />
                    </div>
                    <div className="col-md-10 profile-header-text">
                        <p className="profile-header-name"> {props.ideaName} </p>
                        <p className="profile-header-caption">{props.subtitle}</p>
                        <p className="profile-header-date-created">Date Created: 19 September 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}