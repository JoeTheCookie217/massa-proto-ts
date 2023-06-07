// package: massa.api.v1
// file: operation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Operation extends jspb.Message { 
    getFee(): number;
    setFee(value: number): Operation;
    getExpirePeriod(): number;
    setExpirePeriod(value: number): Operation;

    hasOp(): boolean;
    clearOp(): void;
    getOp(): OperationType | undefined;
    setOp(value?: OperationType): Operation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operation.AsObject;
    static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Operation;
    static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
    export type AsObject = {
        fee: number,
        expirePeriod: number,
        op?: OperationType.AsObject,
    }
}

export class OperationType extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): OperationType;

    hasRollBuy(): boolean;
    clearRollBuy(): void;
    getRollBuy(): RollBuy | undefined;
    setRollBuy(value?: RollBuy): OperationType;

    hasRollSell(): boolean;
    clearRollSell(): void;
    getRollSell(): RollSell | undefined;
    setRollSell(value?: RollSell): OperationType;

    hasExecutSc(): boolean;
    clearExecutSc(): void;
    getExecutSc(): ExecuteSC | undefined;
    setExecutSc(value?: ExecuteSC): OperationType;

    hasCallSc(): boolean;
    clearCallSc(): void;
    getCallSc(): CallSC | undefined;
    setCallSc(value?: CallSC): OperationType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationType.AsObject;
    static toObject(includeInstance: boolean, msg: OperationType): OperationType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationType;
    static deserializeBinaryFromReader(message: OperationType, reader: jspb.BinaryReader): OperationType;
}

export namespace OperationType {
    export type AsObject = {
        transaction?: Transaction.AsObject,
        rollBuy?: RollBuy.AsObject,
        rollSell?: RollSell.AsObject,
        executSc?: ExecuteSC.AsObject,
        callSc?: CallSC.AsObject,
    }
}

export class Transaction extends jspb.Message { 
    getRecipientAddress(): string;
    setRecipientAddress(value: string): Transaction;
    getAmount(): number;
    setAmount(value: number): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        recipientAddress: string,
        amount: number,
    }
}

export class RollBuy extends jspb.Message { 
    getRollCount(): number;
    setRollCount(value: number): RollBuy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RollBuy.AsObject;
    static toObject(includeInstance: boolean, msg: RollBuy): RollBuy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RollBuy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RollBuy;
    static deserializeBinaryFromReader(message: RollBuy, reader: jspb.BinaryReader): RollBuy;
}

export namespace RollBuy {
    export type AsObject = {
        rollCount: number,
    }
}

export class RollSell extends jspb.Message { 
    getRollCount(): number;
    setRollCount(value: number): RollSell;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RollSell.AsObject;
    static toObject(includeInstance: boolean, msg: RollSell): RollSell.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RollSell, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RollSell;
    static deserializeBinaryFromReader(message: RollSell, reader: jspb.BinaryReader): RollSell;
}

export namespace RollSell {
    export type AsObject = {
        rollCount: number,
    }
}

export class ExecuteSC extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ExecuteSC;
    getMaxCoins(): number;
    setMaxCoins(value: number): ExecuteSC;
    getMaxGas(): number;
    setMaxGas(value: number): ExecuteSC;
    clearDatastoreList(): void;
    getDatastoreList(): Array<common_pb.BytesMapFieldEntry>;
    setDatastoreList(value: Array<common_pb.BytesMapFieldEntry>): ExecuteSC;
    addDatastore(value?: common_pb.BytesMapFieldEntry, index?: number): common_pb.BytesMapFieldEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteSC.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteSC): ExecuteSC.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteSC, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteSC;
    static deserializeBinaryFromReader(message: ExecuteSC, reader: jspb.BinaryReader): ExecuteSC;
}

export namespace ExecuteSC {
    export type AsObject = {
        data: Uint8Array | string,
        maxCoins: number,
        maxGas: number,
        datastoreList: Array<common_pb.BytesMapFieldEntry.AsObject>,
    }
}

export class CallSC extends jspb.Message { 
    getTargetAddr(): string;
    setTargetAddr(value: string): CallSC;
    getTargetFunc(): string;
    setTargetFunc(value: string): CallSC;
    getParam(): Uint8Array | string;
    getParam_asU8(): Uint8Array;
    getParam_asB64(): string;
    setParam(value: Uint8Array | string): CallSC;
    getMaxGas(): number;
    setMaxGas(value: number): CallSC;
    getCoins(): number;
    setCoins(value: number): CallSC;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallSC.AsObject;
    static toObject(includeInstance: boolean, msg: CallSC): CallSC.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallSC, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallSC;
    static deserializeBinaryFromReader(message: CallSC, reader: jspb.BinaryReader): CallSC;
}

export namespace CallSC {
    export type AsObject = {
        targetAddr: string,
        targetFunc: string,
        param: Uint8Array | string,
        maxGas: number,
        coins: number,
    }
}

export class SignedOperation extends jspb.Message { 

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Operation | undefined;
    setContent(value?: Operation): SignedOperation;
    getSignature(): string;
    setSignature(value: string): SignedOperation;
    getContentCreatorPubKey(): string;
    setContentCreatorPubKey(value: string): SignedOperation;
    getContentCreatorAddress(): string;
    setContentCreatorAddress(value: string): SignedOperation;
    getId(): string;
    setId(value: string): SignedOperation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedOperation.AsObject;
    static toObject(includeInstance: boolean, msg: SignedOperation): SignedOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedOperation;
    static deserializeBinaryFromReader(message: SignedOperation, reader: jspb.BinaryReader): SignedOperation;
}

export namespace SignedOperation {
    export type AsObject = {
        content?: Operation.AsObject,
        signature: string,
        contentCreatorPubKey: string,
        contentCreatorAddress: string,
        id: string,
    }
}

export class OperationWrapper extends jspb.Message { 
    getId(): string;
    setId(value: string): OperationWrapper;
    clearBlockIdsList(): void;
    getBlockIdsList(): Array<string>;
    setBlockIdsList(value: Array<string>): OperationWrapper;
    addBlockIds(value: string, index?: number): string;
    getThread(): number;
    setThread(value: number): OperationWrapper;

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): SignedOperation | undefined;
    setOperation(value?: SignedOperation): OperationWrapper;
    clearStatusList(): void;
    getStatusList(): Array<OperationStatus>;
    setStatusList(value: Array<OperationStatus>): OperationWrapper;
    addStatus(value: OperationStatus, index?: number): OperationStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: OperationWrapper): OperationWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationWrapper;
    static deserializeBinaryFromReader(message: OperationWrapper, reader: jspb.BinaryReader): OperationWrapper;
}

export namespace OperationWrapper {
    export type AsObject = {
        id: string,
        blockIdsList: Array<string>,
        thread: number,
        operation?: SignedOperation.AsObject,
        statusList: Array<OperationStatus>,
    }
}

export enum OperationStatus {
    OPERATION_STATUS_UNSPECIFIED = 0,
    OPERATION_STATUS_PENDING = 1,
    OPERATION_STATUS_FINAL = 2,
    OPERATION_STATUS_SUCCESS = 3,
    OPERATION_STATUS_FAILURE = 4,
    OPERATION_STATUS_UNKNOWN = 5,
}
