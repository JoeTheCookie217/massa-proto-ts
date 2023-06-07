// source: api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var block_pb = require('./block_pb.js');
goog.object.extend(proto, block_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
var endorsement_pb = require('./endorsement_pb.js');
goog.object.extend(proto, endorsement_pb);
var execution_pb = require('./execution_pb.js');
goog.object.extend(proto, execution_pb);
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_rpc_status_pb = require('./google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var operation_pb = require('./operation_pb.js');
goog.object.extend(proto, operation_pb);
var slot_pb = require('./slot_pb.js');
goog.object.extend(proto, slot_pb);
goog.exportSymbol('proto.massa.api.v1.BlockParent', null, global);
goog.exportSymbol('proto.massa.api.v1.BlockResult', null, global);
goog.exportSymbol('proto.massa.api.v1.BlocksContext', null, global);
goog.exportSymbol('proto.massa.api.v1.DatastoreEntriesQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.DatastoreEntry', null, global);
goog.exportSymbol('proto.massa.api.v1.DatastoreEntryFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.EndorsementResult', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksBySlotsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksBySlotsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetDatastoreEntriesRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetDatastoreEntriesResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetLargestStakersRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetLargestStakersResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetNextBlockBestParentsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetNextBlockBestParentsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetOperationsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.GetOperationsQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.GetOperationsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetOperationsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetScExecutionEventsContext', null, global);
goog.exportSymbol('proto.massa.api.v1.GetScExecutionEventsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.GetScExecutionEventsQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.GetScExecutionEventsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetScExecutionEventsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetSelectorDrawsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetSelectorDrawsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetTransactionsThroughputRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetTransactionsThroughputResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetVersionRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetVersionResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.LargestStakerEntry', null, global);
goog.exportSymbol('proto.massa.api.v1.LargestStakersContext', null, global);
goog.exportSymbol('proto.massa.api.v1.LargestStakersFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.LargestStakersQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksHeadersRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksHeadersResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewEndorsementsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewEndorsementsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewFilledBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewFilledBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.OpType', null, global);
goog.exportSymbol('proto.massa.api.v1.OperationResult', null, global);
goog.exportSymbol('proto.massa.api.v1.OperationsContext', null, global);
goog.exportSymbol('proto.massa.api.v1.SelectorDraws', null, global);
goog.exportSymbol('proto.massa.api.v1.SelectorDrawsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.SelectorDrawsQuery', null, global);
goog.exportSymbol('proto.massa.api.v1.SendBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SendBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SendBlocksResponse.MessageCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SendEndorsementsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SendEndorsementsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SendEndorsementsResponse.MessageCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SendOperationsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SendOperationsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SendOperationsResponse.MessageCase', null, global);
goog.exportSymbol('proto.massa.api.v1.TransactionsThroughputRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.TransactionsThroughputResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetBlocksRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksRequest.displayName = 'proto.massa.api.v1.GetBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksQuery.displayName = 'proto.massa.api.v1.GetBlocksQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksFilter.displayName = 'proto.massa.api.v1.GetBlocksFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetBlocksResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksResponse.displayName = 'proto.massa.api.v1.GetBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.BlocksContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.BlocksContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.BlocksContext.displayName = 'proto.massa.api.v1.BlocksContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksBySlotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetBlocksBySlotsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksBySlotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksBySlotsRequest.displayName = 'proto.massa.api.v1.GetBlocksBySlotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksBySlotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetBlocksBySlotsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksBySlotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksBySlotsResponse.displayName = 'proto.massa.api.v1.GetBlocksBySlotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetDatastoreEntriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetDatastoreEntriesRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetDatastoreEntriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetDatastoreEntriesRequest.displayName = 'proto.massa.api.v1.GetDatastoreEntriesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.DatastoreEntriesQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.DatastoreEntriesQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.DatastoreEntriesQuery.displayName = 'proto.massa.api.v1.DatastoreEntriesQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.DatastoreEntryFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.DatastoreEntryFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.DatastoreEntryFilter.displayName = 'proto.massa.api.v1.DatastoreEntryFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetDatastoreEntriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetDatastoreEntriesResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetDatastoreEntriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetDatastoreEntriesResponse.displayName = 'proto.massa.api.v1.GetDatastoreEntriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.DatastoreEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.DatastoreEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.DatastoreEntry.displayName = 'proto.massa.api.v1.DatastoreEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetLargestStakersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetLargestStakersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetLargestStakersRequest.displayName = 'proto.massa.api.v1.GetLargestStakersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.LargestStakersQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.LargestStakersQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.LargestStakersQuery.displayName = 'proto.massa.api.v1.LargestStakersQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.LargestStakersFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.LargestStakersFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.LargestStakersFilter.displayName = 'proto.massa.api.v1.LargestStakersFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetLargestStakersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetLargestStakersResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetLargestStakersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetLargestStakersResponse.displayName = 'proto.massa.api.v1.GetLargestStakersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.LargestStakersContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.LargestStakersContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.LargestStakersContext.displayName = 'proto.massa.api.v1.LargestStakersContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.LargestStakerEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.LargestStakerEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.LargestStakerEntry.displayName = 'proto.massa.api.v1.LargestStakerEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetNextBlockBestParentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetNextBlockBestParentsRequest.displayName = 'proto.massa.api.v1.GetNextBlockBestParentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetNextBlockBestParentsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetNextBlockBestParentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetNextBlockBestParentsResponse.displayName = 'proto.massa.api.v1.GetNextBlockBestParentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.BlockParent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.BlockParent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.BlockParent.displayName = 'proto.massa.api.v1.BlockParent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetOperationsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetOperationsRequest.displayName = 'proto.massa.api.v1.GetOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetOperationsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetOperationsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetOperationsQuery.displayName = 'proto.massa.api.v1.GetOperationsQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetOperationsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetOperationsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetOperationsFilter.displayName = 'proto.massa.api.v1.GetOperationsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetOperationsResponse.displayName = 'proto.massa.api.v1.GetOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.OperationsContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.OperationsContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.OperationsContext.displayName = 'proto.massa.api.v1.OperationsContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetScExecutionEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetScExecutionEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetScExecutionEventsRequest.displayName = 'proto.massa.api.v1.GetScExecutionEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetScExecutionEventsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetScExecutionEventsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetScExecutionEventsQuery.displayName = 'proto.massa.api.v1.GetScExecutionEventsQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetScExecutionEventsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetScExecutionEventsFilter.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetScExecutionEventsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetScExecutionEventsFilter.displayName = 'proto.massa.api.v1.GetScExecutionEventsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetScExecutionEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetScExecutionEventsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetScExecutionEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetScExecutionEventsResponse.displayName = 'proto.massa.api.v1.GetScExecutionEventsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetScExecutionEventsContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetScExecutionEventsContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetScExecutionEventsContext.displayName = 'proto.massa.api.v1.GetScExecutionEventsContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetSelectorDrawsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetSelectorDrawsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetSelectorDrawsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetSelectorDrawsRequest.displayName = 'proto.massa.api.v1.GetSelectorDrawsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SelectorDrawsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.SelectorDrawsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SelectorDrawsQuery.displayName = 'proto.massa.api.v1.SelectorDrawsQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SelectorDrawsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.SelectorDrawsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SelectorDrawsFilter.displayName = 'proto.massa.api.v1.SelectorDrawsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetSelectorDrawsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetSelectorDrawsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetSelectorDrawsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetSelectorDrawsResponse.displayName = 'proto.massa.api.v1.GetSelectorDrawsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SelectorDraws = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SelectorDraws.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SelectorDraws, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SelectorDraws.displayName = 'proto.massa.api.v1.SelectorDraws';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetTransactionsThroughputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetTransactionsThroughputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetTransactionsThroughputRequest.displayName = 'proto.massa.api.v1.GetTransactionsThroughputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetTransactionsThroughputResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetTransactionsThroughputResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetTransactionsThroughputResponse.displayName = 'proto.massa.api.v1.GetTransactionsThroughputResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetVersionRequest.displayName = 'proto.massa.api.v1.GetVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetVersionResponse.displayName = 'proto.massa.api.v1.GetVersionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksRequest.displayName = 'proto.massa.api.v1.NewBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksResponse.displayName = 'proto.massa.api.v1.NewBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksHeadersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewBlocksHeadersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksHeadersRequest.displayName = 'proto.massa.api.v1.NewBlocksHeadersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksHeadersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewBlocksHeadersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksHeadersResponse.displayName = 'proto.massa.api.v1.NewBlocksHeadersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewEndorsementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewEndorsementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewEndorsementsRequest.displayName = 'proto.massa.api.v1.NewEndorsementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewEndorsementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewEndorsementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewEndorsementsResponse.displayName = 'proto.massa.api.v1.NewEndorsementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewFilledBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewFilledBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewFilledBlocksRequest.displayName = 'proto.massa.api.v1.NewFilledBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewFilledBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewFilledBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewFilledBlocksResponse.displayName = 'proto.massa.api.v1.NewFilledBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewOperationsRequest.displayName = 'proto.massa.api.v1.NewOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewOperationsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewOperationsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewOperationsQuery.displayName = 'proto.massa.api.v1.NewOperationsQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewOperationsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.NewOperationsFilter.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.NewOperationsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewOperationsFilter.displayName = 'proto.massa.api.v1.NewOperationsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewOperationsResponse.displayName = 'proto.massa.api.v1.NewOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewSlotExecutionOutputsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewSlotExecutionOutputsRequest.displayName = 'proto.massa.api.v1.NewSlotExecutionOutputsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewSlotExecutionOutputsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewSlotExecutionOutputsQuery.displayName = 'proto.massa.api.v1.NewSlotExecutionOutputsQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.NewSlotExecutionOutputsFilter.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.NewSlotExecutionOutputsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewSlotExecutionOutputsFilter.displayName = 'proto.massa.api.v1.NewSlotExecutionOutputsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewSlotExecutionOutputsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewSlotExecutionOutputsResponse.displayName = 'proto.massa.api.v1.NewSlotExecutionOutputsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.SendBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendBlocksRequest.displayName = 'proto.massa.api.v1.SendBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SendBlocksResponse.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SendBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendBlocksResponse.displayName = 'proto.massa.api.v1.SendBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.BlockResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.BlockResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.BlockResult.displayName = 'proto.massa.api.v1.BlockResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendEndorsementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SendEndorsementsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SendEndorsementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendEndorsementsRequest.displayName = 'proto.massa.api.v1.SendEndorsementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendEndorsementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SendEndorsementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendEndorsementsResponse.displayName = 'proto.massa.api.v1.SendEndorsementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.EndorsementResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.EndorsementResult.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.EndorsementResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.EndorsementResult.displayName = 'proto.massa.api.v1.EndorsementResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SendOperationsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SendOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendOperationsRequest.displayName = 'proto.massa.api.v1.SendOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SendOperationsResponse.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SendOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendOperationsResponse.displayName = 'proto.massa.api.v1.SendOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.OperationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.OperationResult.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.OperationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.OperationResult.displayName = 'proto.massa.api.v1.OperationResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.TransactionsThroughputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.TransactionsThroughputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.TransactionsThroughputRequest.displayName = 'proto.massa.api.v1.TransactionsThroughputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.TransactionsThroughputResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.TransactionsThroughputResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.TransactionsThroughputResponse.displayName = 'proto.massa.api.v1.TransactionsThroughputResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetBlocksRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.massa.api.v1.GetBlocksQuery.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksRequest}
 */
proto.massa.api.v1.GetBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksRequest;
  return proto.massa.api.v1.GetBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksRequest}
 */
proto.massa.api.v1.GetBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.GetBlocksQuery;
      reader.readMessage(value,proto.massa.api.v1.GetBlocksQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.massa.api.v1.GetBlocksQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetBlocksRequest} returns this
 */
proto.massa.api.v1.GetBlocksRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated GetBlocksQuery queries = 2;
 * @return {!Array<!proto.massa.api.v1.GetBlocksQuery>}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.GetBlocksQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.GetBlocksQuery, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.GetBlocksQuery>} value
 * @return {!proto.massa.api.v1.GetBlocksRequest} returns this
*/
proto.massa.api.v1.GetBlocksRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.GetBlocksQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.GetBlocksQuery}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.GetBlocksQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetBlocksRequest} returns this
 */
