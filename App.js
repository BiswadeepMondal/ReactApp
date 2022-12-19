/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};



const CleverTap= require('clevertap-react-native');;

CleverTap.createNotificationChannel("biswa2", "biswa2", "Clevertap test", 5, true);
CleverTap.setDebugLevel(3);
CleverTap.addListener(CleverTap.CleverTapPushNotificationClicked, (event) => { console.log('handleCleverTapEvent', CleverTap.CleverTapPushNotificationClicked, event); });
CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (res) => {
  CleverTap.recordEvent('jkl')
 
  console.log("RES payload: ",res);
  var displayunit = JSON.parse(res.displayUnits[0]);
  console.log("WZRK_ID: ",displayunit.wzrk_id);

  //console.log("displayunit payload: ",displayunit);

  //var c_kv = JSON.parse(displayunit.custom_kv.myKey);
  //console.log("CleverTapDisplayUnitsLoaded 1",c_kv.imageUrl);

  CleverTap.pushDisplayUnitViewedEventForID(displayunit.wzrk_id);
  CleverTap.pushDisplayUnitClickedEventForID(displayunit.wzrk_id);
 
});
 //CleverTap.recordEvent('test')
 //CleverTap.recordEvent('test',{"gender":"MALE","data11":"sysyyfffvgtgtstttffffffffF,637a45578fa330881948c2ff, 637a3bf58fa330881948c26f, 63731db7f948a44a2df8e174, 637a6dbc8fa330881948c3f8, 637b5c0f5e2d133d1955c991, 637b1ce15e2d133d1955bf17, 637b1ca15e2d133d1955bed7, 637a72828fa330881948c4ca, 637a6f278fa330881948c437, 637a46078fa330881948c341, 637a3d958fa330881948c2b1, 637a3b768fa330881948c233, 637a39fb8fa330881948c1c3, 637a2c0a8fa330881948bf84, 637635c35d678b0641f9d078, 637a38968fa330881948c1a9, 637a37d58fa330881948c179, 637a32178fa330881948c0e8, 637a2fe78fa330881948c0a2, 637a2f388fa330881"})
 //CleverTap.recordEvent('test',{"gender":"FEMALE","data11":"sysyyfffvgtgtstttffffffffF,637a45578fa330881948c2ff, 637a3bf58fa330881948c26f, 63731db7f948a44a2df8e174, 637a6dbc8fa330881948c3f8, 637b5c0f5e2d133d1955c991, 637b1ce15e2d133d1955bf17, 637b1ca15e2d133d1955bed7, 637a72828fa330881948c4ca, 637a6f278fa330881948c437, 637a46078fa330881948c341, 637a3d958fa330881948c2b1, 637a3b768fa330881948c233, 637a39fb8fa330881948c1c3, 637a2c0a8fa330881948bf84, 637635c35d678b0641f9d078, 637a38968fa330881948c1a9, 637a37d58fa330881948c179, 637a32178fa330881948c0e8, 637a2fe78fa330881948c0a2, 637a2f388fa330881"})
     //CleverTap.recordEvent('SS_feedpage_launch')         
