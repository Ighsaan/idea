import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
import ProfileBody from "./ProfileBody";
import ProfileFooter from "./ProfileFooter";
import "./Profile.css";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useHistory } from "react-router";
// import { auth } from "../services/firebase";

function IdeaProfile() {

    
//   let { topicId } = useParams();
    let ideaName = "Vervet";
    let subtitle = "Security through unity";
    return <div className="container-fluid profile ">
            <ProfileHeader ideaName={ideaName} subtitle={subtitle}/>
            <ProfileNav />
            <ProfileBody />
            <ProfileFooter />
    </div>;
}
export default IdeaProfile;



