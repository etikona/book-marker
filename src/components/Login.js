import React from 'react';
import { Button } from 'react-bootstrap';


const Login = () => {
    return (
        <div>
        <h1 className='mb-5'>
            Bookmarker
        </h1>
        <Button><i className="fa-brands fa-google"></i> Sign in with Google</Button>
    <br />
        <Button className='mt-1'  variant='light'>Continue without sign in</Button>
        </div>
        
       
    );
};

export default Login;