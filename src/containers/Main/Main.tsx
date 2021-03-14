import React, { Component } from 'react'
import styled from 'styled-components';

import WrapperSc from '../../components/Wrapper/Wrapper'
import FiltersPanel from './Components/FiltersPanel/FiltersPanel'
import MovieList from './Components/MovieList/MovieList'

const MainSc = styled.div`
	flex: 1;
	background-color: #232323;
	color: #fff;

	a {
		color: #bdbdbd;
	}
`;

export class Main extends Component {
    render() {
        return (
            <MainSc>
                <WrapperSc>
                    <FiltersPanel />
                    <MovieList />
                </WrapperSc>
            </MainSc>
        )
    }
}

export default Main
