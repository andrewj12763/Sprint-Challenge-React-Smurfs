import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const SmurfWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: 0 0, 30px 30px;
  margin: 20px;
`
class Smurf extends React.Component {

  deleteSmurf = event => {
    event.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }

  render() {
  return (
    <SmurfWrapper>
      <button onClick={this.deleteSmurf}>X</button>
      <h4>Smurf ID: {this.props.id}</h4>
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
    </SmurfWrapper>
  );
}
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
