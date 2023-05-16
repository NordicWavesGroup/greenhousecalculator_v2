import React from 'react'
import './_the-header.scss'

import {
  TextInput,
  Button,
  Checkbox,
  Tooltip,
} from '@carbon/react';
import { NextOutline } from '@carbon/react/icons';

function Login() {
  return (<>
    <div className='login-header'> </div>
    <div className='login-header-name'> 
        <h2>Log in</h2>
    </div >
    <div className='login-header-second-name'>
        <p>Don't have an account?</p>
        <a href="/">Sign Up!</a>
    </div>
    <hr style={{ width: '100%', paddingLeft: '1.2rem', marginBottom:'16px'  }} />
    <div className='login-header-third-name'>
    
        <a href="/">Forgot ID?</a>
    </div>
    <div className='login-email'>
        <TextInput
            id="test2"
            labelText="Continue with NORDICid"
            placeholder="Email"
            size='lg'
        />
    </div>

    <div className='login-button-container'>
        <Button 
            renderIcon={NextOutline}
            className="login-button"
            kind='primary'
            size='lg'
        > Continue
        </Button>
    </div>
    <div className='login-checkbox-tooltip'>
        <Checkbox labelText="Remember" id="checked-2" />
        <Tooltip
            align="bottom"
            label="Your email and password will be save so you can enter your account faster in the future"
            tabIndex={0}
            triggerText="Tooltip label"
            >
            <button className="tooltip-trigger" type="button">
                ?   
            </button>
        </Tooltip>
    </div>
    <hr style={{ width: '100%', paddingLeft: '1.2rem', marginBottom:'16px'  }} />
    <fieldset>
        <div className='login-alternative-login'>
        <legend>Alternative logins</legend>
        </div>
        <div className='login-button-container2'>
        <Button 
            renderIcon={NextOutline}
            className="login-button2"
            kind='tertiary'
            size
        > Log in with Google
        </Button>
        </div>
    </fieldset>
    <hr style={{ width: '100%', paddingLeft: '1.2rem', marginBottom:'16px'  }} />
    <div className='login-needhelp'>
    <p>Need help?</p>
    <a href="/">Contact the NORDIC WAVES Team</a>
    </div>
  </>
  )
}

export default Login