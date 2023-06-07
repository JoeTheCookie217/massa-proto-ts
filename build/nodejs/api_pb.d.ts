// package: massa.api.v1
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as block_pb from "./block_pb";
import * as common_pb from "./common_pb";
import * as endorsement_pb from "./endorsement_pb";
import * as execution_pb from "./execution_pb";
import * as google_rpc_status_pb from "./google/rpc/status_pb";
import * as operation_pb from "./operation_pb";
import * as slot_pb from "./slot_pb";

export class GetBlocksRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBlocksRequest;
    clearQueriesList(): void;
    getQueriesList(): Array<GetBlocksQuery>;
    setQueriesList(value: Array<GetBlocksQuery>): GetBlocksRequest;
    addQueries(value?: GetBlocksQuery, index?: number): GetBlocksQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlocksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlocksRequest): GetBlocksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlocksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlocksRequest;
    static deserializeBinaryFromReader(message: GetBlocksRequest, reader: jspb.BinaryReader): GetBlocksRequest;
}

export namespace GetBlocksRequest {
    export type AsObject = {
        id: string,
        queriesList: Array<GetBlocksQuery.AsObject>,
    }
}

export class GetBlocksQuery extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): GetBlocksFilter | undefined;
    setFilter(value?: GetBlocksFilter): GetBlocksQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlocksQuery.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlocksQuery): GetBlocksQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlocksQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlocksQuery;
    static deserializeBinaryFromReader(message: GetBlocksQuery, reader: jspb.BinaryReader): GetBlocksQuery;
}

export namespace GetBlocksQuery {
    export type AsObject = {
        filter?: GetBlocksFilter.AsObject,
    }
}

export class GetBlocksFilter extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBlocksFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlocksFilter.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlocksFilter): GetBlocksFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlocksFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlocksFilter;
    static deserializeBinaryFromReader(message: GetBlocksFilter, reader: jspb.BinaryReader): GetBlocksFilter;
}

export namespace GetBlocksFilter {
    export type AsObject = {
        id: string,
    }
}

export class GetBlocksResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBlocksResponse;

    hasContext(): boolean;
    clearContext(): void;
    getContext(): BlocksContext | undefined;
    setContext(value?: BlocksContext): GetBlocksResponse;
    clearBlocksList(): void;
    getBlocksList(): Array<block_pb.BlockWrapper>;
    setBlocksList(value: Array<block_pb.BlockWrapper>): GetBlocksResponse;
    addBlocks(value?: block_pb.BlockWrapper, index?: number): block_pb.BlockWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlocksResponse): GetBlocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlocksResponse;
    static deserializeBinaryFromReader(message: GetBlocksResponse, reader: jspb.BinaryReader): GetBlocksResponse;
}

export namespace GetBlocksResponse {
    export type AsObject = {
        id: string,
        context?: BlocksContext.AsObject,
        blocksList: Array<block_pb.BlockWrapper.AsObject>,
    }
}

export class BlocksContext extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): BlocksContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlocksContext.AsObject;
    static toObject(includeInstance: boolean, msg: BlocksContext): BlocksContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlocksContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlocksContext;
    static deserializeBinaryFromReader(message: BlocksContext, reader: jspb.BinaryReader): BlocksContext;
}

export namespace BlocksContext {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
    }
}

export class GetBlocksBySlotsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBlocksBySlotsRequest;
    clearSlotsList(): void;
    getSlotsList(): Array<slot_pb.Slot>;
    setSlotsList(value: Array<slot_pb.Slot>): GetBlocksBySlotsRequest;
    addSlots(value?: slot_pb.Slot, index?: number): slot_pb.Slot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlocksBySlotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlocksBySlotsRequest): GetBlocksBySlotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlocksBySlotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlocksBySlotsRequest;
    static deserializeBinaryFromReader(message: GetBlocksBySlotsRequest, reader: jspb.BinaryReader): GetBlocksBySlotsRequest;
}

export namespace GetBlocksBySlotsRequest {
    export type AsObject = {
        id: string,
        slotsList: Array<slot_pb.Slot.AsObject>,
    }
}

export class GetBlocksBySlotsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBlocksBySlotsResponse;
    clearBlocksList(): void;
    getBlocksList(): Array<block_pb.Block>;
    setBlocksList(value: Array<block_pb.Block>): GetBlocksBySlotsResponse;
    addBlocks(value?: block_pb.Block, index?: number): block_pb.Block;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlocksBySlotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlocksBySlotsResponse): GetBlocksBySlotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlocksBySlotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlocksBySlotsResponse;
    static deserializeBinaryFromReader(message: GetBlocksBySlotsResponse, reader: jspb.BinaryReader): GetBlocksBySlotsResponse;
}

export namespace GetBlocksBySlotsResponse {
    export type AsObject = {
        id: string,
        blocksList: Array<block_pb.Block.AsObject>,
    }
}

export class GetDatastoreEntriesRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetDatastoreEntriesRequest;
    clearQueriesList(): void;
    getQueriesList(): Array<DatastoreEntriesQuery>;
    setQueriesList(value: Array<DatastoreEntriesQuery>): GetDatastoreEntriesRequest;
    addQueries(value?: DatastoreEntriesQuery, index?: number): DatastoreEntriesQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatastoreEntriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatastoreEntriesRequest): GetDatastoreEntriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatastoreEntriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatastoreEntriesRequest;
    static deserializeBinaryFromReader(message: GetDatastoreEntriesRequest, reader: jspb.BinaryReader): GetDatastoreEntriesRequest;
}

export namespace GetDatastoreEntriesRequest {
    export type AsObject = {
        id: string,
        queriesList: Array<DatastoreEntriesQuery.AsObject>,
    }
}

