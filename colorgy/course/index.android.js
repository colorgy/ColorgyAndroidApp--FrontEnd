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

var CourseView = React.createClass({
	render: function(){
		return(
			<View style={{ flex: 1, backgroundColor: '#FAF7F5'}}>
        <View style={{ backgroundColor: '#3B3A3B' }}>
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
                onPress={() => this._navigateTo('addCourses')}
                >
                <Text></Text>
              </TouchableOpacity>

          </View>
          <View style={{marginTop: 60, marginBottom: 24, marginLeft: 15}}>
            <Text style={{fontSize: 24, color: '#FFFFFF'}}>設計史</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#FFFFFF',  }}>
          <View style={{flexDirection:'row', borderBottomWidth:2, borderBottomColor:'#FAF7F5'}}>
            <View style={{ flex: 1, paddingTop: 12, paddingBottom: 12, borderRightWidth:1, borderRightColor:'#FAF7F5' }}>
              <View style={{flexDirection:'row', justifyContent: 'center'}}>
                <Image style={{ width: 20, height: 20, marginRight: 8 }}
                  source={require('../../image/lecturer.png')} />
                <Text>王大明</Text>
              </View>
            </View>
            <View style={{ flex: 1, paddingTop: 12, paddingBottom: 12, borderLeftWidth:1, borderLeftColor:'#FAF7F5' }}>
              <View style={{flexDirection:'row', justifyContent: 'center'}}>
                <Image style={{ width: 20, height: 20, marginRight: 8 }}
                  source={require('../../image/course_code.png')} />
                <Text>C111222333</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row' }}>
            <View style={{ flex: 1, paddingTop: 12, paddingBottom: 12, borderRightWidth:1, borderRightColor:'#FAF7F5' }}>
              <View style={{flexDirection:'row', justifyContent: 'center'}}>
                <Image style={{ width: 20, height: 20, marginRight: 8 }}
                  source={require('../../image/credit.png')} />
                <Text>3</Text>
              </View>
            </View>
            <View style={{ flex: 1, paddingTop: 12, paddingBottom: 12, borderLeftWidth:1, borderLeftColor:'#FAF7F5' }}>
              <View style={{flexDirection:'row', justifyContent: 'center'}}>
                <Image style={{ width: 20, height: 20, marginRight: 8 }}
                  source={require('../../image/time.png')} />
                <Text>Wed345</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: '#FFFFFF', marginTop: 48 }}>
          <View style={{flexDirection:'row', paddingLeft: 15, paddingTop: 15, paddingRight: 15, paddingBottom: 15}}>
            <Image style={{ width: 20, height: 20, marginRight: 8 }}
              source={require('../../image/classmates.png')} />
            <Text>我的同學</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'center'}}>
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
          </View>
          <View style={{flexDirection:'row', justifyContent: 'center'}}>
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
            <Image style={{ width: 60, height: 60, marginRight: 8,marginLeft: 8,marginBottom: 8,marginTop: 8, borderRadius: 100 }}
              source={require('../../image/avatar.jpg')} />
          </View>
        </View>
			</View>

			)
	},
  _navigateTo: function(action) {
    switch(action) {
      case 'ChooseSchool':
        this.props.navigator.push({
          id: 'ChooseSchool'
        })
        break;
    }
  },

	back: function(){

	}
});

var styles = StyleSheet.create({
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

module.exports = CourseView
