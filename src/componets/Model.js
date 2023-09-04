import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '../contexts/Auth'
import WaveSvg from './WaveSvg'
const Model = () => {
    const [Auth,setAuth] = useAuth()

  return (
    <View style={styles.card}>
        <View style={{ flex: 2 / 3,height:200}}>
                <Image
                    source={{ uri: Auth.imgUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={{padding:30,gap:30}}>
                <Text style={styles.header}>{Auth.title}</Text>
        </View>
        <WaveSvg color="red" width={300} />
        <TouchableOpacity onPress={()=>setAuth(null)} style={{position:"absolute",top:20,right:20,padding:10,backgroundColor:"blue",borderRadius:200}}>
            <Text style={{color:"white"}}>close</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        position:"absolute",width:300,
        height:400,top:"50%",left:"50%",backgroundColor:"white",
        transform:[{translateX:-150},{translateY:-200}],
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.69,
        shadowRadius: 0.65,
        elevation: 9,
        padding:14,
        justifyContent:"space-between",
        zIndex:10
    },
    image: {
        width: "100%",
        // flex: 1,
        height: 200,
        // resizeMode:"cover"
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
    },
    butt: {
        alignItems: "center",
        padding: 15,
        borderRadius: 40,
        width: "100%"
      },
})
export default Model