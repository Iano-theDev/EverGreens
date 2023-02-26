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


// create a user model class to be used as a type for the user

class UserModel {
     id: string;
     email: string;
     password: string;
     created_at: string;
     is_admin: string;
     is_deleted: string;
     phone: string;
     is_sent: string;

    constructor(id: string, email: string, password: string, created_at: string, is_admin:string, is_deleted: string, phone: string, is_sent: string) {
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


export default UserModel;
