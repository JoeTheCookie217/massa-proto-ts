// package: massa.api.v1
// file: execution.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as slot_pb from "./slot_pb";

export class SlotExecutionOutput extends jspb.Message { 
    clearStatusList(): void;
    getStatusList(): Array<ExecutionOutputStatus>;
    setStatusList(value: Array<ExecutionOutputStatus>): SlotExecutionOutput;
    addStatus(value: ExecutionOutputStatus, index?: number): ExecutionOutputStatus;

    hasExecutionOutput(): boolean;
    clearExecutionOutput(): void;
    getExecutionOutput(): ExecutionOutput | undefined;
    setExecutionOutput(value?: ExecutionOutput): SlotExecutionOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotExecutionOutput.AsObject;
    static toObject(includeInstance: boolean, msg: SlotExecutionOutput): SlotExecutionOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotExecutionOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotExecutionOutput;
    static deserializeBinaryFromReader(message: SlotExecutionOutput, reader: jspb.BinaryReader): SlotExecutionOutput;
}

export namespace SlotExecutionOutput {
    export type AsObject = {
        statusList: Array<ExecutionOutputStatus>,
        executionOutput?: ExecutionOutput.AsObject,
    }
}

export class FinalizedExecutionOutput extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): FinalizedExecutionOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FinalizedExecutionOutput.AsObject;
    static toObject(includeInstance: boolean, msg: FinalizedExecutionOutput): FinalizedExecutionOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FinalizedExecutionOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FinalizedExecutionOutput;
    static deserializeBinaryFromReader(message: FinalizedExecutionOutput, reader: jspb.BinaryReader): FinalizedExecutionOutput;
}

export namespace FinalizedExecutionOutput {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
    }
}

export class ExecutionOutput extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): ExecutionOutput;

    hasBlockId(): boolean;
    clearBlockId(): void;
    getBlockId(): string | undefined;
    setBlockId(value: string): ExecutionOutput;
    clearEventsList(): void;
    getEventsList(): Array<ScExecutionEvent>;
    setEventsList(value: Array<ScExecutionEvent>): ExecutionOutput;
    addEvents(value?: ScExecutionEvent, index?: number): ScExecutionEvent;

    hasStateChanges(): boolean;
    clearStateChanges(): void;
    getStateChanges(): StateChanges | undefined;
    setStateChanges(value?: StateChanges): ExecutionOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionOutput.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionOutput): ExecutionOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionOutput;
    static deserializeBinaryFromReader(message: ExecutionOutput, reader: jspb.BinaryReader): ExecutionOutput;
}

export namespace ExecutionOutput {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
        blockId?: string,
        eventsList: Array<ScExecutionEvent.AsObject>,
        stateChanges?: StateChanges.AsObject,
    }
}

export class ScExecutionEvent extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): ScExecutionEventContext | undefined;
    setContext(value?: ScExecutionEventContext): ScExecutionEvent;
    getData(): string;
    setData(value: string): ScExecutionEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScExecutionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ScExecutionEvent): ScExecutionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScExecutionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScExecutionEvent;
    static deserializeBinaryFromReader(message: ScExecutionEvent, reader: jspb.BinaryReader): ScExecutionEvent;
}

export namespace ScExecutionEvent {
    export type AsObject = {
        context?: ScExecutionEventContext.AsObject,
        data: string,
    }
}

export class ScExecutionEventContext extends jspb.Message { 
    getId(): string;
    setId(value: string): ScExecutionEventContext;

    hasOriginSlot(): boolean;
    clearOriginSlot(): void;
    getOriginSlot(): slot_pb.Slot | undefined;
    setOriginSlot(value?: slot_pb.Slot): ScExecutionEventContext;

    hasBlockId(): boolean;
    clearBlockId(): void;
    getBlockId(): string | undefined;
    setBlockId(value: string): ScExecutionEventContext;
    getIndexInSlot(): number;
    setIndexInSlot(value: number): ScExecutionEventContext;
    clearCallStackList(): void;
    getCallStackList(): Array<string>;
    setCallStackList(value: Array<string>): ScExecutionEventContext;
    addCallStack(value: string, index?: number): string;

