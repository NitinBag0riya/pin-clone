import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { getPhotos, getPhotosUsingKeyword } from './apis/FetchFromUnsplash'
import Header from './layout/Header';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';

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
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path = {"/"} component = {Home} exact={true}/>
        <Route path="*" exact={true} component={ () => "404 | You Lost ! "} />
      </Switch>
    </Router>

  );
}

export default App;
