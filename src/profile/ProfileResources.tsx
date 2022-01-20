import React from "react";
import { Row } from "react-bootstrap";
import { Resource as ResourceType} from "../services/types/project-types";
import Resource from "./component/Resource";

interface ProfileResourcesProps {
    resources: Array<ResourceType>
}

export default function ProfileResources(props: ProfileResourcesProps) {
    
    return (
        <div className="profile-body">
            <div className="profile-body-content">
                    <Row xs={1} md={4}>
                        {props.resources.map((_, idx) => (
                            <Resource key={idx} title={_.name} logoUrl={_.logo} link={_.url}/>
                        ))}
                    </Row>
            </div>
        </div>
    )
}