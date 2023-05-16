import { Button } from '@mui/material';
import React from 'react';
import { auth } from '../firebase';

function SignOut() {
    return (
        <div>
            <Button onClick={() => auth.signOut()}>
                Sign Out
            </Button>
            <h3>{auth.currentUser.displayName}</h3>
        </div>
    )
}

export default SignOut