'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
  ToolbarAndroid
} = React;

var LoginView = React.createClass({
	render: function(){
		return(
      <View style={{ flex: 1, backgroundColor: '#FAF7F5', justifyContent:'center', alignItems: 'center'}}>

        <View style={{ marginBottom: 24, alignItems: 'center', justifyContent:'center' }}>
          <Image style={{ width: 142, height: 162 }}
            source={require('../../image/colorgy.png')} />
        </View>
        <TouchableOpacity
        onPress={() => this._navigateTo('chooseSchool')}
        style={{backgroundColor: '#4A90E2', paddingTop:8, paddingBottom:8,paddingLeft: 16, paddingRight: 16, flexDirection:'row', borderRadius: 4}}>
          <View style={{ marginRight: 24 }}>
            <Image style={{ width: 20, height: 20 }}
              source={require('../../image/fb_white.png')} />
          </View>
          <Text style={{color: '#FFF'}}>Facebook 登入</Text>
        </TouchableOpacity>

      </View>

			)
	},
  _navigateTo: function(action) {
    switch(action) {
      case 'chooseSchool':
        this.props.navigator.push({
          id: 'chooseSchool'
        })
        break;
    }
  },

	back: function(){

	}
});

var styles = StyleSheet.create({
	toolbar:{
    backgroundColor:'#FFFFFF',
    paddingTop:15,
    paddingBottom:15,
    flexDirection:'row'
  },
  toolbarButton:{
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  toolbarTitle:{
    flex:1,
    paddingLeft: 15,
    paddingRight: 15
  },
  toolbarText:{
    color:'#4A4A4A',
    textAlign:'center'
  },
  toolbarTextTitle:{
    color:'#3B3A3B',
    textAlign:'left',
    fontSize: 18,
  },
  toolbarImage:{
    width:20,
    height:20
  },
});

module.exports = LoginView
