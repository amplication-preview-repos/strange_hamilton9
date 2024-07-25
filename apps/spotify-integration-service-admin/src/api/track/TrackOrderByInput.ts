import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  spotifyId?: SortOrder;
  name?: SortOrder;
  artist?: SortOrder;
  album?: SortOrder;
  playlistId?: SortOrder;
};
