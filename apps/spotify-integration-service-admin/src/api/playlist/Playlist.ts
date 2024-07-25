import { Track } from "../track/Track";
import { SpotifyAccount } from "../spotifyAccount/SpotifyAccount";

export type Playlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  spotifyId: string | null;
  name: string | null;
  description: string | null;
  tracks?: Array<Track>;
  spotifyAccount?: SpotifyAccount | null;
};
