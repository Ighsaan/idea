
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CollaboratorProps {
    name: string;
    image: string;
    link: string;
}

export default function Collaborator(props: CollaboratorProps) {

    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div className="results">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </Link>
    )
}