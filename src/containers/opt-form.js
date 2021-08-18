import React from 'react';
import { OptForm } from '../components'

export function OptFormContainer() {
    return (
        <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
        </OptForm>
    );
}
