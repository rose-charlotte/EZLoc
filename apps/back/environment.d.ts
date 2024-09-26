declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            MONGODB_URI: string;
            ACCESS_TOKEN_EXPIRATION_MINUTES: number;
            REFRESH_TOKEN_EXPIRATION_MINUTES: number;
            ACCESS_TOKEN_SECRET: string;
            REFRESH_TOKEN_SECRET: string;
        }
    }
}

export {};
