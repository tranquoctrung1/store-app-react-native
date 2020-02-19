import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
import Drug from '../assets/drug.png';

import CartContext from '../context/Context';


export default class CategoryListItem extends React.Component {
    constructor(props) {
        super(props);

    }
    static contextType = CartContext;
    render() {
        // console.log(this.context)
        const { category, onPress } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.3} onPress={onPress} >
                <View style={styles.container}>
                    <Text style={styles.title}>{category.name}</Text>
                    <Image source={Drug} style={styles.categoryImg} ></Image>
                    <CartContext.Consumer>
                        {
                            ({addToCart}) => <Button title={"Mua"} onPress={() => addToCart(category)} />
                        }
                    </CartContext.Consumer>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    categoryImg: {
        width: 64,
        height: 64,
        marginTop: 10
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        justifyContent: 'center',
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: .2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 10
    }
}); 