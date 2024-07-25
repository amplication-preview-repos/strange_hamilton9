import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlaylistTitle } from "../playlist/PlaylistTitle";

export const TrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="spotifyId" source="spotifyId" />
        <TextInput label="name" source="name" />
        <TextInput label="artist" source="artist" />
        <TextInput label="album" source="album" />
        <ReferenceInput
          source="playlist.id"
          reference="Playlist"
          label="Playlist"
        >
          <SelectInput optionText={PlaylistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
