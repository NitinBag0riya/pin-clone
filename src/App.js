import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from './screens/Home/Home';
import { Provider } from 'react-redux';
import { store } from './store'
import { SavedPins } from './screens/Saved/Saved';

function App() {

  useEffect( () => {
    
    // getPhotos()
    // .then(data => data.json())
    // .then(photos => {
    //   console.log('PHOTOS', photos)
    // }).catch(err => {
    //   console.log('Error', err)
    // });


    // getPhotosUsingKeyword('animal')
    // .then(data => data.json())
    // .then(photos => {
    //   console.log('PHOTOS', photos)
    // }).catch(err => {
    //   console.log('Error', err)
    // });



  }, [])

  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path = {"/"} component = {Home} exact={true}/>
          <Route path = {"/saved"} component = {SavedPins} exact={true}/>
          <Route path="*" exact={true} component={ () => "404 | You Lost ! "} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
