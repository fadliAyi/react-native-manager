import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount(){
       // Initialize Firebase
        const config = {
            apiKey: "AIzaSyCWAEadpCtXhOCc-pMdCjKjtHvn3QJnA4Q",
            authDomain: "manager-app-ed8fd.firebaseapp.com",
            databaseURL: "https://manager-app-ed8fd.firebaseio.com",
            projectId: "manager-app-ed8fd",
            storageBucket: "manager-app-ed8fd.appspot.com",
            messagingSenderId: "603513716800"
        };
        firebase.initializeApp(config); 
    } 
    
    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
              <Router />
            </Provider>
        );
    }
}

export default App;
