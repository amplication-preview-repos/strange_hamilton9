import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrackModuleBase } from "./base/track.module.base";
import { TrackService } from "./track.service";
import { TrackController } from "./track.controller";
import { TrackResolver } from "./track.resolver";

@Module({
  imports: [TrackModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrackController],
  providers: [TrackService, TrackResolver],
  exports: [TrackService],
})
export class TrackModule {}
