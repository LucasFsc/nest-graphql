
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AuthDataInput {
    email: string;
    password: string;
}

export interface CreateUserInput {
    email: string;
    name: string;
    lastName: string;
    password: string;
    roles?: string[];
}

export interface UpdateUserInput {
    id: string;
    email?: string;
    name?: string;
    lastName?: string;
    password?: string;
    roles?: string[];
}

export interface AuthJWT {
    token: string;
}

export interface IQuery {
    whoAmI(): User | Promise<User>;
    users(): User[] | Promise<User[]>;
    user(id: string): User | Promise<User>;
}

export interface IMutation {
    login(authDataInput?: AuthDataInput): AuthJWT | Promise<AuthJWT>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: string): User | Promise<User>;
}

export interface User {
    _id: string;
    email: string;
    name: string;
    lastName: string;
    roles: string[];
}
