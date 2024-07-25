import { SpotifyAccountWhereInput } from "./SpotifyAccountWhereInput";
import { SpotifyAccountOrderByInput } from "./SpotifyAccountOrderByInput";

export type SpotifyAccountFindManyArgs = {
  where?: SpotifyAccountWhereInput;
  orderBy?: Array<SpotifyAccountOrderByInput>;
  skip?: number;
  take?: number;
};
