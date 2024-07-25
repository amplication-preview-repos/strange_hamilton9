import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaylistUpdateManyWithoutSpotifyAccountsInput } from "./PlaylistUpdateManyWithoutSpotifyAccountsInput";

export type SpotifyAccountUpdateInput = {
  spotifyId?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  expiryDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  playlists?: PlaylistUpdateManyWithoutSpotifyAccountsInput;
};
