import React, { useState } from 'react';
import './interface.css';
import '../shared/palette.css';
import '../shared/common/common.css';
import lofigirl1 from '../shared/assets/lofigirl1.jpg';
import googlelogo from '../shared/assets/googlelogo.png'

import {GoogleLogin, googleLogout, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { createOrGetUser } from '../utility/utility';
import axios from 'axios';


export default function Interface(props: any) {

  function closeup() {
    console.log('child close')
    props.close();
    
  }

  const login =  useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);

      console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
  });
  const user = false;


  return (
    <div className='interface dark'>
      {
        props.value ?

          <div className='signupin'>

            <button className='close' onClick={() => closeup()}>x</button>

            <div className='title'>Sign Up</div>
            
            <div>
              {
                user ?
                <div> logged in</div>
                :
                <div className='google'>
                 {/* <GoogleLogin onSuccess={(res) => {console.log(res)}} onError={() => {console.log('error')}}/> */}
                  <button onClick={() => login()}>
                    <img src={googlelogo} alt="google" />
                    Continue with Google
                  </button>
                </div>
              }
            </div>
            
            <div className='seperate'></div>

            <div className='signput'>
              <div className='tip'>
                username
              </div>
              <input placeholder='hamoodi'>

              </input>
            </div>
            <div className='signput'>
              <div className='tip'>
                password
              </div>
              <input placeholder='ahgf1!7184!*@'>

              </input>
            </div>
            <div className='signput'>
              <div className='tip'>
                email
              </div>
              <input placeholder='hamood@habibi.com'>

              </input>
            </div>

            <div className='disclaimer'>By signing up you agree to be cool.</div>

            <button>
              Sign up!
            </button>
          </div>
          :
          <div className='violate'>
            <div className='punchline'>
              <div className='punch'>
                Learn It. Own It. <br /> For Free. <br /> Always. {props.value ? "1" : "2"}
              </div>

              <div className='line'>
                Creating flashcards should never cost money.
              </div>
            </div>
            <button className='getstarted' onClick={() => props.signupin()}>
              Get Started
            </button>
          </div>
      }
      <div className='spacer-100'></div>

      <div className={props.value ? 'workspace worked' : 'workspace'}>
        <img className='lofigirl' src={lofigirl1}></img>
        {/* <div className='lofigirl1'>
        </div> */}
      </div>

    </div>
  );
}