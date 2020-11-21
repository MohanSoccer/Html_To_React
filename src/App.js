import React , {Suspense} from 'react'
import './App.css';
import  Base  from './Layout/base';

import { HashRouter , Switch , Route } from 'react-router-dom'

// const Base = React.lazy(() => import('./Layout/base'));

// Auth
const Login = React.lazy(() => import('../src/Views/Auth/Login'));

function App() {
  return (
   <React.Fragment>
     <HashRouter>
       <Suspense fallback = {<div>Loading....</div>} >
       <Switch>
       <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route path="/" name="Home" render={props => <Base {...props}/>} />
        </Switch>
        </Suspense>
     </HashRouter>
   </React.Fragment>
  );
}

export default App;