proto.massa.api.v1.GetBlocksRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.massa.api.v1.GetBlocksFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksQuery}
 */
proto.massa.api.v1.GetBlocksQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksQuery;
  return proto.massa.api.v1.GetBlocksQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksQuery}
 */
proto.massa.api.v1.GetBlocksQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.GetBlocksFilter;
      reader.readMessage(value,proto.massa.api.v1.GetBlocksFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.GetBlocksFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetBlocksFilter filter = 1;
 * @return {?proto.massa.api.v1.GetBlocksFilter}
 */
proto.massa.api.v1.GetBlocksQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.GetBlocksFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.GetBlocksFilter, 1));
};


/**
 * @param {?proto.massa.api.v1.GetBlocksFilter|undefined} value
 * @return {!proto.massa.api.v1.GetBlocksQuery} returns this
*/
proto.massa.api.v1.GetBlocksQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetBlocksQuery} returns this
 */
proto.massa.api.v1.GetBlocksQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetBlocksQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksFilter}
 */
proto.massa.api.v1.GetBlocksFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksFilter;
  return proto.massa.api.v1.GetBlocksFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksFilter}
 */
proto.massa.api.v1.GetBlocksFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetBlocksFilter.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetBlocksFilter} returns this
 */
proto.massa.api.v1.GetBlocksFilter.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetBlocksResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    context: (f = msg.getContext()) && proto.massa.api.v1.BlocksContext.toObject(includeInstance, f),
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    block_pb.BlockWrapper.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksResponse}
 */
proto.massa.api.v1.GetBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksResponse;
  return proto.massa.api.v1.GetBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksResponse}
 */
proto.massa.api.v1.GetBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.BlocksContext;
      reader.readMessage(value,proto.massa.api.v1.BlocksContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    case 3:
      var value = new block_pb.BlockWrapper;
      reader.readMessage(value,block_pb.BlockWrapper.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.BlocksContext.serializeBinaryToWriter
    );
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      block_pb.BlockWrapper.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetBlocksResponse} returns this
 */
proto.massa.api.v1.GetBlocksResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BlocksContext context = 2;
 * @return {?proto.massa.api.v1.BlocksContext}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.getContext = function() {
  return /** @type{?proto.massa.api.v1.BlocksContext} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.BlocksContext, 2));
};


/**
 * @param {?proto.massa.api.v1.BlocksContext|undefined} value
 * @return {!proto.massa.api.v1.GetBlocksResponse} returns this
*/
proto.massa.api.v1.GetBlocksResponse.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetBlocksResponse} returns this
 */
proto.massa.api.v1.GetBlocksResponse.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.hasContext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated BlockWrapper blocks = 3;
 * @return {!Array<!proto.massa.api.v1.BlockWrapper>}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.massa.api.v1.BlockWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, block_pb.BlockWrapper, 3));
};


/**
 * @param {!Array<!proto.massa.api.v1.BlockWrapper>} value
 * @return {!proto.massa.api.v1.GetBlocksResponse} returns this
*/
proto.massa.api.v1.GetBlocksResponse.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.massa.api.v1.BlockWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.BlockWrapper}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.massa.api.v1.BlockWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetBlocksResponse} returns this
 */
proto.massa.api.v1.GetBlocksResponse.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.BlocksContext.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.BlocksContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.BlocksContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.BlocksContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: (f = msg.getSlot()) && slot_pb.Slot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.BlocksContext}
 */
proto.massa.api.v1.BlocksContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.BlocksContext;
  return proto.massa.api.v1.BlocksContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.BlocksContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.BlocksContext}
 */
proto.massa.api.v1.BlocksContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.setSlot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.BlocksContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.BlocksContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.BlocksContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.BlocksContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Slot slot = 1;
 * @return {?proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.BlocksContext.prototype.getSlot = function() {
  return /** @type{?proto.massa.api.v1.Slot} */ (
    jspb.Message.getWrapperField(this, slot_pb.Slot, 1));
};


/**
 * @param {?proto.massa.api.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.BlocksContext} returns this
*/
proto.massa.api.v1.BlocksContext.prototype.setSlot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.BlocksContext} returns this
 */
proto.massa.api.v1.BlocksContext.prototype.clearSlot = function() {
  return this.setSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.BlocksContext.prototype.hasSlot = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksBySlotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksBySlotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    slotsList: jspb.Message.toObjectList(msg.getSlotsList(),
    slot_pb.Slot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksBySlotsRequest}
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksBySlotsRequest;
  return proto.massa.api.v1.GetBlocksBySlotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksBySlotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksBySlotsRequest}
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.addSlots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksBySlotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksBySlotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSlotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetBlocksBySlotsRequest} returns this
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Slot slots = 2;
 * @return {!Array<!proto.massa.api.v1.Slot>}
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.getSlotsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.Slot>} */ (
    jspb.Message.getRepeatedWrapperField(this, slot_pb.Slot, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.Slot>} value
 * @return {!proto.massa.api.v1.GetBlocksBySlotsRequest} returns this
*/
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.setSlotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.Slot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.addSlots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.Slot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetBlocksBySlotsRequest} returns this
 */
proto.massa.api.v1.GetBlocksBySlotsRequest.prototype.clearSlotsList = function() {
  return this.setSlotsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksBySlotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksBySlotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    block_pb.Block.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksBySlotsResponse}
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksBySlotsResponse;
  return proto.massa.api.v1.GetBlocksBySlotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksBySlotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksBySlotsResponse}
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new block_pb.Block;
      reader.readMessage(value,block_pb.Block.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksBySlotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksBySlotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      block_pb.Block.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetBlocksBySlotsResponse} returns this
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Block blocks = 2;
 * @return {!Array<!proto.massa.api.v1.Block>}
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.massa.api.v1.Block>} */ (
    jspb.Message.getRepeatedWrapperField(this, block_pb.Block, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.Block>} value
 * @return {!proto.massa.api.v1.GetBlocksBySlotsResponse} returns this
*/
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.Block=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.Block}
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.Block, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetBlocksBySlotsResponse} returns this
 */
proto.massa.api.v1.GetBlocksBySlotsResponse.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetDatastoreEntriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetDatastoreEntriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.massa.api.v1.DatastoreEntriesQuery.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetDatastoreEntriesRequest;
  return proto.massa.api.v1.GetDatastoreEntriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.DatastoreEntriesQuery;
      reader.readMessage(value,proto.massa.api.v1.DatastoreEntriesQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetDatastoreEntriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.massa.api.v1.DatastoreEntriesQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest} returns this
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DatastoreEntriesQuery queries = 2;
 * @return {!Array<!proto.massa.api.v1.DatastoreEntriesQuery>}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.DatastoreEntriesQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.DatastoreEntriesQuery, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.DatastoreEntriesQuery>} value
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest} returns this
*/
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.DatastoreEntriesQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.DatastoreEntriesQuery}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.DatastoreEntriesQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest} returns this
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.DatastoreEntriesQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.DatastoreEntriesQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.DatastoreEntriesQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DatastoreEntriesQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.massa.api.v1.DatastoreEntryFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.DatastoreEntriesQuery}
 */
proto.massa.api.v1.DatastoreEntriesQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.DatastoreEntriesQuery;
  return proto.massa.api.v1.DatastoreEntriesQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.DatastoreEntriesQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.DatastoreEntriesQuery}
 */
proto.massa.api.v1.DatastoreEntriesQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.DatastoreEntryFilter;
      reader.readMessage(value,proto.massa.api.v1.DatastoreEntryFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DatastoreEntriesQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.DatastoreEntriesQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.DatastoreEntriesQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DatastoreEntriesQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.DatastoreEntryFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional DatastoreEntryFilter filter = 1;
 * @return {?proto.massa.api.v1.DatastoreEntryFilter}
 */
proto.massa.api.v1.DatastoreEntriesQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.DatastoreEntryFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.DatastoreEntryFilter, 1));
};


