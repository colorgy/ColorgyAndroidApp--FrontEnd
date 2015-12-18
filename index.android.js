/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} = React;

var MainView = require('./colorgy');
var EditCoursesView = require('./colorgy/editCourses');
var AddCoursesView = require('./colorgy/addCourses');
var CourseView = require('./colorgy/course');
var LoginView = require('./colorgy/login');
var ChooseSchoolView = require('./colorgy/chooseSchool');
var ChooseMajorView = require('./colorgy/chooseMajor');
var ChooseStartTimeView = require('./colorgy/chooseStartTime');

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});


var ColorgyAppAndroid = React.createClass({
  render: function() {
    return (
      <View style={{flex:1}}>
        <Navigator
          style={{flex:1}}
          initialRoute = {{ id: 'Main' }}
          renderScene={this._renderScene}
        />
      </View>
    );
  },
  _renderScene: function(route, navigator) {
    _navigator = navigator
    switch(route.id) {
      case 'Main':
        return (
          <MainView
            navigator={navigator} />
        );
      case 'editCourses':
        return (
          <EditCoursesView
            navigator={navigator} />
        );
      case 'addCourses':
        return (
          <AddCoursesView
            navigator={navigator} />
        );
      case 'login':
        return (
          <LoginView
            navigator={navigator} />
        );
      case 'course':
        return (
          <CourseView
            navigator={navigator} />
        );
      case 'chooseSchool':
        return (
          <ChooseSchoolView
            navigator={navigator} />
        );
      case 'chooseMajor':
        return (
          <ChooseMajorView
            navigator={navigator} />
        );
      case 'chooseStartTime':
        return (
          <ChooseStartTimeView
            navigator={navigator} />
        );
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ColorgyAppAndroid', () => ColorgyAppAndroid);
