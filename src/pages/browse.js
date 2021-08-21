import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import { BrowserRouter } from 'react-router-dom';
import { BrowseContainer } from '../containers/browse';

export default function Signup() {

    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter({ series, films });

    return (

        <BrowseContainer slides={slides} />
    );
}
