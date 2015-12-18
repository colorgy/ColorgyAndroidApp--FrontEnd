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
  ToolbarAndroid,
  TextInput
} = React;

var AddCoursesView = React.createClass({
  getInitialState: function(){
    return{
      text: ''
    }
  },
	render: function(){
		return(
			<View style={{ flex: 1, backgroundColor: '#FAF7F5'}}>
				<View style={styles.toolbar}>

            <TouchableOpacity
              style={styles.toolbarButton}
              onPress={() => this.back()}
              >
              <Image style={styles.toolbarImage}
                source={require('../../image/back.png')} />
            </TouchableOpacity>
            <View style={{flex: 1, height: 20, justifyContent:'center'}}>
  	      	  <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, fontSize: 18}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>

		      	<TouchableOpacity
		      		style={styles.toolbarButton}
              onPress={() => this._navigateTo('addCourses')}
              >
		      		<Image style={styles.toolbarImage}
		      			source={require('../../image/cross.png')} />
		      	</TouchableOpacity>

		    </View>
				<View>

          <View style={ styles.courseCard }>
            <View style={{ paddingTop: 15, paddingBottom: 20,flexDirection:'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20 }}>設計史</Text>
              <TouchableOpacity style={{ borderWidth: 1, borderColor: '#F89680', borderRadius: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 8, paddingRight: 8 }}>
                <Text style={{ textAlign:'center', color:'#F89680' }}>新增</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{ flex: 1, justifyContent:'center' }}>
                <View style={{ alignItems: 'center', marginBottom: 8 }}>
                  <Image style={{ width: 18, height: 18 }}
                    source={require('../../image/lecturer.png')} />
                </View>
                <Text style={{ textAlign: 'center' }}>王大明</Text>
              </View>
              <View style={{ flex: 1, justifyContent:'center' }}>
                <View style={{ alignItems: 'center', marginBottom: 8 }}>
                  <Image style={{ width: 18, height: 18 }}
                    source={require('../../image/course_code.png')} />
                </View>
                <Text style={{ textAlign: 'center' }}>C222211111</Text>
              </View>
              <View style={{ flex: 1, justifyContent:'center' }}>
                <View style={{ alignItems: 'center', marginBottom: 8 }}>
                  <Image style={{ width: 18, height: 18 }}
                    source={require('../../image/time.png')} />
                </View>
                <Text style={{ textAlign: 'center' }}>Wed345</Text>
              </View>
            </View>
          </View>


        </View>
			</View>

			)
	},
  _navigateTo: function(action) {
    switch(action) {
      case 'addCourses':
        this.props.navigator.push({
          id: 'addCourses'
        })
        break;
    }
  },

	back: function(){

	}
});

var styles = StyleSheet.create({
  courseCard:{
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 4,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#50E3C2'
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4
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
    width:15,
    height:15
  },
});

module.exports = AddCoursesView
