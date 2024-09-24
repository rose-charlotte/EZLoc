export type SignInResponse =
    | {
          success: true;
          accessToken: string;
      }
    | {
          success: false;
          errorCode: SignInErrorCode;
      };

export const enum SignInErrorCode {
    InvalidUsernameOrPassword = "InvalidUsernameOrPassword",
}
