import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);


    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //validation of inputs
    const isInvalid = password === '' || emailAddress === '';

    //Demo Sign In

    const demoSignIn = () => {
        setEmailAddress('demo@gmail.com');
        setPassword('123123');
    }

    const handleSignIn = (event) => {
        event.preventDefault();


        firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() => {
            history.push(ROUTES.BROWSE);
        })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };


    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Submit onClick={demoSignIn} >
                        Demo Sign In
                    </Form.Submit>

                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is proceted by Google reCAPTCHA to ensure you're not a bot. Learn More.
                    </Form.TextSmall>

                </Form>


            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
