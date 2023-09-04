import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import WaveSvg from '../WaveSvg'
import { appColors } from "../../data/color";

import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import { useAuth } from '../../contexts/Auth';

const  CardCarouselHome=({ item, index,ItemWidth })=> {
    const [_,setAuth] = useAuth()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>setAuth({imgUrl:item.imgUrl,title:item.title})}>
            <View style={{ flex: 2 / 3,height:200}}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
                {/* <WaveSvg color="white" width={ItemWidth} /> */}
            </View>
            <View style={{padding:30,gap:30}}>
                <Text style={styles.header}>{item.title}</Text>
                
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.69,
        shadowRadius: 0.65,
        elevation: 9,
        margin: 0,
        width:"100%",
        height:"100%",
        justifyContent:"space-between",
        overflow:"hidden"
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

export default CardCarouselHome;

