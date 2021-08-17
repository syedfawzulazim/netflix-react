import React from 'react';
import { Feature } from '../components';

export function FeatureContainer({ children }) {
    return (
        <Feature>
            <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
            <Feature.SubTitle> Watch anywhere.  Cancle at any time.</Feature.SubTitle>
            {children}
        </Feature>
    );
}

