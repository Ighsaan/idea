
import { SocialIcon } from 'react-social-icons';
export default function ProfileFooter(props) {
    
    return (
        <div className="profile-footer">
            <div className="row">
                    <div className="col-md-4">
                            <div className="profile-owner">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="align-items-center">
                                            <img  className="owner-logo " src="https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/intel.png?alt=media&token=1cda783a-4e83-4ebb-92f4-3cc248552aeb" alt="Avatar" />
                                        </div>
                                    </div>
                                    <div className="col-md-9 profile-owner-name">
                                        <span className="justify-content-center align-self-center">Intel Corperation</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-8">
                        <div className="social align-items-center">
                            <SocialIcon url="https://twitter.com/jaketrent" style={{ height: 40, width: 40 }}/>
                            <SocialIcon url="https://github.com/jaketrent" style={{ height: 40, width: 40 }}/>
                        </div>
                    </div>
                {/* https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/intel.png?alt=media&token=1cda783a-4e83-4ebb-92f4-3cc248552aeb */}
            </div>
        </div>
    )
}