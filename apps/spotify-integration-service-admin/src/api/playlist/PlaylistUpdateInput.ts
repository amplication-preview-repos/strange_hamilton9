import { TrackUpdateManyWithoutPlaylistsInput } from "./TrackUpdateManyWithoutPlaylistsInput";
import { SpotifyAccountWhereUniqueInput } from "../spotifyAccount/SpotifyAccountWhereUniqueInput";

export type PlaylistUpdateInput = {
  spotifyId?: string | null;
  name?: string | null;
  description?: string | null;
  tracks?: TrackUpdateManyWithoutPlaylistsInput;
  spotifyAccount?: SpotifyAccountWhereUniqueInput | null;
};
