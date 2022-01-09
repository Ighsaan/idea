import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
import ProfileBody from "./ProfileBody";
import ProfileFooter from "./ProfileFooter";
import "./Profile.css";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DataAccessor } from "../services/data-accessor";

type IdeaParams = {
    id: string;
};

function IdeaProfile() {

    const dataAccessor = new DataAccessor();
    let { path } = useRouteMatch();
    const { id } = useParams<IdeaParams>();

    const data = dataAccessor.getProjectData(id);
    return <div className="container-fluid profile ">
            <ProfileHeader ideaName={data.name} subtitle={data.subtitle} created_at={data.created_at} logoUrl={data.logo_url}/>
            <ProfileNav />
            <Switch>
                <Route path={`${path}/resources`}>
                    <h1>hello</h1>
                </Route>
                <Route path={`${path}/about`}>
                    <ProfileBody />
                </Route>
                <Route path={`${path}`}>
                    <ProfileBody />
                </Route>
            </Switch>
            <ProfileFooter orgName={data.organization.name} imageUrl={data.organization.logo} socials={data.socials}/>
    </div>;
}
export default IdeaProfile;



