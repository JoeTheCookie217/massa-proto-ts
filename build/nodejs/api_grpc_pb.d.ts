// package: massa.api.v1
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_pb from "./api_pb";
import * as block_pb from "./block_pb";
import * as common_pb from "./common_pb";
import * as endorsement_pb from "./endorsement_pb";
import * as execution_pb from "./execution_pb";
import * as google_rpc_status_pb from "./google/rpc/status_pb";
import * as operation_pb from "./operation_pb";
import * as slot_pb from "./slot_pb";

interface IMassaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBlocks: IMassaServiceService_IGetBlocks;
    getBlocksBySlots: IMassaServiceService_IGetBlocksBySlots;
    getDatastoreEntries: IMassaServiceService_IGetDatastoreEntries;
    getLargestStakers: IMassaServiceService_IGetLargestStakers;
    getNextBlockBestParents: IMassaServiceService_IGetNextBlockBestParents;
    getOperations: IMassaServiceService_IGetOperations;
    getScExecutionEvents: IMassaServiceService_IGetScExecutionEvents;
    getSelectorDraws: IMassaServiceService_IGetSelectorDraws;
    getTransactionsThroughput: IMassaServiceService_IGetTransactionsThroughput;
    getVersion: IMassaServiceService_IGetVersion;
    newBlocks: IMassaServiceService_INewBlocks;
    newBlocksHeaders: IMassaServiceService_INewBlocksHeaders;
    newEndorsements: IMassaServiceService_INewEndorsements;
    newFilledBlocks: IMassaServiceService_INewFilledBlocks;
    newOperations: IMassaServiceService_INewOperations;
    newSlotExecutionOutputs: IMassaServiceService_INewSlotExecutionOutputs;
    sendBlocks: IMassaServiceService_ISendBlocks;
    sendEndorsements: IMassaServiceService_ISendEndorsements;
    sendOperations: IMassaServiceService_ISendOperations;
    transactionsThroughput: IMassaServiceService_ITransactionsThroughput;
}

