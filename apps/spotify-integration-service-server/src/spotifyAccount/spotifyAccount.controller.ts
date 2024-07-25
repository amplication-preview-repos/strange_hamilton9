import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpotifyAccountService } from "./spotifyAccount.service";
import { SpotifyAccountControllerBase } from "./base/spotifyAccount.controller.base";

@swagger.ApiTags("spotifyAccounts")
@common.Controller("spotifyAccounts")
export class SpotifyAccountController extends SpotifyAccountControllerBase {
  constructor(
    protected readonly service: SpotifyAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
