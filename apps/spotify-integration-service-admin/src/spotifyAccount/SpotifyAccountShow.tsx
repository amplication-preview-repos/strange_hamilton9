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

import { SPOTIFYACCOUNT_TITLE_FIELD } from "./SpotifyAccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SpotifyAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="spotifyId" source="spotifyId" />
        <TextField label="accessToken" source="accessToken" />
        <TextField label="refreshToken" source="refreshToken" />
        <TextField label="expiryDate" source="expiryDate" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Playlist"
          target="spotifyAccountId"
          label="Playlists"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
