// source: slot.proto
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

goog.exportSymbol('proto.massa.api.v1.IndexedSlot', null, global);
goog.exportSymbol('proto.massa.api.v1.Slot', null, global);
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
proto.massa.api.v1.IndexedSlot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.IndexedSlot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.IndexedSlot.displayName = 'proto.massa.api.v1.IndexedSlot';
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
proto.massa.api.v1.Slot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.Slot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.Slot.displayName = 'proto.massa.api.v1.Slot';
}



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
proto.massa.api.v1.IndexedSlot.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.IndexedSlot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.IndexedSlot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.IndexedSlot.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: (f = msg.getSlot()) && proto.massa.api.v1.Slot.toObject(includeInstance, f),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.massa.api.v1.IndexedSlot}
 */
proto.massa.api.v1.IndexedSlot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.IndexedSlot;
  return proto.massa.api.v1.IndexedSlot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.IndexedSlot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.IndexedSlot}
 */
proto.massa.api.v1.IndexedSlot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.Slot;
      reader.readMessage(value,proto.massa.api.v1.Slot.deserializeBinaryFromReader);
      msg.setSlot(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setIndex(value);
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
proto.massa.api.v1.IndexedSlot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.IndexedSlot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.IndexedSlot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.IndexedSlot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.Slot.serializeBinaryToWriter
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeFixed64(
      2,
      f
    );
  }
};


/**
 * optional Slot slot = 1;
 * @return {?proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.IndexedSlot.prototype.getSlot = function() {
  return /** @type{?proto.massa.api.v1.Slot} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.Slot, 1));
};


/**
 * @param {?proto.massa.api.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.IndexedSlot} returns this
*/
proto.massa.api.v1.IndexedSlot.prototype.setSlot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.IndexedSlot} returns this
 */
proto.massa.api.v1.IndexedSlot.prototype.clearSlot = function() {
  return this.setSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.IndexedSlot.prototype.hasSlot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed64 index = 2;
 * @return {number}
 */
proto.massa.api.v1.IndexedSlot.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.IndexedSlot} returns this
 */
proto.massa.api.v1.IndexedSlot.prototype.setIndex = function(value) {
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
proto.massa.api.v1.Slot.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.Slot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.Slot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.Slot.toObject = function(includeInstance, msg) {
  var f, obj = {
    period: jspb.Message.getFieldWithDefault(msg, 1, 0),
    thread: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.Slot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.Slot;
  return proto.massa.api.v1.Slot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.Slot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.Slot}
 */
proto.massa.api.v1.Slot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setPeriod(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setThread(value);
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
proto.massa.api.v1.Slot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.Slot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.Slot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.Slot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeriod();
  if (f !== 0) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = message.getThread();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * optional fixed64 period = 1;
 * @return {number}
 */
proto.massa.api.v1.Slot.prototype.getPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.Slot} returns this
 */
proto.massa.api.v1.Slot.prototype.setPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 thread = 2;
 * @return {number}
 */
proto.massa.api.v1.Slot.prototype.getThread = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.Slot} returns this
 */
proto.massa.api.v1.Slot.prototype.setThread = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.massa.api.v1);
