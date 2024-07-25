import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";

export type TrackUpdateInput = {
  spotifyId?: string | null;
  name?: string | null;
  artist?: string | null;
  album?: string | null;
  playlist?: PlaylistWhereUniqueInput | null;
};
