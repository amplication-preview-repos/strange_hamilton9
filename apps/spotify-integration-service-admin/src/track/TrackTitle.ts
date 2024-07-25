import { Track as TTrack } from "../api/track/Track";

export const TRACK_TITLE_FIELD = "name";

export const TrackTitle = (record: TTrack): string => {
  return record.name?.toString() || String(record.id);
};
