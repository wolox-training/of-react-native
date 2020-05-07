"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var colors_1 = require("@constants/colors");
var styles = react_native_1.StyleSheet.create({
    book: {
        backgroundColor: colors_1.COLORS.white,
        borderRadius: 5,
        elevation: 1,
        flexDirection: 'row',
        margin: 20,
        padding: 20,
        shadowColor: colors_1.COLORS.black,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.9
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        height: 100,
        marginRight: 15,
        width: 70
    },
    textContainer: {
        flex: 1
    }
});
exports.default = styles;
