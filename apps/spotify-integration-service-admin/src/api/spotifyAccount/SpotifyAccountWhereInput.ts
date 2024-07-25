import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaylistListRelationFilter } from "../playlist/PlaylistListRelationFilter";

export type SpotifyAccountWhereInput = {
  id?: StringFilter;
  spotifyId?: StringNullableFilter;
  accessToken?: StringNullableFilter;
  refreshToken?: StringNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  playlists?: PlaylistListRelationFilter;
};
