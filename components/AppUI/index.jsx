import logo from '../../logo.svg'
import { Paragraph } from '../common'

function AppUI(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           {/* <p>
              Hola mundo desde React!.
           </p> 
           
           */<Paragraph text = 'Hola mundo desde React!' />}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={this.increment}> Púchame </button>
            {
            <Paragraph text={`Contador: ${props.counter}`}/>
            /*<p> Contador: {counter} </p>*/}
          </header>
        </div>
    )
}