/**
 * @param {?proto.massa.api.v1.DatastoreEntryFilter|undefined} value
 * @return {!proto.massa.api.v1.DatastoreEntriesQuery} returns this
*/
proto.massa.api.v1.DatastoreEntriesQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.DatastoreEntriesQuery} returns this
 */
proto.massa.api.v1.DatastoreEntriesQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.DatastoreEntriesQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.DatastoreEntryFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.DatastoreEntryFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DatastoreEntryFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.DatastoreEntryFilter}
 */
proto.massa.api.v1.DatastoreEntryFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.DatastoreEntryFilter;
  return proto.massa.api.v1.DatastoreEntryFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.DatastoreEntryFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.DatastoreEntryFilter}
 */
proto.massa.api.v1.DatastoreEntryFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.DatastoreEntryFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.DatastoreEntryFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DatastoreEntryFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.DatastoreEntryFilter} returns this
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.DatastoreEntryFilter} returns this
 */
proto.massa.api.v1.DatastoreEntryFilter.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetDatastoreEntriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetDatastoreEntriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.massa.api.v1.DatastoreEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetDatastoreEntriesResponse;
  return proto.massa.api.v1.GetDatastoreEntriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.DatastoreEntry;
      reader.readMessage(value,proto.massa.api.v1.DatastoreEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetDatastoreEntriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.massa.api.v1.DatastoreEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse} returns this
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DatastoreEntry entries = 2;
 * @return {!Array<!proto.massa.api.v1.DatastoreEntry>}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.DatastoreEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.DatastoreEntry, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.DatastoreEntry>} value
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse} returns this
*/
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.DatastoreEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.DatastoreEntry}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.DatastoreEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse} returns this
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.DatastoreEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.DatastoreEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.DatastoreEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DatastoreEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    finalValue: msg.getFinalValue_asB64(),
    candidateValue: msg.getCandidateValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.DatastoreEntry}
 */
proto.massa.api.v1.DatastoreEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.DatastoreEntry;
  return proto.massa.api.v1.DatastoreEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.DatastoreEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.DatastoreEntry}
 */
proto.massa.api.v1.DatastoreEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFinalValue(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCandidateValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DatastoreEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.DatastoreEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.DatastoreEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DatastoreEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinalValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCandidateValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes final_value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.massa.api.v1.DatastoreEntry.prototype.getFinalValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes final_value = 1;
 * This is a type-conversion wrapper around `getFinalValue()`
 * @return {string}
 */
proto.massa.api.v1.DatastoreEntry.prototype.getFinalValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFinalValue()));
};


/**
 * optional bytes final_value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFinalValue()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DatastoreEntry.prototype.getFinalValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFinalValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.DatastoreEntry} returns this
 */
proto.massa.api.v1.DatastoreEntry.prototype.setFinalValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes candidate_value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.massa.api.v1.DatastoreEntry.prototype.getCandidateValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes candidate_value = 2;
 * This is a type-conversion wrapper around `getCandidateValue()`
 * @return {string}
 */
proto.massa.api.v1.DatastoreEntry.prototype.getCandidateValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCandidateValue()));
};


/**
 * optional bytes candidate_value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCandidateValue()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DatastoreEntry.prototype.getCandidateValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCandidateValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.DatastoreEntry} returns this
 */
proto.massa.api.v1.DatastoreEntry.prototype.setCandidateValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetLargestStakersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetLargestStakersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetLargestStakersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetLargestStakersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: (f = msg.getQuery()) && proto.massa.api.v1.LargestStakersQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetLargestStakersRequest}
 */
proto.massa.api.v1.GetLargestStakersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetLargestStakersRequest;
  return proto.massa.api.v1.GetLargestStakersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetLargestStakersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetLargestStakersRequest}
 */
proto.massa.api.v1.GetLargestStakersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.LargestStakersQuery;
      reader.readMessage(value,proto.massa.api.v1.LargestStakersQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetLargestStakersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetLargestStakersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetLargestStakersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetLargestStakersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.LargestStakersQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetLargestStakersRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetLargestStakersRequest} returns this
 */
proto.massa.api.v1.GetLargestStakersRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LargestStakersQuery query = 2;
 * @return {?proto.massa.api.v1.LargestStakersQuery}
 */
proto.massa.api.v1.GetLargestStakersRequest.prototype.getQuery = function() {
  return /** @type{?proto.massa.api.v1.LargestStakersQuery} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.LargestStakersQuery, 2));
};


/**
 * @param {?proto.massa.api.v1.LargestStakersQuery|undefined} value
 * @return {!proto.massa.api.v1.GetLargestStakersRequest} returns this
*/
proto.massa.api.v1.GetLargestStakersRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetLargestStakersRequest} returns this
 */
proto.massa.api.v1.GetLargestStakersRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetLargestStakersRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.LargestStakersQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.LargestStakersQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.LargestStakersQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakersQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    filter: (f = msg.getFilter()) && proto.massa.api.v1.LargestStakersFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.LargestStakersQuery}
 */
proto.massa.api.v1.LargestStakersQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.LargestStakersQuery;
  return proto.massa.api.v1.LargestStakersQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.LargestStakersQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.LargestStakersQuery}
 */
proto.massa.api.v1.LargestStakersQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setLimit(value);
      break;
    case 3:
      var value = new proto.massa.api.v1.LargestStakersFilter;
      reader.readMessage(value,proto.massa.api.v1.LargestStakersFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.LargestStakersQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.LargestStakersQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.LargestStakersQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakersQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeFixed64(
      2,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.massa.api.v1.LargestStakersFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional fixed64 offset = 1;
 * @return {number}
 */
proto.massa.api.v1.LargestStakersQuery.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.LargestStakersQuery} returns this
 */
proto.massa.api.v1.LargestStakersQuery.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed64 limit = 2;
 * @return {number}
 */
proto.massa.api.v1.LargestStakersQuery.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.LargestStakersQuery} returns this
 */
proto.massa.api.v1.LargestStakersQuery.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional LargestStakersFilter filter = 3;
 * @return {?proto.massa.api.v1.LargestStakersFilter}
 */
proto.massa.api.v1.LargestStakersQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.LargestStakersFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.LargestStakersFilter, 3));
};


/**
 * @param {?proto.massa.api.v1.LargestStakersFilter|undefined} value
 * @return {!proto.massa.api.v1.LargestStakersQuery} returns this
*/
proto.massa.api.v1.LargestStakersQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.LargestStakersQuery} returns this
 */
proto.massa.api.v1.LargestStakersQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.LargestStakersQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.LargestStakersFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.LargestStakersFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.LargestStakersFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakersFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    minRolls: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxRolls: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.LargestStakersFilter}
 */
proto.massa.api.v1.LargestStakersFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.LargestStakersFilter;
  return proto.massa.api.v1.LargestStakersFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.LargestStakersFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.LargestStakersFilter}
 */
proto.massa.api.v1.LargestStakersFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setMinRolls(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setMaxRolls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.LargestStakersFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.LargestStakersFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.LargestStakersFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakersFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFixed64(
      2,
      f
    );
  }
};


/**
 * optional fixed64 min_rolls = 1;
 * @return {number}
 */
proto.massa.api.v1.LargestStakersFilter.prototype.getMinRolls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.LargestStakersFilter} returns this
 */
proto.massa.api.v1.LargestStakersFilter.prototype.setMinRolls = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.LargestStakersFilter} returns this
 */
proto.massa.api.v1.LargestStakersFilter.prototype.clearMinRolls = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.LargestStakersFilter.prototype.hasMinRolls = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed64 max_rolls = 2;
 * @return {number}
 */
proto.massa.api.v1.LargestStakersFilter.prototype.getMaxRolls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.LargestStakersFilter} returns this
 */
proto.massa.api.v1.LargestStakersFilter.prototype.setMaxRolls = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.LargestStakersFilter} returns this
 */
proto.massa.api.v1.LargestStakersFilter.prototype.clearMaxRolls = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.LargestStakersFilter.prototype.hasMaxRolls = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetLargestStakersResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetLargestStakersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetLargestStakersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetLargestStakersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    context: (f = msg.getContext()) && proto.massa.api.v1.LargestStakersContext.toObject(includeInstance, f),
    stakersList: jspb.Message.toObjectList(msg.getStakersList(),
    proto.massa.api.v1.LargestStakerEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetLargestStakersResponse}
 */
proto.massa.api.v1.GetLargestStakersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetLargestStakersResponse;
  return proto.massa.api.v1.GetLargestStakersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetLargestStakersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetLargestStakersResponse}
 */
proto.massa.api.v1.GetLargestStakersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.LargestStakersContext;
      reader.readMessage(value,proto.massa.api.v1.LargestStakersContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    case 3:
      var value = new proto.massa.api.v1.LargestStakerEntry;
      reader.readMessage(value,proto.massa.api.v1.LargestStakerEntry.deserializeBinaryFromReader);
      msg.addStakers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetLargestStakersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetLargestStakersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetLargestStakersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.LargestStakersContext.serializeBinaryToWriter
    );
  }
  f = message.getStakersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.massa.api.v1.LargestStakerEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetLargestStakersResponse} returns this
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LargestStakersContext context = 2;
 * @return {?proto.massa.api.v1.LargestStakersContext}
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.getContext = function() {
  return /** @type{?proto.massa.api.v1.LargestStakersContext} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.LargestStakersContext, 2));
};


/**
 * @param {?proto.massa.api.v1.LargestStakersContext|undefined} value
 * @return {!proto.massa.api.v1.GetLargestStakersResponse} returns this
*/
proto.massa.api.v1.GetLargestStakersResponse.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetLargestStakersResponse} returns this
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.hasContext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated LargestStakerEntry stakers = 3;
 * @return {!Array<!proto.massa.api.v1.LargestStakerEntry>}
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.getStakersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.LargestStakerEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.LargestStakerEntry, 3));
};


