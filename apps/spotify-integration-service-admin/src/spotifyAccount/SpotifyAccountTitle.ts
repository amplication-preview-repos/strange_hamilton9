import { SpotifyAccount as TSpotifyAccount } from "../api/spotifyAccount/SpotifyAccount";

export const SPOTIFYACCOUNT_TITLE_FIELD = "spotifyId";

export const SpotifyAccountTitle = (record: TSpotifyAccount): string => {
  return record.spotifyId?.toString() || String(record.id);
};
