
import { Col, Card } from "react-bootstrap";
function Result(props) {
    return (
        <div className="results">
            <Col className="result">
                <Card>
                    <Card.Img className="result-img" variant="top" src={props.imageUrl} />
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
export default Result;