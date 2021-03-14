import React, { Component } from 'react'


const formWrappper = {
  display: 'flex',
  justifyContent: 'space-around',
}

const inputStyle = {
    height: '50px',
    width: '700px', 
    background: '#1C1C1C',
    opacity: '0.6',
    border: 'none',
    borderRadius: '1%',
    margin: '3px',
    color: '#565656',
    fontSize: '20px',
    padding: '0 10px'
}

const searchBtnStyle = {
    width: '180px',
    height: '50px',
    color: '#fff',
    fontSize: '22px',
    fontFamily: 'sans-serif',
    borderRadius: '3px',
    border: 'none',
    background: '#F65261',
    margin: '0 10px'
}

export class SearchBox extends Component {
    render() {
        return (
          <div style={formWrappper}>
            <form action="">
              <input style={inputStyle} type="text" placeholder="What do you want to search?" />
              <button style={searchBtnStyle} type="submit">SEARCH</button>
            </form>
          </div>
        );
    }
}

export default SearchBox