/**
 * @param {!Array<!proto.massa.api.v1.LargestStakerEntry>} value
 * @return {!proto.massa.api.v1.GetLargestStakersResponse} returns this
*/
proto.massa.api.v1.GetLargestStakersResponse.prototype.setStakersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.massa.api.v1.LargestStakerEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.LargestStakerEntry}
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.addStakers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.massa.api.v1.LargestStakerEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetLargestStakersResponse} returns this
 */
proto.massa.api.v1.GetLargestStakersResponse.prototype.clearStakersList = function() {
  return this.setStakersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.LargestStakersContext.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.LargestStakersContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.LargestStakersContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakersContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: (f = msg.getSlot()) && slot_pb.Slot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.LargestStakersContext}
 */
proto.massa.api.v1.LargestStakersContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.LargestStakersContext;
  return proto.massa.api.v1.LargestStakersContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.LargestStakersContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.LargestStakersContext}
 */
proto.massa.api.v1.LargestStakersContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.setSlot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.LargestStakersContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.LargestStakersContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.LargestStakersContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakersContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Slot slot = 1;
 * @return {?proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.LargestStakersContext.prototype.getSlot = function() {
  return /** @type{?proto.massa.api.v1.Slot} */ (
    jspb.Message.getWrapperField(this, slot_pb.Slot, 1));
};


/**
 * @param {?proto.massa.api.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.LargestStakersContext} returns this
*/
proto.massa.api.v1.LargestStakersContext.prototype.setSlot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.LargestStakersContext} returns this
 */
proto.massa.api.v1.LargestStakersContext.prototype.clearSlot = function() {
  return this.setSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.LargestStakersContext.prototype.hasSlot = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.LargestStakerEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.LargestStakerEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.LargestStakerEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakerEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rolls: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.LargestStakerEntry}
 */
proto.massa.api.v1.LargestStakerEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.LargestStakerEntry;
  return proto.massa.api.v1.LargestStakerEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.LargestStakerEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.LargestStakerEntry}
 */
proto.massa.api.v1.LargestStakerEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setRolls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.LargestStakerEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.LargestStakerEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.LargestStakerEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LargestStakerEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRolls();
  if (f !== 0) {
    writer.writeFixed64(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.LargestStakerEntry.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.LargestStakerEntry} returns this
 */
proto.massa.api.v1.LargestStakerEntry.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed64 rolls = 2;
 * @return {number}
 */
proto.massa.api.v1.LargestStakerEntry.prototype.getRolls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.LargestStakerEntry} returns this
 */
proto.massa.api.v1.LargestStakerEntry.prototype.setRolls = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetNextBlockBestParentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsRequest}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetNextBlockBestParentsRequest;
  return proto.massa.api.v1.GetNextBlockBestParentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsRequest}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetNextBlockBestParentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsRequest} returns this
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetNextBlockBestParentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentsList: jspb.Message.toObjectList(msg.getParentsList(),
    proto.massa.api.v1.BlockParent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetNextBlockBestParentsResponse;
  return proto.massa.api.v1.GetNextBlockBestParentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.BlockParent;
      reader.readMessage(value,proto.massa.api.v1.BlockParent.deserializeBinaryFromReader);
      msg.addParents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetNextBlockBestParentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.massa.api.v1.BlockParent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse} returns this
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated BlockParent parents = 2;
 * @return {!Array<!proto.massa.api.v1.BlockParent>}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.getParentsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.BlockParent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.BlockParent, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.BlockParent>} value
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse} returns this
*/
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.setParentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.BlockParent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.BlockParent}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.addParents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.BlockParent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse} returns this
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.clearParentsList = function() {
  return this.setParentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.BlockParent.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.BlockParent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.BlockParent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.BlockParent.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    period: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.BlockParent}
 */
proto.massa.api.v1.BlockParent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.BlockParent;
  return proto.massa.api.v1.BlockParent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.BlockParent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.BlockParent}
 */
proto.massa.api.v1.BlockParent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setPeriod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.BlockParent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.BlockParent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.BlockParent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.BlockParent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeriod();
  if (f !== 0) {
    writer.writeFixed64(
      2,
      f
    );
  }
};


/**
 * optional string block_id = 1;
 * @return {string}
 */
proto.massa.api.v1.BlockParent.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.BlockParent} returns this
 */
proto.massa.api.v1.BlockParent.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed64 period = 2;
 * @return {number}
 */
proto.massa.api.v1.BlockParent.prototype.getPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.BlockParent} returns this
 */
proto.massa.api.v1.BlockParent.prototype.setPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetOperationsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.massa.api.v1.GetOperationsQuery.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetOperationsRequest}
 */
proto.massa.api.v1.GetOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetOperationsRequest;
  return proto.massa.api.v1.GetOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetOperationsRequest}
 */
proto.massa.api.v1.GetOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.GetOperationsQuery;
      reader.readMessage(value,proto.massa.api.v1.GetOperationsQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.massa.api.v1.GetOperationsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetOperationsRequest} returns this
 */
proto.massa.api.v1.GetOperationsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated GetOperationsQuery queries = 2;
 * @return {!Array<!proto.massa.api.v1.GetOperationsQuery>}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.GetOperationsQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.GetOperationsQuery, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.GetOperationsQuery>} value
 * @return {!proto.massa.api.v1.GetOperationsRequest} returns this
*/
proto.massa.api.v1.GetOperationsRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.GetOperationsQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.GetOperationsQuery}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.GetOperationsQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetOperationsRequest} returns this
 */
proto.massa.api.v1.GetOperationsRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetOperationsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetOperationsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetOperationsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.massa.api.v1.GetOperationsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetOperationsQuery}
 */
proto.massa.api.v1.GetOperationsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetOperationsQuery;
  return proto.massa.api.v1.GetOperationsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetOperationsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetOperationsQuery}
 */
proto.massa.api.v1.GetOperationsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.GetOperationsFilter;
      reader.readMessage(value,proto.massa.api.v1.GetOperationsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetOperationsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetOperationsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetOperationsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.GetOperationsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetOperationsFilter filter = 1;
 * @return {?proto.massa.api.v1.GetOperationsFilter}
 */
proto.massa.api.v1.GetOperationsQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.GetOperationsFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.GetOperationsFilter, 1));
};


/**
 * @param {?proto.massa.api.v1.GetOperationsFilter|undefined} value
 * @return {!proto.massa.api.v1.GetOperationsQuery} returns this
*/
proto.massa.api.v1.GetOperationsQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetOperationsQuery} returns this
 */
proto.massa.api.v1.GetOperationsQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetOperationsQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetOperationsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetOperationsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetOperationsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetOperationsFilter}
 */
proto.massa.api.v1.GetOperationsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetOperationsFilter;
  return proto.massa.api.v1.GetOperationsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetOperationsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetOperationsFilter}
 */
proto.massa.api.v1.GetOperationsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetOperationsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetOperationsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetOperationsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetOperationsFilter.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetOperationsFilter} returns this
 */
proto.massa.api.v1.GetOperationsFilter.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetOperationsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    context: (f = msg.getContext()) && proto.massa.api.v1.OperationsContext.toObject(includeInstance, f),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    operation_pb.OperationWrapper.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetOperationsResponse}
 */
proto.massa.api.v1.GetOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetOperationsResponse;
  return proto.massa.api.v1.GetOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetOperationsResponse}
 */
proto.massa.api.v1.GetOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.OperationsContext;
      reader.readMessage(value,proto.massa.api.v1.OperationsContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    case 3:
      var value = new operation_pb.OperationWrapper;
      reader.readMessage(value,operation_pb.OperationWrapper.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.OperationsContext.serializeBinaryToWriter
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      operation_pb.OperationWrapper.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetOperationsResponse} returns this
 */
proto.massa.api.v1.GetOperationsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OperationsContext context = 2;
 * @return {?proto.massa.api.v1.OperationsContext}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.getContext = function() {
  return /** @type{?proto.massa.api.v1.OperationsContext} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.OperationsContext, 2));
};


/**
 * @param {?proto.massa.api.v1.OperationsContext|undefined} value
 * @return {!proto.massa.api.v1.GetOperationsResponse} returns this
*/
proto.massa.api.v1.GetOperationsResponse.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetOperationsResponse} returns this
 */
proto.massa.api.v1.GetOperationsResponse.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.hasContext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated OperationWrapper operations = 3;
 * @return {!Array<!proto.massa.api.v1.OperationWrapper>}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.OperationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, operation_pb.OperationWrapper, 3));
};


/**
 * @param {!Array<!proto.massa.api.v1.OperationWrapper>} value
 * @return {!proto.massa.api.v1.GetOperationsResponse} returns this
*/
proto.massa.api.v1.GetOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.massa.api.v1.OperationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.OperationWrapper}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.massa.api.v1.OperationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetOperationsResponse} returns this
 */
proto.massa.api.v1.GetOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.OperationsContext.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.OperationsContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.OperationsContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OperationsContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: (f = msg.getSlot()) && slot_pb.Slot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.OperationsContext}
 */
proto.massa.api.v1.OperationsContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.OperationsContext;
  return proto.massa.api.v1.OperationsContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.OperationsContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.OperationsContext}
 */
proto.massa.api.v1.OperationsContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.setSlot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.OperationsContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.OperationsContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.OperationsContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OperationsContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Slot slot = 1;
 * @return {?proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.OperationsContext.prototype.getSlot = function() {
  return /** @type{?proto.massa.api.v1.Slot} */ (
    jspb.Message.getWrapperField(this, slot_pb.Slot, 1));
};


/**
 * @param {?proto.massa.api.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.OperationsContext} returns this
*/
proto.massa.api.v1.OperationsContext.prototype.setSlot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.OperationsContext} returns this
 */
