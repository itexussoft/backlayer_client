import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'Helvetica',
    },
    logo: {
        width: 150,
        height: 107,
        marginBottom: 98
    },
    login_input: {
        width: 280,
        height: 48,
        borderWidth: 0,
        backgroundColor: '#F6F7FB',
        borderRadius: 5,
        marginBottom: 15,
        color: '#898989'
    },
    login_text: {
        color: '#898989',
        justifyContent: 'flex-start',
        marginBottom: 20
    },
    green_text: {
        color: '#31C5C3'
    },
    login_button: {
        backgroundColor: '#31C5C3',
        marginTop: 98,
        marginBottom: 30,
        width: 281,
        justifyContent: 'center'
    }
});

export default styles;
