import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SpotifyAccountListRelationFilter } from "../spotifyAccount/SpotifyAccountListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  spotifyAccounts?: SpotifyAccountListRelationFilter;
};