proto.massa.api.v1.OperationsContext.prototype.clearSlot = function() {
  return this.setSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.OperationsContext.prototype.hasSlot = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetScExecutionEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetScExecutionEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: (f = msg.getQuery()) && proto.massa.api.v1.GetScExecutionEventsQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetScExecutionEventsRequest;
  return proto.massa.api.v1.GetScExecutionEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetScExecutionEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.GetScExecutionEventsQuery;
      reader.readMessage(value,proto.massa.api.v1.GetScExecutionEventsQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetScExecutionEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetScExecutionEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.GetScExecutionEventsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest} returns this
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GetScExecutionEventsQuery query = 2;
 * @return {?proto.massa.api.v1.GetScExecutionEventsQuery}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.getQuery = function() {
  return /** @type{?proto.massa.api.v1.GetScExecutionEventsQuery} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.GetScExecutionEventsQuery, 2));
};


/**
 * @param {?proto.massa.api.v1.GetScExecutionEventsQuery|undefined} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest} returns this
*/
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest} returns this
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetScExecutionEventsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetScExecutionEventsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetScExecutionEventsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.massa.api.v1.GetScExecutionEventsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetScExecutionEventsQuery}
 */
proto.massa.api.v1.GetScExecutionEventsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetScExecutionEventsQuery;
  return proto.massa.api.v1.GetScExecutionEventsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetScExecutionEventsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetScExecutionEventsQuery}
 */
proto.massa.api.v1.GetScExecutionEventsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.GetScExecutionEventsFilter;
      reader.readMessage(value,proto.massa.api.v1.GetScExecutionEventsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetScExecutionEventsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetScExecutionEventsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetScExecutionEventsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.GetScExecutionEventsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetScExecutionEventsFilter filter = 1;
 * @return {?proto.massa.api.v1.GetScExecutionEventsFilter}
 */
proto.massa.api.v1.GetScExecutionEventsQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.GetScExecutionEventsFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.GetScExecutionEventsFilter, 1));
};


/**
 * @param {?proto.massa.api.v1.GetScExecutionEventsFilter|undefined} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsQuery} returns this
*/
proto.massa.api.v1.GetScExecutionEventsQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsQuery} returns this
 */
proto.massa.api.v1.GetScExecutionEventsQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetScExecutionEventsFilter.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetScExecutionEventsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetScExecutionEventsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    startSlot: (f = msg.getStartSlot()) && slot_pb.Slot.toObject(includeInstance, f),
    endSlot: (f = msg.getEndSlot()) && slot_pb.Slot.toObject(includeInstance, f),
    callerAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    emitterAddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    originalOperationId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    statusList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetScExecutionEventsFilter;
  return proto.massa.api.v1.GetScExecutionEventsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetScExecutionEventsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.setStartSlot(value);
      break;
    case 2:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.setEndSlot(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmitterAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalOperationId(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.massa.api.v1.ScExecutionEventStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatus(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetScExecutionEventsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetScExecutionEventsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartSlot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
  f = message.getEndSlot();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
};


/**
 * optional Slot start_slot = 1;
 * @return {?proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.getStartSlot = function() {
  return /** @type{?proto.massa.api.v1.Slot} */ (
    jspb.Message.getWrapperField(this, slot_pb.Slot, 1));
};


/**
 * @param {?proto.massa.api.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
*/
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.setStartSlot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.clearStartSlot = function() {
  return this.setStartSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.hasStartSlot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Slot end_slot = 2;
 * @return {?proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.getEndSlot = function() {
  return /** @type{?proto.massa.api.v1.Slot} */ (
    jspb.Message.getWrapperField(this, slot_pb.Slot, 2));
};


/**
 * @param {?proto.massa.api.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
*/
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.setEndSlot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.clearEndSlot = function() {
  return this.setEndSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.hasEndSlot = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string caller_address = 3;
 * @return {string}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.getCallerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.setCallerAddress = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.clearCallerAddress = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.hasCallerAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string emitter_address = 4;
 * @return {string}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.getEmitterAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.setEmitterAddress = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.clearEmitterAddress = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.hasEmitterAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string original_operation_id = 5;
 * @return {string}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.getOriginalOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.setOriginalOperationId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.clearOriginalOperationId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.hasOriginalOperationId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated ScExecutionEventStatus status = 6;
 * @return {!Array<!proto.massa.api.v1.ScExecutionEventStatus>}
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.getStatusList = function() {
  return /** @type {!Array<!proto.massa.api.v1.ScExecutionEventStatus>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.massa.api.v1.ScExecutionEventStatus>} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.setStatusList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.massa.api.v1.ScExecutionEventStatus} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.addStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.GetScExecutionEventsFilter.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetScExecutionEventsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetScExecutionEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetScExecutionEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    context: (f = msg.getContext()) && proto.massa.api.v1.GetScExecutionEventsContext.toObject(includeInstance, f),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    execution_pb.ScExecutionEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetScExecutionEventsResponse;
  return proto.massa.api.v1.GetScExecutionEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetScExecutionEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.GetScExecutionEventsContext;
      reader.readMessage(value,proto.massa.api.v1.GetScExecutionEventsContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    case 3:
      var value = new execution_pb.ScExecutionEvent;
      reader.readMessage(value,execution_pb.ScExecutionEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetScExecutionEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetScExecutionEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.GetScExecutionEventsContext.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      execution_pb.ScExecutionEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse} returns this
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GetScExecutionEventsContext context = 2;
 * @return {?proto.massa.api.v1.GetScExecutionEventsContext}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.getContext = function() {
  return /** @type{?proto.massa.api.v1.GetScExecutionEventsContext} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.GetScExecutionEventsContext, 2));
};


/**
 * @param {?proto.massa.api.v1.GetScExecutionEventsContext|undefined} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse} returns this
*/
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse} returns this
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.hasContext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ScExecutionEvent events = 3;
 * @return {!Array<!proto.massa.api.v1.ScExecutionEvent>}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.ScExecutionEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, execution_pb.ScExecutionEvent, 3));
};


/**
 * @param {!Array<!proto.massa.api.v1.ScExecutionEvent>} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse} returns this
*/
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.massa.api.v1.ScExecutionEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.ScExecutionEvent}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.massa.api.v1.ScExecutionEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse} returns this
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetScExecutionEventsContext.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetScExecutionEventsContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetScExecutionEventsContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: (f = msg.getSlot()) && slot_pb.Slot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetScExecutionEventsContext}
 */
proto.massa.api.v1.GetScExecutionEventsContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetScExecutionEventsContext;
  return proto.massa.api.v1.GetScExecutionEventsContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetScExecutionEventsContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetScExecutionEventsContext}
 */
proto.massa.api.v1.GetScExecutionEventsContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.setSlot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetScExecutionEventsContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetScExecutionEventsContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetScExecutionEventsContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Slot slot = 1;
 * @return {?proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.GetScExecutionEventsContext.prototype.getSlot = function() {
  return /** @type{?proto.massa.api.v1.Slot} */ (
    jspb.Message.getWrapperField(this, slot_pb.Slot, 1));
};


/**
 * @param {?proto.massa.api.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsContext} returns this
*/
proto.massa.api.v1.GetScExecutionEventsContext.prototype.setSlot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetScExecutionEventsContext} returns this
 */
proto.massa.api.v1.GetScExecutionEventsContext.prototype.clearSlot = function() {
  return this.setSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetScExecutionEventsContext.prototype.hasSlot = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetSelectorDrawsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetSelectorDrawsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetSelectorDrawsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.massa.api.v1.SelectorDrawsQuery.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetSelectorDrawsRequest;
  return proto.massa.api.v1.GetSelectorDrawsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetSelectorDrawsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.SelectorDrawsQuery;
      reader.readMessage(value,proto.massa.api.v1.SelectorDrawsQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetSelectorDrawsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetSelectorDrawsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.massa.api.v1.SelectorDrawsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest} returns this
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SelectorDrawsQuery queries = 2;
 * @return {!Array<!proto.massa.api.v1.SelectorDrawsQuery>}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SelectorDrawsQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.SelectorDrawsQuery, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.SelectorDrawsQuery>} value
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest} returns this
*/
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.SelectorDrawsQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SelectorDrawsQuery}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.SelectorDrawsQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest} returns this
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SelectorDrawsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SelectorDrawsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SelectorDrawsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDrawsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.massa.api.v1.SelectorDrawsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SelectorDrawsQuery}
 */
proto.massa.api.v1.SelectorDrawsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SelectorDrawsQuery;
  return proto.massa.api.v1.SelectorDrawsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SelectorDrawsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SelectorDrawsQuery}
 */
proto.massa.api.v1.SelectorDrawsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.SelectorDrawsFilter;
      reader.readMessage(value,proto.massa.api.v1.SelectorDrawsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SelectorDrawsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SelectorDrawsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SelectorDrawsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDrawsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.SelectorDrawsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional SelectorDrawsFilter filter = 1;
 * @return {?proto.massa.api.v1.SelectorDrawsFilter}
 */
proto.massa.api.v1.SelectorDrawsQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.SelectorDrawsFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.SelectorDrawsFilter, 1));
};


/**
 * @param {?proto.massa.api.v1.SelectorDrawsFilter|undefined} value
 * @return {!proto.massa.api.v1.SelectorDrawsQuery} returns this
*/
proto.massa.api.v1.SelectorDrawsQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SelectorDrawsQuery} returns this
 */
proto.massa.api.v1.SelectorDrawsQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SelectorDrawsQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SelectorDrawsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SelectorDrawsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDrawsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SelectorDrawsFilter}
 */
proto.massa.api.v1.SelectorDrawsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SelectorDrawsFilter;
  return proto.massa.api.v1.SelectorDrawsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SelectorDrawsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SelectorDrawsFilter}
 */
