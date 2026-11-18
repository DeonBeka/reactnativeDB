

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
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

const data = [
    {
        id: 1,
        name: 'iPhone 16',
        category: 'iPhone',
        description: 'A powerful smartphone with an amazing camera and modern design.',
        price: '$880',
        image: 'iphon16',
    },
    {
        id: 2,
        name: 'Huawei',
        category: 'Huawei',
        description: 'A stylish smartphone with excellent performance.',
        price: '$750',
        image: 'huawei',
    },
    {
        id: 3,
        name: 'Yalla Habibi',
        category: 'Samsung',
        description: 'A modern smartphone with a beautiful design.',
        price: '$990',
        image: 'yalla',
    },
];

class ProductDetails extends React.Component {

    render() {
        return (
            <View style={styles.screen}>

                <Text style={styles.main}>
                    Most popular products
                </Text>

                {data.map((item) => (

                    <TouchableOpacity
                        key={item.id}
                        style={styles.container}
                        activeOpacity={0.7}
                        onPress={() =>
    this.props.onSelectProduct(item)
}
                    >

                        <Image
                            source={shoeImages[item.image]}
                            style={styles.image}
                            resizeMode="cover"
                        />

                        <View style={styles.info}>

                            <Text style={styles.name}>
                                {item.name}
                            </Text>

                            <Text style={styles.category}>
                                {item.category}
                            </Text>

                            <Text style={styles.description}>
                                {item.description}
                            </Text>

                            <Text style={styles.price}>
                                {item.price}
                            </Text>

                        </View>

                    </TouchableOpacity>

                ))}

            </View>
        );
    }
}

const styles = StyleSheet.create({

    screen: {
        backgroundColor: '#fff',
        flex: 1,
    },

    main: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        marginHorizontal: 25,
        marginVertical: 20,
    },

    container: {
        flexDirection: 'row',
        marginHorizontal: 25,
        marginBottom: 30,
        alignItems: 'flex-start',
    },

    image: {
        width: 112,
        height: 130,
        borderRadius: 10,
        backgroundColor: '#eee',
    },

    info: {
        flex: 1,
        marginLeft: 12,
    },

    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#222',
    },

    category: {
        fontSize: 14,
        color: '#28c9e8',
        marginTop: 3,
    },

    description: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#333',
        marginTop: 4,
    },

    price: {
        alignSelf: 'flex-start',
        backgroundColor: '#384053',
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 9,
        paddingVertical: 3,
        borderRadius: 15,
        marginTop: 5,
        overflow: 'hidden',
    },

});

export default ProductDetails;
