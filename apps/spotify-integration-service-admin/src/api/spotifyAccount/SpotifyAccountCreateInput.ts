import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaylistCreateNestedManyWithoutSpotifyAccountsInput } from "./PlaylistCreateNestedManyWithoutSpotifyAccountsInput";

export type SpotifyAccountCreateInput = {
  spotifyId?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  expiryDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  playlists?: PlaylistCreateNestedManyWithoutSpotifyAccountsInput;
};
