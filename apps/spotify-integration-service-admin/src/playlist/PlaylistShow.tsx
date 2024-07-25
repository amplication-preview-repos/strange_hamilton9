import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PLAYLIST_TITLE_FIELD } from "./PlaylistTitle";
import { SPOTIFYACCOUNT_TITLE_FIELD } from "../spotifyAccount/SpotifyAccountTitle";

export const PlaylistShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Track"
          target="playlistId"
          label="Tracks"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