export class DatastoreEntriesQuery extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): DatastoreEntryFilter | undefined;
    setFilter(value?: DatastoreEntryFilter): DatastoreEntriesQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatastoreEntriesQuery.AsObject;
    static toObject(includeInstance: boolean, msg: DatastoreEntriesQuery): DatastoreEntriesQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatastoreEntriesQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatastoreEntriesQuery;
    static deserializeBinaryFromReader(message: DatastoreEntriesQuery, reader: jspb.BinaryReader): DatastoreEntriesQuery;
}

export namespace DatastoreEntriesQuery {
    export type AsObject = {
        filter?: DatastoreEntryFilter.AsObject,
    }
}

export class DatastoreEntryFilter extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): DatastoreEntryFilter;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): DatastoreEntryFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatastoreEntryFilter.AsObject;
    static toObject(includeInstance: boolean, msg: DatastoreEntryFilter): DatastoreEntryFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatastoreEntryFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatastoreEntryFilter;
    static deserializeBinaryFromReader(message: DatastoreEntryFilter, reader: jspb.BinaryReader): DatastoreEntryFilter;
}

export namespace DatastoreEntryFilter {
    export type AsObject = {
        address: string,
        key: Uint8Array | string,
    }
}

export class GetDatastoreEntriesResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetDatastoreEntriesResponse;
    clearEntriesList(): void;
    getEntriesList(): Array<DatastoreEntry>;
    setEntriesList(value: Array<DatastoreEntry>): GetDatastoreEntriesResponse;
    addEntries(value?: DatastoreEntry, index?: number): DatastoreEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatastoreEntriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatastoreEntriesResponse): GetDatastoreEntriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatastoreEntriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatastoreEntriesResponse;
    static deserializeBinaryFromReader(message: GetDatastoreEntriesResponse, reader: jspb.BinaryReader): GetDatastoreEntriesResponse;
}

export namespace GetDatastoreEntriesResponse {
    export type AsObject = {
        id: string,
        entriesList: Array<DatastoreEntry.AsObject>,
    }
}

export class DatastoreEntry extends jspb.Message { 
    getFinalValue(): Uint8Array | string;
    getFinalValue_asU8(): Uint8Array;
    getFinalValue_asB64(): string;
    setFinalValue(value: Uint8Array | string): DatastoreEntry;
    getCandidateValue(): Uint8Array | string;
    getCandidateValue_asU8(): Uint8Array;
    getCandidateValue_asB64(): string;
    setCandidateValue(value: Uint8Array | string): DatastoreEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatastoreEntry.AsObject;
    static toObject(includeInstance: boolean, msg: DatastoreEntry): DatastoreEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatastoreEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatastoreEntry;
    static deserializeBinaryFromReader(message: DatastoreEntry, reader: jspb.BinaryReader): DatastoreEntry;
}

export namespace DatastoreEntry {
    export type AsObject = {
        finalValue: Uint8Array | string,
        candidateValue: Uint8Array | string,
    }
}

export class GetLargestStakersRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetLargestStakersRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): LargestStakersQuery | undefined;
    setQuery(value?: LargestStakersQuery): GetLargestStakersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLargestStakersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLargestStakersRequest): GetLargestStakersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLargestStakersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLargestStakersRequest;
    static deserializeBinaryFromReader(message: GetLargestStakersRequest, reader: jspb.BinaryReader): GetLargestStakersRequest;
}

export namespace GetLargestStakersRequest {
    export type AsObject = {
        id: string,
        query?: LargestStakersQuery.AsObject,
    }
}

export class LargestStakersQuery extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): LargestStakersQuery;
    getLimit(): number;
    setLimit(value: number): LargestStakersQuery;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): LargestStakersFilter | undefined;
    setFilter(value?: LargestStakersFilter): LargestStakersQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LargestStakersQuery.AsObject;
    static toObject(includeInstance: boolean, msg: LargestStakersQuery): LargestStakersQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LargestStakersQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LargestStakersQuery;
    static deserializeBinaryFromReader(message: LargestStakersQuery, reader: jspb.BinaryReader): LargestStakersQuery;
}

export namespace LargestStakersQuery {
    export type AsObject = {
        offset: number,
        limit: number,
        filter?: LargestStakersFilter.AsObject,
    }
}

export class LargestStakersFilter extends jspb.Message { 

    hasMinRolls(): boolean;
    clearMinRolls(): void;
    getMinRolls(): number | undefined;
    setMinRolls(value: number): LargestStakersFilter;

    hasMaxRolls(): boolean;
    clearMaxRolls(): void;
    getMaxRolls(): number | undefined;
    setMaxRolls(value: number): LargestStakersFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LargestStakersFilter.AsObject;
    static toObject(includeInstance: boolean, msg: LargestStakersFilter): LargestStakersFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LargestStakersFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LargestStakersFilter;
    static deserializeBinaryFromReader(message: LargestStakersFilter, reader: jspb.BinaryReader): LargestStakersFilter;
}

export namespace LargestStakersFilter {
    export type AsObject = {
        minRolls?: number,
        maxRolls?: number,
    }
}

export class GetLargestStakersResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetLargestStakersResponse;

    hasContext(): boolean;
    clearContext(): void;
    getContext(): LargestStakersContext | undefined;
    setContext(value?: LargestStakersContext): GetLargestStakersResponse;
    clearStakersList(): void;
    getStakersList(): Array<LargestStakerEntry>;
    setStakersList(value: Array<LargestStakerEntry>): GetLargestStakersResponse;
    addStakers(value?: LargestStakerEntry, index?: number): LargestStakerEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLargestStakersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLargestStakersResponse): GetLargestStakersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLargestStakersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLargestStakersResponse;
    static deserializeBinaryFromReader(message: GetLargestStakersResponse, reader: jspb.BinaryReader): GetLargestStakersResponse;
}

