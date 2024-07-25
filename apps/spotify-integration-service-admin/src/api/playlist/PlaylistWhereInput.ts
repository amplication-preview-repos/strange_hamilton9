import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrackListRelationFilter } from "../track/TrackListRelationFilter";
import { SpotifyAccountWhereUniqueInput } from "../spotifyAccount/SpotifyAccountWhereUniqueInput";

export type PlaylistWhereInput = {
  id?: StringFilter;
  spotifyId?: StringNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  tracks?: TrackListRelationFilter;
  spotifyAccount?: SpotifyAccountWhereUniqueInput;
};
