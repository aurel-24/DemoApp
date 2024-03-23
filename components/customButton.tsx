import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type CustomButtonProps = {
    title: string;
}

const CustomButton = (props: CustomButtonProps) => {
    return (
        <Pressable style={styles.button}>
            <Text>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create(
    {
        button: {
            height: 55,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
            backgroundColor: '#3FAD5D'
        }
    }
);

export default CustomButton;