export namespace GetLargestStakersResponse {
    export type AsObject = {
        id: string,
        context?: LargestStakersContext.AsObject,
        stakersList: Array<LargestStakerEntry.AsObject>,
    }
}

export class LargestStakersContext extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): LargestStakersContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LargestStakersContext.AsObject;
    static toObject(includeInstance: boolean, msg: LargestStakersContext): LargestStakersContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LargestStakersContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LargestStakersContext;
    static deserializeBinaryFromReader(message: LargestStakersContext, reader: jspb.BinaryReader): LargestStakersContext;
}

export namespace LargestStakersContext {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
    }
}

export class LargestStakerEntry extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): LargestStakerEntry;
    getRolls(): number;
    setRolls(value: number): LargestStakerEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LargestStakerEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LargestStakerEntry): LargestStakerEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LargestStakerEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LargestStakerEntry;
    static deserializeBinaryFromReader(message: LargestStakerEntry, reader: jspb.BinaryReader): LargestStakerEntry;
}

export namespace LargestStakerEntry {
    export type AsObject = {
        address: string,
        rolls: number,
    }
}

export class GetNextBlockBestParentsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetNextBlockBestParentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNextBlockBestParentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNextBlockBestParentsRequest): GetNextBlockBestParentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNextBlockBestParentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNextBlockBestParentsRequest;
    static deserializeBinaryFromReader(message: GetNextBlockBestParentsRequest, reader: jspb.BinaryReader): GetNextBlockBestParentsRequest;
}

export namespace GetNextBlockBestParentsRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetNextBlockBestParentsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetNextBlockBestParentsResponse;
    clearParentsList(): void;
    getParentsList(): Array<BlockParent>;
    setParentsList(value: Array<BlockParent>): GetNextBlockBestParentsResponse;
    addParents(value?: BlockParent, index?: number): BlockParent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNextBlockBestParentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNextBlockBestParentsResponse): GetNextBlockBestParentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNextBlockBestParentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNextBlockBestParentsResponse;
    static deserializeBinaryFromReader(message: GetNextBlockBestParentsResponse, reader: jspb.BinaryReader): GetNextBlockBestParentsResponse;
}

export namespace GetNextBlockBestParentsResponse {
    export type AsObject = {
        id: string,
        parentsList: Array<BlockParent.AsObject>,
    }
}

export class BlockParent extends jspb.Message { 
    getBlockId(): string;
    setBlockId(value: string): BlockParent;
    getPeriod(): number;
    setPeriod(value: number): BlockParent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockParent.AsObject;
    static toObject(includeInstance: boolean, msg: BlockParent): BlockParent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockParent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockParent;
    static deserializeBinaryFromReader(message: BlockParent, reader: jspb.BinaryReader): BlockParent;
}

export namespace BlockParent {
    export type AsObject = {
        blockId: string,
        period: number,
    }
}

export class GetOperationsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetOperationsRequest;
    clearQueriesList(): void;
    getQueriesList(): Array<GetOperationsQuery>;
    setQueriesList(value: Array<GetOperationsQuery>): GetOperationsRequest;
    addQueries(value?: GetOperationsQuery, index?: number): GetOperationsQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperationsRequest): GetOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperationsRequest;
    static deserializeBinaryFromReader(message: GetOperationsRequest, reader: jspb.BinaryReader): GetOperationsRequest;
}

export namespace GetOperationsRequest {
    export type AsObject = {
        id: string,
        queriesList: Array<GetOperationsQuery.AsObject>,
    }
}

export class GetOperationsQuery extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): GetOperationsFilter | undefined;
    setFilter(value?: GetOperationsFilter): GetOperationsQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperationsQuery.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperationsQuery): GetOperationsQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperationsQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperationsQuery;
    static deserializeBinaryFromReader(message: GetOperationsQuery, reader: jspb.BinaryReader): GetOperationsQuery;
}

export namespace GetOperationsQuery {
    export type AsObject = {
        filter?: GetOperationsFilter.AsObject,
    }
}

export class GetOperationsFilter extends jspb.Message { 
    getId(): string;
    setId(value: string): GetOperationsFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperationsFilter.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperationsFilter): GetOperationsFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperationsFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperationsFilter;
    static deserializeBinaryFromReader(message: GetOperationsFilter, reader: jspb.BinaryReader): GetOperationsFilter;
}

export namespace GetOperationsFilter {
    export type AsObject = {
        id: string,
    }
}

export class GetOperationsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetOperationsResponse;

    hasContext(): boolean;
    clearContext(): void;
    getContext(): OperationsContext | undefined;
    setContext(value?: OperationsContext): GetOperationsResponse;
    clearOperationsList(): void;
    getOperationsList(): Array<operation_pb.OperationWrapper>;
    setOperationsList(value: Array<operation_pb.OperationWrapper>): GetOperationsResponse;
    addOperations(value?: operation_pb.OperationWrapper, index?: number): operation_pb.OperationWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperationsResponse): GetOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperationsResponse;
    static deserializeBinaryFromReader(message: GetOperationsResponse, reader: jspb.BinaryReader): GetOperationsResponse;
}

export namespace GetOperationsResponse {
    export type AsObject = {
        id: string,
        context?: OperationsContext.AsObject,
        operationsList: Array<operation_pb.OperationWrapper.AsObject>,
    }
}

