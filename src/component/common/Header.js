// import library for making component

import React from 'react';
import { Text, View } from 'react-native';

// make componet

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return(
        <View style = { viewStyle }>
            <Text style={ textStyle }>{ props.text}</Text>
        </View>
    );
};

const styles = {
    viewStyle : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 50,
        paddingTop : 15,
        elevation : 3,
        position : 'relative'
        },

    textStyle : {
        fontSize: 25
    }
};

// make the component available to other part of app
export { Header };