proto.massa.api.v1.SelectorDrawsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SelectorDrawsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SelectorDrawsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDrawsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SelectorDrawsFilter} returns this
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetSelectorDrawsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetSelectorDrawsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetSelectorDrawsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorDrawsList: jspb.Message.toObjectList(msg.getSelectorDrawsList(),
    proto.massa.api.v1.SelectorDraws.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetSelectorDrawsResponse;
  return proto.massa.api.v1.GetSelectorDrawsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetSelectorDrawsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.SelectorDraws;
      reader.readMessage(value,proto.massa.api.v1.SelectorDraws.deserializeBinaryFromReader);
      msg.addSelectorDraws(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetSelectorDrawsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetSelectorDrawsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorDrawsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.massa.api.v1.SelectorDraws.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse} returns this
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SelectorDraws selector_draws = 2;
 * @return {!Array<!proto.massa.api.v1.SelectorDraws>}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.getSelectorDrawsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SelectorDraws>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.SelectorDraws, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.SelectorDraws>} value
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse} returns this
*/
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.setSelectorDrawsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.SelectorDraws=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SelectorDraws}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.addSelectorDraws = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.SelectorDraws, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse} returns this
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.clearSelectorDrawsList = function() {
  return this.setSelectorDrawsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SelectorDraws.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SelectorDraws.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SelectorDraws.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SelectorDraws} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDraws.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nextBlockDrawsList: jspb.Message.toObjectList(msg.getNextBlockDrawsList(),
    slot_pb.Slot.toObject, includeInstance),
    nextEndorsementDrawsList: jspb.Message.toObjectList(msg.getNextEndorsementDrawsList(),
    slot_pb.IndexedSlot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SelectorDraws}
 */
proto.massa.api.v1.SelectorDraws.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SelectorDraws;
  return proto.massa.api.v1.SelectorDraws.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SelectorDraws} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SelectorDraws}
 */
proto.massa.api.v1.SelectorDraws.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = new slot_pb.Slot;
      reader.readMessage(value,slot_pb.Slot.deserializeBinaryFromReader);
      msg.addNextBlockDraws(value);
      break;
    case 3:
      var value = new slot_pb.IndexedSlot;
      reader.readMessage(value,slot_pb.IndexedSlot.deserializeBinaryFromReader);
      msg.addNextEndorsementDraws(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SelectorDraws.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SelectorDraws.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SelectorDraws} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDraws.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNextBlockDrawsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      slot_pb.Slot.serializeBinaryToWriter
    );
  }
  f = message.getNextEndorsementDrawsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      slot_pb.IndexedSlot.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.SelectorDraws.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SelectorDraws} returns this
 */
proto.massa.api.v1.SelectorDraws.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Slot next_block_draws = 2;
 * @return {!Array<!proto.massa.api.v1.Slot>}
 */
proto.massa.api.v1.SelectorDraws.prototype.getNextBlockDrawsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.Slot>} */ (
    jspb.Message.getRepeatedWrapperField(this, slot_pb.Slot, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.Slot>} value
 * @return {!proto.massa.api.v1.SelectorDraws} returns this
*/
proto.massa.api.v1.SelectorDraws.prototype.setNextBlockDrawsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.Slot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.SelectorDraws.prototype.addNextBlockDraws = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.Slot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SelectorDraws} returns this
 */
proto.massa.api.v1.SelectorDraws.prototype.clearNextBlockDrawsList = function() {
  return this.setNextBlockDrawsList([]);
};


/**
 * repeated IndexedSlot next_endorsement_draws = 3;
 * @return {!Array<!proto.massa.api.v1.IndexedSlot>}
 */
proto.massa.api.v1.SelectorDraws.prototype.getNextEndorsementDrawsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.IndexedSlot>} */ (
    jspb.Message.getRepeatedWrapperField(this, slot_pb.IndexedSlot, 3));
};


/**
 * @param {!Array<!proto.massa.api.v1.IndexedSlot>} value
 * @return {!proto.massa.api.v1.SelectorDraws} returns this
*/
proto.massa.api.v1.SelectorDraws.prototype.setNextEndorsementDrawsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.massa.api.v1.IndexedSlot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.IndexedSlot}
 */
proto.massa.api.v1.SelectorDraws.prototype.addNextEndorsementDraws = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.massa.api.v1.IndexedSlot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SelectorDraws} returns this
 */
proto.massa.api.v1.SelectorDraws.prototype.clearNextEndorsementDrawsList = function() {
  return this.setNextEndorsementDrawsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetTransactionsThroughputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetTransactionsThroughputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputRequest}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetTransactionsThroughputRequest;
  return proto.massa.api.v1.GetTransactionsThroughputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputRequest}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetTransactionsThroughputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetTransactionsThroughputRequest} returns this
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetTransactionsThroughputResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetTransactionsThroughputResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    throughput: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputResponse}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetTransactionsThroughputResponse;
  return proto.massa.api.v1.GetTransactionsThroughputResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputResponse}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setThroughput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetTransactionsThroughputResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThroughput();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetTransactionsThroughputResponse} returns this
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 throughput = 2;
 * @return {number}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.getThroughput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.GetTransactionsThroughputResponse} returns this
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.setThroughput = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetVersionRequest}
 */
proto.massa.api.v1.GetVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetVersionRequest;
  return proto.massa.api.v1.GetVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetVersionRequest}
 */
proto.massa.api.v1.GetVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetVersionRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetVersionRequest} returns this
 */
proto.massa.api.v1.GetVersionRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetVersionResponse}
 */
proto.massa.api.v1.GetVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetVersionResponse;
  return proto.massa.api.v1.GetVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetVersionResponse}
 */
proto.massa.api.v1.GetVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetVersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.GetVersionResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetVersionResponse} returns this
 */
proto.massa.api.v1.GetVersionResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.massa.api.v1.GetVersionResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.GetVersionResponse} returns this
 */
proto.massa.api.v1.GetVersionResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksRequest}
 */
proto.massa.api.v1.NewBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksRequest;
  return proto.massa.api.v1.NewBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksRequest}
 */
proto.massa.api.v1.NewBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewBlocksRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewBlocksRequest} returns this
 */
proto.massa.api.v1.NewBlocksRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    block: (f = msg.getBlock()) && block_pb.SignedBlock.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksResponse}
 */
proto.massa.api.v1.NewBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksResponse;
  return proto.massa.api.v1.NewBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksResponse}
 */
proto.massa.api.v1.NewBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new block_pb.SignedBlock;
      reader.readMessage(value,block_pb.SignedBlock.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      block_pb.SignedBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
 */
proto.massa.api.v1.NewBlocksResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SignedBlock block = 2;
 * @return {?proto.massa.api.v1.SignedBlock}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.getBlock = function() {
  return /** @type{?proto.massa.api.v1.SignedBlock} */ (
    jspb.Message.getWrapperField(this, block_pb.SignedBlock, 2));
};


/**
 * @param {?proto.massa.api.v1.SignedBlock|undefined} value
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
*/
proto.massa.api.v1.NewBlocksResponse.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
 */
proto.massa.api.v1.NewBlocksResponse.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksHeadersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksHeadersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksHeadersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksHeadersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksHeadersRequest}
 */
proto.massa.api.v1.NewBlocksHeadersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksHeadersRequest;
  return proto.massa.api.v1.NewBlocksHeadersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksHeadersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksHeadersRequest}
 */
proto.massa.api.v1.NewBlocksHeadersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksHeadersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksHeadersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksHeadersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksHeadersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewBlocksHeadersRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewBlocksHeadersRequest} returns this
 */
proto.massa.api.v1.NewBlocksHeadersRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksHeadersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksHeadersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksHeadersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockHeader: (f = msg.getBlockHeader()) && block_pb.SignedBlockHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksHeadersResponse}
 */
proto.massa.api.v1.NewBlocksHeadersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksHeadersResponse;
  return proto.massa.api.v1.NewBlocksHeadersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksHeadersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksHeadersResponse}
 */
proto.massa.api.v1.NewBlocksHeadersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new block_pb.SignedBlockHeader;
      reader.readMessage(value,block_pb.SignedBlockHeader.deserializeBinaryFromReader);
      msg.setBlockHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksHeadersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksHeadersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksHeadersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      block_pb.SignedBlockHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewBlocksHeadersResponse} returns this
 */
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SignedBlockHeader block_header = 2;
 * @return {?proto.massa.api.v1.SignedBlockHeader}
 */
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.getBlockHeader = function() {
  return /** @type{?proto.massa.api.v1.SignedBlockHeader} */ (
    jspb.Message.getWrapperField(this, block_pb.SignedBlockHeader, 2));
};


/**
 * @param {?proto.massa.api.v1.SignedBlockHeader|undefined} value
 * @return {!proto.massa.api.v1.NewBlocksHeadersResponse} returns this
*/
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.setBlockHeader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewBlocksHeadersResponse} returns this
 */
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.clearBlockHeader = function() {
  return this.setBlockHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewBlocksHeadersResponse.prototype.hasBlockHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewEndorsementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewEndorsementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewEndorsementsRequest}
 */
proto.massa.api.v1.NewEndorsementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewEndorsementsRequest;
  return proto.massa.api.v1.NewEndorsementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewEndorsementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewEndorsementsRequest}
 */
proto.massa.api.v1.NewEndorsementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewEndorsementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewEndorsementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewEndorsementsRequest} returns this
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewEndorsementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewEndorsementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endorsement: (f = msg.getEndorsement()) && endorsement_pb.SignedEndorsement.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewEndorsementsResponse}
 */
proto.massa.api.v1.NewEndorsementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewEndorsementsResponse;
  return proto.massa.api.v1.NewEndorsementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewEndorsementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewEndorsementsResponse}
 */
proto.massa.api.v1.NewEndorsementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new endorsement_pb.SignedEndorsement;
      reader.readMessage(value,endorsement_pb.SignedEndorsement.deserializeBinaryFromReader);
      msg.setEndorsement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewEndorsementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewEndorsementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndorsement();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      endorsement_pb.SignedEndorsement.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewEndorsementsResponse} returns this
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SignedEndorsement endorsement = 2;
 * @return {?proto.massa.api.v1.SignedEndorsement}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.getEndorsement = function() {
  return /** @type{?proto.massa.api.v1.SignedEndorsement} */ (
    jspb.Message.getWrapperField(this, endorsement_pb.SignedEndorsement, 2));
};


/**
 * @param {?proto.massa.api.v1.SignedEndorsement|undefined} value
 * @return {!proto.massa.api.v1.NewEndorsementsResponse} returns this
*/
proto.massa.api.v1.NewEndorsementsResponse.prototype.setEndorsement = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewEndorsementsResponse} returns this
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.clearEndorsement = function() {
  return this.setEndorsement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.hasEndorsement = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewFilledBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewFilledBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewFilledBlocksRequest}
 */
