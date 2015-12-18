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

var ChooseSchoolView = React.createClass({
	render: function(){
		return(
      <View style={{ flex: 1, backgroundColor: '#FAF7F5'}}>

        <View style={{ backgroundColor: '#FAF7F5', alignItems: 'center', justifyContent:'center', paddingTop: 72, paddingBottom: 24 }}>
          <Image style={{ width: 100, height: 100 }}
            source={require('../../image/school.png')} />
          <View style={{ marginTop: 12 }}>
            <Text style={{ color: '#F89680' }}>選擇你的學校</Text>
          </View>
        </View>

        <View style={{backgroundColor: '#FFF', flex: 1}}>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseMajor')}
          style={styles.listItem}>
            <Text>台灣科技大學</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseMajor')}
          style={styles.listItem}>
            <Text>台灣大學</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseMajor')}
          style={styles.listItem}>
            <Text>政治大學</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseMajor')}
          style={styles.listItem}>
            <Text>清華大學</Text>
          </TouchableOpacity>
        </View>

      </View>

			)
	},
  _navigateTo: function(action) {
    switch(action) {
      case 'chooseMajor':
        this.props.navigator.push({
          id: 'chooseMajor'
        })
        break;
    }
  },

	back: function(){

	}
});

var styles = StyleSheet.create({
  listItem:{
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 16
  },
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

module.exports = ChooseSchoolView
