import { InputJsonValue } from "../../types";
import { SpotifyAccountUpdateManyWithoutUsersInput } from "./SpotifyAccountUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  spotifyAccounts?: SpotifyAccountUpdateManyWithoutUsersInput;
};
