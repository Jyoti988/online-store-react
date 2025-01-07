import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';

const Base = ({ title = "Page Title", description = "Welcome To Dynamic Store", children }) => {
    return (
        <>
            <Container>
                <h3 className="text-center">{title}</h3>
                <p className="text-center">{description}</p>
            </Container>
                {children}
                </>
    );
};

export default Base;
