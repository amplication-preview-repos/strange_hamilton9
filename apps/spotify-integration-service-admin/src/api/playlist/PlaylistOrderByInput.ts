import { SortOrder } from "../../util/SortOrder";

export type PlaylistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  spotifyId?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  spotifyAccountId?: SortOrder;
};
