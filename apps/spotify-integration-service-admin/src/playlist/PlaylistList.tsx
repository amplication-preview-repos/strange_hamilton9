import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SPOTIFYACCOUNT_TITLE_FIELD } from "../spotifyAccount/SpotifyAccountTitle";

export const PlaylistList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Playlists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="spotifyId" source="spotifyId" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <ReferenceField
          label="SpotifyAccount"
          source="spotifyaccount.id"
          reference="SpotifyAccount"
        >
          <TextField source={SPOTIFYACCOUNT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
