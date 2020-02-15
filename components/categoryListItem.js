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


export default function CategoryListItem(props)
{
    const {category, onPress} = props;
    return (
        <TouchableOpacity activeOpacity={0.3} onPress={onPress} >
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image source={Drug} style={styles.categoryImg} ></Image>
                <Button title="Mua"></Button>
            </View>
        </TouchableOpacity>
    )
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
        shadowOffset: {width: 0, height: 0},
    }
}); 