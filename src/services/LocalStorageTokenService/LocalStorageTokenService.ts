export interface TokenServiceInterface {
    getToken: () => string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
}

export const LocalStorageTokenService: TokenServiceInterface = class {
    static tokenProp = 'GITHUB_TOKEN';

    static getToken() {
        return localStorage.getItem(this.tokenProp);
    };

    static setToken(token: string) {
        localStorage.setItem(this.tokenProp, token);
    };

    static clearToken() {
        localStorage.removeItem(this.tokenProp);
    }
};

export default LocalStorageTokenService;