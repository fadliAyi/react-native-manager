import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeeFetch();
    
    this.createDataSource(this.props);  
  }
  
  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps);
  }
  
  createDataSource({ employee }){
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1,r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(employee);
  }

  renderRow(employee) {
    console.log(employee);
    return <ListItem employee={employee} />
  }

  render(){
    console.log(this.props);
    return(
      <ListView enableEmptySections dataSource={this.dataSource} renderRow = {this.renderRow} />
    )
  }
}

const mapStateToProps = state => {
  const employee = _.map(state.employee, (val, uid) =>  {
    return  {...val, uid};
  });
  return { employee }
}

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
