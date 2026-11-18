
import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import iphone16 from '../images/iphone16.jpg';
import huawei from '../images/huawei.jpg';
import yalla from '../images/yallahabibi.jpg';

const shoeImages = {
    iphon16: iphone16,
    huawei: huawei,
    yalla: yalla,
};

class ProductInfo extends React.Component {

    render() {

        const { product, onBack } = this.props;

        return (

            <View style={styles.screen}>

                <Text style={styles.title}>
                    Product Details
                </Text>

                <Image
                    source={shoeImages[product.image]}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.name}>
                    {product.name}
                </Text>

                <Text style={styles.category}>
                    {product.category}
                </Text>

                <Text style={styles.description}>
                    {product.description}
                </Text>

                <Text style={styles.price}>
                    Price: {product.price}
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={onBack}
                >
                    <Text style={styles.buttonText}>
                        Go Back
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 25,
        alignItems: 'center',
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 25,
        color: '#222',
    },

    image: {
        width: '100%',
        height: 280,
        borderRadius: 15,
        backgroundColor: '#f2f2f2',
    },

    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 25,
        color: '#222',
    },

    category: {
        fontSize: 18,
        color: '#22c9e8',
        marginTop: 8,
    },

    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 24,
    },

    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#384053',
        marginTop: 25,
    },

    button: {
        backgroundColor: '#20c9ec',
        width: '100%',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 35,
    },

    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },

});

export default ProductInfo;
