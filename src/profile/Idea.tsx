import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
import ProfileBody from "./ProfileBody";
import ProfileFooter from "./ProfileFooter";
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
                <Route path="resources" element={<h1>test</h1>} />
                <Route path="timeline" element={<ProfileBody />} />
                <Route path="collaborators" element={<ProfileBody />} />
            </Routes>
            <ProfileFooter orgName={data.organization.name} imageUrl={data.organization.logo} socials={data.socials}/>
    </div>;
}
export default IdeaProfile;