    hasOriginOperationId(): boolean;
    clearOriginOperationId(): void;
    getOriginOperationId(): string | undefined;
    setOriginOperationId(value: string): ScExecutionEventContext;
    clearStatusList(): void;
    getStatusList(): Array<ScExecutionEventStatus>;
    setStatusList(value: Array<ScExecutionEventStatus>): ScExecutionEventContext;
    addStatus(value: ScExecutionEventStatus, index?: number): ScExecutionEventStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScExecutionEventContext.AsObject;
    static toObject(includeInstance: boolean, msg: ScExecutionEventContext): ScExecutionEventContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScExecutionEventContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScExecutionEventContext;
    static deserializeBinaryFromReader(message: ScExecutionEventContext, reader: jspb.BinaryReader): ScExecutionEventContext;
}

export namespace ScExecutionEventContext {
    export type AsObject = {
        id: string,
        originSlot?: slot_pb.Slot.AsObject,
        blockId?: string,
        indexInSlot: number,
        callStackList: Array<string>,
        originOperationId?: string,
        statusList: Array<ScExecutionEventStatus>,
    }
}

export class StateChanges extends jspb.Message { 
    clearLedgerChangesList(): void;
    getLedgerChangesList(): Array<LedgerChangeEntry>;
    setLedgerChangesList(value: Array<LedgerChangeEntry>): StateChanges;
    addLedgerChanges(value?: LedgerChangeEntry, index?: number): LedgerChangeEntry;
    clearAsyncPoolChangesList(): void;
    getAsyncPoolChangesList(): Array<AsyncPoolChangeEntry>;
    setAsyncPoolChangesList(value: Array<AsyncPoolChangeEntry>): StateChanges;
    addAsyncPoolChanges(value?: AsyncPoolChangeEntry, index?: number): AsyncPoolChangeEntry;
    clearExecutedOpsChangesList(): void;
    getExecutedOpsChangesList(): Array<ExecutedOpsChangeEntry>;
    setExecutedOpsChangesList(value: Array<ExecutedOpsChangeEntry>): StateChanges;
    addExecutedOpsChanges(value?: ExecutedOpsChangeEntry, index?: number): ExecutedOpsChangeEntry;
    clearExecutedDenunciationsChangesList(): void;
    getExecutedDenunciationsChangesList(): Array<DenunciationIndex>;
    setExecutedDenunciationsChangesList(value: Array<DenunciationIndex>): StateChanges;
    addExecutedDenunciationsChanges(value?: DenunciationIndex, index?: number): DenunciationIndex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateChanges.AsObject;
    static toObject(includeInstance: boolean, msg: StateChanges): StateChanges.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateChanges, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateChanges;
    static deserializeBinaryFromReader(message: StateChanges, reader: jspb.BinaryReader): StateChanges;
}

export namespace StateChanges {
    export type AsObject = {
        ledgerChangesList: Array<LedgerChangeEntry.AsObject>,
        asyncPoolChangesList: Array<AsyncPoolChangeEntry.AsObject>,
        executedOpsChangesList: Array<ExecutedOpsChangeEntry.AsObject>,
        executedDenunciationsChangesList: Array<DenunciationIndex.AsObject>,
    }
}

export class ExecutedOpsChangeEntry extends jspb.Message { 
    getOperationId(): string;
    setOperationId(value: string): ExecutedOpsChangeEntry;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ExecutedOpsChangeValue | undefined;
    setValue(value?: ExecutedOpsChangeValue): ExecutedOpsChangeEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutedOpsChangeEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutedOpsChangeEntry): ExecutedOpsChangeEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutedOpsChangeEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutedOpsChangeEntry;
    static deserializeBinaryFromReader(message: ExecutedOpsChangeEntry, reader: jspb.BinaryReader): ExecutedOpsChangeEntry;
}

export namespace ExecutedOpsChangeEntry {
    export type AsObject = {
        operationId: string,
        value?: ExecutedOpsChangeValue.AsObject,
    }
}

export class ExecutedOpsChangeValue extends jspb.Message { 
    clearStatusList(): void;
    getStatusList(): Array<OperationExecutionStatus>;
    setStatusList(value: Array<OperationExecutionStatus>): ExecutedOpsChangeValue;
    addStatus(value: OperationExecutionStatus, index?: number): OperationExecutionStatus;

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): ExecutedOpsChangeValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutedOpsChangeValue.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutedOpsChangeValue): ExecutedOpsChangeValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutedOpsChangeValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutedOpsChangeValue;
    static deserializeBinaryFromReader(message: ExecutedOpsChangeValue, reader: jspb.BinaryReader): ExecutedOpsChangeValue;
}

