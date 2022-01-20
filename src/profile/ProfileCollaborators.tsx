import React from "react";
import { Row } from "react-bootstrap";
import { User } from "../services/types/project-types";
import Collaborator from "./component/Collaborator"

interface ProfileCollaboratorsProps {
    collaborators: Array<User>
}

export default function ProfileCollaborators(props: ProfileCollaboratorsProps) {
    
    return (
        <div className="profile-body">
            <div className="profile-body-content">
                    <Row xs={1} md={4}>
                        {props.collaborators.map((_, idx) => (
                            <Collaborator key={idx} name={_.name} image={_.image} link={_.url}/>
                        ))}
                    </Row>
            </div>
        </div>
    )
}