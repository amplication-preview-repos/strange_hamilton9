import { JsonValue } from "type-fest";
import { SpotifyAccount } from "../spotifyAccount/SpotifyAccount";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  spotifyAccounts?: Array<SpotifyAccount>;
};
