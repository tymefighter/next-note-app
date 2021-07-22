"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Note {\n        id: ID!\n        title: String!\n        content: String!\n        author: String!\n    }\n\n    type Query {\n        notes: [Note!]!\n        note(id: ID!): Note\n    }\n\n    input NoteAdd {\n        title: String!\n        content: String!\n        author: String!\n    }\n\n    input NoteEdit {\n        id: ID!\n        title: String\n        content: String\n        author: String\n    }\n\n    type Mutation {\n        addNote(noteAdd: NoteAdd): Note\n        editNote(noteEdit: NoteEdit): Note\n    }\n"], ["\n    type Note {\n        id: ID!\n        title: String!\n        content: String!\n        author: String!\n    }\n\n    type Query {\n        notes: [Note!]!\n        note(id: ID!): Note\n    }\n\n    input NoteAdd {\n        title: String!\n        content: String!\n        author: String!\n    }\n\n    input NoteEdit {\n        id: ID!\n        title: String\n        content: String\n        author: String\n    }\n\n    type Mutation {\n        addNote(noteAdd: NoteAdd): Note\n        editNote(noteEdit: NoteEdit): Note\n    }\n"])));
exports["default"] = typeDefs;
var templateObject_1;
