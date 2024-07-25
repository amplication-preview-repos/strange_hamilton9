import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";

export type TrackCreateInput = {
  spotifyId?: string | null;
  name?: string | null;
  artist?: string | null;
  album?: string | null;
  playlist?: PlaylistWhereUniqueInput | null;
};
