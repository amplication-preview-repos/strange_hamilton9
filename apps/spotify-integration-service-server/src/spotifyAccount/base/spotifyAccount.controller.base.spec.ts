import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SpotifyAccountController } from "../spotifyAccount.controller";
import { SpotifyAccountService } from "../spotifyAccount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  spotifyId: "exampleSpotifyId",
  accessToken: "exampleAccessToken",
  refreshToken: "exampleRefreshToken",
  expiryDate: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  spotifyId: "exampleSpotifyId",
  accessToken: "exampleAccessToken",
  refreshToken: "exampleRefreshToken",
  expiryDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    spotifyId: "exampleSpotifyId",
    accessToken: "exampleAccessToken",
    refreshToken: "exampleRefreshToken",
    expiryDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  spotifyId: "exampleSpotifyId",
  accessToken: "exampleAccessToken",
  refreshToken: "exampleRefreshToken",
  expiryDate: new Date(),
};

const service = {
  createSpotifyAccount() {
    return CREATE_RESULT;
  },
  spotifyAccounts: () => FIND_MANY_RESULT,
  spotifyAccount: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("SpotifyAccount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SpotifyAccountService,
          useValue: service,
        },
      ],
      controllers: [SpotifyAccountController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /spotifyAccounts", async () => {
    await request(app.getHttpServer())
      .post("/spotifyAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
      });
  });

  test("GET /spotifyAccounts", async () => {
    await request(app.getHttpServer())
      .get("/spotifyAccounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          expiryDate: FIND_MANY_RESULT[0].expiryDate.toISOString(),
        },
      ]);
  });

  test("GET /spotifyAccounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/spotifyAccounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /spotifyAccounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/spotifyAccounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        expiryDate: FIND_ONE_RESULT.expiryDate.toISOString(),
      });
  });

  test("POST /spotifyAccounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/spotifyAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/spotifyAccounts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