export class OperationsContext extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): OperationsContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationsContext.AsObject;
    static toObject(includeInstance: boolean, msg: OperationsContext): OperationsContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationsContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationsContext;
    static deserializeBinaryFromReader(message: OperationsContext, reader: jspb.BinaryReader): OperationsContext;
}

export namespace OperationsContext {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
    }
}

export class GetScExecutionEventsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetScExecutionEventsRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): GetScExecutionEventsQuery | undefined;
    setQuery(value?: GetScExecutionEventsQuery): GetScExecutionEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScExecutionEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetScExecutionEventsRequest): GetScExecutionEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScExecutionEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScExecutionEventsRequest;
    static deserializeBinaryFromReader(message: GetScExecutionEventsRequest, reader: jspb.BinaryReader): GetScExecutionEventsRequest;
}

export namespace GetScExecutionEventsRequest {
    export type AsObject = {
        id: string,
        query?: GetScExecutionEventsQuery.AsObject,
    }
}

export class GetScExecutionEventsQuery extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): GetScExecutionEventsFilter | undefined;
    setFilter(value?: GetScExecutionEventsFilter): GetScExecutionEventsQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScExecutionEventsQuery.AsObject;
    static toObject(includeInstance: boolean, msg: GetScExecutionEventsQuery): GetScExecutionEventsQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScExecutionEventsQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScExecutionEventsQuery;
    static deserializeBinaryFromReader(message: GetScExecutionEventsQuery, reader: jspb.BinaryReader): GetScExecutionEventsQuery;
}

export namespace GetScExecutionEventsQuery {
    export type AsObject = {
        filter?: GetScExecutionEventsFilter.AsObject,
    }
}

export class GetScExecutionEventsFilter extends jspb.Message { 

    hasStartSlot(): boolean;
    clearStartSlot(): void;
    getStartSlot(): slot_pb.Slot | undefined;
    setStartSlot(value?: slot_pb.Slot): GetScExecutionEventsFilter;

    hasEndSlot(): boolean;
    clearEndSlot(): void;
    getEndSlot(): slot_pb.Slot | undefined;
    setEndSlot(value?: slot_pb.Slot): GetScExecutionEventsFilter;

    hasCallerAddress(): boolean;
    clearCallerAddress(): void;
    getCallerAddress(): string | undefined;
    setCallerAddress(value: string): GetScExecutionEventsFilter;

    hasEmitterAddress(): boolean;
    clearEmitterAddress(): void;
    getEmitterAddress(): string | undefined;
    setEmitterAddress(value: string): GetScExecutionEventsFilter;

    hasOriginalOperationId(): boolean;
    clearOriginalOperationId(): void;
    getOriginalOperationId(): string | undefined;
    setOriginalOperationId(value: string): GetScExecutionEventsFilter;
    clearStatusList(): void;
    getStatusList(): Array<execution_pb.ScExecutionEventStatus>;
    setStatusList(value: Array<execution_pb.ScExecutionEventStatus>): GetScExecutionEventsFilter;
    addStatus(value: execution_pb.ScExecutionEventStatus, index?: number): execution_pb.ScExecutionEventStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScExecutionEventsFilter.AsObject;
    static toObject(includeInstance: boolean, msg: GetScExecutionEventsFilter): GetScExecutionEventsFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScExecutionEventsFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScExecutionEventsFilter;
    static deserializeBinaryFromReader(message: GetScExecutionEventsFilter, reader: jspb.BinaryReader): GetScExecutionEventsFilter;
}

export namespace GetScExecutionEventsFilter {
    export type AsObject = {
        startSlot?: slot_pb.Slot.AsObject,
        endSlot?: slot_pb.Slot.AsObject,
        callerAddress?: string,
        emitterAddress?: string,
        originalOperationId?: string,
        statusList: Array<execution_pb.ScExecutionEventStatus>,
    }
}

export class GetScExecutionEventsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetScExecutionEventsResponse;

    hasContext(): boolean;
    clearContext(): void;
    getContext(): GetScExecutionEventsContext | undefined;
    setContext(value?: GetScExecutionEventsContext): GetScExecutionEventsResponse;
    clearEventsList(): void;
    getEventsList(): Array<execution_pb.ScExecutionEvent>;
    setEventsList(value: Array<execution_pb.ScExecutionEvent>): GetScExecutionEventsResponse;
    addEvents(value?: execution_pb.ScExecutionEvent, index?: number): execution_pb.ScExecutionEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScExecutionEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetScExecutionEventsResponse): GetScExecutionEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScExecutionEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScExecutionEventsResponse;
    static deserializeBinaryFromReader(message: GetScExecutionEventsResponse, reader: jspb.BinaryReader): GetScExecutionEventsResponse;
}

export namespace GetScExecutionEventsResponse {
    export type AsObject = {
        id: string,
        context?: GetScExecutionEventsContext.AsObject,
        eventsList: Array<execution_pb.ScExecutionEvent.AsObject>,
    }
}

export class GetScExecutionEventsContext extends jspb.Message { 

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): slot_pb.Slot | undefined;
    setSlot(value?: slot_pb.Slot): GetScExecutionEventsContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScExecutionEventsContext.AsObject;
    static toObject(includeInstance: boolean, msg: GetScExecutionEventsContext): GetScExecutionEventsContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScExecutionEventsContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScExecutionEventsContext;
    static deserializeBinaryFromReader(message: GetScExecutionEventsContext, reader: jspb.BinaryReader): GetScExecutionEventsContext;
}

export namespace GetScExecutionEventsContext {
    export type AsObject = {
        slot?: slot_pb.Slot.AsObject,
    }
}