export namespace ExecutedOpsChangeValue {
    export type AsObject = {
        statusList: Array<OperationExecutionStatus>,
        slot?: slot_pb.Slot.AsObject,
    }
}

export class AsyncPoolChangeEntry extends jspb.Message { 
    getAsyncMessageId(): string;
    setAsyncMessageId(value: string): AsyncPoolChangeEntry;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): AsyncPoolChangeValue | undefined;
    setValue(value?: AsyncPoolChangeValue): AsyncPoolChangeEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsyncPoolChangeEntry.AsObject;
    static toObject(includeInstance: boolean, msg: AsyncPoolChangeEntry): AsyncPoolChangeEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsyncPoolChangeEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsyncPoolChangeEntry;
    static deserializeBinaryFromReader(message: AsyncPoolChangeEntry, reader: jspb.BinaryReader): AsyncPoolChangeEntry;
}

export namespace AsyncPoolChangeEntry {
    export type AsObject = {
        asyncMessageId: string,
        value?: AsyncPoolChangeValue.AsObject,
    }
}

export class AsyncPoolChangeValue extends jspb.Message { 
    getType(): AsyncPoolChangeType;
    setType(value: AsyncPoolChangeType): AsyncPoolChangeValue;

    hasAsyncMessage(): boolean;
    clearAsyncMessage(): void;
    getAsyncMessage(): AsyncMessage | undefined;
    setAsyncMessage(value?: AsyncMessage): AsyncPoolChangeValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsyncPoolChangeValue.AsObject;
    static toObject(includeInstance: boolean, msg: AsyncPoolChangeValue): AsyncPoolChangeValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsyncPoolChangeValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsyncPoolChangeValue;
    static deserializeBinaryFromReader(message: AsyncPoolChangeValue, reader: jspb.BinaryReader): AsyncPoolChangeValue;
}

export namespace AsyncPoolChangeValue {
    export type AsObject = {
        type: AsyncPoolChangeType,
        asyncMessage?: AsyncMessage.AsObject,
    }
}

export class AsyncMessage extends jspb.Message { 

    hasEmissionSlot(): boolean;
    clearEmissionSlot(): void;
    getEmissionSlot(): slot_pb.Slot | undefined;
    setEmissionSlot(value?: slot_pb.Slot): AsyncMessage;
    getEmissionIndex(): number;
    setEmissionIndex(value: number): AsyncMessage;
    getSender(): string;
    setSender(value: string): AsyncMessage;
    getDestination(): string;
    setDestination(value: string): AsyncMessage;
    getHandler(): string;
    setHandler(value: string): AsyncMessage;
    getMaxGas(): number;
    setMaxGas(value: number): AsyncMessage;
    getFee(): number;
    setFee(value: number): AsyncMessage;
    getCoins(): number;
    setCoins(value: number): AsyncMessage;

    hasValidityStart(): boolean;
    clearValidityStart(): void;
    getValidityStart(): slot_pb.Slot | undefined;
    setValidityStart(value?: slot_pb.Slot): AsyncMessage;

    hasValidityEnd(): boolean;
    clearValidityEnd(): void;
    getValidityEnd(): slot_pb.Slot | undefined;
    setValidityEnd(value?: slot_pb.Slot): AsyncMessage;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): AsyncMessage;

    hasTrigger(): boolean;
    clearTrigger(): void;
    getTrigger(): AsyncMessageTrigger | undefined;
    setTrigger(value?: AsyncMessageTrigger): AsyncMessage;
    getCanBeExecuted(): boolean;
    setCanBeExecuted(value: boolean): AsyncMessage;
    getHash(): string;
    setHash(value: string): AsyncMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsyncMessage.AsObject;
    static toObject(includeInstance: boolean, msg: AsyncMessage): AsyncMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsyncMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsyncMessage;
    static deserializeBinaryFromReader(message: AsyncMessage, reader: jspb.BinaryReader): AsyncMessage;
}

