import { useState } from 'react'
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
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hola mundo desde React!.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={this.increment}> Púchame </button>
            <p> Contador: {counter} </p>
          </header>
        </div>
      );
    }
  }

export default App

  /*
  
  
  
  
  
  
  
  function App() {
    //Usos de useState, crea elementos que almacenan
    //Para modificar los State se deben utilzar métodos
    const [counter, setCounter] = useState(0)
  
    function increamentCounter () {
      //counter += 1
      setCounter(counter + 1)
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola mundo desde React!.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={increamentCounter}> Púchame </button>
          <p> Contador: {counter} </p>
        </header>
      </div>
    );
  }
  
  export default App;

  */