//CleverTap.recordEvent('SS_feedpage_launch',{"gender":"FEMALE","data11":"sysyyfffvgtgtstttffffffffF,637a45578fa330881948c2ff, 637a3bf58fa330881948c26f, 63731db7f948a44a2df8e174, 637a6dbc8fa330881948c3f8, 637b5c0f5e2d133d1955c991, 637b1ce15e2d133d1955bf17, 637b1ca15e2d133d1955bed7, 637a72828fa330881948c4ca, 637a6f278fa330881948c437, 637a46078fa330881948c341, 637a3d958fa330881948c2b1, 637a3b768fa330881948c233, 637a39fb8fa330881948c1c3, 637a2c0a8fa330881948bf84, 637635c35d678b0641f9d078, 637a38968fa330881948c1a9, 637a37d58fa330881948c179, 637a32178fa330881948c0e8, 637a2fe78fa330881948c0a2, 637a2f388fa330881"})
 
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <View style={styles.container}>
        <Button onPress={() => {
          
<<<<<<< HEAD
          CleverTap.recordEvent('SS_feedpage_launch')
=======
          CleverTap.recordEvent('keytest')
>>>>>>> f555993 (final)
          console.log("test event");
        //   CleverTap.getAllDisplayUnits((err, res) => {
        //     console.log("inside display units");
        //     console.log('All Display Units: ', res, err);
        //     var datasource= JSON.parse(res);
              
        //         this.setState({nativekey: datasource.wzrk_id}) //Store wzrk_id to use it as Unit_id  
        //         this.setState({ url: datasource.content[i].media.url})
        //         console.log(this.state.nativekey);
        //         console.log("Unit ID is"+this.state.nativekey)
              
          
        //  });
        }}
          title="Push event" />
      </View>
      <View style={styles.container}>
        <Button onPress={() => {
          
          CleverTap.recordEvent('SS_feedpage_launch',{"gender":"MALE","data11":"sysyyfffvgtgtstttffffffffF,637a45578fa330881948c2ff, 637a3bf58fa330881948c26f, 63731db7f948a44a2df8e174, 637a6dbc8fa330881948c3f8, 637b5c0f5e2d133d1955c991, 637b1ce15e2d133d1955bf17, 637b1ca15e2d133d1955bed7, 637a72828fa330881948c4ca, 637a6f278fa330881948c437, 637a46078fa330881948c341, 637a3d958fa330881948c2b1, 637a3b768fa330881948c233, 637a39fb8fa330881948c1c3, 637a2c0a8fa330881948bf84, 637635c35d678b0641f9d078, 637a38968fa330881948c1a9, 637a37d58fa330881948c179, 637a32178fa330881948c0e8, 637a2fe78fa330881948c0a2, 637a2f388fa330881"})
          console.log("test event MALE");
        
        }}
          title="Push event MALE" />
      </View>
      <View style={styles.container}>
        <Button onPress={() => {
          
          CleverTap.recordEvent('SS_feedpage_launch',{"gender":"FEMALE","data11":"sysyyfffvgtgtstttffffffffF,637a45578fa330881948c2ff, 637a3bf58fa330881948c26f, 63731db7f948a44a2df8e174, 637a6dbc8fa330881948c3f8, 637b5c0f5e2d133d1955c991, 637b1ce15e2d133d1955bf17, 637b1ca15e2d133d1955bed7, 637a72828fa330881948c4ca, 637a6f278fa330881948c437, 637a46078fa330881948c341, 637a3d958fa330881948c2b1, 637a3b768fa330881948c233, 637a39fb8fa330881948c1c3, 637a2c0a8fa330881948bf84, 637635c35d678b0641f9d078, 637a38968fa330881948c1a9, 637a37d58fa330881948c179, 637a32178fa330881948c0e8, 637a2fe78fa330881948c0a2, 637a2f388fa330881"})
          console.log("test event FEMALE");
        
        }}
          title="Push event FEMALE" />
      </View>
      <View style={styles.container}>
        <Button onPress={() => {
          CleverTap.recordEvent('notify');
        }}
          title="Push notification" />
      </View>

      <View style={styles.container}>
        <Button onPress={() =>
   {
     let profiledata ={
      'Name': 'Biswa React',
      'Identity': '8261',
      'Email' : 'BiswaReact@react.com',
      "MSG-push" : true,
      "MSG-email" : true,
      "MSG-sms" : true,
      "MSG-whatsapp" : true
     }
    CleverTap.onUserLogin(profiledata);
    CleverTap.recordEvent('profiledata',profiledata);
        
          }}       
        title="sign up" />
      </View>
     
    </View>

  );
};
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default App;