interface IMassaServiceService_IGetBlocks extends grpc.MethodDefinition<api_pb.GetBlocksRequest, api_pb.GetBlocksResponse> {
    path: "/massa.api.v1.MassaService/GetBlocks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetBlocksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetBlocksRequest>;
    responseSerialize: grpc.serialize<api_pb.GetBlocksResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetBlocksResponse>;
}
interface IMassaServiceService_IGetBlocksBySlots extends grpc.MethodDefinition<api_pb.GetBlocksBySlotsRequest, api_pb.GetBlocksBySlotsResponse> {
    path: "/massa.api.v1.MassaService/GetBlocksBySlots";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetBlocksBySlotsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetBlocksBySlotsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetBlocksBySlotsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetBlocksBySlotsResponse>;
}
interface IMassaServiceService_IGetDatastoreEntries extends grpc.MethodDefinition<api_pb.GetDatastoreEntriesRequest, api_pb.GetDatastoreEntriesResponse> {
    path: "/massa.api.v1.MassaService/GetDatastoreEntries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDatastoreEntriesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDatastoreEntriesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDatastoreEntriesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDatastoreEntriesResponse>;
}
interface IMassaServiceService_IGetLargestStakers extends grpc.MethodDefinition<api_pb.GetLargestStakersRequest, api_pb.GetLargestStakersResponse> {
    path: "/massa.api.v1.MassaService/GetLargestStakers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetLargestStakersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetLargestStakersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetLargestStakersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetLargestStakersResponse>;
}
interface IMassaServiceService_IGetNextBlockBestParents extends grpc.MethodDefinition<api_pb.GetNextBlockBestParentsRequest, api_pb.GetNextBlockBestParentsResponse> {
    path: "/massa.api.v1.MassaService/GetNextBlockBestParents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetNextBlockBestParentsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetNextBlockBestParentsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetNextBlockBestParentsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetNextBlockBestParentsResponse>;
}
interface IMassaServiceService_IGetOperations extends grpc.MethodDefinition<api_pb.GetOperationsRequest, api_pb.GetOperationsResponse> {
    path: "/massa.api.v1.MassaService/GetOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOperationsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOperationsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOperationsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOperationsResponse>;
}
interface IMassaServiceService_IGetScExecutionEvents extends grpc.MethodDefinition<api_pb.GetScExecutionEventsRequest, api_pb.GetScExecutionEventsResponse> {
    path: "/massa.api.v1.MassaService/GetScExecutionEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetScExecutionEventsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetScExecutionEventsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetScExecutionEventsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetScExecutionEventsResponse>;
}
interface IMassaServiceService_IGetSelectorDraws extends grpc.MethodDefinition<api_pb.GetSelectorDrawsRequest, api_pb.GetSelectorDrawsResponse> {
    path: "/massa.api.v1.MassaService/GetSelectorDraws";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetSelectorDrawsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetSelectorDrawsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetSelectorDrawsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetSelectorDrawsResponse>;
}
interface IMassaServiceService_IGetTransactionsThroughput extends grpc.MethodDefinition<api_pb.GetTransactionsThroughputRequest, api_pb.GetTransactionsThroughputResponse> {
    path: "/massa.api.v1.MassaService/GetTransactionsThroughput";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetTransactionsThroughputRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTransactionsThroughputRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTransactionsThroughputResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTransactionsThroughputResponse>;
}
interface IMassaServiceService_IGetVersion extends grpc.MethodDefinition<api_pb.GetVersionRequest, api_pb.GetVersionResponse> {
    path: "/massa.api.v1.MassaService/GetVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetVersionRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetVersionRequest>;
    responseSerialize: grpc.serialize<api_pb.GetVersionResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetVersionResponse>;
}
interface IMassaServiceService_INewBlocks extends grpc.MethodDefinition<api_pb.NewBlocksRequest, api_pb.NewBlocksResponse> {
    path: "/massa.api.v1.MassaService/NewBlocks";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.NewBlocksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.NewBlocksRequest>;
    responseSerialize: grpc.serialize<api_pb.NewBlocksResponse>;
    responseDeserialize: grpc.deserialize<api_pb.NewBlocksResponse>;
}
interface IMassaServiceService_INewBlocksHeaders extends grpc.MethodDefinition<api_pb.NewBlocksHeadersRequest, api_pb.NewBlocksHeadersResponse> {
    path: "/massa.api.v1.MassaService/NewBlocksHeaders";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.NewBlocksHeadersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.NewBlocksHeadersRequest>;
    responseSerialize: grpc.serialize<api_pb.NewBlocksHeadersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.NewBlocksHeadersResponse>;
}
interface IMassaServiceService_INewEndorsements extends grpc.MethodDefinition<api_pb.NewEndorsementsRequest, api_pb.NewEndorsementsResponse> {
    path: "/massa.api.v1.MassaService/NewEndorsements";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.NewEndorsementsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.NewEndorsementsRequest>;
    responseSerialize: grpc.serialize<api_pb.NewEndorsementsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.NewEndorsementsResponse>;
}
interface IMassaServiceService_INewFilledBlocks extends grpc.MethodDefinition<api_pb.NewFilledBlocksRequest, api_pb.NewFilledBlocksResponse> {
    path: "/massa.api.v1.MassaService/NewFilledBlocks";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.NewFilledBlocksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.NewFilledBlocksRequest>;
    responseSerialize: grpc.serialize<api_pb.NewFilledBlocksResponse>;
    responseDeserialize: grpc.deserialize<api_pb.NewFilledBlocksResponse>;
}
interface IMassaServiceService_INewOperations extends grpc.MethodDefinition<api_pb.NewOperationsRequest, api_pb.NewOperationsResponse> {
    path: "/massa.api.v1.MassaService/NewOperations";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.NewOperationsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.NewOperationsRequest>;
    responseSerialize: grpc.serialize<api_pb.NewOperationsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.NewOperationsResponse>;
}
interface IMassaServiceService_INewSlotExecutionOutputs extends grpc.MethodDefinition<api_pb.NewSlotExecutionOutputsRequest, api_pb.NewSlotExecutionOutputsResponse> {
    path: "/massa.api.v1.MassaService/NewSlotExecutionOutputs";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.NewSlotExecutionOutputsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.NewSlotExecutionOutputsRequest>;
    responseSerialize: grpc.serialize<api_pb.NewSlotExecutionOutputsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.NewSlotExecutionOutputsResponse>;
}
interface IMassaServiceService_ISendBlocks extends grpc.MethodDefinition<api_pb.SendBlocksRequest, api_pb.SendBlocksResponse> {
    path: "/massa.api.v1.MassaService/SendBlocks";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.SendBlocksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.SendBlocksRequest>;
    responseSerialize: grpc.serialize<api_pb.SendBlocksResponse>;
    responseDeserialize: grpc.deserialize<api_pb.SendBlocksResponse>;
}
interface IMassaServiceService_ISendEndorsements extends grpc.MethodDefinition<api_pb.SendEndorsementsRequest, api_pb.SendEndorsementsResponse> {
    path: "/massa.api.v1.MassaService/SendEndorsements";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.SendEndorsementsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.SendEndorsementsRequest>;
    responseSerialize: grpc.serialize<api_pb.SendEndorsementsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.SendEndorsementsResponse>;
}
interface IMassaServiceService_ISendOperations extends grpc.MethodDefinition<api_pb.SendOperationsRequest, api_pb.SendOperationsResponse> {
    path: "/massa.api.v1.MassaService/SendOperations";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.SendOperationsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.SendOperationsRequest>;
    responseSerialize: grpc.serialize<api_pb.SendOperationsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.SendOperationsResponse>;
}
interface IMassaServiceService_ITransactionsThroughput extends grpc.MethodDefinition<api_pb.TransactionsThroughputRequest, api_pb.TransactionsThroughputResponse> {
    path: "/massa.api.v1.MassaService/TransactionsThroughput";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.TransactionsThroughputRequest>;
    requestDeserialize: grpc.deserialize<api_pb.TransactionsThroughputRequest>;
    responseSerialize: grpc.serialize<api_pb.TransactionsThroughputResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TransactionsThroughputResponse>;
}

