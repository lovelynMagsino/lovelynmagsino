import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Image source={require('./assets/Profile_115739.jpg')} style = {styles.prof}/>
        <Image source={require('./assets/Google_115735.jpg')} style = {styles.goole}/>
          <View style={styles.head}>
              <View style={{flexDirection:'row', alignContent: 'center', alignItems:'center', justifyContent: 'center'}}>
                <Image source={require('./assets/search.png')} style = {styles.image}/>
                  <Text style={{}}>Search...</Text>
                            <Image source={require('./assets/mic.png')} style = {styles.micam}/>
                          <Image source={require('./assets/camera.png')} style = {styles.cam}/>
              </View>
         

          <StatusBar style="auto" />
          </View>

          <View>
          <View style={{flexDirection:'column'}}>
                <Image source={require('./assets/Secret_115736.jpg')} style = {styles.secrt}/>
                <Text>Write A Research Paper In A Week With This Secret Blueprint (Copy & Paste Template)
                </Text>
              </View>
              <Image source={require('./assets/Blpk_115731.jpg')} style = {styles.blackpink}/>
          </View>

          <View style={styles.footers}>
  <View style={{flexDirection:'column'}}>
    <Image source={require('./assets/asterisk.jpg')} style = {styles.icon} />
    <Text style ={{alignSelf:'center'}}>Discover</Text>
  </View>

  <View style={{flexDirection:'column'}}>
    <Image source={require('./assets/search.png')} style = {styles.icons} />
    <Text style ={{alignSelf:'center'}}>Search</Text>
  </View>

  <View style={{flexDirection:'column'}}>
    <Image source={require('./assets/save.png')} style = {styles.icon} />
    <Text style ={{alignSelf:'center'}}>Collections</Text>
  </View>
    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignContent:'center',
    padding: 5,
    marginTop:15,
  },
  image: {
    width: 40,
    height: 40,
  },
  head: {
    backgroundColor: '#ced6e0',
    marginTop: '0',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginleft: 10,
    borderRadius: 20,
    width: 250,
    height: 35,
  },
  micam: {
    width: 13,
    height: 13,
    alignSelf: 'absolute',
    left: 100,
  },
  cam: {
    width: 13,
    height: 13,
    alignSelf: 'absolute',
    left: 120,
  },
  goole: {
    width: 120,
    height: 60,
    alignSelf: 'center',
  },
  secrt: {
    width: 280,
    height:200,
    alignSelf: 'center',
  },
  blackpink: {
    width: 265,
    height:125,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  footers: {
    flexDirection:'row',
    gap:40,
   alignSelf:'center',
   alignContent:'center',
   alignItems:'center',
   padding: 5,
   marginTop:-25,
  },
  icon: {
    height:20,
    width:20,
    alignSelf:'center',
    marginTop: 0,
  },
  icons: {
    height:40,
    width:40,
    alignSelf:'center',
    marginTop: -10,
  },
  prof: {
    height: 30,
    width: 30,
    borderRadius: 20,
    alignSelf: 'absolute',
    left: 220,
    marginTop: -20,
  },
});
