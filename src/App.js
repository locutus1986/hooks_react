import React from 'react';
import Accordion from './components/Accorion';

const items = [
    {
        title: 'what is Ract?',
        content: 'React is a front end javascript framwork'
    },
    {
        title: 'why use React',
        content: 'React is a favorite js library'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating componets'
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
    <div>
        <Accordion items={items}/>
    </div>
    )
};