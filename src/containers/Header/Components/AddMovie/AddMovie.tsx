import React, { Component } from 'react'
import styled from 'styled-components';

const AddMovieSc = styled.button`
    margin-right: 100px;
    background-color: #555555;
    border: none;
    width: 170px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F65261;
    font-size: 20px;
    border-radius: 3px;
    font-family: sans-serif;
`;
export class AddMovie extends Component {
    render() {
        return (
            <AddMovieSc>
                + ADD MOVIE
            </AddMovieSc>
        )
    }
}

export default AddMovie