export class GetSelectorDrawsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetSelectorDrawsRequest;
    clearQueriesList(): void;
    getQueriesList(): Array<SelectorDrawsQuery>;
    setQueriesList(value: Array<SelectorDrawsQuery>): GetSelectorDrawsRequest;
    addQueries(value?: SelectorDrawsQuery, index?: number): SelectorDrawsQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSelectorDrawsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSelectorDrawsRequest): GetSelectorDrawsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSelectorDrawsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSelectorDrawsRequest;
    static deserializeBinaryFromReader(message: GetSelectorDrawsRequest, reader: jspb.BinaryReader): GetSelectorDrawsRequest;
}

export namespace GetSelectorDrawsRequest {
    export type AsObject = {
        id: string,
        queriesList: Array<SelectorDrawsQuery.AsObject>,
    }
}

export class SelectorDrawsQuery extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): SelectorDrawsFilter | undefined;
    setFilter(value?: SelectorDrawsFilter): SelectorDrawsQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectorDrawsQuery.AsObject;
    static toObject(includeInstance: boolean, msg: SelectorDrawsQuery): SelectorDrawsQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectorDrawsQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectorDrawsQuery;
    static deserializeBinaryFromReader(message: SelectorDrawsQuery, reader: jspb.BinaryReader): SelectorDrawsQuery;
}

export namespace SelectorDrawsQuery {
    export type AsObject = {
        filter?: SelectorDrawsFilter.AsObject,
    }
}

export class SelectorDrawsFilter extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): SelectorDrawsFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectorDrawsFilter.AsObject;
    static toObject(includeInstance: boolean, msg: SelectorDrawsFilter): SelectorDrawsFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectorDrawsFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectorDrawsFilter;
    static deserializeBinaryFromReader(message: SelectorDrawsFilter, reader: jspb.BinaryReader): SelectorDrawsFilter;
}

export namespace SelectorDrawsFilter {
    export type AsObject = {
        address: string,
    }
}

export class GetSelectorDrawsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetSelectorDrawsResponse;
    clearSelectorDrawsList(): void;
    getSelectorDrawsList(): Array<SelectorDraws>;
    setSelectorDrawsList(value: Array<SelectorDraws>): GetSelectorDrawsResponse;
    addSelectorDraws(value?: SelectorDraws, index?: number): SelectorDraws;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSelectorDrawsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSelectorDrawsResponse): GetSelectorDrawsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSelectorDrawsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSelectorDrawsResponse;
    static deserializeBinaryFromReader(message: GetSelectorDrawsResponse, reader: jspb.BinaryReader): GetSelectorDrawsResponse;
}

export namespace GetSelectorDrawsResponse {
    export type AsObject = {
        id: string,
        selectorDrawsList: Array<SelectorDraws.AsObject>,
    }
}

export class SelectorDraws extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): SelectorDraws;
    clearNextBlockDrawsList(): void;
    getNextBlockDrawsList(): Array<slot_pb.Slot>;
    setNextBlockDrawsList(value: Array<slot_pb.Slot>): SelectorDraws;
    addNextBlockDraws(value?: slot_pb.Slot, index?: number): slot_pb.Slot;
    clearNextEndorsementDrawsList(): void;
    getNextEndorsementDrawsList(): Array<slot_pb.IndexedSlot>;
    setNextEndorsementDrawsList(value: Array<slot_pb.IndexedSlot>): SelectorDraws;
    addNextEndorsementDraws(value?: slot_pb.IndexedSlot, index?: number): slot_pb.IndexedSlot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectorDraws.AsObject;
    static toObject(includeInstance: boolean, msg: SelectorDraws): SelectorDraws.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectorDraws, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectorDraws;
    static deserializeBinaryFromReader(message: SelectorDraws, reader: jspb.BinaryReader): SelectorDraws;
}

export namespace SelectorDraws {
    export type AsObject = {
        address: string,
        nextBlockDrawsList: Array<slot_pb.Slot.AsObject>,
        nextEndorsementDrawsList: Array<slot_pb.IndexedSlot.AsObject>,
    }
}

export class GetTransactionsThroughputRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTransactionsThroughputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionsThroughputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionsThroughputRequest): GetTransactionsThroughputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionsThroughputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionsThroughputRequest;
    static deserializeBinaryFromReader(message: GetTransactionsThroughputRequest, reader: jspb.BinaryReader): GetTransactionsThroughputRequest;
}

export namespace GetTransactionsThroughputRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetTransactionsThroughputResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTransactionsThroughputResponse;
    getThroughput(): number;
    setThroughput(value: number): GetTransactionsThroughputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionsThroughputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionsThroughputResponse): GetTransactionsThroughputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionsThroughputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionsThroughputResponse;
    static deserializeBinaryFromReader(message: GetTransactionsThroughputResponse, reader: jspb.BinaryReader): GetTransactionsThroughputResponse;
}

export namespace GetTransactionsThroughputResponse {
    export type AsObject = {
        id: string,
        throughput: number,
    }
}

export class GetVersionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
    static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetVersionResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetVersionResponse;
    getVersion(): string;
    setVersion(value: string): GetVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
    static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
    export type AsObject = {
        id: string,
        version: string,
    }
}

export class NewBlocksRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): NewBlocksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewBlocksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewBlocksRequest): NewBlocksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewBlocksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewBlocksRequest;
    static deserializeBinaryFromReader(message: NewBlocksRequest, reader: jspb.BinaryReader): NewBlocksRequest;
}

export namespace NewBlocksRequest {
    export type AsObject = {
        id: string,
    }
}

