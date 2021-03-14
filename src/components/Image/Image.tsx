import PropTypes from 'prop-types';
import React from 'react';

const imgStyle= {
	width: '300px',
	height: '430px',
}

const Image = (props: { src: string }) => <img style={imgStyle} src={props.src} alt=''/>;

Image.propTypes = {
	src: PropTypes.string
};

export default Image;
