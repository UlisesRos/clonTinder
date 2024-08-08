import './App.css'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TarjetasTinder from './TarjetasTinder';
import Botones from './Botones';
import ListadoChats from './ListadoChats';
import ChatIndividual from './ChatIndividual'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat/:persona'>
            <Header botonRetroceder='/chats' /> 
            <ChatIndividual />
          </Route>

          <Route path='/chats'>
            <Header botonRetroceder='/' /> 
            <ListadoChats />
          </Route>

          <Route path='/'>
            <Header />
            <TarjetasTinder />
            <Botones />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
