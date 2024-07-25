import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpotifyAccountModuleBase } from "./base/spotifyAccount.module.base";
import { SpotifyAccountService } from "./spotifyAccount.service";
import { SpotifyAccountController } from "./spotifyAccount.controller";
import { SpotifyAccountResolver } from "./spotifyAccount.resolver";

@Module({
  imports: [SpotifyAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpotifyAccountController],
  providers: [SpotifyAccountService, SpotifyAccountResolver],
  exports: [SpotifyAccountService],
})
export class SpotifyAccountModule {}
