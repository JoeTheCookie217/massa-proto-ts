// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2023 MASSA LABS <info@massa.net>
//
'use strict';
var grpc = require('@grpc/grpc-js');
var api_pb = require('./api_pb.js');
var block_pb = require('./block_pb.js');
var common_pb = require('./common_pb.js');
var endorsement_pb = require('./endorsement_pb.js');
var execution_pb = require('./execution_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_rpc_status_pb = require('./google/rpc/status_pb.js');
var operation_pb = require('./operation_pb.js');
var slot_pb = require('./slot_pb.js');

function serialize_massa_api_v1_GetBlocksBySlotsRequest(arg) {
  if (!(arg instanceof api_pb.GetBlocksBySlotsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetBlocksBySlotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetBlocksBySlotsRequest(buffer_arg) {
  return api_pb.GetBlocksBySlotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetBlocksBySlotsResponse(arg) {
  if (!(arg instanceof api_pb.GetBlocksBySlotsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetBlocksBySlotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetBlocksBySlotsResponse(buffer_arg) {
  return api_pb.GetBlocksBySlotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetBlocksRequest(arg) {
  if (!(arg instanceof api_pb.GetBlocksRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetBlocksRequest(buffer_arg) {
  return api_pb.GetBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetBlocksResponse(arg) {
  if (!(arg instanceof api_pb.GetBlocksResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetBlocksResponse(buffer_arg) {
  return api_pb.GetBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetDatastoreEntriesRequest(arg) {
  if (!(arg instanceof api_pb.GetDatastoreEntriesRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetDatastoreEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetDatastoreEntriesRequest(buffer_arg) {
  return api_pb.GetDatastoreEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetDatastoreEntriesResponse(arg) {
  if (!(arg instanceof api_pb.GetDatastoreEntriesResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetDatastoreEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetDatastoreEntriesResponse(buffer_arg) {
  return api_pb.GetDatastoreEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetLargestStakersRequest(arg) {
  if (!(arg instanceof api_pb.GetLargestStakersRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetLargestStakersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetLargestStakersRequest(buffer_arg) {
  return api_pb.GetLargestStakersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetLargestStakersResponse(arg) {
  if (!(arg instanceof api_pb.GetLargestStakersResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetLargestStakersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetLargestStakersResponse(buffer_arg) {
  return api_pb.GetLargestStakersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetNextBlockBestParentsRequest(arg) {
  if (!(arg instanceof api_pb.GetNextBlockBestParentsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetNextBlockBestParentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetNextBlockBestParentsRequest(buffer_arg) {
  return api_pb.GetNextBlockBestParentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetNextBlockBestParentsResponse(arg) {
  if (!(arg instanceof api_pb.GetNextBlockBestParentsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetNextBlockBestParentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetNextBlockBestParentsResponse(buffer_arg) {
  return api_pb.GetNextBlockBestParentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetOperationsRequest(arg) {
  if (!(arg instanceof api_pb.GetOperationsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetOperationsRequest(buffer_arg) {
  return api_pb.GetOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetOperationsResponse(arg) {
  if (!(arg instanceof api_pb.GetOperationsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetOperationsResponse(buffer_arg) {
  return api_pb.GetOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetScExecutionEventsRequest(arg) {
  if (!(arg instanceof api_pb.GetScExecutionEventsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetScExecutionEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetScExecutionEventsRequest(buffer_arg) {
  return api_pb.GetScExecutionEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetScExecutionEventsResponse(arg) {
  if (!(arg instanceof api_pb.GetScExecutionEventsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetScExecutionEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetScExecutionEventsResponse(buffer_arg) {
  return api_pb.GetScExecutionEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetSelectorDrawsRequest(arg) {
  if (!(arg instanceof api_pb.GetSelectorDrawsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetSelectorDrawsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetSelectorDrawsRequest(buffer_arg) {
  return api_pb.GetSelectorDrawsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetSelectorDrawsResponse(arg) {
  if (!(arg instanceof api_pb.GetSelectorDrawsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetSelectorDrawsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetSelectorDrawsResponse(buffer_arg) {
  return api_pb.GetSelectorDrawsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetTransactionsThroughputRequest(arg) {
  if (!(arg instanceof api_pb.GetTransactionsThroughputRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetTransactionsThroughputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetTransactionsThroughputRequest(buffer_arg) {
  return api_pb.GetTransactionsThroughputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetTransactionsThroughputResponse(arg) {
  if (!(arg instanceof api_pb.GetTransactionsThroughputResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetTransactionsThroughputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetTransactionsThroughputResponse(buffer_arg) {
  return api_pb.GetTransactionsThroughputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetVersionRequest(arg) {
  if (!(arg instanceof api_pb.GetVersionRequest)) {
    throw new Error('Expected argument of type massa.api.v1.GetVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetVersionRequest(buffer_arg) {
  return api_pb.GetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_GetVersionResponse(arg) {
  if (!(arg instanceof api_pb.GetVersionResponse)) {
    throw new Error('Expected argument of type massa.api.v1.GetVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_GetVersionResponse(buffer_arg) {
  return api_pb.GetVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewBlocksHeadersRequest(arg) {
  if (!(arg instanceof api_pb.NewBlocksHeadersRequest)) {
    throw new Error('Expected argument of type massa.api.v1.NewBlocksHeadersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewBlocksHeadersRequest(buffer_arg) {
  return api_pb.NewBlocksHeadersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewBlocksHeadersResponse(arg) {
  if (!(arg instanceof api_pb.NewBlocksHeadersResponse)) {
    throw new Error('Expected argument of type massa.api.v1.NewBlocksHeadersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewBlocksHeadersResponse(buffer_arg) {
  return api_pb.NewBlocksHeadersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewBlocksRequest(arg) {
  if (!(arg instanceof api_pb.NewBlocksRequest)) {
    throw new Error('Expected argument of type massa.api.v1.NewBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewBlocksRequest(buffer_arg) {
  return api_pb.NewBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewBlocksResponse(arg) {
  if (!(arg instanceof api_pb.NewBlocksResponse)) {
    throw new Error('Expected argument of type massa.api.v1.NewBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewBlocksResponse(buffer_arg) {
  return api_pb.NewBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewEndorsementsRequest(arg) {
  if (!(arg instanceof api_pb.NewEndorsementsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.NewEndorsementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewEndorsementsRequest(buffer_arg) {
  return api_pb.NewEndorsementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewEndorsementsResponse(arg) {
  if (!(arg instanceof api_pb.NewEndorsementsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.NewEndorsementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewEndorsementsResponse(buffer_arg) {
  return api_pb.NewEndorsementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewFilledBlocksRequest(arg) {
  if (!(arg instanceof api_pb.NewFilledBlocksRequest)) {
    throw new Error('Expected argument of type massa.api.v1.NewFilledBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewFilledBlocksRequest(buffer_arg) {
  return api_pb.NewFilledBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewFilledBlocksResponse(arg) {
  if (!(arg instanceof api_pb.NewFilledBlocksResponse)) {
    throw new Error('Expected argument of type massa.api.v1.NewFilledBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewFilledBlocksResponse(buffer_arg) {
  return api_pb.NewFilledBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewOperationsRequest(arg) {
  if (!(arg instanceof api_pb.NewOperationsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.NewOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewOperationsRequest(buffer_arg) {
  return api_pb.NewOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewOperationsResponse(arg) {
  if (!(arg instanceof api_pb.NewOperationsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.NewOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewOperationsResponse(buffer_arg) {
  return api_pb.NewOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewSlotExecutionOutputsRequest(arg) {
  if (!(arg instanceof api_pb.NewSlotExecutionOutputsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.NewSlotExecutionOutputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewSlotExecutionOutputsRequest(buffer_arg) {
  return api_pb.NewSlotExecutionOutputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_NewSlotExecutionOutputsResponse(arg) {
  if (!(arg instanceof api_pb.NewSlotExecutionOutputsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.NewSlotExecutionOutputsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_NewSlotExecutionOutputsResponse(buffer_arg) {
  return api_pb.NewSlotExecutionOutputsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_SendBlocksRequest(arg) {
  if (!(arg instanceof api_pb.SendBlocksRequest)) {
    throw new Error('Expected argument of type massa.api.v1.SendBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_SendBlocksRequest(buffer_arg) {
  return api_pb.SendBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_SendBlocksResponse(arg) {
  if (!(arg instanceof api_pb.SendBlocksResponse)) {
    throw new Error('Expected argument of type massa.api.v1.SendBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_SendBlocksResponse(buffer_arg) {
  return api_pb.SendBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_SendEndorsementsRequest(arg) {
  if (!(arg instanceof api_pb.SendEndorsementsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.SendEndorsementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_SendEndorsementsRequest(buffer_arg) {
  return api_pb.SendEndorsementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_SendEndorsementsResponse(arg) {
  if (!(arg instanceof api_pb.SendEndorsementsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.SendEndorsementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_SendEndorsementsResponse(buffer_arg) {
  return api_pb.SendEndorsementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_SendOperationsRequest(arg) {
  if (!(arg instanceof api_pb.SendOperationsRequest)) {
    throw new Error('Expected argument of type massa.api.v1.SendOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_SendOperationsRequest(buffer_arg) {
  return api_pb.SendOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_SendOperationsResponse(arg) {
  if (!(arg instanceof api_pb.SendOperationsResponse)) {
    throw new Error('Expected argument of type massa.api.v1.SendOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_SendOperationsResponse(buffer_arg) {
  return api_pb.SendOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_TransactionsThroughputRequest(arg) {
  if (!(arg instanceof api_pb.TransactionsThroughputRequest)) {
    throw new Error('Expected argument of type massa.api.v1.TransactionsThroughputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_TransactionsThroughputRequest(buffer_arg) {
  return api_pb.TransactionsThroughputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_massa_api_v1_TransactionsThroughputResponse(arg) {
  if (!(arg instanceof api_pb.TransactionsThroughputResponse)) {
    throw new Error('Expected argument of type massa.api.v1.TransactionsThroughputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_massa_api_v1_TransactionsThroughputResponse(buffer_arg) {
  return api_pb.TransactionsThroughputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Massa gRPC service
var MassaServiceService = exports.MassaServiceService = {
  // Get blocks by ids
getBlocks: {
    path: '/massa.api.v1.MassaService/GetBlocks',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetBlocksRequest,
    responseType: api_pb.GetBlocksResponse,
    requestSerialize: serialize_massa_api_v1_GetBlocksRequest,
    requestDeserialize: deserialize_massa_api_v1_GetBlocksRequest,
    responseSerialize: serialize_massa_api_v1_GetBlocksResponse,
    responseDeserialize: deserialize_massa_api_v1_GetBlocksResponse,
  },
  // Get blocks by slots
getBlocksBySlots: {
    path: '/massa.api.v1.MassaService/GetBlocksBySlots',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetBlocksBySlotsRequest,
    responseType: api_pb.GetBlocksBySlotsResponse,
    requestSerialize: serialize_massa_api_v1_GetBlocksBySlotsRequest,
    requestDeserialize: deserialize_massa_api_v1_GetBlocksBySlotsRequest,
    responseSerialize: serialize_massa_api_v1_GetBlocksBySlotsResponse,
    responseDeserialize: deserialize_massa_api_v1_GetBlocksBySlotsResponse,
  },
  // Get datastore entries
getDatastoreEntries: {
    path: '/massa.api.v1.MassaService/GetDatastoreEntries',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetDatastoreEntriesRequest,
    responseType: api_pb.GetDatastoreEntriesResponse,
    requestSerialize: serialize_massa_api_v1_GetDatastoreEntriesRequest,
    requestDeserialize: deserialize_massa_api_v1_GetDatastoreEntriesRequest,
    responseSerialize: serialize_massa_api_v1_GetDatastoreEntriesResponse,
    responseDeserialize: deserialize_massa_api_v1_GetDatastoreEntriesResponse,
  },
  // Get largest stakers
getLargestStakers: {
    path: '/massa.api.v1.MassaService/GetLargestStakers',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetLargestStakersRequest,
    responseType: api_pb.GetLargestStakersResponse,
    requestSerialize: serialize_massa_api_v1_GetLargestStakersRequest,
    requestDeserialize: deserialize_massa_api_v1_GetLargestStakersRequest,
    responseSerialize: serialize_massa_api_v1_GetLargestStakersResponse,
    responseDeserialize: deserialize_massa_api_v1_GetLargestStakersResponse,
  },
  // Get next block best parents
getNextBlockBestParents: {
    path: '/massa.api.v1.MassaService/GetNextBlockBestParents',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetNextBlockBestParentsRequest,
    responseType: api_pb.GetNextBlockBestParentsResponse,
    requestSerialize: serialize_massa_api_v1_GetNextBlockBestParentsRequest,
    requestDeserialize: deserialize_massa_api_v1_GetNextBlockBestParentsRequest,
    responseSerialize: serialize_massa_api_v1_GetNextBlockBestParentsResponse,
    responseDeserialize: deserialize_massa_api_v1_GetNextBlockBestParentsResponse,
  },
  // Get operations
getOperations: {
    path: '/massa.api.v1.MassaService/GetOperations',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOperationsRequest,
    responseType: api_pb.GetOperationsResponse,
    requestSerialize: serialize_massa_api_v1_GetOperationsRequest,
    requestDeserialize: deserialize_massa_api_v1_GetOperationsRequest,
    responseSerialize: serialize_massa_api_v1_GetOperationsResponse,
    responseDeserialize: deserialize_massa_api_v1_GetOperationsResponse,
  },
  // Get smart contracts execution events
getScExecutionEvents: {
    path: '/massa.api.v1.MassaService/GetScExecutionEvents',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetScExecutionEventsRequest,
    responseType: api_pb.GetScExecutionEventsResponse,
    requestSerialize: serialize_massa_api_v1_GetScExecutionEventsRequest,
    requestDeserialize: deserialize_massa_api_v1_GetScExecutionEventsRequest,
    responseSerialize: serialize_massa_api_v1_GetScExecutionEventsResponse,
    responseDeserialize: deserialize_massa_api_v1_GetScExecutionEventsResponse,
  },
  // Get selector draws
getSelectorDraws: {
    path: '/massa.api.v1.MassaService/GetSelectorDraws',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetSelectorDrawsRequest,
    responseType: api_pb.GetSelectorDrawsResponse,
    requestSerialize: serialize_massa_api_v1_GetSelectorDrawsRequest,
    requestDeserialize: deserialize_massa_api_v1_GetSelectorDrawsRequest,
    responseSerialize: serialize_massa_api_v1_GetSelectorDrawsResponse,
    responseDeserialize: deserialize_massa_api_v1_GetSelectorDrawsResponse,
  },
  // Get transactions throughput
getTransactionsThroughput: {
    path: '/massa.api.v1.MassaService/GetTransactionsThroughput',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetTransactionsThroughputRequest,
    responseType: api_pb.GetTransactionsThroughputResponse,
    requestSerialize: serialize_massa_api_v1_GetTransactionsThroughputRequest,
    requestDeserialize: deserialize_massa_api_v1_GetTransactionsThroughputRequest,
    responseSerialize: serialize_massa_api_v1_GetTransactionsThroughputResponse,
    responseDeserialize: deserialize_massa_api_v1_GetTransactionsThroughputResponse,
  },
  // Get node version
getVersion: {
    path: '/massa.api.v1.MassaService/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetVersionRequest,
    responseType: api_pb.GetVersionResponse,
    requestSerialize: serialize_massa_api_v1_GetVersionRequest,
    requestDeserialize: deserialize_massa_api_v1_GetVersionRequest,
    responseSerialize: serialize_massa_api_v1_GetVersionResponse,
    responseDeserialize: deserialize_massa_api_v1_GetVersionResponse,
  },
  // ███████╗████████╗██████╗ ███████╗ █████╗ ███╗   ███╗
// ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██╔══██╗████╗ ████║
// ███████╗   ██║   ██████╔╝█████╗  ███████║██╔████╔██║
// ╚════██║   ██║   ██╔══██╗██╔══╝  ██╔══██║██║╚██╔╝██║
// ███████║   ██║   ██║  ██║███████╗██║  ██║██║ ╚═╝ ██║
//
// New received and produced blocks
newBlocks: {
    path: '/massa.api.v1.MassaService/NewBlocks',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.NewBlocksRequest,
    responseType: api_pb.NewBlocksResponse,
    requestSerialize: serialize_massa_api_v1_NewBlocksRequest,
    requestDeserialize: deserialize_massa_api_v1_NewBlocksRequest,
    responseSerialize: serialize_massa_api_v1_NewBlocksResponse,
    responseDeserialize: deserialize_massa_api_v1_NewBlocksResponse,
  },
  // New received and produced blocks headers
newBlocksHeaders: {
    path: '/massa.api.v1.MassaService/NewBlocksHeaders',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.NewBlocksHeadersRequest,
    responseType: api_pb.NewBlocksHeadersResponse,
    requestSerialize: serialize_massa_api_v1_NewBlocksHeadersRequest,
    requestDeserialize: deserialize_massa_api_v1_NewBlocksHeadersRequest,
    responseSerialize: serialize_massa_api_v1_NewBlocksHeadersResponse,
    responseDeserialize: deserialize_massa_api_v1_NewBlocksHeadersResponse,
  },
  // New received and produced endorsements
newEndorsements: {
    path: '/massa.api.v1.MassaService/NewEndorsements',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.NewEndorsementsRequest,
    responseType: api_pb.NewEndorsementsResponse,
    requestSerialize: serialize_massa_api_v1_NewEndorsementsRequest,
    requestDeserialize: deserialize_massa_api_v1_NewEndorsementsRequest,
    responseSerialize: serialize_massa_api_v1_NewEndorsementsResponse,
    responseDeserialize: deserialize_massa_api_v1_NewEndorsementsResponse,
  },
  // New received and produced blocks with operations
newFilledBlocks: {
    path: '/massa.api.v1.MassaService/NewFilledBlocks',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.NewFilledBlocksRequest,
    responseType: api_pb.NewFilledBlocksResponse,
    requestSerialize: serialize_massa_api_v1_NewFilledBlocksRequest,
    requestDeserialize: deserialize_massa_api_v1_NewFilledBlocksRequest,
    responseSerialize: serialize_massa_api_v1_NewFilledBlocksResponse,
    responseDeserialize: deserialize_massa_api_v1_NewFilledBlocksResponse,
  },
  // New received and produced operations
newOperations: {
    path: '/massa.api.v1.MassaService/NewOperations',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.NewOperationsRequest,
    responseType: api_pb.NewOperationsResponse,
    requestSerialize: serialize_massa_api_v1_NewOperationsRequest,
    requestDeserialize: deserialize_massa_api_v1_NewOperationsRequest,
    responseSerialize: serialize_massa_api_v1_NewOperationsResponse,
    responseDeserialize: deserialize_massa_api_v1_NewOperationsResponse,
  },
  // New received and slot execution events
newSlotExecutionOutputs: {
    path: '/massa.api.v1.MassaService/NewSlotExecutionOutputs',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.NewSlotExecutionOutputsRequest,
    responseType: api_pb.NewSlotExecutionOutputsResponse,
    requestSerialize: serialize_massa_api_v1_NewSlotExecutionOutputsRequest,
    requestDeserialize: deserialize_massa_api_v1_NewSlotExecutionOutputsRequest,
    responseSerialize: serialize_massa_api_v1_NewSlotExecutionOutputsResponse,
    responseDeserialize: deserialize_massa_api_v1_NewSlotExecutionOutputsResponse,
  },
  // Send blocks
sendBlocks: {
    path: '/massa.api.v1.MassaService/SendBlocks',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.SendBlocksRequest,
    responseType: api_pb.SendBlocksResponse,
    requestSerialize: serialize_massa_api_v1_SendBlocksRequest,
    requestDeserialize: deserialize_massa_api_v1_SendBlocksRequest,
    responseSerialize: serialize_massa_api_v1_SendBlocksResponse,
    responseDeserialize: deserialize_massa_api_v1_SendBlocksResponse,
  },
  // Send endorsements
sendEndorsements: {
    path: '/massa.api.v1.MassaService/SendEndorsements',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.SendEndorsementsRequest,
    responseType: api_pb.SendEndorsementsResponse,
    requestSerialize: serialize_massa_api_v1_SendEndorsementsRequest,
    requestDeserialize: deserialize_massa_api_v1_SendEndorsementsRequest,
    responseSerialize: serialize_massa_api_v1_SendEndorsementsResponse,
    responseDeserialize: deserialize_massa_api_v1_SendEndorsementsResponse,
  },
  // Send operations
sendOperations: {
    path: '/massa.api.v1.MassaService/SendOperations',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.SendOperationsRequest,
    responseType: api_pb.SendOperationsResponse,
    requestSerialize: serialize_massa_api_v1_SendOperationsRequest,
    requestDeserialize: deserialize_massa_api_v1_SendOperationsRequest,
    responseSerialize: serialize_massa_api_v1_SendOperationsResponse,
    responseDeserialize: deserialize_massa_api_v1_SendOperationsResponse,
  },
  // Transactions throughput
transactionsThroughput: {
    path: '/massa.api.v1.MassaService/TransactionsThroughput',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.TransactionsThroughputRequest,
    responseType: api_pb.TransactionsThroughputResponse,
    requestSerialize: serialize_massa_api_v1_TransactionsThroughputRequest,
    requestDeserialize: deserialize_massa_api_v1_TransactionsThroughputRequest,
    responseSerialize: serialize_massa_api_v1_TransactionsThroughputResponse,
    responseDeserialize: deserialize_massa_api_v1_TransactionsThroughputResponse,
  },
};

exports.MassaServiceClient = grpc.makeGenericClientConstructor(MassaServiceService);