proto.massa.api.v1.NewFilledBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewFilledBlocksRequest;
  return proto.massa.api.v1.NewFilledBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewFilledBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewFilledBlocksRequest}
 */
proto.massa.api.v1.NewFilledBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewFilledBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewFilledBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewFilledBlocksRequest} returns this
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewFilledBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewFilledBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filledBlock: (f = msg.getFilledBlock()) && block_pb.FilledBlock.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse}
 */
proto.massa.api.v1.NewFilledBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewFilledBlocksResponse;
  return proto.massa.api.v1.NewFilledBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewFilledBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse}
 */
proto.massa.api.v1.NewFilledBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new block_pb.FilledBlock;
      reader.readMessage(value,block_pb.FilledBlock.deserializeBinaryFromReader);
      msg.setFilledBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewFilledBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewFilledBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilledBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      block_pb.FilledBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse} returns this
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FilledBlock filled_block = 2;
 * @return {?proto.massa.api.v1.FilledBlock}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.getFilledBlock = function() {
  return /** @type{?proto.massa.api.v1.FilledBlock} */ (
    jspb.Message.getWrapperField(this, block_pb.FilledBlock, 2));
};


/**
 * @param {?proto.massa.api.v1.FilledBlock|undefined} value
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse} returns this
*/
proto.massa.api.v1.NewFilledBlocksResponse.prototype.setFilledBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse} returns this
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.clearFilledBlock = function() {
  return this.setFilledBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.hasFilledBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: (f = msg.getQuery()) && proto.massa.api.v1.NewOperationsQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewOperationsRequest}
 */
proto.massa.api.v1.NewOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewOperationsRequest;
  return proto.massa.api.v1.NewOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewOperationsRequest}
 */
proto.massa.api.v1.NewOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.NewOperationsQuery;
      reader.readMessage(value,proto.massa.api.v1.NewOperationsQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.NewOperationsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewOperationsRequest} returns this
 */
proto.massa.api.v1.NewOperationsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NewOperationsQuery query = 2;
 * @return {?proto.massa.api.v1.NewOperationsQuery}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.getQuery = function() {
  return /** @type{?proto.massa.api.v1.NewOperationsQuery} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.NewOperationsQuery, 2));
};


/**
 * @param {?proto.massa.api.v1.NewOperationsQuery|undefined} value
 * @return {!proto.massa.api.v1.NewOperationsRequest} returns this
*/
proto.massa.api.v1.NewOperationsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewOperationsRequest} returns this
 */
proto.massa.api.v1.NewOperationsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewOperationsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewOperationsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewOperationsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.massa.api.v1.NewOperationsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewOperationsQuery}
 */
proto.massa.api.v1.NewOperationsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewOperationsQuery;
  return proto.massa.api.v1.NewOperationsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewOperationsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewOperationsQuery}
 */
proto.massa.api.v1.NewOperationsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.NewOperationsFilter;
      reader.readMessage(value,proto.massa.api.v1.NewOperationsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewOperationsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewOperationsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewOperationsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.NewOperationsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewOperationsFilter filter = 1;
 * @return {?proto.massa.api.v1.NewOperationsFilter}
 */
proto.massa.api.v1.NewOperationsQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.NewOperationsFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.NewOperationsFilter, 1));
};


/**
 * @param {?proto.massa.api.v1.NewOperationsFilter|undefined} value
 * @return {!proto.massa.api.v1.NewOperationsQuery} returns this
*/
proto.massa.api.v1.NewOperationsQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewOperationsQuery} returns this
 */
proto.massa.api.v1.NewOperationsQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewOperationsQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.NewOperationsFilter.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewOperationsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewOperationsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    typesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewOperationsFilter}
 */
proto.massa.api.v1.NewOperationsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewOperationsFilter;
  return proto.massa.api.v1.NewOperationsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewOperationsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewOperationsFilter}
 */
proto.massa.api.v1.NewOperationsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.massa.api.v1.OpType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTypes(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewOperationsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewOperationsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated OpType types = 1;
 * @return {!Array<!proto.massa.api.v1.OpType>}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.getTypesList = function() {
  return /** @type {!Array<!proto.massa.api.v1.OpType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.OpType>} value
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
 */
proto.massa.api.v1.NewOperationsFilter.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.massa.api.v1.OpType} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
 */
proto.massa.api.v1.NewOperationsFilter.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
 */
proto.massa.api.v1.NewOperationsFilter.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operation: (f = msg.getOperation()) && operation_pb.SignedOperation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewOperationsResponse}
 */
proto.massa.api.v1.NewOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewOperationsResponse;
  return proto.massa.api.v1.NewOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewOperationsResponse}
 */
proto.massa.api.v1.NewOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new operation_pb.SignedOperation;
      reader.readMessage(value,operation_pb.SignedOperation.deserializeBinaryFromReader);
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      operation_pb.SignedOperation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewOperationsResponse} returns this
 */
proto.massa.api.v1.NewOperationsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SignedOperation operation = 2;
 * @return {?proto.massa.api.v1.SignedOperation}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.getOperation = function() {
  return /** @type{?proto.massa.api.v1.SignedOperation} */ (
    jspb.Message.getWrapperField(this, operation_pb.SignedOperation, 2));
};


/**
 * @param {?proto.massa.api.v1.SignedOperation|undefined} value
 * @return {!proto.massa.api.v1.NewOperationsResponse} returns this
*/
proto.massa.api.v1.NewOperationsResponse.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewOperationsResponse} returns this
 */
proto.massa.api.v1.NewOperationsResponse.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewSlotExecutionOutputsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: (f = msg.getQuery()) && proto.massa.api.v1.NewSlotExecutionOutputsQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewSlotExecutionOutputsRequest;
  return proto.massa.api.v1.NewSlotExecutionOutputsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.NewSlotExecutionOutputsQuery;
      reader.readMessage(value,proto.massa.api.v1.NewSlotExecutionOutputsQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewSlotExecutionOutputsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.NewSlotExecutionOutputsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NewSlotExecutionOutputsQuery query = 2;
 * @return {?proto.massa.api.v1.NewSlotExecutionOutputsQuery}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.getQuery = function() {
  return /** @type{?proto.massa.api.v1.NewSlotExecutionOutputsQuery} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.NewSlotExecutionOutputsQuery, 2));
};


/**
 * @param {?proto.massa.api.v1.NewSlotExecutionOutputsQuery|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewSlotExecutionOutputsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.massa.api.v1.NewSlotExecutionOutputsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsQuery}
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewSlotExecutionOutputsQuery;
  return proto.massa.api.v1.NewSlotExecutionOutputsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsQuery}
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.NewSlotExecutionOutputsFilter;
      reader.readMessage(value,proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewSlotExecutionOutputsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.NewSlotExecutionOutputsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewSlotExecutionOutputsFilter filter = 1;
 * @return {?proto.massa.api.v1.NewSlotExecutionOutputsFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.prototype.getFilter = function() {
  return /** @type{?proto.massa.api.v1.NewSlotExecutionOutputsFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.NewSlotExecutionOutputsFilter, 1));
};


/**
 * @param {?proto.massa.api.v1.NewSlotExecutionOutputsFilter|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsQuery} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsQuery.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsQuery} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsQuery.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewSlotExecutionOutputsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewSlotExecutionOutputsFilter;
  return proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.massa.api.v1.ExecutionOutputStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatus(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewSlotExecutionOutputsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated ExecutionOutputStatus status = 1;
 * @return {!Array<!proto.massa.api.v1.ExecutionOutputStatus>}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getStatusList = function() {
  return /** @type {!Array<!proto.massa.api.v1.ExecutionOutputStatus>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.ExecutionOutputStatus>} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setStatusList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.massa.api.v1.ExecutionOutputStatus} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.addStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewSlotExecutionOutputsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    output: (f = msg.getOutput()) && execution_pb.SlotExecutionOutput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewSlotExecutionOutputsResponse;
  return proto.massa.api.v1.NewSlotExecutionOutputsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new execution_pb.SlotExecutionOutput;
      reader.readMessage(value,execution_pb.SlotExecutionOutput.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewSlotExecutionOutputsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      execution_pb.SlotExecutionOutput.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SlotExecutionOutput output = 2;
 * @return {?proto.massa.api.v1.SlotExecutionOutput}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.getOutput = function() {
  return /** @type{?proto.massa.api.v1.SlotExecutionOutput} */ (
    jspb.Message.getWrapperField(this, execution_pb.SlotExecutionOutput, 2));
};


/**
 * @param {?proto.massa.api.v1.SlotExecutionOutput|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    block: (f = msg.getBlock()) && common_pb.SecureShare.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendBlocksRequest}
 */
proto.massa.api.v1.SendBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendBlocksRequest;
  return proto.massa.api.v1.SendBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendBlocksRequest}
 */
proto.massa.api.v1.SendBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new common_pb.SecureShare;
      reader.readMessage(value,common_pb.SecureShare.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.SecureShare.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SendBlocksRequest} returns this
 */
proto.massa.api.v1.SendBlocksRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SecureShare block = 2;
 * @return {?proto.massa.api.v1.SecureShare}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.getBlock = function() {
  return /** @type{?proto.massa.api.v1.SecureShare} */ (
    jspb.Message.getWrapperField(this, common_pb.SecureShare, 2));
};


/**
 * @param {?proto.massa.api.v1.SecureShare|undefined} value
 * @return {!proto.massa.api.v1.SendBlocksRequest} returns this
*/
proto.massa.api.v1.SendBlocksRequest.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendBlocksRequest} returns this
 */
proto.massa.api.v1.SendBlocksRequest.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SendBlocksResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SendBlocksResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  RESULT: 2,
  ERROR: 3
};

/**
 * @return {proto.massa.api.v1.SendBlocksResponse.MessageCase}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.getMessageCase = function() {
  return /** @type {proto.massa.api.v1.SendBlocksResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SendBlocksResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    result: (f = msg.getResult()) && proto.massa.api.v1.BlockResult.toObject(includeInstance, f),
    error: (f = msg.getError()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendBlocksResponse}
 */
