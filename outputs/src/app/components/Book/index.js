"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = require("prop-types");
var react_native_1 = require("react-native");
var styles_1 = __importDefault(require("./styles"));
function Book(_a) {
    var image = _a.image, title = _a.title, author = _a.author;
    return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.book },
        react_1.default.createElement(react_native_1.Image, { source: { uri: image }, style: styles_1.default.image }),
        react_1.default.createElement(react_native_1.View, { style: styles_1.default.textContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.title }, title),
            react_1.default.createElement(react_native_1.Text, null, author))));
}
Book.defaultProps = {
    image: '',
    title: '',
    author: ''
};
Book.propTypes = {
    image: prop_types_1.string,
    title: prop_types_1.string.isRequired,
    author: prop_types_1.string.isRequired
};
exports.default = Book;
