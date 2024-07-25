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
import { PLAYLIST_TITLE_FIELD } from "../playlist/PlaylistTitle";

export const TrackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tracks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="spotifyId" source="spotifyId" />
        <TextField label="name" source="name" />
        <TextField label="artist" source="artist" />
        <TextField label="album" source="album" />
        <ReferenceField
          label="Playlist"
          source="playlist.id"
          reference="Playlist"
        >
          <TextField source={PLAYLIST_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
