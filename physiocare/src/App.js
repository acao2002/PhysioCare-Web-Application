import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <div className ="home-page">
                <img 
                      alt="background"
                      className="background" 
                      src="assets/img/background.jpg"
                      style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                  />
                  <FrontPage/>
              </div>
          </Route>
          <Route exact path="/run">
              <div className ="home-page">
                  <FrontPage/>
              </div>
          </Route>
          <Route>
              <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
