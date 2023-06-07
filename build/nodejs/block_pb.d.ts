// package: massa.api.v1
// file: block.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as endorsement_pb from "./endorsement_pb";
import * as operation_pb from "./operation_pb";
import * as slot_pb from "./slot_pb";

export class Block extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): SignedBlockHeader | undefined;
    setHeader(value?: SignedBlockHeader): Block;
    clearOperationsList(): void;
    getOperationsList(): Array<string>;
    setOperationsList(value: Array<string>): Block;
    addOperations(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        header?: SignedBlockHeader.AsObject,
        operationsList: Array<string>,
    }
}

export class FilledBlock extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): SignedBlockHeader | undefined;
    setHeader(value?: SignedBlockHeader): FilledBlock;
    clearOperationsList(): void;
    getOperationsList(): Array<FilledOperationTuple>;
    setOperationsList(value: Array<FilledOperationTuple>): FilledBlock;
    addOperations(value?: FilledOperationTuple, index?: number): FilledOperationTuple;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilledBlock.AsObject;
    static toObject(includeInstance: boolean, msg: FilledBlock): FilledBlock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilledBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilledBlock;
    static deserializeBinaryFromReader(message: FilledBlock, reader: jspb.BinaryReader): FilledBlock;
}

export namespace FilledBlock {
    export type AsObject = {
        header?: SignedBlockHeader.AsObject,
        operationsList: Array<FilledOperationTuple.AsObject>,
    }
}

export class BlockHeader extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): BlockHeader;
    clearParentsList(): void;
    getParentsList(): Array<string>;
    setParentsList(value: Array<string>): BlockHeader;
    addParents(value: string, index?: number): string;
    getOperationMerkleRoot(): string;
    setOperationMerkleRoot(value: string): BlockHeader;
    clearEndorsementsList(): void;
    getEndorsementsList(): Array<endorsement_pb.SignedEndorsement>;
    setEndorsementsList(value: Array<endorsement_pb.SignedEndorsement>): BlockHeader;
    addEndorsements(value?: endorsement_pb.SignedEndorsement, index?: number): endorsement_pb.SignedEndorsement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockHeader.AsObject;
    static toObject(includeInstance: boolean, msg: BlockHeader): BlockHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockHeader;
    static deserializeBinaryFromReader(message: BlockHeader, reader: jspb.BinaryReader): BlockHeader;
}

export namespace BlockHeader {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
        parentsList: Array<string>,
        operationMerkleRoot: string,
        endorsementsList: Array<endorsement_pb.SignedEndorsement.AsObject>,
    }
}

export class FilledOperationTuple extends jspb.Message { 
    getOperationId(): string;
    setOperationId(value: string): FilledOperationTuple;

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): operation_pb.SignedOperation | undefined;
    setOperation(value?: operation_pb.SignedOperation): FilledOperationTuple;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilledOperationTuple.AsObject;
    static toObject(includeInstance: boolean, msg: FilledOperationTuple): FilledOperationTuple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilledOperationTuple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilledOperationTuple;
    static deserializeBinaryFromReader(message: FilledOperationTuple, reader: jspb.BinaryReader): FilledOperationTuple;
}

export namespace FilledOperationTuple {
    export type AsObject = {
        operationId: string,
        operation?: operation_pb.SignedOperation.AsObject,
    }
}

export class SignedBlock extends jspb.Message { 

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Block | undefined;
    setContent(value?: Block): SignedBlock;
    getSignature(): string;
    setSignature(value: string): SignedBlock;
    getContentCreatorPubKey(): string;
    setContentCreatorPubKey(value: string): SignedBlock;
    getContentCreatorAddress(): string;
    setContentCreatorAddress(value: string): SignedBlock;
    getId(): string;
    setId(value: string): SignedBlock;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedBlock.AsObject;
    static toObject(includeInstance: boolean, msg: SignedBlock): SignedBlock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedBlock;
    static deserializeBinaryFromReader(message: SignedBlock, reader: jspb.BinaryReader): SignedBlock;
}

export namespace SignedBlock {
    export type AsObject = {
        content?: Block.AsObject,
        signature: string,
        contentCreatorPubKey: string,
        contentCreatorAddress: string,
        id: string,
    }
}

export class SignedBlockHeader extends jspb.Message { 

    hasContent(): boolean;
    clearContent(): void;
    getContent(): BlockHeader | undefined;
    setContent(value?: BlockHeader): SignedBlockHeader;
    getSignature(): string;
    setSignature(value: string): SignedBlockHeader;
    getContentCreatorPubKey(): string;
    setContentCreatorPubKey(value: string): SignedBlockHeader;
    getContentCreatorAddress(): string;
    setContentCreatorAddress(value: string): SignedBlockHeader;
    getId(): string;
    setId(value: string): SignedBlockHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedBlockHeader.AsObject;
    static toObject(includeInstance: boolean, msg: SignedBlockHeader): SignedBlockHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedBlockHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedBlockHeader;
    static deserializeBinaryFromReader(message: SignedBlockHeader, reader: jspb.BinaryReader): SignedBlockHeader;
}

export namespace SignedBlockHeader {
    export type AsObject = {
        content?: BlockHeader.AsObject,
        signature: string,
        contentCreatorPubKey: string,
        contentCreatorAddress: string,
        id: string,
    }
}

export class BlockWrapper extends jspb.Message { 
    getId(): string;
    setId(value: string): BlockWrapper;

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): Block | undefined;
    setBlock(value?: Block): BlockWrapper;
    clearStatusList(): void;
    getStatusList(): Array<BlockStatus>;
    setStatusList(value: Array<BlockStatus>): BlockWrapper;
    addStatus(value: BlockStatus, index?: number): BlockStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: BlockWrapper): BlockWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockWrapper;
    static deserializeBinaryFromReader(message: BlockWrapper, reader: jspb.BinaryReader): BlockWrapper;
}

export namespace BlockWrapper {
    export type AsObject = {
        id: string,
        block?: Block.AsObject,
        statusList: Array<BlockStatus>,
    }
}

export enum BlockStatus {
    BLOCK_STATUS_UNSPECIFIED = 0,
    BLOCK_STATUS_IN_BLOCKCLIQUE = 1,
    BLOCK_STATUS_FINAL = 2,
    BLOCK_STATUS_CANDIDATE = 3,
    BLOCK_STATUS_DISCARDED = 4,
}
