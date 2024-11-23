// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v5.28.2
// source: src/protos/auth.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export const protobufPackage = "authPackage";

export enum LoginCode {
  SUCCESS = 0,
  FAIL = 1,
  UNRECOGNIZED = -1,
}

export function loginCodeFromJSON(object: any): LoginCode {
  switch (object) {
    case 0:
    case "SUCCESS":
      return LoginCode.SUCCESS;
    case 1:
    case "FAIL":
      return LoginCode.FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LoginCode.UNRECOGNIZED;
  }
}

export function loginCodeToJSON(object: LoginCode): string {
  switch (object) {
    case LoginCode.SUCCESS:
      return "SUCCESS";
    case LoginCode.FAIL:
      return "FAIL";
    case LoginCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LoginResult {
  loginCode: LoginCode;
  token?: string | undefined;
}

export interface LoginRequest {
  username: string;
  password: string;
}

function createBaseLoginResult(): LoginResult {
  return { loginCode: 0, token: undefined };
}

export const LoginResult: MessageFns<LoginResult> = {
  encode(message: LoginResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.loginCode !== 0) {
      writer.uint32(8).int32(message.loginCode);
    }
    if (message.token !== undefined) {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.loginCode = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.token = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResult {
    return {
      loginCode: isSet(object.loginCode) ? loginCodeFromJSON(object.loginCode) : 0,
      token: isSet(object.token) ? globalThis.String(object.token) : undefined,
    };
  },

  toJSON(message: LoginResult): unknown {
    const obj: any = {};
    if (message.loginCode !== 0) {
      obj.loginCode = loginCodeToJSON(message.loginCode);
    }
    if (message.token !== undefined) {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResult>, I>>(base?: I): LoginResult {
    return LoginResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginResult>, I>>(object: I): LoginResult {
    const message = createBaseLoginResult();
    message.loginCode = object.loginCode ?? 0;
    message.token = object.token ?? undefined;
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { username: "", password: "" };
}

export const LoginRequest: MessageFns<LoginRequest> = {
  encode(message: LoginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  login: {
    path: "/authPackage.AuthService/login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LoginRequest) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LoginRequest.decode(value),
    responseSerialize: (value: LoginResult) => Buffer.from(LoginResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoginResult.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  login: handleUnaryCall<LoginRequest, LoginResult>;
}

export interface AuthServiceClient extends Client {
  login(request: LoginRequest, callback: (error: ServiceError | null, response: LoginResult) => void): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoginResult) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoginResult) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "authPackage.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
