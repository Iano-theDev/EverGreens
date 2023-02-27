"use strict";
// CREATE TABLE Categories (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     is_top_level BIT NOT NULL DEFAULT 0,
Object.defineProperty(exports, "__esModule", { value: true });
//     CHECK (name <> ''),
//     CHECK (is_top_level IN (0,1)),
// );
// create a category model class to be used as a type for the category
class CategoryModel {
    constructor(id, name, is_top_level) {
        this.id = id;
        this.name = name;
        this.is_top_level = is_top_level;
    }
}
exports.default = CategoryModel;
