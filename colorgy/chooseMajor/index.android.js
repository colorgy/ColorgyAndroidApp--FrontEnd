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

var ChooseMajorView = React.createClass({
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
              onPress={() => this._navigateTo('chooseStartTime')}
              >
              <Text style={{ color: '#F89680' }}>完成</Text>
            </TouchableOpacity>

        </View>

        <View style={{ backgroundColor: '#FAF7F5', alignItems: 'center', justifyContent:'center', paddingTop: 36, paddingBottom: 24 }}>
          <Image style={{ width: 100, height: 100 }}
            source={require('../../image/major.png')} />
          <View style={{ marginTop: 12 }}>
            <Text style={{ color: '#F89680' }}>選擇你的系所</Text>
          </View>
        </View>

        <View style={{backgroundColor: '#FFF', flex: 1}}>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseStartTime')}
          style={styles.listItem}>
            <Text>工商設計系</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseStartTime')}
          style={styles.listItem}>
            <Text>電資學士班</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseStartTime')}
          style={styles.listItem}>
            <Text>企業管理系</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this._navigateTo('chooseStartTime')}
          style={styles.listItem}>
            <Text>工程學士班</Text>
          </TouchableOpacity>
        </View>

      </View>

			)
	},
  _navigateTo: function(action) {
    switch(action) {
      case 'chooseStartTime':
        this.props.navigator.push({
          id: 'chooseStartTime'
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

module.exports = ChooseMajorView
