import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
import ProfileBody from "./ProfileBody";
import ProfileCollaborators from "./ProfileCollaborators";
import ProfileResources from "./ProfileResources";
import ProfileFooter from "./ProfileFooter";
import ProfileTimeline from "./ProfileTimeline";
import "./Profile.css";

import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DataAccessor } from "../services/data-accessor";

type IdeaParams = {
    id: string;
};

function IdeaProfile() {

    const dataAccessor = new DataAccessor();
    const { id } = useParams<IdeaParams>();

    const data = dataAccessor.getProjectData(id!);
    return <div className="container-fluid profile ">
            <ProfileHeader ideaName={data.name} subtitle={data.subtitle} created_at={data.created_at} logoUrl={data.logo_url}/>
            <ProfileNav />
            <Routes>
                <Route path="/" element={<ProfileBody />} />
                <Route path="resources" element={<ProfileResources resources={data.resources}/>} />
                <Route path="timeline" element={<ProfileTimeline events={data.events}/>} />
                <Route path="collaborators" element={<ProfileCollaborators collaborators={data.collaborators}/>} />
            </Routes>
            <ProfileFooter orgName={data.organization.name} imageUrl={data.organization.logo} socials={data.socials}/>
    </div>;
}
export default IdeaProfile;



