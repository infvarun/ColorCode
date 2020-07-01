/* To see this example in action rename this ile to App.js  */
import React from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ActivityIndicator, 
  Button, 
  Alert,
  Dimensions,
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS,
  Image
} from 'react-native';

import mypic from "./assets/image/varun.png";


const {height, width} = Dimensions.get("window");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0.5
    }
  }

  onButtonPress = () => {
    console.log(`${new Date().toLocaleTimeString()} Button Pressed`);
    Alert.alert(`I L💖ve You!`);
  }

 showPhoneInfo = () => {
    console.log(`Phone width: ${width}, Phone height: ${height}, Phone type: ${Platform.OS}`);
  }

  increaseProgress = () => {
    let tmp = this.state.progress;
    tmp += 0.1;
    this.setState({progress: tmp})
    //console.log("Progress ", progress);
  }

  render() {
    return(
      <View style={styles.page}>
  
        <Text style={{color: 'red'}}>Hi Shikha</Text>
        <Text style={{color: 'green'}}>Hey Kiara</Text>
        <Text>This is my first little mobile app</Text>
        <Text>Click the button to see the message for you</Text>
        <Button onPress={this.onButtonPress} title="Hello"/>
        <Text>Below is the example of ActivityIndicator component</Text>
        <ActivityIndicator size="large" color="orange" />
        <Text>Below will give info about phone. We will use it to render device specific component</Text>
        <Button onPress={this.showPhoneInfo} title="Phone Info" />
        <Text>Lets render device specific Progress bar. Change the value using button</Text>
        <Button onPress={this.increaseProgress} title="Increase Progress" />
        { Platform.OS === 'ios' && <ProgressViewIOS progress={this.state.progress} /> }
        { Platform.OS === 'android' && <ProgressBarAndroid style={styles.progress} progress={this.state.progress} indeterminate={false} styleAttr="Horizontal" color="blue" /> }

        <Image style={styles.img} source={mypic} />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  page: {
    padding: 50
  },
  img: {
    width: width - 100,
    height: 400,
    alignSelf: "center",
    borderRadius: 500
  },
  progress: {
    width: width - 100
  }


});

export default App; 
