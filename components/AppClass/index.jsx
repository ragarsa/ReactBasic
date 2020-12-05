import { Component } from 'react'
import APPUI from '../AppUI'
import logo from '../../logo.svg'

class App extends React.Component{
  
    constructor(){ //Ciclo de vida de un componente 
      super()
  
      this.state = { //Se define las propiedades del componente 
        counter: 0
      }//Se puede utilizar callback
    }
  
    increment = () => {
      this.setState({
        counter: this.state.counter + 1
      }, () => console.log('Ya estuvo carnal') )
    }
    render (){
      return <APPUI counter={this.state.counter}>;
    }
  }

  export default App