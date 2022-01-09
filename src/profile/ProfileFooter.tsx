
import React from 'react';
import { SocialIcon } from 'react-social-icons';

interface ProfileFooterProps {
    orgName: string,
    imageUrl: string,
    socials: Array<string>
}

export default function ProfileFooter(props: ProfileFooterProps) {
    
    return (
        <div className="profile-footer">
            <div className="row">
                <div className="col-md-4">
                        <div className="profile-owner">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="align-items-center">
                                        <img  className="owner-logo " src={props.imageUrl} alt="Avatar" />
                                    </div>
                                </div>
                                <div className="col-md-9 profile-owner-name">
                                    <span className="justify-content-center align-self-center">{props.orgName}</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-8">
                    <div className="social align-items-center">
                        {props.socials.map(x => <SocialIcon url={x} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}