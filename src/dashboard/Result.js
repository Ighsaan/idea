import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Dashboard.css';
function Result(props) {
    return (
        <Link to="/profile" style={{ textDecoration: 'none' }}>
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
        </Link>
    )
}
export default Result;