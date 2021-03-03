
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateUserInput {
    email: string;
    name: string;
    lastName: string;
    password: string;
}

export interface UpdateUserInput {
    id: number;
    email?: string;
    name?: string;
    lastName?: string;
    password?: string;
}

export interface User {
    _id: string;
    email: string;
    name: string;
    lastName: string;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(id: number): User | Promise<User>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): User | Promise<User>;
}
