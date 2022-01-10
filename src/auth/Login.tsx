import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from '../services/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import './Login.css'
export default function Login() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) return;
      if (user) navigate("/");
    }, [user, loading, navigate]);

  return (
    <section id="entry-page">
        <div className="login_panel">

            <div className="login_logoImage responsive">
                <img alt="logo" src="logo.svg" /> 
            </div>  

            <div className="google-btn" onClick={signInWithGoogle}>
                <div className="google-icon-wrapper">
                  <img alt="google-sign-in" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                  <p className="btn-text"><b>Sign in with google</b></p>
            </div>
        </div>
    </section>
  );
}