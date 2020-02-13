import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Drug from '../assets/drug.png';


export default function CategoryListItem(props)
{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image source={Drug} style={styles.categoryImg} ></Image>
        </View>
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
        width: "90%",
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: .2,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 20
    }
}); 