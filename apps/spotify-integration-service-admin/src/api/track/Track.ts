import { Playlist } from "../playlist/Playlist";

export type Track = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  spotifyId: string | null;
  name: string | null;
  artist: string | null;
  album: string | null;
  playlist?: Playlist | null;
};