export class NewBlocksResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): NewBlocksResponse;

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): block_pb.SignedBlock | undefined;
    setBlock(value?: block_pb.SignedBlock): NewBlocksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewBlocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewBlocksResponse): NewBlocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewBlocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewBlocksResponse;
    static deserializeBinaryFromReader(message: NewBlocksResponse, reader: jspb.BinaryReader): NewBlocksResponse;
}

export namespace NewBlocksResponse {
    export type AsObject = {
        id: string,
        block?: block_pb.SignedBlock.AsObject,
    }
}

export class NewBlocksHeadersRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): NewBlocksHeadersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewBlocksHeadersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewBlocksHeadersRequest): NewBlocksHeadersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewBlocksHeadersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewBlocksHeadersRequest;
    static deserializeBinaryFromReader(message: NewBlocksHeadersRequest, reader: jspb.BinaryReader): NewBlocksHeadersRequest;
}

export namespace NewBlocksHeadersRequest {
    export type AsObject = {
        id: string,
    }
}

export class NewBlocksHeadersResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): NewBlocksHeadersResponse;

    hasBlockHeader(): boolean;
    clearBlockHeader(): void;
    getBlockHeader(): block_pb.SignedBlockHeader | undefined;
    setBlockHeader(value?: block_pb.SignedBlockHeader): NewBlocksHeadersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewBlocksHeadersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewBlocksHeadersResponse): NewBlocksHeadersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewBlocksHeadersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewBlocksHeadersResponse;
    static deserializeBinaryFromReader(message: NewBlocksHeadersResponse, reader: jspb.BinaryReader): NewBlocksHeadersResponse;
}

export namespace NewBlocksHeadersResponse {
    export type AsObject = {
        id: string,
        blockHeader?: block_pb.SignedBlockHeader.AsObject,
    }
}

export class NewEndorsementsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): NewEndorsementsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewEndorsementsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewEndorsementsRequest): NewEndorsementsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewEndorsementsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewEndorsementsRequest;
    static deserializeBinaryFromReader(message: NewEndorsementsRequest, reader: jspb.BinaryReader): NewEndorsementsRequest;
}

export namespace NewEndorsementsRequest {
    export type AsObject = {
        id: string,
    }
}

export class NewEndorsementsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): NewEndorsementsResponse;

    hasEndorsement(): boolean;
    clearEndorsement(): void;
    getEndorsement(): endorsement_pb.SignedEndorsement | undefined;
    setEndorsement(value?: endorsement_pb.SignedEndorsement): NewEndorsementsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewEndorsementsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewEndorsementsResponse): NewEndorsementsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewEndorsementsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewEndorsementsResponse;
    static deserializeBinaryFromReader(message: NewEndorsementsResponse, reader: jspb.BinaryReader): NewEndorsementsResponse;
}

export namespace NewEndorsementsResponse {
    export type AsObject = {
        id: string,
        endorsement?: endorsement_pb.SignedEndorsement.AsObject,
    }
}

export class NewFilledBlocksRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): NewFilledBlocksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewFilledBlocksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewFilledBlocksRequest): NewFilledBlocksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewFilledBlocksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewFilledBlocksRequest;
    static deserializeBinaryFromReader(message: NewFilledBlocksRequest, reader: jspb.BinaryReader): NewFilledBlocksRequest;
}

export namespace NewFilledBlocksRequest {
    export type AsObject = {
        id: string,
    }
}

export class NewFilledBlocksResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): NewFilledBlocksResponse;

    hasFilledBlock(): boolean;
    clearFilledBlock(): void;
    getFilledBlock(): block_pb.FilledBlock | undefined;
    setFilledBlock(value?: block_pb.FilledBlock): NewFilledBlocksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewFilledBlocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewFilledBlocksResponse): NewFilledBlocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewFilledBlocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewFilledBlocksResponse;
    static deserializeBinaryFromReader(message: NewFilledBlocksResponse, reader: jspb.BinaryReader): NewFilledBlocksResponse;
}

export namespace NewFilledBlocksResponse {
    export type AsObject = {
        id: string,
        filledBlock?: block_pb.FilledBlock.AsObject,
    }
}

export class NewOperationsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): NewOperationsRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): NewOperationsQuery | undefined;
    setQuery(value?: NewOperationsQuery): NewOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewOperationsRequest): NewOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewOperationsRequest;
    static deserializeBinaryFromReader(message: NewOperationsRequest, reader: jspb.BinaryReader): NewOperationsRequest;
}

export namespace NewOperationsRequest {
    export type AsObject = {
        id: string,
        query?: NewOperationsQuery.AsObject,
    }
}

export class NewOperationsQuery extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): NewOperationsFilter | undefined;
    setFilter(value?: NewOperationsFilter): NewOperationsQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewOperationsQuery.AsObject;
    static toObject(includeInstance: boolean, msg: NewOperationsQuery): NewOperationsQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewOperationsQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewOperationsQuery;
    static deserializeBinaryFromReader(message: NewOperationsQuery, reader: jspb.BinaryReader): NewOperationsQuery;
}

export namespace NewOperationsQuery {
    export type AsObject = {
        filter?: NewOperationsFilter.AsObject,
    }
}

export class NewOperationsFilter extends jspb.Message { 
    clearTypesList(): void;
    getTypesList(): Array<OpType>;
    setTypesList(value: Array<OpType>): NewOperationsFilter;
    addTypes(value: OpType, index?: number): OpType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewOperationsFilter.AsObject;
    static toObject(includeInstance: boolean, msg: NewOperationsFilter): NewOperationsFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewOperationsFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewOperationsFilter;
    static deserializeBinaryFromReader(message: NewOperationsFilter, reader: jspb.BinaryReader): NewOperationsFilter;
}

