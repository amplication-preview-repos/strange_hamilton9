import { TrackCreateNestedManyWithoutPlaylistsInput } from "./TrackCreateNestedManyWithoutPlaylistsInput";
import { SpotifyAccountWhereUniqueInput } from "../spotifyAccount/SpotifyAccountWhereUniqueInput";

export type PlaylistCreateInput = {
  spotifyId?: string | null;
  name?: string | null;
  description?: string | null;
  tracks?: TrackCreateNestedManyWithoutPlaylistsInput;
  spotifyAccount?: SpotifyAccountWhereUniqueInput | null;
};
