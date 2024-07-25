import { InputJsonValue } from "../../types";
import { SpotifyAccountCreateNestedManyWithoutUsersInput } from "./SpotifyAccountCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  spotifyAccounts?: SpotifyAccountCreateNestedManyWithoutUsersInput;
};
