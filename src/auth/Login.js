import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { auth, signInWithGoogle } from '../services/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import './Login.css'
export default function Login() {

    const [user, loading] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/");
    }, [user, loading, history]);

  return (
    <section id="entry-page">
        <div className="login_panel">

            <div className="login_logoImage responsive">
                <img alt="logo" src="logo.svg" /> 
            </div>  

            <div className="google-btn" onClick={signInWithGoogle}>
                <div className="google-icon-wrapper">
                  <img alt="google-sign-in" class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                  <p class="btn-text"><b>Sign in with google</b></p>
            </div>
        </div>
    </section>
  );
}