import React from "react";
import "./Dashboard.css";
import { Row } from "react-bootstrap";
import Result from "./Result"
import { DataAccessor } from "../services/data-accessor";
import { Result as ResultType } from "../services/types/result-types";

function Dashboard() {

    const dataAccessor = new DataAccessor();
    let results: Array<ResultType> = dataAccessor.getResultData();
    return (
        <div className="results">
            <Row xs={1} md={4}>
                {results.map((_, idx) => (
                    <Result id={_.id} name={_.name} subtitle={_.subtitle} description={_.description} imageUrl={_.image_url}/>
                ))}
            </Row>
        </div>
  );
}
export default Dashboard;