/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TrackWhereUniqueInput } from "../../track/base/TrackWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TrackUpdateManyWithoutPlaylistsInput {
  @Field(() => [TrackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrackWhereUniqueInput],
  })
  connect?: Array<TrackWhereUniqueInput>;

  @Field(() => [TrackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrackWhereUniqueInput],
  })
  disconnect?: Array<TrackWhereUniqueInput>;

  @Field(() => [TrackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrackWhereUniqueInput],
  })
  set?: Array<TrackWhereUniqueInput>;
}

export { TrackUpdateManyWithoutPlaylistsInput as TrackUpdateManyWithoutPlaylistsInput };
