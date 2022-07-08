import React from 'react';
import { 
    Image,
    ImageBackgroundBase,
    Text,
    View 
} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'dodgerblue'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'orange'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 70,
    }
});

export default WelcomeScreen;