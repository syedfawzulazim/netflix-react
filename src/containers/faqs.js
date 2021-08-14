import faqsData from '../fixtures/faqs.json';
import React from 'react';
import { Accordion } from '../components';
import { OptFormContainer } from './opt-form';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequestly Asked Questions</Accordion.Title>
            {
                faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))
            }

            <OptFormContainer />
        </Accordion>
    );
}