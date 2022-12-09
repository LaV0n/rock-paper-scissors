import { StyleSheet, TouchableOpacity } from 'react-native';
import PhoneSVG from '../components/svgIcons/PhoneSVG';
import { Text, View } from '../components/Themed';
import {UserSVG} from "../components/svgIcons/UserSVG";

export const GameScreen=() =>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Player VS Phone</Text>
                <Text style={styles.title}>Score:</Text>
                <Text style={styles.title}>0-5</Text>
            </View>
            <View style={styles.block}>
                <View style={styles.phoneImg}>
                    <PhoneSVG />
                </View>
                <View style={styles.field}>
                    <Text>field</Text>
                </View>
                <View style={styles.userBlock}>
                    <View style={styles.userName}>
                        <UserSVG/>
                        <Text style={styles.user}>player</Text>
                    </View>
                    <View style={styles.panel}>
                        <Text>panel</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonGame}>
                        <Text style={styles.buttonText}>START</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        alignItems:'center',
        marginTop:'5%',
        width: '80%',
        height:'10%',
        display:'flex',
        justifyContent:'space-between',
    },
    block:{
       display:'flex',
        width:'90%',
        height:'85%',
        justifyContent:'center',
        alignItems:'center',
    },
    field:{
        width:'90%',
        height:'50%',
        borderRadius:30,
        backgroundColor:'rgba(248,178,12,0.82)',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    phoneImg:{
        width:'90%',
        height:'10%',
        alignItems:'center',
    },
    userBlock:{
        width:'90%',
        height:'40%',
        display:'flex',
        alignItems:'center',
    },
    panel:{
        width:'100%',
        height:'50%',
        borderStyle:'solid',
        borderColor:'#d59102',
        borderWidth:2,
        borderRadius:10,
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center'
    },
    userName:{
        width:'100%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonGame:{
        width:'90%',
        height:'20%',
        margin:10,
        borderRadius:30,
        backgroundColor:'rgb(115,243,35)',
        alignItems:'center',
        display:'flex',
        justifyContent:'space-around',
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#fff'
    },
    user:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:10
    },
});
