"use strict";
// CREATE TABLE Users (
//     id VARCHAR PRIMARY KEY, 
//     email VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at DATE NOT NULL DEFAULT GETDATE(),
//     is_admin BIT NOT NULL DEFAULT 0,
//     is_deleted BIT NOT NULL DEFAULT 1,
//     phone VARCHAR(255) NOT NULL,
//     is_sent BIT NOT NULL DEFAULT 0,
//     UNIQUE (email),
//     CHECK (is_admin IN (0,1)),
//     CHECK (email <> ''),
//     CHECK (password <> ''),
//     CHECK (created_at <= GETDATE()),
// );
Object.defineProperty(exports, "__esModule", { value: true });
// create a user model class to be used as a type for the user
class UserModel {
    constructor(id, email, password, created_at, is_admin, is_deleted, phone, is_sent) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
        this.is_admin = is_admin;
        this.is_deleted = is_deleted;
        this.phone = phone;
        this.is_sent = is_sent;
    }
}
exports.default = UserModel;