export namespace AsyncMessage {
    export type AsObject = {
        emissionSlot?: slot_pb.Slot.AsObject,
        emissionIndex: number,
        sender: string,
        destination: string,
        handler: string,
        maxGas: number,
        fee: number,
        coins: number,
        validityStart?: slot_pb.Slot.AsObject,
        validityEnd?: slot_pb.Slot.AsObject,
        data: Uint8Array | string,
        trigger?: AsyncMessageTrigger.AsObject,
        canBeExecuted: boolean,
        hash: string,
    }
}

export class AsyncMessageTrigger extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): AsyncMessageTrigger;

    hasDatastoreKey(): boolean;
    clearDatastoreKey(): void;
    getDatastoreKey(): Uint8Array | string;
    getDatastoreKey_asU8(): Uint8Array;
    getDatastoreKey_asB64(): string;
    setDatastoreKey(value: Uint8Array | string): AsyncMessageTrigger;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsyncMessageTrigger.AsObject;
    static toObject(includeInstance: boolean, msg: AsyncMessageTrigger): AsyncMessageTrigger.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsyncMessageTrigger, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsyncMessageTrigger;
    static deserializeBinaryFromReader(message: AsyncMessageTrigger, reader: jspb.BinaryReader): AsyncMessageTrigger;
}

export namespace AsyncMessageTrigger {
    export type AsObject = {
        address: string,
        datastoreKey: Uint8Array | string,
    }
}

export class LedgerChangeEntry extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): LedgerChangeEntry;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): LedgerChangeValue | undefined;
    setValue(value?: LedgerChangeValue): LedgerChangeEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LedgerChangeEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LedgerChangeEntry): LedgerChangeEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LedgerChangeEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LedgerChangeEntry;
    static deserializeBinaryFromReader(message: LedgerChangeEntry, reader: jspb.BinaryReader): LedgerChangeEntry;
}

export namespace LedgerChangeEntry {
    export type AsObject = {
        address: string,
        value?: LedgerChangeValue.AsObject,
    }
}

export class LedgerChangeValue extends jspb.Message { 
    getType(): LedgerChangeType;
    setType(value: LedgerChangeType): LedgerChangeValue;

    hasCreatedEntry(): boolean;
    clearCreatedEntry(): void;
    getCreatedEntry(): LedgerEntry | undefined;
    setCreatedEntry(value?: LedgerEntry): LedgerChangeValue;

    hasUpdatedEntry(): boolean;
    clearUpdatedEntry(): void;
    getUpdatedEntry(): LedgerEntryUpdate | undefined;
    setUpdatedEntry(value?: LedgerEntryUpdate): LedgerChangeValue;

    getEntryCase(): LedgerChangeValue.EntryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LedgerChangeValue.AsObject;
    static toObject(includeInstance: boolean, msg: LedgerChangeValue): LedgerChangeValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LedgerChangeValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LedgerChangeValue;
    static deserializeBinaryFromReader(message: LedgerChangeValue, reader: jspb.BinaryReader): LedgerChangeValue;
}

export namespace LedgerChangeValue {
    export type AsObject = {
        type: LedgerChangeType,
        createdEntry?: LedgerEntry.AsObject,
        updatedEntry?: LedgerEntryUpdate.AsObject,
    }

    export enum EntryCase {
        ENTRY_NOT_SET = 0,
        CREATED_ENTRY = 2,
        UPDATED_ENTRY = 3,
    }

}

export class LedgerEntry extends jspb.Message { 
    getBalance(): number;
    setBalance(value: number): LedgerEntry;
    getBytecode(): Uint8Array | string;
    getBytecode_asU8(): Uint8Array;
    getBytecode_asB64(): string;
    setBytecode(value: Uint8Array | string): LedgerEntry;
    clearEntriesList(): void;
    getEntriesList(): Array<common_pb.BytesMapFieldEntry>;
    setEntriesList(value: Array<common_pb.BytesMapFieldEntry>): LedgerEntry;
    addEntries(value?: common_pb.BytesMapFieldEntry, index?: number): common_pb.BytesMapFieldEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LedgerEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LedgerEntry): LedgerEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LedgerEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LedgerEntry;
    static deserializeBinaryFromReader(message: LedgerEntry, reader: jspb.BinaryReader): LedgerEntry;
}

export namespace LedgerEntry {
    export type AsObject = {
        balance: number,
        bytecode: Uint8Array | string,
        entriesList: Array<common_pb.BytesMapFieldEntry.AsObject>,
    }
}

