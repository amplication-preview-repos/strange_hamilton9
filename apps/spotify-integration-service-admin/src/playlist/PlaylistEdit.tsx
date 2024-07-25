import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrackTitle } from "../track/TrackTitle";
import { SpotifyAccountTitle } from "../spotifyAccount/SpotifyAccountTitle";

export const PlaylistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="spotifyId" source="spotifyId" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="tracks"
          reference="Track"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrackTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="spotifyAccount.id"
          reference="SpotifyAccount"
          label="SpotifyAccount"
        >
          <SelectInput optionText={SpotifyAccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
