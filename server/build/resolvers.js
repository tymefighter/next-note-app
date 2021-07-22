"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var data_1 = __importDefault(require("./data"));
var resolvers = {
    Query: {
        notes: function () { return data_1["default"]; },
        note: function (parent, args) {
            var note = data_1["default"].find(function (note) { return note.id === args.id; });
            if (note === undefined)
                throw new apollo_server_1.UserInputError("Invalid Note ID provided");
            return note;
        }
    },
    Mutation: {
        addNote: function (parent, args) {
            var note = __assign(__assign({}, args.noteAdd), { id: data_1["default"].length.toString() });
            data_1["default"].push(note);
            return note;
        },
        editNote: function (parent, _a) {
            var noteEdit = _a.noteEdit;
            var note = data_1["default"].find(function (note) { return note.id === noteEdit.id; });
            if (note === undefined)
                throw new apollo_server_1.UserInputError("Invalid Note ID provided");
            if (noteEdit.title)
                note.title = noteEdit.title;
            if (noteEdit.author)
                note.author = noteEdit.author;
            if (noteEdit.content)
                note.author = noteEdit.content;
            return note;
        }
    },
    Note: {
        id: function (parent) { return parent.id; },
        title: function (parent) { return parent.title; },
        content: function (parent) { return parent.content; },
        author: function (parent) { return parent.author; }
    }
};
exports["default"] = resolvers;
