// package: massa.api.v1
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BytesMapFieldEntry extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): BytesMapFieldEntry;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): BytesMapFieldEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BytesMapFieldEntry.AsObject;
    static toObject(includeInstance: boolean, msg: BytesMapFieldEntry): BytesMapFieldEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BytesMapFieldEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BytesMapFieldEntry;
    static deserializeBinaryFromReader(message: BytesMapFieldEntry, reader: jspb.BinaryReader): BytesMapFieldEntry;
}

export namespace BytesMapFieldEntry {
    export type AsObject = {
        key: Uint8Array | string,
        value: Uint8Array | string,
    }
}

export class SecureShare extends jspb.Message { 
    getSerializedData(): Uint8Array | string;
    getSerializedData_asU8(): Uint8Array;
    getSerializedData_asB64(): string;
    setSerializedData(value: Uint8Array | string): SecureShare;
    getSignature(): string;
    setSignature(value: string): SecureShare;
    getContentCreatorPubKey(): string;
    setContentCreatorPubKey(value: string): SecureShare;
    getContentCreatorAddress(): string;
    setContentCreatorAddress(value: string): SecureShare;
    getId(): string;
    setId(value: string): SecureShare;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecureShare.AsObject;
    static toObject(includeInstance: boolean, msg: SecureShare): SecureShare.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecureShare, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecureShare;
    static deserializeBinaryFromReader(message: SecureShare, reader: jspb.BinaryReader): SecureShare;
}

export namespace SecureShare {
    export type AsObject = {
        serializedData: Uint8Array | string,
        signature: string,
        contentCreatorPubKey: string,
        contentCreatorAddress: string,
        id: string,
    }
}