export class LedgerEntryUpdate extends jspb.Message { 

    hasBalance(): boolean;
    clearBalance(): void;
    getBalance(): SetOrKeepBalance | undefined;
    setBalance(value?: SetOrKeepBalance): LedgerEntryUpdate;

    hasBytecode(): boolean;
    clearBytecode(): void;
    getBytecode(): SetOrKeepBytecode | undefined;
    setBytecode(value?: SetOrKeepBytecode): LedgerEntryUpdate;
    clearDatastoreList(): void;
    getDatastoreList(): Array<SetOrDeleteDatastoreEntry>;
    setDatastoreList(value: Array<SetOrDeleteDatastoreEntry>): LedgerEntryUpdate;
    addDatastore(value?: SetOrDeleteDatastoreEntry, index?: number): SetOrDeleteDatastoreEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LedgerEntryUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: LedgerEntryUpdate): LedgerEntryUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LedgerEntryUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LedgerEntryUpdate;
    static deserializeBinaryFromReader(message: LedgerEntryUpdate, reader: jspb.BinaryReader): LedgerEntryUpdate;
}

export namespace LedgerEntryUpdate {
    export type AsObject = {
        balance?: SetOrKeepBalance.AsObject,
        bytecode?: SetOrKeepBytecode.AsObject,
        datastoreList: Array<SetOrDeleteDatastoreEntry.AsObject>,
    }
}

export class SetOrKeepBalance extends jspb.Message { 
    getType(): SetOrKeepType;
    setType(value: SetOrKeepType): SetOrKeepBalance;

    hasBalance(): boolean;
    clearBalance(): void;
    getBalance(): number | undefined;
    setBalance(value: number): SetOrKeepBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOrKeepBalance.AsObject;
    static toObject(includeInstance: boolean, msg: SetOrKeepBalance): SetOrKeepBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOrKeepBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOrKeepBalance;
    static deserializeBinaryFromReader(message: SetOrKeepBalance, reader: jspb.BinaryReader): SetOrKeepBalance;
}

export namespace SetOrKeepBalance {
    export type AsObject = {
        type: SetOrKeepType,
        balance?: number,
    }
}

export class SetOrKeepBytecode extends jspb.Message { 
    getType(): SetOrKeepType;
    setType(value: SetOrKeepType): SetOrKeepBytecode;

    hasBytecode(): boolean;
    clearBytecode(): void;
    getBytecode(): Uint8Array | string;
    getBytecode_asU8(): Uint8Array;
    getBytecode_asB64(): string;
    setBytecode(value: Uint8Array | string): SetOrKeepBytecode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOrKeepBytecode.AsObject;
    static toObject(includeInstance: boolean, msg: SetOrKeepBytecode): SetOrKeepBytecode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOrKeepBytecode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOrKeepBytecode;
    static deserializeBinaryFromReader(message: SetOrKeepBytecode, reader: jspb.BinaryReader): SetOrKeepBytecode;
}

export namespace SetOrKeepBytecode {
    export type AsObject = {
        type: SetOrKeepType,
        bytecode: Uint8Array | string,
    }
}

export class SetOrDeleteDatastoreEntry extends jspb.Message { 
    getType(): SetOrDeleteType;
    setType(value: SetOrDeleteType): SetOrDeleteDatastoreEntry;

    hasDatastoreEntry(): boolean;
    clearDatastoreEntry(): void;
    getDatastoreEntry(): common_pb.BytesMapFieldEntry | undefined;
    setDatastoreEntry(value?: common_pb.BytesMapFieldEntry): SetOrDeleteDatastoreEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOrDeleteDatastoreEntry.AsObject;
    static toObject(includeInstance: boolean, msg: SetOrDeleteDatastoreEntry): SetOrDeleteDatastoreEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOrDeleteDatastoreEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOrDeleteDatastoreEntry;
    static deserializeBinaryFromReader(message: SetOrDeleteDatastoreEntry, reader: jspb.BinaryReader): SetOrDeleteDatastoreEntry;
}

export namespace SetOrDeleteDatastoreEntry {
    export type AsObject = {
        type: SetOrDeleteType,
        datastoreEntry?: common_pb.BytesMapFieldEntry.AsObject,
    }
}

