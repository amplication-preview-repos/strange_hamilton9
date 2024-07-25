import { User } from "../user/User";
import { Playlist } from "../playlist/Playlist";

export type SpotifyAccount = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  spotifyId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  expiryDate: Date | null;
  user?: User | null;
  playlists?: Array<Playlist>;
};
