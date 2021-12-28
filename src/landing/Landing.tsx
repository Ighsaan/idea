import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, logout } from "../services/firebase";
import { Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import IdeaProfile from "../profile/Idea"
import Dashboard from '../dashboard/Dashboard';

function LandingPage() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/login");
        setName(user.displayName);
    }, [user, loading, history]);
    
    let { path } = useRouteMatch();

    if(loading) return <div></div>
    return (
        <div className="dashboard">
            <Navbar bg="light" expand="lg">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>
                        <img className="homeLogo" alt="logo" src="favicon.ico" /> 
                    </Navbar.Brand>
                </Link>
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
                            <NavDropdown.Item href="#action3"><Navbar.Text onClick={logout}>Logout</Navbar.Text></NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path={`${path}/profile`} component={IdeaProfile} />
                <Route exact path={path} component={Dashboard} />
            </Switch>
        </div>
  );
}
export default LandingPage;