// package: massa.api.v1
// file: slot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class IndexedSlot extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): Slot | undefined;
    setSlot(value?: Slot): IndexedSlot;
    getIndex(): number;
    setIndex(value: number): IndexedSlot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexedSlot.AsObject;
    static toObject(includeInstance: boolean, msg: IndexedSlot): IndexedSlot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexedSlot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexedSlot;
    static deserializeBinaryFromReader(message: IndexedSlot, reader: jspb.BinaryReader): IndexedSlot;
}

export namespace IndexedSlot {
    export type AsObject = {
        slot?: Slot.AsObject,
        index: number,
    }
}

export class Slot extends jspb.Message { 
    getPeriod(): number;
    setPeriod(value: number): Slot;
    getThread(): number;
    setThread(value: number): Slot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Slot.AsObject;
    static toObject(includeInstance: boolean, msg: Slot): Slot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Slot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Slot;
    static deserializeBinaryFromReader(message: Slot, reader: jspb.BinaryReader): Slot;
}

export namespace Slot {
    export type AsObject = {
        period: number,
        thread: number,
    }
}
