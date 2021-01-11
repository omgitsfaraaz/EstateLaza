import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';
import { Button } from './Button';

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 80%;
        height: 80%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-top: 2rem;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 80%;
        height: 80%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
    
    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-top: 2rem;
    }
`;

const InfoSection1 = ({descriptionOne, descriptionTwo, buttonLabel, reverse, imageLeft, imageRight, heading1}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft data-aos="fade-right" reverse={reverse}>
                    <h1>{heading1}</h1>
                    <img src={imageLeft} alt="home" />
                    <p>{descriptionOne}</p>
                    <Button to="/homes">{buttonLabel}<Arrow /></Button>
                </ColumnLeft>
                <ColumnRight data-aos="fade-left" reverse={reverse}>
                    <img src={imageRight} alt="home" />
                    <p>{descriptionTwo}</p>
                    <Button to="/homes">{buttonLabel}<Arrow /></Button>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection1;