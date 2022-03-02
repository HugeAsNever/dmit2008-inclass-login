import reactDom from 'react-dom';
import styled from 'styled-components';

const LonginPageStyles = styled.section`
    max-width: 400px;
    margin: 2rem auto;

    header{
    margin-bottom: 2rem;
    }

    h1{
        font-size: 2rem;
    }

    .Toastify__toast {
        background-color: red;
        color: white;
    }

    .Toastify__progress-bar--error {
        background-color: blue;
    }
`;



const FormControl = styled.div`
    margin-bottom: 1.5rem;
`;

export {LonginPageStyles, FormControl};