proto.massa.api.v1.SendBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendBlocksResponse;
  return proto.massa.api.v1.SendBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendBlocksResponse}
 */
proto.massa.api.v1.SendBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.BlockResult;
      reader.readMessage(value,proto.massa.api.v1.BlockResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.BlockResult.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
 */
proto.massa.api.v1.SendBlocksResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BlockResult result = 2;
 * @return {?proto.massa.api.v1.BlockResult}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.getResult = function() {
  return /** @type{?proto.massa.api.v1.BlockResult} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.BlockResult, 2));
};


/**
 * @param {?proto.massa.api.v1.BlockResult|undefined} value
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
*/
proto.massa.api.v1.SendBlocksResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SendBlocksResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
 */
proto.massa.api.v1.SendBlocksResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.rpc.Status error = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.getError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
*/
proto.massa.api.v1.SendBlocksResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.SendBlocksResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
 */
proto.massa.api.v1.SendBlocksResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.BlockResult.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.BlockResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.BlockResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.BlockResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.BlockResult}
 */
proto.massa.api.v1.BlockResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.BlockResult;
  return proto.massa.api.v1.BlockResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.BlockResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.BlockResult}
 */
proto.massa.api.v1.BlockResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.BlockResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.BlockResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.BlockResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.BlockResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string block_id = 1;
 * @return {string}
 */
proto.massa.api.v1.BlockResult.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.BlockResult} returns this
 */
proto.massa.api.v1.BlockResult.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SendEndorsementsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendEndorsementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendEndorsementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endorsementsList: jspb.Message.toObjectList(msg.getEndorsementsList(),
    common_pb.SecureShare.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendEndorsementsRequest}
 */
proto.massa.api.v1.SendEndorsementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendEndorsementsRequest;
  return proto.massa.api.v1.SendEndorsementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendEndorsementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendEndorsementsRequest}
 */
proto.massa.api.v1.SendEndorsementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new common_pb.SecureShare;
      reader.readMessage(value,common_pb.SecureShare.deserializeBinaryFromReader);
      msg.addEndorsements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendEndorsementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendEndorsementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndorsementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.SecureShare.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SendEndorsementsRequest} returns this
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SecureShare endorsements = 2;
 * @return {!Array<!proto.massa.api.v1.SecureShare>}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.getEndorsementsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SecureShare>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SecureShare, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.SecureShare>} value
 * @return {!proto.massa.api.v1.SendEndorsementsRequest} returns this
*/
proto.massa.api.v1.SendEndorsementsRequest.prototype.setEndorsementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.SecureShare=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SecureShare}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.addEndorsements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.SecureShare, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SendEndorsementsRequest} returns this
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.clearEndorsementsList = function() {
  return this.setEndorsementsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SendEndorsementsResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  RESULT: 2,
  ERROR: 3
};

/**
 * @return {proto.massa.api.v1.SendEndorsementsResponse.MessageCase}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.getMessageCase = function() {
  return /** @type {proto.massa.api.v1.SendEndorsementsResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendEndorsementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendEndorsementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    result: (f = msg.getResult()) && proto.massa.api.v1.EndorsementResult.toObject(includeInstance, f),
    error: (f = msg.getError()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse}
 */
proto.massa.api.v1.SendEndorsementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendEndorsementsResponse;
  return proto.massa.api.v1.SendEndorsementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendEndorsementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse}
 */
proto.massa.api.v1.SendEndorsementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.EndorsementResult;
      reader.readMessage(value,proto.massa.api.v1.EndorsementResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendEndorsementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendEndorsementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.EndorsementResult.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EndorsementResult result = 2;
 * @return {?proto.massa.api.v1.EndorsementResult}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.getResult = function() {
  return /** @type{?proto.massa.api.v1.EndorsementResult} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.EndorsementResult, 2));
};


/**
 * @param {?proto.massa.api.v1.EndorsementResult|undefined} value
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
*/
proto.massa.api.v1.SendEndorsementsResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.rpc.Status error = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.getError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
*/
proto.massa.api.v1.SendEndorsementsResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.EndorsementResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.EndorsementResult.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.EndorsementResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.EndorsementResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.EndorsementResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementsIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.EndorsementResult}
 */
proto.massa.api.v1.EndorsementResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.EndorsementResult;
  return proto.massa.api.v1.EndorsementResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.EndorsementResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.EndorsementResult}
 */
proto.massa.api.v1.EndorsementResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addEndorsementsIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.EndorsementResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.EndorsementResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.EndorsementResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.EndorsementResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementsIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string endorsements_ids = 1;
 * @return {!Array<string>}
 */
proto.massa.api.v1.EndorsementResult.prototype.getEndorsementsIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.massa.api.v1.EndorsementResult} returns this
 */
proto.massa.api.v1.EndorsementResult.prototype.setEndorsementsIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.EndorsementResult} returns this
 */
proto.massa.api.v1.EndorsementResult.prototype.addEndorsementsIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.EndorsementResult} returns this
 */
proto.massa.api.v1.EndorsementResult.prototype.clearEndorsementsIdsList = function() {
  return this.setEndorsementsIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SendOperationsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    common_pb.SecureShare.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendOperationsRequest}
 */
proto.massa.api.v1.SendOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendOperationsRequest;
  return proto.massa.api.v1.SendOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendOperationsRequest}
 */
proto.massa.api.v1.SendOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new common_pb.SecureShare;
      reader.readMessage(value,common_pb.SecureShare.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.SecureShare.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SendOperationsRequest} returns this
 */
proto.massa.api.v1.SendOperationsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SecureShare operations = 2;
 * @return {!Array<!proto.massa.api.v1.SecureShare>}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SecureShare>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SecureShare, 2));
};


/**
 * @param {!Array<!proto.massa.api.v1.SecureShare>} value
 * @return {!proto.massa.api.v1.SendOperationsRequest} returns this
*/
proto.massa.api.v1.SendOperationsRequest.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.massa.api.v1.SecureShare=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SecureShare}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.massa.api.v1.SecureShare, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SendOperationsRequest} returns this
 */
proto.massa.api.v1.SendOperationsRequest.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SendOperationsResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SendOperationsResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  RESULT: 2,
  ERROR: 3
};

/**
 * @return {proto.massa.api.v1.SendOperationsResponse.MessageCase}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.getMessageCase = function() {
  return /** @type {proto.massa.api.v1.SendOperationsResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SendOperationsResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    result: (f = msg.getResult()) && proto.massa.api.v1.OperationResult.toObject(includeInstance, f),
    error: (f = msg.getError()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendOperationsResponse}
 */
proto.massa.api.v1.SendOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendOperationsResponse;
  return proto.massa.api.v1.SendOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendOperationsResponse}
 */
proto.massa.api.v1.SendOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.OperationResult;
      reader.readMessage(value,proto.massa.api.v1.OperationResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.OperationResult.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
 */
proto.massa.api.v1.SendOperationsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OperationResult result = 2;
 * @return {?proto.massa.api.v1.OperationResult}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.getResult = function() {
  return /** @type{?proto.massa.api.v1.OperationResult} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.OperationResult, 2));
};


/**
 * @param {?proto.massa.api.v1.OperationResult|undefined} value
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
*/
proto.massa.api.v1.SendOperationsResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SendOperationsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
 */
proto.massa.api.v1.SendOperationsResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.rpc.Status error = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.getError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
*/
proto.massa.api.v1.SendOperationsResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.SendOperationsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
 */
proto.massa.api.v1.SendOperationsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.OperationResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.OperationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.OperationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.OperationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OperationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.OperationResult}
 */
proto.massa.api.v1.OperationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.OperationResult;
  return proto.massa.api.v1.OperationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.OperationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.OperationResult}
 */
proto.massa.api.v1.OperationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOperationsIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.OperationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.OperationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.OperationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OperationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string operations_ids = 1;
 * @return {!Array<string>}
 */
proto.massa.api.v1.OperationResult.prototype.getOperationsIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.massa.api.v1.OperationResult} returns this
 */
proto.massa.api.v1.OperationResult.prototype.setOperationsIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.OperationResult} returns this
 */
proto.massa.api.v1.OperationResult.prototype.addOperationsIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.OperationResult} returns this
 */
proto.massa.api.v1.OperationResult.prototype.clearOperationsIdsList = function() {
  return this.setOperationsIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.TransactionsThroughputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.TransactionsThroughputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest}
 */
proto.massa.api.v1.TransactionsThroughputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.TransactionsThroughputRequest;
  return proto.massa.api.v1.TransactionsThroughputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.TransactionsThroughputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest}
 */
proto.massa.api.v1.TransactionsThroughputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.TransactionsThroughputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.TransactionsThroughputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFixed64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest} returns this
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed64 interval = 2;
 * @return {number}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest} returns this
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.setInterval = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest} returns this
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.clearInterval = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.TransactionsThroughputResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.TransactionsThroughputResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    throughput: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.TransactionsThroughputResponse}
 */
proto.massa.api.v1.TransactionsThroughputResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.TransactionsThroughputResponse;
  return proto.massa.api.v1.TransactionsThroughputResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.TransactionsThroughputResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.TransactionsThroughputResponse}
 */
proto.massa.api.v1.TransactionsThroughputResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setThroughput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.TransactionsThroughputResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.TransactionsThroughputResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThroughput();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.TransactionsThroughputResponse} returns this
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 throughput = 2;
 * @return {number}
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.getThroughput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.TransactionsThroughputResponse} returns this
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.setThroughput = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.massa.api.v1.OpType = {
  OP_TYPE_UNSPECIFIED: 0,
  OP_TYPE_TRANSACTION: 1,
  OP_TYPE_ROLL_BUY: 2,
  OP_TYPE_ROLL_SELL: 3,
  OP_TYPE_EXECUTE_SC: 4,
  OP_TYPE_CALL_SC: 5
};

goog.object.extend(exports, proto.massa.api.v1);
