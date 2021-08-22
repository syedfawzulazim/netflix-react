import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profile';
import { Header, Loading } from '../components';


export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState({});

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            {
                loading ? (
                    <Loading src={user.photoURL} />
                ) : (
                    <Loading.ReleaseBody />
                )
            }

            <Header src="joker1">Hello</Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );

}