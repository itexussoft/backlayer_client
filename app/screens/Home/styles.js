import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: 125,
        backgroundColor: '#ffffff'
    },
    header_logo: {
        width: 50,
        height: 35
    },
    header_icons: {
    },
    header_icon_left: {
        width: 37,
        height: 37,
        borderRadius: 50,
        backgroundColor: '#3AD1BF',
        color: '#ffffff'
    },
    header_icon_left_text: {
        fontSize: 30,
        lineHeight: 35,
        color: '#ffffff'
    },
    header_icon_right: {
        width: 22,
        height: 27,
    },
    main_content: {
        paddingHorizontal: 5,
    },
    small_text: {
        fontSize: 18,
        lineHeight: 22,
        color: '#898989',
        marginTop: 40,
        marginBottom: 0
    },
    big_text: {
        fontSize: 40,
        lineHeight: 45,
        color: '#3AD1BF',
        fontWeight: 'bold',
        padding: 0
    },
    category_icon_big: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    segment_customize_btn_first: {
        borderRadius: 50,
        borderRightWidth: 0,
    },
    segment_customize_btn: {
        borderRightWidth: 0,
        borderLeftWidth: 0,
    },
    segment_customize_btn_last: {

    },
    segment_text: {
        fontSize: 8,
        lineHeight: 10
    },
    search_button: {
        justifyContent: 'center',
        backgroundColor: '#3AD1BF',
        color: '#ffffff',
        // textAlign: 'center'
    },
    search_button_icon: {
        marginLeft: 0,
        marginRight: 0,
        fontSize: 18
    },
    marginV10: {
        marginVertical: 10
    }
});

export default styles;
