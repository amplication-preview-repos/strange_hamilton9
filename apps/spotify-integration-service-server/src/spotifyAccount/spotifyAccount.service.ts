import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpotifyAccountServiceBase } from "./base/spotifyAccount.service.base";

@Injectable()
export class SpotifyAccountService extends SpotifyAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
