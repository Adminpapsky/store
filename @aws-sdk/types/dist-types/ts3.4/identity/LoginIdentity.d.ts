import { Identity, IdentityProvider } from "./Identity";
export interface LoginIdentity extends Identity {
  readonly username: string;
  readonly password: string;
}
export declare type LoginIdentityProvider = IdentityProvider<LoginIdentity>;