export namespace NewOperationsFilter {
    export type AsObject = {
        typesList: Array<OpType>,
    }
}

export class NewOperationsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): NewOperationsResponse;

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): operation_pb.SignedOperation | undefined;
    setOperation(value?: operation_pb.SignedOperation): NewOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewOperationsResponse): NewOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewOperationsResponse;
    static deserializeBinaryFromReader(message: NewOperationsResponse, reader: jspb.BinaryReader): NewOperationsResponse;
}

export namespace NewOperationsResponse {
    export type AsObject = {
        id: string,
        operation?: operation_pb.SignedOperation.AsObject,
    }
}

export class NewSlotExecutionOutputsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): NewSlotExecutionOutputsRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): NewSlotExecutionOutputsQuery | undefined;
    setQuery(value?: NewSlotExecutionOutputsQuery): NewSlotExecutionOutputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewSlotExecutionOutputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewSlotExecutionOutputsRequest): NewSlotExecutionOutputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewSlotExecutionOutputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewSlotExecutionOutputsRequest;
    static deserializeBinaryFromReader(message: NewSlotExecutionOutputsRequest, reader: jspb.BinaryReader): NewSlotExecutionOutputsRequest;
}

export namespace NewSlotExecutionOutputsRequest {
    export type AsObject = {
        id: string,
        query?: NewSlotExecutionOutputsQuery.AsObject,
    }
}

export class NewSlotExecutionOutputsQuery extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): NewSlotExecutionOutputsFilter | undefined;
    setFilter(value?: NewSlotExecutionOutputsFilter): NewSlotExecutionOutputsQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewSlotExecutionOutputsQuery.AsObject;
    static toObject(includeInstance: boolean, msg: NewSlotExecutionOutputsQuery): NewSlotExecutionOutputsQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewSlotExecutionOutputsQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewSlotExecutionOutputsQuery;
    static deserializeBinaryFromReader(message: NewSlotExecutionOutputsQuery, reader: jspb.BinaryReader): NewSlotExecutionOutputsQuery;
}

export namespace NewSlotExecutionOutputsQuery {
    export type AsObject = {
        filter?: NewSlotExecutionOutputsFilter.AsObject,
    }
}

export class NewSlotExecutionOutputsFilter extends jspb.Message { 
    clearStatusList(): void;
    getStatusList(): Array<execution_pb.ExecutionOutputStatus>;
    setStatusList(value: Array<execution_pb.ExecutionOutputStatus>): NewSlotExecutionOutputsFilter;
    addStatus(value: execution_pb.ExecutionOutputStatus, index?: number): execution_pb.ExecutionOutputStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewSlotExecutionOutputsFilter.AsObject;
    static toObject(includeInstance: boolean, msg: NewSlotExecutionOutputsFilter): NewSlotExecutionOutputsFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewSlotExecutionOutputsFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewSlotExecutionOutputsFilter;
    static deserializeBinaryFromReader(message: NewSlotExecutionOutputsFilter, reader: jspb.BinaryReader): NewSlotExecutionOutputsFilter;
}

export namespace NewSlotExecutionOutputsFilter {
    export type AsObject = {
        statusList: Array<execution_pb.ExecutionOutputStatus>,
    }
}

export class NewSlotExecutionOutputsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): NewSlotExecutionOutputsResponse;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): execution_pb.SlotExecutionOutput | undefined;
    setOutput(value?: execution_pb.SlotExecutionOutput): NewSlotExecutionOutputsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewSlotExecutionOutputsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewSlotExecutionOutputsResponse): NewSlotExecutionOutputsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewSlotExecutionOutputsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewSlotExecutionOutputsResponse;
    static deserializeBinaryFromReader(message: NewSlotExecutionOutputsResponse, reader: jspb.BinaryReader): NewSlotExecutionOutputsResponse;
}

export namespace NewSlotExecutionOutputsResponse {
    export type AsObject = {
        id: string,
        output?: execution_pb.SlotExecutionOutput.AsObject,
    }
}

export class SendBlocksRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SendBlocksRequest;

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): common_pb.SecureShare | undefined;
    setBlock(value?: common_pb.SecureShare): SendBlocksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendBlocksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendBlocksRequest): SendBlocksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendBlocksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendBlocksRequest;
    static deserializeBinaryFromReader(message: SendBlocksRequest, reader: jspb.BinaryReader): SendBlocksRequest;
}

export namespace SendBlocksRequest {
    export type AsObject = {
        id: string,
        block?: common_pb.SecureShare.AsObject,
    }
}

export class SendBlocksResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): SendBlocksResponse;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): BlockResult | undefined;
    setResult(value?: BlockResult): SendBlocksResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): SendBlocksResponse;

    getMessageCase(): SendBlocksResponse.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendBlocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendBlocksResponse): SendBlocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendBlocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendBlocksResponse;
    static deserializeBinaryFromReader(message: SendBlocksResponse, reader: jspb.BinaryReader): SendBlocksResponse;
}

export namespace SendBlocksResponse {
    export type AsObject = {
        id: string,
        result?: BlockResult.AsObject,
        error?: google_rpc_status_pb.Status.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        RESULT = 2,
        ERROR = 3,
    }

}

export class BlockResult extends jspb.Message { 
    getBlockId(): string;
    setBlockId(value: string): BlockResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockResult.AsObject;
    static toObject(includeInstance: boolean, msg: BlockResult): BlockResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockResult;
    static deserializeBinaryFromReader(message: BlockResult, reader: jspb.BinaryReader): BlockResult;
}

