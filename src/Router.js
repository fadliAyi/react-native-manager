import React from 'react';
import { Button } from './component/common';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar={true}> 
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login First"/>
      </Scene>
      <Scene key="main">
        <Scene key="employeeList"   renderRightButton={() => <Button link={press}>Add</Button>}
               component={EmployeeList} 
               title="Employee" initial/>
        <Scene key="employeeCreate" component={ EmployeeCreate } title="Create Employee" />
        <Scene key="employeeEdit" component={ EmployeeEdit } title= "Edit Employee" />
      </Scene>
      </Scene>
    </Router>
  ); 
}

const press = () => {
  Actions.employeeCreate();
}

export default RouterComponent;
/* untuk versi 4 wajib menggunukan kode ini key="root" */

