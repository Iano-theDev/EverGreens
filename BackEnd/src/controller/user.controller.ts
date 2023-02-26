import {Request, Response} from 'express';
import UserModel from '../model/user.model';
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import db from '../Databasehelper/db-connection';

dotenv.config({path:path.resolve(__dirname,'../../.env')})

interface ExtendedRequest extends Request {
    body: {
        email: string;
        password: string;
        phone: string;
    },
    params: {
        id: string;
    }

}


// create a user

export const createUser = async (req: ExtendedRequest, res: Response) => {
    try {
        const {email, password, phone} = req.body;
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = {
            id: uuidv4() as string,
            email: email as string,
            password: hashedPassword,
            phone: phone as string
        }
        // check for connection
        if (db.checkConnection() as unknown as boolean) {
            const userCreated =await db.exec('InsertOrUpdateUser',{id: user.id, email: user.email, password: user.password, phone: user.phone, is_admin: '0', is_deleted: '0', is_sent: '0', created_at: new Date().toISOString()});

            if (userCreated){
                const token = jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: '1d' });
                res.status(200).json({token});
            }else
            {
                res.status(500).json({message: 'Error creating user'});
            }
        } else {
            res.status(500).json({message: 'Error connecting to database'});
        }

       
    } catch (error) {
        res.status(500).json(error);
    }
}


// login a user

export const loginUser = async (req: ExtendedRequest, res: Response) => {
    try {
        const {email, password} = req.body;
        if (db.checkConnection() as unknown as boolean) {
            const user = await db.exec('GetUserByEmail',{email: email});
            if (user.length > 0) {
                const validPassword = await bcrypt.compare(password, user[0].password);
                
                
                if (validPassword) {
                    
                    const token = jwt.sign(user[0], process.env.JWT_SECRET as string, {expiresIn: '1d'});
            
                    res.status(200).json({"token": token,user : user[0]});
                } else {
                    res.status(500).json({message: 'Invalid password'});
                }
            } else {
                res.status(500).json({message: 'Invalid email'});
            }
        } else {
            res.status(500).json({message: 'Error connecting to database'});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


// get a user

export const getUserById = async (req: ExtendedRequest, res: Response) => {
    try {
        const id = req.params.id;
        if (db.checkConnection() as unknown as boolean) {
            const userFound = await db.exec('GetUserById',{id:id});
            if (userFound.length > 0) {
                res.status(200).json(userFound[0]);
            } else {
                res.status(500).json({message: 'User not found'});
            }
        } else {
            res.status(500).json({message: 'Error connecting to database'});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

// update a user

export const updateUser = async (req:Request, res: Response) => {
    try {
        const id = req.params.id;
        // get user from database
        console.log("body",req.body);

   
        if (db.checkConnection() as unknown as boolean) {
            const userFound:UserModel[]= await db.exec('GetUserById',{id:id});
            if (userFound.length > 0) {
                const user = {
                    id: userFound[0].id,
                    email: req.body.email, 
                    password: req.body.password,
                    phone: req.body.phone ,
                    is_admin: req.body.is_admin,
                    is_deleted: req.body.is_deleted,
                    is_sent: req.body.is_sent ,
                    created_at: userFound[0].created_at
                }

                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);

                const userUpdated = await db.exec('InsertOrUpdateUser',user);
                if (userUpdated) {
                    res.status(200).json({message: 'User updated successfully', userUpdated});
                }
            } else {
                res.status(500).json({message: 'User not found'});
            }
        } else {
            res.status(500).json({message: 'Error connecting to database'});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


// delete a user

export const deleteUser = async (req:Request, res: Response) => {
    try {
        const id = req.params.id;
        if (db.checkConnection() as unknown as boolean) {
            const userFound:UserModel[] = await db.exec('GetUserById',{id:id});

            if (userFound.length > 0) {
                const user = {
                    id: userFound[0].id,
                    email: userFound[0].email,
                    password: userFound[0].password,
                    phone: userFound[0].phone,
                    isAdmin: userFound[0].is_admin,
                    isDeleted: userFound[0].is_deleted,
                    isSent: userFound[0].is_sent,
                    createdAt: userFound[0].created_at
                }

                 await db.exec('DeleteUser',{id: user.id});
            
                
                    res.status(200).json({message: 'User deleted successfully'});
               
            } else {
                res.status(500).json({message: 'User not found'});
            }
        } else {
            res.status(500).json({message: 'Error connecting to database'});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


// get all users

export const getAllUsers = async (req:Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {
            const users:UserModel[] = await db.exec('GetAllUsers');
            if (users.length > 0) {
                res.status(200).json(users);
            } else {
                res.status(200).json({message: 'No users found'});
            }
        } else {
            res.status(500).json({message: 'Error connecting to database'});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


