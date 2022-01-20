
import { Card } from "react-bootstrap";

interface ResourceProps {
    title: string,
    logoUrl: string,
    link: string
}

export default function Resource(props: ResourceProps) {

    return (
        <a href={props.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div className="results">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.logoUrl} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </a>
    )
}