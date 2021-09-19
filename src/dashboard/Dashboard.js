import React from "react";
import "./Dashboard.css";
import { Row } from "react-bootstrap";
import Result from "./Result"
import { DataAccessor } from "../services/data-accessor";

function Dashboard() {

    const dataAccessor = new DataAccessor();
    let results = dataAccessor.getResultData();
    return (
        <div className="results">
            <Row xs={1} md={4}>
                {results.map((_, idx) => (
                    <Result name={_.projectName} subtitle={_.subtitle} description={_.description} imageUrl={_.imageUrl}/>
                ))}
            </Row>
        </div>
  );
}
export default Dashboard;