import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, logout } from "../services/firebase";
import { Navbar, NavDropdown, Form, FormControl, Row} from "react-bootstrap";
import Result from "./Result"

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    const mockData = [
        {projectName: "Fourthpull", imageUrl: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/4P%20Logo.png?alt=media&token=af4a7b1a-fbc4-4bf1-a0eb-7d3094166a15", subtitle: "Clothing brand", description:"Retro local streetwear from Cape Town"},
        {projectName: "Vervet", imageUrl: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/icon-vervet.png?alt=media&token=47ef7b2c-ace6-490a-bdbf-f74558bb6f40", subtitle: "Security through unity", description:"Remotely notify family and peers (Troop) by a click of a button when in an emergency situation"},
        {projectName: "Kaapse Dictionary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/logo%20(1).svg?alt=media&token=1082e04b-3bdf-47f8-8ded-8ea71f31875f", subtitle: "Cape Town Dictionary", description:"Kaapse dictionary is a registry of slang used in Cape Town (South Africa). It exists purely just because."},
        {projectName: "Dums", imageUrl: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/LOGO.svg?alt=media&token=c255621b-f9a3-417d-b48a-3f9d0427a59d", subtitle: "Dominoes", description:"Dominoes game made in unity played in a Cape Townian style"}
    ]
    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");
        setName(user.displayName);
    }, [user, loading, history]);

    return (
        <div className="dashboard">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">
                    <img className="homeLogo" alt="logo" src="favicon.ico" /> 
                </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: 
                        </Navbar.Text>
                        <NavDropdown title={name} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3"><Navbar.Text variant="outline-success" onClick={logout}>Logout</Navbar.Text></NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
            </Navbar>
            <div className="results">
                <Row xs={1} md={4}>
                    {mockData.map((_, idx) => (
                        <Result name={_.projectName} subtitle={_.subtitle} description={_.description} imageUrl={_.imageUrl}/>
                    ))}
                </Row>

            </div>
        </div>
  );
}
export default Dashboard;