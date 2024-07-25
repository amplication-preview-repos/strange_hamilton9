import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { PlaylistTitle } from "../playlist/PlaylistTitle";

export const SpotifyAccountCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="spotifyId" source="spotifyId" />
        <TextInput label="accessToken" source="accessToken" />
        <TextInput label="refreshToken" source="refreshToken" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="playlists"
          reference="Playlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlaylistTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
