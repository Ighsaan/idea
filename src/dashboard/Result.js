import { Col, Card } from "react-bootstrap";
import './Dashboard.css';
function Result(props) {
    return (
        <div className="results">
                <Col className="result">
                    <Card className = "result-card">
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