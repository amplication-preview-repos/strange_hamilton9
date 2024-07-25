import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SpotifyAccountResolverBase } from "./base/spotifyAccount.resolver.base";
import { SpotifyAccount } from "./base/SpotifyAccount";
import { SpotifyAccountService } from "./spotifyAccount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpotifyAccount)
export class SpotifyAccountResolver extends SpotifyAccountResolverBase {
  constructor(
    protected readonly service: SpotifyAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
