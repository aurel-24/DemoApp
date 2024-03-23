import { useState } from "react";
import { View, Text, Image, TextInput, Pressable, StyleSheet, ViewStyle, Animated, Easing, ToastAndroid } from "react-native";
import CustomButton from "./components/customButton";

const App = () => {

    const [username, setUsername] = useState("");
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    const spin = spinValue.interpolate(
        {
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        }
    );

    const displayToast = (message: string) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.title}>Bienvenue !</Text>
                <Text style={styles.subtitle}>Connectez-vous pour continuer</Text>
                <Animated.Image source={require("./assets/logo.png")} style={{ alignSelf: "center", transform: [{ rotate: spin }], marginTop: 8 }} />
            </View>
            <View>
                <TextInput placeholder="Nom d'utilisateur" style={styles.input} value={username} onChangeText={(text) => { setUsername(text) }} />
                <TextInput placeholder="Mot de passe" style={styles.input} />
                <Text style={styles.forgottenPassword}>Mot de passe oublié ?</Text>
            </View>
            <View>
                <Pressable style={styles.primaryButton} onPress={() => { displayToast(username) }}>
                    <Text>Connexion</Text>
                </Pressable>
                <Pressable style={styles.secondaryButton}>
                    <Text>Inscription</Text>
                </Pressable>
            </View>
        </View>
    );
}

const button: ViewStyle = {
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
}

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#071F32',
            padding: 20
        },
        title: {
            fontSize: 35,
            color: '#F1F1F1',
            alignSelf: 'center',
            marginVertical: 24
        },
        subtitle: {
            alignSelf: 'center',
            fontSize: 16
        },
        input: {
            height: 55,
            borderRadius: 8,
            backgroundColor: '#32465C',
            paddingLeft: 20,
            marginBottom: 8
        },
        primaryButton: {
            backgroundColor: '#3FAD5D',
            ...button
        },
        secondaryButton: {
            backgroundColor: '#32465C',
            ...button
        },
        forgottenPassword: {
            alignSelf: 'flex-end'
        }
    }
);

export default App;