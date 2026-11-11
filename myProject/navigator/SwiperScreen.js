import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Icons from '../components/Icons';
import ProductDetails from '../components/ProductDetail';
const SwiperScreen = ()=>{
    return(
        <>
          <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                autoplay
                activeDotColor='lightblue'
                autoplayTimeout={5}
                >
                    <View style={styles.item}>
                        <Image
                        source={require('../images/astonbaba.jpg')}
                        style={styles.ImageItem}
                        resizeMode='cover'
                        />
                    </View>
                    <View style={styles.item}>
                        <Image
                        source={require('../images/image2.png')}
                        style={styles.ImageItem}
                        resizeMode='cover'
                        />
                    </View>
                    <View style={styles.item}>
                        <Image
                        source={require('../images/image3.png')}
                        style={styles.ImageItem}
                        resizeMode='cover'
                        />
                    </View>
                </Swiper>
            </View>
        </View>
        <View style={styles.iconContainer}>
            <Icons name="amazon" iconsText="Iphone"/>
            <Icons name="alipay" iconsText="adroid"/>
            <Icons name="laptop" iconsText="lpatop"/>

        </View>
        <View>
            <ProductDetails image={require('../images/iphone16.jpg')} category="phone" stock="Yes" price="700$" name="Iphone16"/>
            <ProductDetails image={require('../images/huawei.jpg')} category="phone" stock="No" price="1,000,000,000,000,000,000,000$" name="Huawei"/>
            <ProductDetails image={require('../images/yallahabibi.jpg')} category="sign" stock="Yes" price="700$" name="yallahabibi"/>
    
        </View>
        </>
      
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },
    sliderContainer:{
        width: "90%",
        height: 200,
        justifyContent: 'center' ,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8,
    },
    ImageItem:{
        width: '100%',
        height: '100%',
        borderRadius:8,
    },
    item:{
        flex: 1,
        justifyContent: 'center',
    },
    iconContainers:{
        width: '100%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        marginTop: 35,
        fontSize:20,
        fontWeight: 'bold',
        marginBottom:15,
    },
    iconContainer:{
        width: '100%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default SwiperScreen;