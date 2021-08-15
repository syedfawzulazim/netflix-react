import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FeatureContainer } from '../containers/feature';
import { OptFormContainer } from '../containers/opt-form';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer>
                    <OptFormContainer />
                </FeatureContainer>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}
