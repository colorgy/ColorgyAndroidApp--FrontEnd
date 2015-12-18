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

var MainView = React.createClass({
	render: function(){
		return(
			<View style={{ flex: 1, backgroundColor: '#FAF7F5'}}>
				<View style={styles.toolbar}>

		      	<TouchableOpacity style={styles.toolbarTitle}>
		      		<Text style={styles.toolbarTextTitle}>我的課表</Text>
		      	</TouchableOpacity>

		      	<TouchableOpacity
		      		style={styles.toolbarButton}
		      		onPress={() => this._navigateTo('editCourses')}
		      		>
		      		<Image style={styles.toolbarImage}
		      			source={require('../image/edit.png')} />
		      	</TouchableOpacity>

		    </View>
				<View>
					<TouchableOpacity onPress={() => this._navigateTo('login')}>
						<Text>登入</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this._navigateTo('course')}>
						<Text>課程</Text>
					</TouchableOpacity>
				</View>
			</View>

			)
	},
	_navigateTo: function(action) {
		switch(action) {
			case 'editCourses':
				this.props.navigator.push({
					id: 'editCourses'
				})
				break;
			case 'login':
				this.props.navigator.push({
					id: 'login'
				})
				break;
			case 'course':
				this.props.navigator.push({
					id: 'course'
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

module.exports = MainView