export const MassaServiceService: IMassaServiceService;

export interface IMassaServiceServer extends grpc.UntypedServiceImplementation {
    getBlocks: grpc.handleUnaryCall<api_pb.GetBlocksRequest, api_pb.GetBlocksResponse>;
    getBlocksBySlots: grpc.handleUnaryCall<api_pb.GetBlocksBySlotsRequest, api_pb.GetBlocksBySlotsResponse>;
    getDatastoreEntries: grpc.handleUnaryCall<api_pb.GetDatastoreEntriesRequest, api_pb.GetDatastoreEntriesResponse>;
    getLargestStakers: grpc.handleUnaryCall<api_pb.GetLargestStakersRequest, api_pb.GetLargestStakersResponse>;
    getNextBlockBestParents: grpc.handleUnaryCall<api_pb.GetNextBlockBestParentsRequest, api_pb.GetNextBlockBestParentsResponse>;
    getOperations: grpc.handleUnaryCall<api_pb.GetOperationsRequest, api_pb.GetOperationsResponse>;
    getScExecutionEvents: grpc.handleUnaryCall<api_pb.GetScExecutionEventsRequest, api_pb.GetScExecutionEventsResponse>;
    getSelectorDraws: grpc.handleUnaryCall<api_pb.GetSelectorDrawsRequest, api_pb.GetSelectorDrawsResponse>;
    getTransactionsThroughput: grpc.handleUnaryCall<api_pb.GetTransactionsThroughputRequest, api_pb.GetTransactionsThroughputResponse>;
    getVersion: grpc.handleUnaryCall<api_pb.GetVersionRequest, api_pb.GetVersionResponse>;
    newBlocks: grpc.handleBidiStreamingCall<api_pb.NewBlocksRequest, api_pb.NewBlocksResponse>;
    newBlocksHeaders: grpc.handleBidiStreamingCall<api_pb.NewBlocksHeadersRequest, api_pb.NewBlocksHeadersResponse>;
    newEndorsements: grpc.handleBidiStreamingCall<api_pb.NewEndorsementsRequest, api_pb.NewEndorsementsResponse>;
    newFilledBlocks: grpc.handleBidiStreamingCall<api_pb.NewFilledBlocksRequest, api_pb.NewFilledBlocksResponse>;
    newOperations: grpc.handleBidiStreamingCall<api_pb.NewOperationsRequest, api_pb.NewOperationsResponse>;
    newSlotExecutionOutputs: grpc.handleBidiStreamingCall<api_pb.NewSlotExecutionOutputsRequest, api_pb.NewSlotExecutionOutputsResponse>;
    sendBlocks: grpc.handleBidiStreamingCall<api_pb.SendBlocksRequest, api_pb.SendBlocksResponse>;
    sendEndorsements: grpc.handleBidiStreamingCall<api_pb.SendEndorsementsRequest, api_pb.SendEndorsementsResponse>;
    sendOperations: grpc.handleBidiStreamingCall<api_pb.SendOperationsRequest, api_pb.SendOperationsResponse>;
    transactionsThroughput: grpc.handleBidiStreamingCall<api_pb.TransactionsThroughputRequest, api_pb.TransactionsThroughputResponse>;
}

