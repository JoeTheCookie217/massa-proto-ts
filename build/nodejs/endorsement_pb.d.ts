// package: massa.api.v1
// file: endorsement.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as slot_pb from "./slot_pb";

export class Endorsement extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): Endorsement;
    getIndex(): number;
    setIndex(value: number): Endorsement;
    getEndorsedBlock(): string;
    setEndorsedBlock(value: string): Endorsement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endorsement.AsObject;
    static toObject(includeInstance: boolean, msg: Endorsement): Endorsement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endorsement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endorsement;
    static deserializeBinaryFromReader(message: Endorsement, reader: jspb.BinaryReader): Endorsement;
}

export namespace Endorsement {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
        index: number,
        endorsedBlock: string,
    }
}

export class SignedEndorsement extends jspb.Message { 

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Endorsement | undefined;
    setContent(value?: Endorsement): SignedEndorsement;
    getSignature(): string;
    setSignature(value: string): SignedEndorsement;
    getContentCreatorPubKey(): string;
    setContentCreatorPubKey(value: string): SignedEndorsement;
    getContentCreatorAddress(): string;
    setContentCreatorAddress(value: string): SignedEndorsement;
    getId(): string;
    setId(value: string): SignedEndorsement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedEndorsement.AsObject;
    static toObject(includeInstance: boolean, msg: SignedEndorsement): SignedEndorsement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedEndorsement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedEndorsement;
    static deserializeBinaryFromReader(message: SignedEndorsement, reader: jspb.BinaryReader): SignedEndorsement;
}

export namespace SignedEndorsement {
    export type AsObject = {
        content?: Endorsement.AsObject,
        signature: string,
        contentCreatorPubKey: string,
        contentCreatorAddress: string,
        id: string,
    }
}