export namespace BlockResult {
    export type AsObject = {
        blockId: string,
    }
}

export class SendEndorsementsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SendEndorsementsRequest;
    clearEndorsementsList(): void;
    getEndorsementsList(): Array<common_pb.SecureShare>;
    setEndorsementsList(value: Array<common_pb.SecureShare>): SendEndorsementsRequest;
    addEndorsements(value?: common_pb.SecureShare, index?: number): common_pb.SecureShare;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendEndorsementsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendEndorsementsRequest): SendEndorsementsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendEndorsementsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendEndorsementsRequest;
    static deserializeBinaryFromReader(message: SendEndorsementsRequest, reader: jspb.BinaryReader): SendEndorsementsRequest;
}

export namespace SendEndorsementsRequest {
    export type AsObject = {
        id: string,
        endorsementsList: Array<common_pb.SecureShare.AsObject>,
    }
}

export class SendEndorsementsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): SendEndorsementsResponse;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): EndorsementResult | undefined;
    setResult(value?: EndorsementResult): SendEndorsementsResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): SendEndorsementsResponse;

    getMessageCase(): SendEndorsementsResponse.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendEndorsementsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendEndorsementsResponse): SendEndorsementsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendEndorsementsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendEndorsementsResponse;
    static deserializeBinaryFromReader(message: SendEndorsementsResponse, reader: jspb.BinaryReader): SendEndorsementsResponse;
}

export namespace SendEndorsementsResponse {
    export type AsObject = {
        id: string,
        result?: EndorsementResult.AsObject,
        error?: google_rpc_status_pb.Status.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        RESULT = 2,
        ERROR = 3,
    }

}

export class EndorsementResult extends jspb.Message { 
    clearEndorsementsIdsList(): void;
    getEndorsementsIdsList(): Array<string>;
    setEndorsementsIdsList(value: Array<string>): EndorsementResult;
    addEndorsementsIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndorsementResult.AsObject;
    static toObject(includeInstance: boolean, msg: EndorsementResult): EndorsementResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndorsementResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndorsementResult;
    static deserializeBinaryFromReader(message: EndorsementResult, reader: jspb.BinaryReader): EndorsementResult;
}

export namespace EndorsementResult {
    export type AsObject = {
        endorsementsIdsList: Array<string>,
    }
}

export class SendOperationsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SendOperationsRequest;
    clearOperationsList(): void;
    getOperationsList(): Array<common_pb.SecureShare>;
    setOperationsList(value: Array<common_pb.SecureShare>): SendOperationsRequest;
    addOperations(value?: common_pb.SecureShare, index?: number): common_pb.SecureShare;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendOperationsRequest): SendOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendOperationsRequest;
    static deserializeBinaryFromReader(message: SendOperationsRequest, reader: jspb.BinaryReader): SendOperationsRequest;
}

export namespace SendOperationsRequest {
    export type AsObject = {
        id: string,
        operationsList: Array<common_pb.SecureShare.AsObject>,
    }
}

export class SendOperationsResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): SendOperationsResponse;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): OperationResult | undefined;
    setResult(value?: OperationResult): SendOperationsResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): SendOperationsResponse;

    getMessageCase(): SendOperationsResponse.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendOperationsResponse): SendOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendOperationsResponse;
    static deserializeBinaryFromReader(message: SendOperationsResponse, reader: jspb.BinaryReader): SendOperationsResponse;
}

export namespace SendOperationsResponse {
    export type AsObject = {
        id: string,
        result?: OperationResult.AsObject,
        error?: google_rpc_status_pb.Status.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        RESULT = 2,
        ERROR = 3,
    }

}

export class OperationResult extends jspb.Message { 
    clearOperationsIdsList(): void;
    getOperationsIdsList(): Array<string>;
    setOperationsIdsList(value: Array<string>): OperationResult;
    addOperationsIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationResult.AsObject;
    static toObject(includeInstance: boolean, msg: OperationResult): OperationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationResult;
    static deserializeBinaryFromReader(message: OperationResult, reader: jspb.BinaryReader): OperationResult;
}

export namespace OperationResult {
    export type AsObject = {
        operationsIdsList: Array<string>,
    }
}

export class TransactionsThroughputRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): TransactionsThroughputRequest;

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): number | undefined;
    setInterval(value: number): TransactionsThroughputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionsThroughputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionsThroughputRequest): TransactionsThroughputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionsThroughputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionsThroughputRequest;
    static deserializeBinaryFromReader(message: TransactionsThroughputRequest, reader: jspb.BinaryReader): TransactionsThroughputRequest;
}

export namespace TransactionsThroughputRequest {
    export type AsObject = {
        id: string,
        interval?: number,
    }
}

export class TransactionsThroughputResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): TransactionsThroughputResponse;
    getThroughput(): number;
    setThroughput(value: number): TransactionsThroughputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionsThroughputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionsThroughputResponse): TransactionsThroughputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionsThroughputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionsThroughputResponse;
    static deserializeBinaryFromReader(message: TransactionsThroughputResponse, reader: jspb.BinaryReader): TransactionsThroughputResponse;
}

export namespace TransactionsThroughputResponse {
    export type AsObject = {
        id: string,
        throughput: number,
    }
}

export enum OpType {
    OP_TYPE_UNSPECIFIED = 0,
    OP_TYPE_TRANSACTION = 1,
    OP_TYPE_ROLL_BUY = 2,
    OP_TYPE_ROLL_SELL = 3,
    OP_TYPE_EXECUTE_SC = 4,
    OP_TYPE_CALL_SC = 5,
}
