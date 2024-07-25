import { SortOrder } from "../../util/SortOrder";

export type SpotifyAccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  spotifyId?: SortOrder;
  accessToken?: SortOrder;
  refreshToken?: SortOrder;
  expiryDate?: SortOrder;
  userId?: SortOrder;
};
