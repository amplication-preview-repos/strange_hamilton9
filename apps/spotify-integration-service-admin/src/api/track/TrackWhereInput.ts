import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";

export type TrackWhereInput = {
  id?: StringFilter;
  spotifyId?: StringNullableFilter;
  name?: StringNullableFilter;
  artist?: StringNullableFilter;
  album?: StringNullableFilter;
  playlist?: PlaylistWhereUniqueInput;
};
