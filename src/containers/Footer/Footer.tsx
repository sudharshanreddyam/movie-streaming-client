import React, { Component } from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types'

import Logo from "../../assets/images/netflix.png";

const FooterSc = styled.div`
	background: #555;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LogoSc = styled.div`
    width: 200px;
    height: 150px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;


export class Footer extends Component {
    static propTypes = {

    }

    render() {
        return (
            <FooterSc>
                <LogoSc />
            </FooterSc>
        )
    }
}

export default Footer
