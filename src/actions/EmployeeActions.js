import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS}  from './types';
import { Actions, ActionConst } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
  const { currentUser } = firebase.auth();
  
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_CREATE });
    firebase.database().ref(`/users/${currentUser.uid}/emlployees`).push({name,phone,shift}).then(() => Actions.pop());
  } 
  /*injek variabel menggunakan `` */
}

export const employeeFetch = () => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/emlployees`).on('value', snapshot => { 
      dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()}) 
    });
  }
}

export const employeeSave = ({ name, phone, shift, uid }) =>  {
  const { currentUser  } = firebase.auth();
  return (dispatch) => {
     firebase.database().ref(`/users/${currentUser.uid}/emlployees/${uid}`)
      .update({ name, phone, shift })
      .then(() =>{
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS }); 
        Actions.pop(); 
    });
  }
}

export const employeeDelete = ({ uid }) => {
 const { currentUser } = firebase.auth(); 
  
 return () => {
  firebase.database().ref(`/users/${currentUser.uid}/emlployees/${uid}`)
  .remove()
  .then(() => {
    Actions.pop();
   })
 }
}