export interface IMassaServiceClient {
    getBlocks(request: api_pb.GetBlocksRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksResponse) => void): grpc.ClientUnaryCall;
    getBlocks(request: api_pb.GetBlocksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksResponse) => void): grpc.ClientUnaryCall;
    getBlocks(request: api_pb.GetBlocksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksResponse) => void): grpc.ClientUnaryCall;
    getBlocksBySlots(request: api_pb.GetBlocksBySlotsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksBySlotsResponse) => void): grpc.ClientUnaryCall;
    getBlocksBySlots(request: api_pb.GetBlocksBySlotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksBySlotsResponse) => void): grpc.ClientUnaryCall;
    getBlocksBySlots(request: api_pb.GetBlocksBySlotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksBySlotsResponse) => void): grpc.ClientUnaryCall;
    getDatastoreEntries(request: api_pb.GetDatastoreEntriesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDatastoreEntriesResponse) => void): grpc.ClientUnaryCall;
    getDatastoreEntries(request: api_pb.GetDatastoreEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDatastoreEntriesResponse) => void): grpc.ClientUnaryCall;
    getDatastoreEntries(request: api_pb.GetDatastoreEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDatastoreEntriesResponse) => void): grpc.ClientUnaryCall;
    getLargestStakers(request: api_pb.GetLargestStakersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetLargestStakersResponse) => void): grpc.ClientUnaryCall;
    getLargestStakers(request: api_pb.GetLargestStakersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetLargestStakersResponse) => void): grpc.ClientUnaryCall;
    getLargestStakers(request: api_pb.GetLargestStakersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetLargestStakersResponse) => void): grpc.ClientUnaryCall;
    getNextBlockBestParents(request: api_pb.GetNextBlockBestParentsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetNextBlockBestParentsResponse) => void): grpc.ClientUnaryCall;
    getNextBlockBestParents(request: api_pb.GetNextBlockBestParentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetNextBlockBestParentsResponse) => void): grpc.ClientUnaryCall;
    getNextBlockBestParents(request: api_pb.GetNextBlockBestParentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetNextBlockBestParentsResponse) => void): grpc.ClientUnaryCall;
    getOperations(request: api_pb.GetOperationsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOperationsResponse) => void): grpc.ClientUnaryCall;
    getOperations(request: api_pb.GetOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOperationsResponse) => void): grpc.ClientUnaryCall;
    getOperations(request: api_pb.GetOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOperationsResponse) => void): grpc.ClientUnaryCall;
    getScExecutionEvents(request: api_pb.GetScExecutionEventsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetScExecutionEventsResponse) => void): grpc.ClientUnaryCall;
    getScExecutionEvents(request: api_pb.GetScExecutionEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetScExecutionEventsResponse) => void): grpc.ClientUnaryCall;
    getScExecutionEvents(request: api_pb.GetScExecutionEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetScExecutionEventsResponse) => void): grpc.ClientUnaryCall;
    getSelectorDraws(request: api_pb.GetSelectorDrawsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetSelectorDrawsResponse) => void): grpc.ClientUnaryCall;
    getSelectorDraws(request: api_pb.GetSelectorDrawsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetSelectorDrawsResponse) => void): grpc.ClientUnaryCall;
    getSelectorDraws(request: api_pb.GetSelectorDrawsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetSelectorDrawsResponse) => void): grpc.ClientUnaryCall;
    getTransactionsThroughput(request: api_pb.GetTransactionsThroughputRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionsThroughputResponse) => void): grpc.ClientUnaryCall;
    getTransactionsThroughput(request: api_pb.GetTransactionsThroughputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionsThroughputResponse) => void): grpc.ClientUnaryCall;
    getTransactionsThroughput(request: api_pb.GetTransactionsThroughputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionsThroughputResponse) => void): grpc.ClientUnaryCall;
    getVersion(request: api_pb.GetVersionRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    getVersion(request: api_pb.GetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    getVersion(request: api_pb.GetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    newBlocks(): grpc.ClientDuplexStream<api_pb.NewBlocksRequest, api_pb.NewBlocksResponse>;
    newBlocks(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksRequest, api_pb.NewBlocksResponse>;
    newBlocks(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksRequest, api_pb.NewBlocksResponse>;
    newBlocksHeaders(): grpc.ClientDuplexStream<api_pb.NewBlocksHeadersRequest, api_pb.NewBlocksHeadersResponse>;
    newBlocksHeaders(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksHeadersRequest, api_pb.NewBlocksHeadersResponse>;
    newBlocksHeaders(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksHeadersRequest, api_pb.NewBlocksHeadersResponse>;
    newEndorsements(): grpc.ClientDuplexStream<api_pb.NewEndorsementsRequest, api_pb.NewEndorsementsResponse>;
    newEndorsements(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewEndorsementsRequest, api_pb.NewEndorsementsResponse>;
    newEndorsements(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewEndorsementsRequest, api_pb.NewEndorsementsResponse>;
    newFilledBlocks(): grpc.ClientDuplexStream<api_pb.NewFilledBlocksRequest, api_pb.NewFilledBlocksResponse>;
    newFilledBlocks(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewFilledBlocksRequest, api_pb.NewFilledBlocksResponse>;
    newFilledBlocks(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewFilledBlocksRequest, api_pb.NewFilledBlocksResponse>;
    newOperations(): grpc.ClientDuplexStream<api_pb.NewOperationsRequest, api_pb.NewOperationsResponse>;
    newOperations(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewOperationsRequest, api_pb.NewOperationsResponse>;
    newOperations(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewOperationsRequest, api_pb.NewOperationsResponse>;
    newSlotExecutionOutputs(): grpc.ClientDuplexStream<api_pb.NewSlotExecutionOutputsRequest, api_pb.NewSlotExecutionOutputsResponse>;
    newSlotExecutionOutputs(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewSlotExecutionOutputsRequest, api_pb.NewSlotExecutionOutputsResponse>;
    newSlotExecutionOutputs(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewSlotExecutionOutputsRequest, api_pb.NewSlotExecutionOutputsResponse>;
    sendBlocks(): grpc.ClientDuplexStream<api_pb.SendBlocksRequest, api_pb.SendBlocksResponse>;
    sendBlocks(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendBlocksRequest, api_pb.SendBlocksResponse>;
    sendBlocks(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendBlocksRequest, api_pb.SendBlocksResponse>;
    sendEndorsements(): grpc.ClientDuplexStream<api_pb.SendEndorsementsRequest, api_pb.SendEndorsementsResponse>;
    sendEndorsements(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendEndorsementsRequest, api_pb.SendEndorsementsResponse>;
    sendEndorsements(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendEndorsementsRequest, api_pb.SendEndorsementsResponse>;
    sendOperations(): grpc.ClientDuplexStream<api_pb.SendOperationsRequest, api_pb.SendOperationsResponse>;
    sendOperations(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendOperationsRequest, api_pb.SendOperationsResponse>;
    sendOperations(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendOperationsRequest, api_pb.SendOperationsResponse>;
    transactionsThroughput(): grpc.ClientDuplexStream<api_pb.TransactionsThroughputRequest, api_pb.TransactionsThroughputResponse>;
    transactionsThroughput(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.TransactionsThroughputRequest, api_pb.TransactionsThroughputResponse>;
    transactionsThroughput(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.TransactionsThroughputRequest, api_pb.TransactionsThroughputResponse>;
}

export class MassaServiceClient extends grpc.Client implements IMassaServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getBlocks(request: api_pb.GetBlocksRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksResponse) => void): grpc.ClientUnaryCall;
    public getBlocks(request: api_pb.GetBlocksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksResponse) => void): grpc.ClientUnaryCall;
    public getBlocks(request: api_pb.GetBlocksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksResponse) => void): grpc.ClientUnaryCall;
    public getBlocksBySlots(request: api_pb.GetBlocksBySlotsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksBySlotsResponse) => void): grpc.ClientUnaryCall;
    public getBlocksBySlots(request: api_pb.GetBlocksBySlotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksBySlotsResponse) => void): grpc.ClientUnaryCall;
    public getBlocksBySlots(request: api_pb.GetBlocksBySlotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetBlocksBySlotsResponse) => void): grpc.ClientUnaryCall;
    public getDatastoreEntries(request: api_pb.GetDatastoreEntriesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDatastoreEntriesResponse) => void): grpc.ClientUnaryCall;
    public getDatastoreEntries(request: api_pb.GetDatastoreEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDatastoreEntriesResponse) => void): grpc.ClientUnaryCall;
    public getDatastoreEntries(request: api_pb.GetDatastoreEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDatastoreEntriesResponse) => void): grpc.ClientUnaryCall;
    public getLargestStakers(request: api_pb.GetLargestStakersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetLargestStakersResponse) => void): grpc.ClientUnaryCall;
    public getLargestStakers(request: api_pb.GetLargestStakersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetLargestStakersResponse) => void): grpc.ClientUnaryCall;
    public getLargestStakers(request: api_pb.GetLargestStakersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetLargestStakersResponse) => void): grpc.ClientUnaryCall;
    public getNextBlockBestParents(request: api_pb.GetNextBlockBestParentsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetNextBlockBestParentsResponse) => void): grpc.ClientUnaryCall;
    public getNextBlockBestParents(request: api_pb.GetNextBlockBestParentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetNextBlockBestParentsResponse) => void): grpc.ClientUnaryCall;
    public getNextBlockBestParents(request: api_pb.GetNextBlockBestParentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetNextBlockBestParentsResponse) => void): grpc.ClientUnaryCall;
    public getOperations(request: api_pb.GetOperationsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOperationsResponse) => void): grpc.ClientUnaryCall;
    public getOperations(request: api_pb.GetOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOperationsResponse) => void): grpc.ClientUnaryCall;
    public getOperations(request: api_pb.GetOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOperationsResponse) => void): grpc.ClientUnaryCall;
    public getScExecutionEvents(request: api_pb.GetScExecutionEventsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetScExecutionEventsResponse) => void): grpc.ClientUnaryCall;
    public getScExecutionEvents(request: api_pb.GetScExecutionEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetScExecutionEventsResponse) => void): grpc.ClientUnaryCall;
    public getScExecutionEvents(request: api_pb.GetScExecutionEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetScExecutionEventsResponse) => void): grpc.ClientUnaryCall;
    public getSelectorDraws(request: api_pb.GetSelectorDrawsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetSelectorDrawsResponse) => void): grpc.ClientUnaryCall;
    public getSelectorDraws(request: api_pb.GetSelectorDrawsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetSelectorDrawsResponse) => void): grpc.ClientUnaryCall;
    public getSelectorDraws(request: api_pb.GetSelectorDrawsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetSelectorDrawsResponse) => void): grpc.ClientUnaryCall;
    public getTransactionsThroughput(request: api_pb.GetTransactionsThroughputRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionsThroughputResponse) => void): grpc.ClientUnaryCall;
    public getTransactionsThroughput(request: api_pb.GetTransactionsThroughputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionsThroughputResponse) => void): grpc.ClientUnaryCall;
    public getTransactionsThroughput(request: api_pb.GetTransactionsThroughputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionsThroughputResponse) => void): grpc.ClientUnaryCall;
    public getVersion(request: api_pb.GetVersionRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    public getVersion(request: api_pb.GetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    public getVersion(request: api_pb.GetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    public newBlocks(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksRequest, api_pb.NewBlocksResponse>;
    public newBlocks(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksRequest, api_pb.NewBlocksResponse>;
    public newBlocksHeaders(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksHeadersRequest, api_pb.NewBlocksHeadersResponse>;
    public newBlocksHeaders(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewBlocksHeadersRequest, api_pb.NewBlocksHeadersResponse>;
    public newEndorsements(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewEndorsementsRequest, api_pb.NewEndorsementsResponse>;
    public newEndorsements(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewEndorsementsRequest, api_pb.NewEndorsementsResponse>;
    public newFilledBlocks(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewFilledBlocksRequest, api_pb.NewFilledBlocksResponse>;
    public newFilledBlocks(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewFilledBlocksRequest, api_pb.NewFilledBlocksResponse>;
    public newOperations(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewOperationsRequest, api_pb.NewOperationsResponse>;
    public newOperations(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewOperationsRequest, api_pb.NewOperationsResponse>;
    public newSlotExecutionOutputs(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewSlotExecutionOutputsRequest, api_pb.NewSlotExecutionOutputsResponse>;
    public newSlotExecutionOutputs(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.NewSlotExecutionOutputsRequest, api_pb.NewSlotExecutionOutputsResponse>;
    public sendBlocks(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendBlocksRequest, api_pb.SendBlocksResponse>;
    public sendBlocks(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendBlocksRequest, api_pb.SendBlocksResponse>;
    public sendEndorsements(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendEndorsementsRequest, api_pb.SendEndorsementsResponse>;
    public sendEndorsements(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendEndorsementsRequest, api_pb.SendEndorsementsResponse>;
    public sendOperations(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendOperationsRequest, api_pb.SendOperationsResponse>;
    public sendOperations(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.SendOperationsRequest, api_pb.SendOperationsResponse>;
    public transactionsThroughput(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.TransactionsThroughputRequest, api_pb.TransactionsThroughputResponse>;
    public transactionsThroughput(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_pb.TransactionsThroughputRequest, api_pb.TransactionsThroughputResponse>;
}
