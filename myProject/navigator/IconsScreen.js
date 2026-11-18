

import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text
} from 'react-native';

import Icons from '../components/Icons';
import ProductDetails from '../components/ProductDetail';
import ProductInfo from '../components/ProductInfo';

class IconsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedProduct: null
        };
    }

    render() {
        const { selectedProduct } = this.state;

        if (selectedProduct) {
            return (
                <ProductInfo
                    product={selectedProduct}
                    onBack={() => this.setState({
                        selectedProduct: null
                    })}
                />
            );
        }

        return (
            <ScrollView style={styles.screen}>

                <View style={styles.iconsRow}>
                    <Icons name="tablet" iconText="Tablet" />
                    <Icons name="mouse" iconText="Mouse" />
                    <Icons name="keyboard" iconText="Keyboard" />
                </View>

                <ProductDetails
                    onSelectProduct={(product) =>
                        this.setState({
                            selectedProduct: product
                        })
                    }
                />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },

    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 20,
    },
});

export default IconsScreen;
