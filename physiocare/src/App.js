import React from 'react'; 
import {HashRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import Manual from './components/RunPage/Manual';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auto from './components/RunPage/Auto';
function App() {
  return (
    <React.Fragment>
      <HashRouter>
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
          <Route exact path="/index.html">
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
          <Route exact path="/auto">
              <div className ="home-page">
                  <img 
                      alt="background"
                      className="background" 
                      src="assets/img/background.jpg"
                      style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                  />
                  <Auto/>
              </div>
          </Route>
          <Route exact path="/manual">
              <div className ="home-page">
                  <img 
                      alt="background"
                      className="background" 
                      src="assets/img/background.jpg"
                      style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                  />
                  <Manual/>
              </div>
          </Route>
          <Route>
              <NotFound/>
          </Route>
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
