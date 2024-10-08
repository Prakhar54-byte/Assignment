import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
                // call another method as Login
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }


    }

    async login({ email, password }) {
        try {
            const userAccount = await this.account.createEmailSession(email, password);
            if (userAccount) {
                return userAccount;
            } else {
                throw new Error('Account not created');
            }
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            
            
        }

        return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            console.log("Appwrite service :: logOut :: error", error);
            
        }
    }
}


const authService = new AuthService();


export default authService;
