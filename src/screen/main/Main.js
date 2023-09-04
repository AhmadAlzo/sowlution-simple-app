
import { View,  StyleSheet, Animated } from 'react-native'
import React,{useState,useEffect} from 'react'
import { STATUSBAR_HEIGHT, SCREEN_WIDTH } from "../../../constans"
import { appColors } from "../../data/color"
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import ScrollAnimation from '../../componets/ScrollAnimation';
import axios from "axios";
import SplahAnimationScreen from '../splashAnimation/SplahAnimationScreen';
import { useAuth } from '../../contexts/Auth';
import Model from '../../componets/Model';
const rayons = [SCREEN_WIDTH / 1.5, SCREEN_WIDTH * 1.35, SCREEN_WIDTH * 2.1, SCREEN_WIDTH * 2.9, SCREEN_WIDTH * 4.3]
const Main = () => {
  const [datafetch,setdatafetch]=useState([])
    const [loading ,setLoading] = useState(false);
    const [Auth,_]= useAuth()
    let headersList = {
      "Accept": "*/*",
      // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "StoreID": "4",
      "UserAddressID": "60877",
      "Authorization": "f44a4aabfc5992514d262d7f517327e7" 
     }
     let reqOptions = {
       url: "https://api.manoapp.com/api/v1/users/products/whats_new",
       method: "GET",
       headers: headersList,
     }
    useEffect(() => {
      const getdata = async () => {
        try {
          setLoading(true)
          let response = await axios.request(reqOptions);
          // console.log(response)
          let dataTemp = response.data["data"]["items"].slice(0,12).map(e=>e["categories"])
          .map(e=>{
            let ele = {
              imgUrl: e[0]["images"][0]["small"],
              title:e[0]["title"],
              userId:e[0]["created_at"]+  (Math.random()*100).toString()
            }
            return(ele)
          })
          setdatafetch(dataTemp)
        } catch (e) {
          console.error(e);
        } finally {
          setTimeout(() => setLoading(false), 4000)
        }
      };
      getdata();
  }, []);
  if (loading) {
      return (
          <SplahAnimationScreen />
      );
  }
  return (

    <View style={Styles.contant}>
      <LinearGradient
        colors={[appColors.status, appColors.status, appColors.status, appColors.status, appColors.status, appColors.status, appColors.red]}
        {...deg(0)}
        style={Styles.linear5}>
      </LinearGradient>
      <ScrollAnimation data={datafetch} raduis={rayons[3]} outputRange={[600, 100,   50, 0, 50,  100, 600]} />

      <LinearGradient
        colors={[appColors.status, appColors.red]}
        {...deg(0)}
        style={Styles.linear1}>
      </LinearGradient>
      {Auth!=null&&<Model/>}
    </View>
   
  )
}
const Styles = StyleSheet.create({
  contant: {
    flex: 1,
    position: "relative",
    // padding: 50,
    paddingTop: STATUSBAR_HEIGHT
  },
  linear1: {
    width: rayons[0],
    height: rayons[0],
    position: "absolute",
    bottom: -50,
    borderRadius: 999,
    left: SCREEN_WIDTH / 2 - rayons[0] / 2,
    // transform: [{translateX: }],
  },
  linear5: {
    width: rayons[4],
    height: rayons[4],
    position: "absolute",
    bottom: -rayons[4] / 2,
    borderRadius: 999,
    left: SCREEN_WIDTH / 2 - rayons[4] / 2,

  },
}); export default Main