export class DenunciationIndex extends jspb.Message { 

    hasBlockHeader(): boolean;
    clearBlockHeader(): void;
    getBlockHeader(): DenunciationBlockHeader | undefined;
    setBlockHeader(value?: DenunciationBlockHeader): DenunciationIndex;

    hasEndorsement(): boolean;
    clearEndorsement(): void;
    getEndorsement(): DenunciationEndorsement | undefined;
    setEndorsement(value?: DenunciationEndorsement): DenunciationIndex;

    getEntryCase(): DenunciationIndex.EntryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenunciationIndex.AsObject;
    static toObject(includeInstance: boolean, msg: DenunciationIndex): DenunciationIndex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenunciationIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenunciationIndex;
    static deserializeBinaryFromReader(message: DenunciationIndex, reader: jspb.BinaryReader): DenunciationIndex;
}

export namespace DenunciationIndex {
    export type AsObject = {
        blockHeader?: DenunciationBlockHeader.AsObject,
        endorsement?: DenunciationEndorsement.AsObject,
    }

    export enum EntryCase {
        ENTRY_NOT_SET = 0,
        BLOCK_HEADER = 1,
        ENDORSEMENT = 2,
    }

}

export class DenunciationBlockHeader extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): DenunciationBlockHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenunciationBlockHeader.AsObject;
    static toObject(includeInstance: boolean, msg: DenunciationBlockHeader): DenunciationBlockHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenunciationBlockHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenunciationBlockHeader;
    static deserializeBinaryFromReader(message: DenunciationBlockHeader, reader: jspb.BinaryReader): DenunciationBlockHeader;
}

export namespace DenunciationBlockHeader {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
    }
}

export class DenunciationEndorsement extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): DenunciationEndorsement;
    getIndex(): number;
    setIndex(value: number): DenunciationEndorsement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenunciationEndorsement.AsObject;
    static toObject(includeInstance: boolean, msg: DenunciationEndorsement): DenunciationEndorsement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenunciationEndorsement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenunciationEndorsement;
    static deserializeBinaryFromReader(message: DenunciationEndorsement, reader: jspb.BinaryReader): DenunciationEndorsement;
}

export namespace DenunciationEndorsement {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
        index: number,
    }
}

export enum ScExecutionEventStatus {
    SC_EXECUTION_EVENT_STATUS_UNSPECIFIED = 0,
    SC_EXECUTION_EVENT_STATUS_FINAL = 1,
    SC_EXECUTION_EVENT_STATUS_READ_ONLY = 2,
    SC_EXECUTION_EVENT_STATUS_FAILURE = 3,
}

export enum ExecutionOutputStatus {
    EXECUTION_OUTPUT_STATUS_UNSPECIFIED = 0,
    EXECUTION_OUTPUT_STATUS_CANDIDATE = 1,
    EXECUTION_OUTPUT_STATUS_FINAL = 2,
}

export enum OperationExecutionStatus {
    OPERATION_EXECUTION_STATUS_UNSPECIFIED = 0,
    OPERATION_EXECUTION_STATUS_SUCCESS = 1,
    OPERATION_EXECUTION_STATUS_FAILED = 2,
}

export enum AsyncPoolChangeType {
    ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED = 0,
    ASYNC_POOL_CHANGE_TYPE_ADD = 1,
    ASYNC_POOL_CHANGE_TYPE_ACTIVATE = 2,
    ASYNC_POOL_CHANGE_TYPE_DELETE = 3,
}

export enum LedgerChangeType {
    LEDGER_CHANGE_TYPE_UNSPECIFIED = 0,
    LEDGER_CHANGE_TYPE_SET = 1,
    LEDGER_CHANGE_TYPE_UPDATE = 2,
    LEDGER_CHANGE_TYPE_DELETE = 3,
}

export enum SetOrKeepType {
    SET_OR_KEEP_TYPE_UNSPECIFIED = 0,
    SET_OR_KEEP_TYPE_SET = 1,
    SET_OR_KEEP_TYPE_KEEP = 2,
}

export enum SetOrDeleteType {
    SET_OR_DELETE_TYPE_UNSPECIFIED = 0,
    SET_OR_DELETE_TYPE_SET = 1,
    SET_OR_DELETE_TYPE_DELETE = 2,
}
