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

var ChooseStartTimeView = React.createClass({
	render: function(){
		return(
      <View style={{ flex: 1, backgroundColor: '#FAF7F5'}}>
        <View style={styles.toolbar}>

            <TouchableOpacity
              style={styles.toolbarButton}
              onPress={() => this._back()}
              >
              <Image style={styles.toolbarImage}
                source={require('../../image/back.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolbarTitle}>
              <Text style={styles.toolbarTextTitle}></Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.toolbarButton}
              onPress={() => this._navigateTo('Main')}
              >
              <Text style={{ color: '#F89680' }}>完成</Text>
            </TouchableOpacity>

        </View>

        <View style={{ backgroundColor: '#FAF7F5', alignItems: 'center', justifyContent:'center', paddingTop: 36, paddingBottom: 24 }}>
          <Image style={{ width: 100, height: 100 }}
            source={require('../../image/start_time.png')} />
          <View style={{ marginTop: 12 }}>
            <Text style={{ color: '#F89680' }}>選擇你的入學年度</Text>
          </View>
        </View>

        <View style={{backgroundColor: '#FFF', flex: 1}}>
          <TouchableOpacity
          onPress={() => this._navigateTo('Main')}
          style={styles.listItem}>
            <Text>99</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('Main')}
          style={styles.listItem}>
            <Text>100</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('Main')}
          style={styles.listItem}>
            <Text>101</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('Main')}
          style={styles.listItem}>
            <Text>102</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('Main')}
          style={styles.listItem}>
            <Text>103</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('Main')}
          style={styles.listItem}>
            <Text>104</Text>
          </TouchableOpacity>
        </View>

      </View>

			)
	},
  _navigateTo: function(action) {
    switch(action) {
      case 'Main':
        this.props.navigator.push({
          id: 'Main'
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

module.exports = ChooseStartTimeView
