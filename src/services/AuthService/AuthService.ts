import { TokenServiceInterface } from '../LocalStorageTokenService/LocalStorageTokenService';
import { makeVar, ReactiveVar } from '@apollo/client';
import LocalStorageTokenService from '../LocalStorageTokenService';

interface AuthServiceConstructor {
    new (tokenProvider: TokenServiceInterface): AuthServiceInterface;
}

interface AuthServiceInterface {
    isLoggedIn: () => boolean;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthService: AuthServiceConstructor = class Auth implements AuthServiceInterface {
    constructor(tokenProvider: TokenServiceInterface) {
        this.tokenProvider = tokenProvider;
        this.isLoggedInVar = makeVar(!!this.tokenProvider.getToken());
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    private tokenProvider: TokenServiceInterface;
    private isLoggedInVar: ReactiveVar<boolean>;

    isLoggedIn() {
        return this.isLoggedInVar();
    }

    login(token: string) {
        this.tokenProvider.setToken(token);
        this.isLoggedInVar(true);
    }

    logout() {
        debugger;
        this.tokenProvider.clearToken();
        this.isLoggedInVar(false);
    }
};

export default new AuthService(LocalStorageTokenService);
