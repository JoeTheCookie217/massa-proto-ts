/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { BytesMapFieldEntry } from "./common";
import { Slot } from "./slot";

export const protobufPackage = "massa.api.v1";

/** ScExecutionEventStatus type enum */
export enum ScExecutionEventStatus {
  /** SC_EXECUTION_EVENT_STATUS_UNSPECIFIED - Default enum value */
  SC_EXECUTION_EVENT_STATUS_UNSPECIFIED = 0,
  /** SC_EXECUTION_EVENT_STATUS_FINAL - Final status */
  SC_EXECUTION_EVENT_STATUS_FINAL = 1,
  /** SC_EXECUTION_EVENT_STATUS_READ_ONLY - Read only status */
  SC_EXECUTION_EVENT_STATUS_READ_ONLY = 2,
  /** SC_EXECUTION_EVENT_STATUS_FAILURE - Failure status */
  SC_EXECUTION_EVENT_STATUS_FAILURE = 3,
  UNRECOGNIZED = -1,
}

export function scExecutionEventStatusFromJSON(object: any): ScExecutionEventStatus {
  switch (object) {
    case 0:
    case "SC_EXECUTION_EVENT_STATUS_UNSPECIFIED":
      return ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_UNSPECIFIED;
    case 1:
    case "SC_EXECUTION_EVENT_STATUS_FINAL":
      return ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_FINAL;
    case 2:
    case "SC_EXECUTION_EVENT_STATUS_READ_ONLY":
      return ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_READ_ONLY;
    case 3:
    case "SC_EXECUTION_EVENT_STATUS_FAILURE":
      return ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScExecutionEventStatus.UNRECOGNIZED;
  }
}

export function scExecutionEventStatusToJSON(object: ScExecutionEventStatus): string {
  switch (object) {
    case ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_UNSPECIFIED:
      return "SC_EXECUTION_EVENT_STATUS_UNSPECIFIED";
    case ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_FINAL:
      return "SC_EXECUTION_EVENT_STATUS_FINAL";
    case ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_READ_ONLY:
      return "SC_EXECUTION_EVENT_STATUS_READ_ONLY";
    case ScExecutionEventStatus.SC_EXECUTION_EVENT_STATUS_FAILURE:
      return "SC_EXECUTION_EVENT_STATUS_FAILURE";
    case ScExecutionEventStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ExecutionOutputStatus type enum */
export enum ExecutionOutputStatus {
  /** EXECUTION_OUTPUT_STATUS_UNSPECIFIED - Default enum value */
  EXECUTION_OUTPUT_STATUS_UNSPECIFIED = 0,
  /** EXECUTION_OUTPUT_STATUS_CANDIDATE - Candidate status */
  EXECUTION_OUTPUT_STATUS_CANDIDATE = 1,
  /** EXECUTION_OUTPUT_STATUS_FINAL - Final status */
  EXECUTION_OUTPUT_STATUS_FINAL = 2,
  UNRECOGNIZED = -1,
}

export function executionOutputStatusFromJSON(object: any): ExecutionOutputStatus {
  switch (object) {
    case 0:
    case "EXECUTION_OUTPUT_STATUS_UNSPECIFIED":
      return ExecutionOutputStatus.EXECUTION_OUTPUT_STATUS_UNSPECIFIED;
    case 1:
    case "EXECUTION_OUTPUT_STATUS_CANDIDATE":
      return ExecutionOutputStatus.EXECUTION_OUTPUT_STATUS_CANDIDATE;
    case 2:
    case "EXECUTION_OUTPUT_STATUS_FINAL":
      return ExecutionOutputStatus.EXECUTION_OUTPUT_STATUS_FINAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecutionOutputStatus.UNRECOGNIZED;
  }
}

export function executionOutputStatusToJSON(object: ExecutionOutputStatus): string {
  switch (object) {
    case ExecutionOutputStatus.EXECUTION_OUTPUT_STATUS_UNSPECIFIED:
      return "EXECUTION_OUTPUT_STATUS_UNSPECIFIED";
    case ExecutionOutputStatus.EXECUTION_OUTPUT_STATUS_CANDIDATE:
      return "EXECUTION_OUTPUT_STATUS_CANDIDATE";
    case ExecutionOutputStatus.EXECUTION_OUTPUT_STATUS_FINAL:
      return "EXECUTION_OUTPUT_STATUS_FINAL";
    case ExecutionOutputStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** OperationExecutionStatus type enum */
export enum OperationExecutionStatus {
  /** OPERATION_EXECUTION_STATUS_UNSPECIFIED - Default enum value */
  OPERATION_EXECUTION_STATUS_UNSPECIFIED = 0,
  /** OPERATION_EXECUTION_STATUS_SUCCESS - Success status */
  OPERATION_EXECUTION_STATUS_SUCCESS = 1,
  /** OPERATION_EXECUTION_STATUS_FAILED - Failed only status */
  OPERATION_EXECUTION_STATUS_FAILED = 2,
  UNRECOGNIZED = -1,
}

export function operationExecutionStatusFromJSON(object: any): OperationExecutionStatus {
  switch (object) {
    case 0:
    case "OPERATION_EXECUTION_STATUS_UNSPECIFIED":
      return OperationExecutionStatus.OPERATION_EXECUTION_STATUS_UNSPECIFIED;
    case 1:
    case "OPERATION_EXECUTION_STATUS_SUCCESS":
      return OperationExecutionStatus.OPERATION_EXECUTION_STATUS_SUCCESS;
    case 2:
    case "OPERATION_EXECUTION_STATUS_FAILED":
      return OperationExecutionStatus.OPERATION_EXECUTION_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationExecutionStatus.UNRECOGNIZED;
  }
}

export function operationExecutionStatusToJSON(object: OperationExecutionStatus): string {
  switch (object) {
    case OperationExecutionStatus.OPERATION_EXECUTION_STATUS_UNSPECIFIED:
      return "OPERATION_EXECUTION_STATUS_UNSPECIFIED";
    case OperationExecutionStatus.OPERATION_EXECUTION_STATUS_SUCCESS:
      return "OPERATION_EXECUTION_STATUS_SUCCESS";
    case OperationExecutionStatus.OPERATION_EXECUTION_STATUS_FAILED:
      return "OPERATION_EXECUTION_STATUS_FAILED";
    case OperationExecutionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** AsyncPoolChangeType type enum */
export enum AsyncPoolChangeType {
  /** ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED - Default enum value */
  ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED = 0,
  /** ASYNC_POOL_CHANGE_TYPE_ADD - Add type */
  ASYNC_POOL_CHANGE_TYPE_ADD = 1,
  /** ASYNC_POOL_CHANGE_TYPE_ACTIVATE - Activate only type */
  ASYNC_POOL_CHANGE_TYPE_ACTIVATE = 2,
  /** ASYNC_POOL_CHANGE_TYPE_DELETE - Delete only type */
  ASYNC_POOL_CHANGE_TYPE_DELETE = 3,
  UNRECOGNIZED = -1,
}

export function asyncPoolChangeTypeFromJSON(object: any): AsyncPoolChangeType {
  switch (object) {
    case 0:
    case "ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED":
      return AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED;
    case 1:
    case "ASYNC_POOL_CHANGE_TYPE_ADD":
      return AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_ADD;
    case 2:
    case "ASYNC_POOL_CHANGE_TYPE_ACTIVATE":
      return AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_ACTIVATE;
    case 3:
    case "ASYNC_POOL_CHANGE_TYPE_DELETE":
      return AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AsyncPoolChangeType.UNRECOGNIZED;
  }
}

export function asyncPoolChangeTypeToJSON(object: AsyncPoolChangeType): string {
  switch (object) {
    case AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED:
      return "ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED";
    case AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_ADD:
      return "ASYNC_POOL_CHANGE_TYPE_ADD";
    case AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_ACTIVATE:
      return "ASYNC_POOL_CHANGE_TYPE_ACTIVATE";
    case AsyncPoolChangeType.ASYNC_POOL_CHANGE_TYPE_DELETE:
      return "ASYNC_POOL_CHANGE_TYPE_DELETE";
    case AsyncPoolChangeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** LedgerChangeType type enum */
export enum LedgerChangeType {
  /** LEDGER_CHANGE_TYPE_UNSPECIFIED - Default enum value */
  LEDGER_CHANGE_TYPE_UNSPECIFIED = 0,
  /** LEDGER_CHANGE_TYPE_SET - Set type */
  LEDGER_CHANGE_TYPE_SET = 1,
  /** LEDGER_CHANGE_TYPE_UPDATE - Update type */
  LEDGER_CHANGE_TYPE_UPDATE = 2,
  /** LEDGER_CHANGE_TYPE_DELETE - Delete type */
  LEDGER_CHANGE_TYPE_DELETE = 3,
  UNRECOGNIZED = -1,
}

export function ledgerChangeTypeFromJSON(object: any): LedgerChangeType {
  switch (object) {
    case 0:
    case "LEDGER_CHANGE_TYPE_UNSPECIFIED":
      return LedgerChangeType.LEDGER_CHANGE_TYPE_UNSPECIFIED;
    case 1:
    case "LEDGER_CHANGE_TYPE_SET":
      return LedgerChangeType.LEDGER_CHANGE_TYPE_SET;
    case 2:
    case "LEDGER_CHANGE_TYPE_UPDATE":
      return LedgerChangeType.LEDGER_CHANGE_TYPE_UPDATE;
    case 3:
    case "LEDGER_CHANGE_TYPE_DELETE":
      return LedgerChangeType.LEDGER_CHANGE_TYPE_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LedgerChangeType.UNRECOGNIZED;
  }
}

export function ledgerChangeTypeToJSON(object: LedgerChangeType): string {
  switch (object) {
    case LedgerChangeType.LEDGER_CHANGE_TYPE_UNSPECIFIED:
      return "LEDGER_CHANGE_TYPE_UNSPECIFIED";
    case LedgerChangeType.LEDGER_CHANGE_TYPE_SET:
      return "LEDGER_CHANGE_TYPE_SET";
    case LedgerChangeType.LEDGER_CHANGE_TYPE_UPDATE:
      return "LEDGER_CHANGE_TYPE_UPDATE";
    case LedgerChangeType.LEDGER_CHANGE_TYPE_DELETE:
      return "LEDGER_CHANGE_TYPE_DELETE";
    case LedgerChangeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SetOrKeepType type enum */
export enum SetOrKeepType {
  /** SET_OR_KEEP_TYPE_UNSPECIFIED - Default enum value */
  SET_OR_KEEP_TYPE_UNSPECIFIED = 0,
  /** SET_OR_KEEP_TYPE_SET - Sets a new absolute value */
  SET_OR_KEEP_TYPE_SET = 1,
  /** SET_OR_KEEP_TYPE_KEEP - Keeps the existing value */
  SET_OR_KEEP_TYPE_KEEP = 2,
  UNRECOGNIZED = -1,
}

export function setOrKeepTypeFromJSON(object: any): SetOrKeepType {
  switch (object) {
    case 0:
    case "SET_OR_KEEP_TYPE_UNSPECIFIED":
      return SetOrKeepType.SET_OR_KEEP_TYPE_UNSPECIFIED;
    case 1:
    case "SET_OR_KEEP_TYPE_SET":
      return SetOrKeepType.SET_OR_KEEP_TYPE_SET;
    case 2:
    case "SET_OR_KEEP_TYPE_KEEP":
      return SetOrKeepType.SET_OR_KEEP_TYPE_KEEP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SetOrKeepType.UNRECOGNIZED;
  }
}

export function setOrKeepTypeToJSON(object: SetOrKeepType): string {
  switch (object) {
    case SetOrKeepType.SET_OR_KEEP_TYPE_UNSPECIFIED:
      return "SET_OR_KEEP_TYPE_UNSPECIFIED";
    case SetOrKeepType.SET_OR_KEEP_TYPE_SET:
      return "SET_OR_KEEP_TYPE_SET";
    case SetOrKeepType.SET_OR_KEEP_TYPE_KEEP:
      return "SET_OR_KEEP_TYPE_KEEP";
    case SetOrKeepType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SetOrDeleteType type enum */
export enum SetOrDeleteType {
  /** SET_OR_DELETE_TYPE_UNSPECIFIED - Default enum value */
  SET_OR_DELETE_TYPE_UNSPECIFIED = 0,
  /** SET_OR_DELETE_TYPE_SET - Sets a new absolute value */
  SET_OR_DELETE_TYPE_SET = 1,
  /** SET_OR_DELETE_TYPE_DELETE - Deletes the existing value */
  SET_OR_DELETE_TYPE_DELETE = 2,
  UNRECOGNIZED = -1,
}

export function setOrDeleteTypeFromJSON(object: any): SetOrDeleteType {
  switch (object) {
    case 0:
    case "SET_OR_DELETE_TYPE_UNSPECIFIED":
      return SetOrDeleteType.SET_OR_DELETE_TYPE_UNSPECIFIED;
    case 1:
    case "SET_OR_DELETE_TYPE_SET":
      return SetOrDeleteType.SET_OR_DELETE_TYPE_SET;
    case 2:
    case "SET_OR_DELETE_TYPE_DELETE":
      return SetOrDeleteType.SET_OR_DELETE_TYPE_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SetOrDeleteType.UNRECOGNIZED;
  }
}

export function setOrDeleteTypeToJSON(object: SetOrDeleteType): string {
  switch (object) {
    case SetOrDeleteType.SET_OR_DELETE_TYPE_UNSPECIFIED:
      return "SET_OR_DELETE_TYPE_UNSPECIFIED";
    case SetOrDeleteType.SET_OR_DELETE_TYPE_SET:
      return "SET_OR_DELETE_TYPE_SET";
    case SetOrDeleteType.SET_OR_DELETE_TYPE_DELETE:
      return "SET_OR_DELETE_TYPE_DELETE";
    case SetOrDeleteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SlotExecutionOutput */
export interface SlotExecutionOutput {
  /** Status */
  status: ExecutionOutputStatus[];
  /** Executed slot output */
  executionOutput: ExecutionOutput | undefined;
}

/** FinalizedExecutionOutput */
export interface FinalizedExecutionOutput {
  /** Slot */
  slot: Slot | undefined;
}

/** ExecutionOutput */
export interface ExecutionOutput {
  /** Slot */
  slot:
    | Slot
    | undefined;
  /** Block id at that slot (optional) */
  blockId?:
    | string
    | undefined;
  /** Events emitted by the execution step */
  events: ScExecutionEvent[];
  /** State changes caused by the execution step */
  stateChanges: StateChanges | undefined;
}

/** ScExecutionEvent */
export interface ScExecutionEvent {
  /** Sc execution context */
  context:
    | ScExecutionEventContext
    | undefined;
  /** json data string */
  data: string;
}

/** ScExecutionEvent context */
export interface ScExecutionEventContext {
  /** base58 encoded slot(period + thread) + index_in_slot */
  id: string;
  /** When was it generated */
  originSlot:
    | Slot
    | undefined;
  /** Block id if there was a block at that slot (optional) */
  blockId?:
    | string
    | undefined;
  /** Index of the event in the slot */
  indexInSlot: number;
  /** Call stack addresses. most recent at the end */
  callStack: string[];
  /** Origin operation id (optional) */
  originOperationId?:
    | string
    | undefined;
  /** Status */
  status: ScExecutionEventStatus[];
}

/** StateChanges */
export interface StateChanges {
  /** Ledger changes */
  ledgerChanges: LedgerChangeEntry[];
  /** Asynchronous pool changes */
  asyncPoolChanges: AsyncPoolChangeEntry[];
  /** Executed operations changes */
  executedOpsChanges: ExecutedOpsChangeEntry[];
  /** Executed denunciations changes */
  executedDenunciationsChanges: DenunciationIndex[];
}

/** ExecutedOpsChangeEntry */
export interface ExecutedOpsChangeEntry {
  /** OperationId */
  operationId: string;
  /** ExecutedOpsChangeValue */
  value: ExecutedOpsChangeValue | undefined;
}

/** ExecutedOpsChangeValue */
export interface ExecutedOpsChangeValue {
  /** The status of the execution of the operation */
  status: OperationExecutionStatus[];
  /** Slot until which the operation remains valid (included) */
  slot: Slot | undefined;
}

/** AsyncPoolChange Entry */
export interface AsyncPoolChangeEntry {
  /** Async message id */
  asyncMessageId: string;
  /** AsyncPool message */
  value: AsyncPoolChangeValue | undefined;
}

/** AsyncPoolChangeValue */
export interface AsyncPoolChangeValue {
  /** The type of the change */
  type: AsyncPoolChangeType;
  /** AsyncPool message */
  asyncMessage: AsyncMessage | undefined;
}

/** Asynchronous smart contract message */
export interface AsyncMessage {
  /** Slot at which the message was emitted */
  emissionSlot:
    | Slot
    | undefined;
  /**
   * Index of the emitted message within the `emission_slot`.
   * This is used for disambiguate the emission of multiple messages at the same slot.
   */
  emissionIndex: number;
  /** The address that sent the message */
  sender: string;
  /** The address towards which the message is being sent */
  destination: string;
  /** the handler function name within the destination address' bytecode */
  handler: string;
  /** Maximum gas to use when processing the message */
  maxGas: number;
  /** Fee paid by the sender when the message is processed. */
  fee: number;
  /**
   * Coins sent from the sender to the target address of the message.
   * Those coins are spent by the sender address when the message is sent,
   * and credited to the destination address when receiving the message.
   * In case of failure or discard, those coins are reimbursed to the sender.
   */
  coins: number;
  /** Slot at which the message starts being valid (bound included in the validity range) */
  validityStart:
    | Slot
    | undefined;
  /** Slot at which the message stops being valid (bound not included in the validity range) */
  validityEnd:
    | Slot
    | undefined;
  /** Raw payload data of the message */
  data: Uint8Array;
  /** Trigger that define whenever a message can be executed */
  trigger:
    | AsyncMessageTrigger
    | undefined;
  /**
   * Boolean that determine if the message can be executed. For messages without filter this boolean is always true.
   * For messages with filter, this boolean is true if the filter has been matched between `validity_start` and current slot.
   */
  canBeExecuted: boolean;
  /** Hash of the message */
  hash: string;
}

/** Structure defining a trigger for an asynchronous message */
export interface AsyncMessageTrigger {
  /** Filter on the address */
  address: string;
  /** Filter on the datastore key (optional) */
  datastoreKey?: Uint8Array | undefined;
}

/** LedgerChangeEntry */
export interface LedgerChangeEntry {
  /** Address */
  address: string;
  /** Ledger message */
  value: LedgerChangeValue | undefined;
}

/** LedgerChangeValue */
export interface LedgerChangeValue {
  /** The type of the change */
  type: LedgerChangeType;
  /** Created ledger entry */
  createdEntry?:
    | LedgerEntry
    | undefined;
  /** Update ledger entry */
  updatedEntry?: LedgerEntryUpdate | undefined;
}

/** An entry associated to an address in the `FinalLedger` */
export interface LedgerEntry {
  /** The balance of that entry */
  balance: number;
  /** Executable bytecode */
  bytecode: Uint8Array;
  /** A key-value store associating a hash to arbitrary bytes */
  entries: BytesMapFieldEntry[];
}

/** Represents an update to one or more fields of a `LedgerEntry` */
export interface LedgerEntryUpdate {
  /** Change the balance */
  balance:
    | SetOrKeepBalance
    | undefined;
  /** Change the executable bytecode */
  bytecode:
    | SetOrKeepBytecode
    | undefined;
  /** / Change datastore entries */
  datastore: SetOrDeleteDatastoreEntry[];
}

/** Set or Keep Balance */
export interface SetOrKeepBalance {
  /** The type of the change */
  type: SetOrKeepType;
  /** The balance of that entry (optional) */
  balance?: number | undefined;
}

/** Set or Keep Bytecode */
export interface SetOrKeepBytecode {
  /** The type of the change */
  type: SetOrKeepType;
  /** Executable bytecode (optional) */
  bytecode?: Uint8Array | undefined;
}

/** Set or Delete DatastoreEntry */
export interface SetOrDeleteDatastoreEntry {
  /** The type of the change */
  type: SetOrDeleteType;
  /** The balance of that entry (optioal) */
  datastoreEntry?: BytesMapFieldEntry | undefined;
}

/** Index for Denunciations in collections (e.g. like a HashMap...) */
export interface DenunciationIndex {
  /** Denunciation block header */
  blockHeader?:
    | DenunciationBlockHeader
    | undefined;
  /** Denunciation endorsement */
  endorsement?: DenunciationEndorsement | undefined;
}

/** Variant for Block header denunciation index */
export interface DenunciationBlockHeader {
  /** Denounciation slot */
  slot: Slot | undefined;
}

/** Variant for Endorsement denunciation index */
export interface DenunciationEndorsement {
  /** Denounciation slot */
  slot:
    | Slot
    | undefined;
  /** Denounciation index */
  index: number;
}

function createBaseSlotExecutionOutput(): SlotExecutionOutput {
  return { status: [], executionOutput: undefined };
}

export const SlotExecutionOutput = {
  encode(message: SlotExecutionOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.status) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.executionOutput !== undefined) {
      ExecutionOutput.encode(message.executionOutput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlotExecutionOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlotExecutionOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.status.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.status.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag != 18) {
            break;
          }

          message.executionOutput = ExecutionOutput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SlotExecutionOutput {
    return {
      status: Array.isArray(object?.status) ? object.status.map((e: any) => executionOutputStatusFromJSON(e)) : [],
      executionOutput: isSet(object.executionOutput) ? ExecutionOutput.fromJSON(object.executionOutput) : undefined,
    };
  },

  toJSON(message: SlotExecutionOutput): unknown {
    const obj: any = {};
    if (message.status) {
      obj.status = message.status.map((e) => executionOutputStatusToJSON(e));
    } else {
      obj.status = [];
    }
    message.executionOutput !== undefined &&
      (obj.executionOutput = message.executionOutput ? ExecutionOutput.toJSON(message.executionOutput) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SlotExecutionOutput>, I>>(base?: I): SlotExecutionOutput {
    return SlotExecutionOutput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SlotExecutionOutput>, I>>(object: I): SlotExecutionOutput {
    const message = createBaseSlotExecutionOutput();
    message.status = object.status?.map((e) => e) || [];
    message.executionOutput = (object.executionOutput !== undefined && object.executionOutput !== null)
      ? ExecutionOutput.fromPartial(object.executionOutput)
      : undefined;
    return message;
  },
};

function createBaseFinalizedExecutionOutput(): FinalizedExecutionOutput {
  return { slot: undefined };
}

export const FinalizedExecutionOutput = {
  encode(message: FinalizedExecutionOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== undefined) {
      Slot.encode(message.slot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizedExecutionOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizedExecutionOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slot = Slot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalizedExecutionOutput {
    return { slot: isSet(object.slot) ? Slot.fromJSON(object.slot) : undefined };
  },

  toJSON(message: FinalizedExecutionOutput): unknown {
    const obj: any = {};
    message.slot !== undefined && (obj.slot = message.slot ? Slot.toJSON(message.slot) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalizedExecutionOutput>, I>>(base?: I): FinalizedExecutionOutput {
    return FinalizedExecutionOutput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FinalizedExecutionOutput>, I>>(object: I): FinalizedExecutionOutput {
    const message = createBaseFinalizedExecutionOutput();
    message.slot = (object.slot !== undefined && object.slot !== null) ? Slot.fromPartial(object.slot) : undefined;
    return message;
  },
};

function createBaseExecutionOutput(): ExecutionOutput {
  return { slot: undefined, blockId: undefined, events: [], stateChanges: undefined };
}

export const ExecutionOutput = {
  encode(message: ExecutionOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== undefined) {
      Slot.encode(message.slot, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      writer.uint32(18).string(message.blockId);
    }
    for (const v of message.events) {
      ScExecutionEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.stateChanges !== undefined) {
      StateChanges.encode(message.stateChanges, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slot = Slot.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.blockId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.events.push(ScExecutionEvent.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stateChanges = StateChanges.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutionOutput {
    return {
      slot: isSet(object.slot) ? Slot.fromJSON(object.slot) : undefined,
      blockId: isSet(object.blockId) ? String(object.blockId) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => ScExecutionEvent.fromJSON(e)) : [],
      stateChanges: isSet(object.stateChanges) ? StateChanges.fromJSON(object.stateChanges) : undefined,
    };
  },

  toJSON(message: ExecutionOutput): unknown {
    const obj: any = {};
    message.slot !== undefined && (obj.slot = message.slot ? Slot.toJSON(message.slot) : undefined);
    message.blockId !== undefined && (obj.blockId = message.blockId);
    if (message.events) {
      obj.events = message.events.map((e) => e ? ScExecutionEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    message.stateChanges !== undefined &&
      (obj.stateChanges = message.stateChanges ? StateChanges.toJSON(message.stateChanges) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutionOutput>, I>>(base?: I): ExecutionOutput {
    return ExecutionOutput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExecutionOutput>, I>>(object: I): ExecutionOutput {
    const message = createBaseExecutionOutput();
    message.slot = (object.slot !== undefined && object.slot !== null) ? Slot.fromPartial(object.slot) : undefined;
    message.blockId = object.blockId ?? undefined;
    message.events = object.events?.map((e) => ScExecutionEvent.fromPartial(e)) || [];
    message.stateChanges = (object.stateChanges !== undefined && object.stateChanges !== null)
      ? StateChanges.fromPartial(object.stateChanges)
      : undefined;
    return message;
  },
};

function createBaseScExecutionEvent(): ScExecutionEvent {
  return { context: undefined, data: "" };
}

export const ScExecutionEvent = {
  encode(message: ScExecutionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.context !== undefined) {
      ScExecutionEventContext.encode(message.context, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScExecutionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScExecutionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.context = ScExecutionEventContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScExecutionEvent {
    return {
      context: isSet(object.context) ? ScExecutionEventContext.fromJSON(object.context) : undefined,
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: ScExecutionEvent): unknown {
    const obj: any = {};
    message.context !== undefined &&
      (obj.context = message.context ? ScExecutionEventContext.toJSON(message.context) : undefined);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScExecutionEvent>, I>>(base?: I): ScExecutionEvent {
    return ScExecutionEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScExecutionEvent>, I>>(object: I): ScExecutionEvent {
    const message = createBaseScExecutionEvent();
    message.context = (object.context !== undefined && object.context !== null)
      ? ScExecutionEventContext.fromPartial(object.context)
      : undefined;
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseScExecutionEventContext(): ScExecutionEventContext {
  return {
    id: "",
    originSlot: undefined,
    blockId: undefined,
    indexInSlot: 0,
    callStack: [],
    originOperationId: undefined,
    status: [],
  };
}

export const ScExecutionEventContext = {
  encode(message: ScExecutionEventContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.originSlot !== undefined) {
      Slot.encode(message.originSlot, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      writer.uint32(26).string(message.blockId);
    }
    if (message.indexInSlot !== 0) {
      writer.uint32(33).fixed64(message.indexInSlot);
    }
    for (const v of message.callStack) {
      writer.uint32(42).string(v!);
    }
    if (message.originOperationId !== undefined) {
      writer.uint32(50).string(message.originOperationId);
    }
    writer.uint32(58).fork();
    for (const v of message.status) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScExecutionEventContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScExecutionEventContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.originSlot = Slot.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.blockId = reader.string();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.indexInSlot = longToNumber(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.callStack.push(reader.string());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.originOperationId = reader.string();
          continue;
        case 7:
          if (tag == 56) {
            message.status.push(reader.int32() as any);
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.status.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScExecutionEventContext {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      originSlot: isSet(object.originSlot) ? Slot.fromJSON(object.originSlot) : undefined,
      blockId: isSet(object.blockId) ? String(object.blockId) : undefined,
      indexInSlot: isSet(object.indexInSlot) ? Number(object.indexInSlot) : 0,
      callStack: Array.isArray(object?.callStack) ? object.callStack.map((e: any) => String(e)) : [],
      originOperationId: isSet(object.originOperationId) ? String(object.originOperationId) : undefined,
      status: Array.isArray(object?.status) ? object.status.map((e: any) => scExecutionEventStatusFromJSON(e)) : [],
    };
  },

  toJSON(message: ScExecutionEventContext): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.originSlot !== undefined &&
      (obj.originSlot = message.originSlot ? Slot.toJSON(message.originSlot) : undefined);
    message.blockId !== undefined && (obj.blockId = message.blockId);
    message.indexInSlot !== undefined && (obj.indexInSlot = Math.round(message.indexInSlot));
    if (message.callStack) {
      obj.callStack = message.callStack.map((e) => e);
    } else {
      obj.callStack = [];
    }
    message.originOperationId !== undefined && (obj.originOperationId = message.originOperationId);
    if (message.status) {
      obj.status = message.status.map((e) => scExecutionEventStatusToJSON(e));
    } else {
      obj.status = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScExecutionEventContext>, I>>(base?: I): ScExecutionEventContext {
    return ScExecutionEventContext.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScExecutionEventContext>, I>>(object: I): ScExecutionEventContext {
    const message = createBaseScExecutionEventContext();
    message.id = object.id ?? "";
    message.originSlot = (object.originSlot !== undefined && object.originSlot !== null)
      ? Slot.fromPartial(object.originSlot)
      : undefined;
    message.blockId = object.blockId ?? undefined;
    message.indexInSlot = object.indexInSlot ?? 0;
    message.callStack = object.callStack?.map((e) => e) || [];
    message.originOperationId = object.originOperationId ?? undefined;
    message.status = object.status?.map((e) => e) || [];
    return message;
  },
};

function createBaseStateChanges(): StateChanges {
  return { ledgerChanges: [], asyncPoolChanges: [], executedOpsChanges: [], executedDenunciationsChanges: [] };
}

export const StateChanges = {
  encode(message: StateChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ledgerChanges) {
      LedgerChangeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.asyncPoolChanges) {
      AsyncPoolChangeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.executedOpsChanges) {
      ExecutedOpsChangeEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.executedDenunciationsChanges) {
      DenunciationIndex.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateChanges {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ledgerChanges.push(LedgerChangeEntry.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.asyncPoolChanges.push(AsyncPoolChangeEntry.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.executedOpsChanges.push(ExecutedOpsChangeEntry.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.executedDenunciationsChanges.push(DenunciationIndex.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StateChanges {
    return {
      ledgerChanges: Array.isArray(object?.ledgerChanges)
        ? object.ledgerChanges.map((e: any) => LedgerChangeEntry.fromJSON(e))
        : [],
      asyncPoolChanges: Array.isArray(object?.asyncPoolChanges)
        ? object.asyncPoolChanges.map((e: any) => AsyncPoolChangeEntry.fromJSON(e))
        : [],
      executedOpsChanges: Array.isArray(object?.executedOpsChanges)
        ? object.executedOpsChanges.map((e: any) => ExecutedOpsChangeEntry.fromJSON(e))
        : [],
      executedDenunciationsChanges: Array.isArray(object?.executedDenunciationsChanges)
        ? object.executedDenunciationsChanges.map((e: any) => DenunciationIndex.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StateChanges): unknown {
    const obj: any = {};
    if (message.ledgerChanges) {
      obj.ledgerChanges = message.ledgerChanges.map((e) => e ? LedgerChangeEntry.toJSON(e) : undefined);
    } else {
      obj.ledgerChanges = [];
    }
    if (message.asyncPoolChanges) {
      obj.asyncPoolChanges = message.asyncPoolChanges.map((e) => e ? AsyncPoolChangeEntry.toJSON(e) : undefined);
    } else {
      obj.asyncPoolChanges = [];
    }
    if (message.executedOpsChanges) {
      obj.executedOpsChanges = message.executedOpsChanges.map((e) => e ? ExecutedOpsChangeEntry.toJSON(e) : undefined);
    } else {
      obj.executedOpsChanges = [];
    }
    if (message.executedDenunciationsChanges) {
      obj.executedDenunciationsChanges = message.executedDenunciationsChanges.map((e) =>
        e ? DenunciationIndex.toJSON(e) : undefined
      );
    } else {
      obj.executedDenunciationsChanges = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StateChanges>, I>>(base?: I): StateChanges {
    return StateChanges.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StateChanges>, I>>(object: I): StateChanges {
    const message = createBaseStateChanges();
    message.ledgerChanges = object.ledgerChanges?.map((e) => LedgerChangeEntry.fromPartial(e)) || [];
    message.asyncPoolChanges = object.asyncPoolChanges?.map((e) => AsyncPoolChangeEntry.fromPartial(e)) || [];
    message.executedOpsChanges = object.executedOpsChanges?.map((e) => ExecutedOpsChangeEntry.fromPartial(e)) || [];
    message.executedDenunciationsChanges =
      object.executedDenunciationsChanges?.map((e) => DenunciationIndex.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExecutedOpsChangeEntry(): ExecutedOpsChangeEntry {
  return { operationId: "", value: undefined };
}

export const ExecutedOpsChangeEntry = {
  encode(message: ExecutedOpsChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    if (message.value !== undefined) {
      ExecutedOpsChangeValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutedOpsChangeEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutedOpsChangeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = ExecutedOpsChangeValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutedOpsChangeEntry {
    return {
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      value: isSet(object.value) ? ExecutedOpsChangeValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ExecutedOpsChangeEntry): unknown {
    const obj: any = {};
    message.operationId !== undefined && (obj.operationId = message.operationId);
    message.value !== undefined &&
      (obj.value = message.value ? ExecutedOpsChangeValue.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutedOpsChangeEntry>, I>>(base?: I): ExecutedOpsChangeEntry {
    return ExecutedOpsChangeEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExecutedOpsChangeEntry>, I>>(object: I): ExecutedOpsChangeEntry {
    const message = createBaseExecutedOpsChangeEntry();
    message.operationId = object.operationId ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ExecutedOpsChangeValue.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseExecutedOpsChangeValue(): ExecutedOpsChangeValue {
  return { status: [], slot: undefined };
}

export const ExecutedOpsChangeValue = {
  encode(message: ExecutedOpsChangeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.status) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.slot !== undefined) {
      Slot.encode(message.slot, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutedOpsChangeValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutedOpsChangeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.status.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.status.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag != 18) {
            break;
          }

          message.slot = Slot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutedOpsChangeValue {
    return {
      status: Array.isArray(object?.status) ? object.status.map((e: any) => operationExecutionStatusFromJSON(e)) : [],
      slot: isSet(object.slot) ? Slot.fromJSON(object.slot) : undefined,
    };
  },

  toJSON(message: ExecutedOpsChangeValue): unknown {
    const obj: any = {};
    if (message.status) {
      obj.status = message.status.map((e) => operationExecutionStatusToJSON(e));
    } else {
      obj.status = [];
    }
    message.slot !== undefined && (obj.slot = message.slot ? Slot.toJSON(message.slot) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutedOpsChangeValue>, I>>(base?: I): ExecutedOpsChangeValue {
    return ExecutedOpsChangeValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExecutedOpsChangeValue>, I>>(object: I): ExecutedOpsChangeValue {
    const message = createBaseExecutedOpsChangeValue();
    message.status = object.status?.map((e) => e) || [];
    message.slot = (object.slot !== undefined && object.slot !== null) ? Slot.fromPartial(object.slot) : undefined;
    return message;
  },
};

function createBaseAsyncPoolChangeEntry(): AsyncPoolChangeEntry {
  return { asyncMessageId: "", value: undefined };
}

export const AsyncPoolChangeEntry = {
  encode(message: AsyncPoolChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asyncMessageId !== "") {
      writer.uint32(10).string(message.asyncMessageId);
    }
    if (message.value !== undefined) {
      AsyncPoolChangeValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsyncPoolChangeEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsyncPoolChangeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.asyncMessageId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = AsyncPoolChangeValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsyncPoolChangeEntry {
    return {
      asyncMessageId: isSet(object.asyncMessageId) ? String(object.asyncMessageId) : "",
      value: isSet(object.value) ? AsyncPoolChangeValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: AsyncPoolChangeEntry): unknown {
    const obj: any = {};
    message.asyncMessageId !== undefined && (obj.asyncMessageId = message.asyncMessageId);
    message.value !== undefined && (obj.value = message.value ? AsyncPoolChangeValue.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AsyncPoolChangeEntry>, I>>(base?: I): AsyncPoolChangeEntry {
    return AsyncPoolChangeEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AsyncPoolChangeEntry>, I>>(object: I): AsyncPoolChangeEntry {
    const message = createBaseAsyncPoolChangeEntry();
    message.asyncMessageId = object.asyncMessageId ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? AsyncPoolChangeValue.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAsyncPoolChangeValue(): AsyncPoolChangeValue {
  return { type: 0, asyncMessage: undefined };
}

export const AsyncPoolChangeValue = {
  encode(message: AsyncPoolChangeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.asyncMessage !== undefined) {
      AsyncMessage.encode(message.asyncMessage, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsyncPoolChangeValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsyncPoolChangeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.asyncMessage = AsyncMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsyncPoolChangeValue {
    return {
      type: isSet(object.type) ? asyncPoolChangeTypeFromJSON(object.type) : 0,
      asyncMessage: isSet(object.asyncMessage) ? AsyncMessage.fromJSON(object.asyncMessage) : undefined,
    };
  },

  toJSON(message: AsyncPoolChangeValue): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = asyncPoolChangeTypeToJSON(message.type));
    message.asyncMessage !== undefined &&
      (obj.asyncMessage = message.asyncMessage ? AsyncMessage.toJSON(message.asyncMessage) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AsyncPoolChangeValue>, I>>(base?: I): AsyncPoolChangeValue {
    return AsyncPoolChangeValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AsyncPoolChangeValue>, I>>(object: I): AsyncPoolChangeValue {
    const message = createBaseAsyncPoolChangeValue();
    message.type = object.type ?? 0;
    message.asyncMessage = (object.asyncMessage !== undefined && object.asyncMessage !== null)
      ? AsyncMessage.fromPartial(object.asyncMessage)
      : undefined;
    return message;
  },
};

function createBaseAsyncMessage(): AsyncMessage {
  return {
    emissionSlot: undefined,
    emissionIndex: 0,
    sender: "",
    destination: "",
    handler: "",
    maxGas: 0,
    fee: 0,
    coins: 0,
    validityStart: undefined,
    validityEnd: undefined,
    data: new Uint8Array(),
    trigger: undefined,
    canBeExecuted: false,
    hash: "",
  };
}

export const AsyncMessage = {
  encode(message: AsyncMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emissionSlot !== undefined) {
      Slot.encode(message.emissionSlot, writer.uint32(10).fork()).ldelim();
    }
    if (message.emissionIndex !== 0) {
      writer.uint32(17).fixed64(message.emissionIndex);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.destination !== "") {
      writer.uint32(34).string(message.destination);
    }
    if (message.handler !== "") {
      writer.uint32(42).string(message.handler);
    }
    if (message.maxGas !== 0) {
      writer.uint32(49).fixed64(message.maxGas);
    }
    if (message.fee !== 0) {
      writer.uint32(57).fixed64(message.fee);
    }
    if (message.coins !== 0) {
      writer.uint32(65).fixed64(message.coins);
    }
    if (message.validityStart !== undefined) {
      Slot.encode(message.validityStart, writer.uint32(74).fork()).ldelim();
    }
    if (message.validityEnd !== undefined) {
      Slot.encode(message.validityEnd, writer.uint32(82).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(90).bytes(message.data);
    }
    if (message.trigger !== undefined) {
      AsyncMessageTrigger.encode(message.trigger, writer.uint32(98).fork()).ldelim();
    }
    if (message.canBeExecuted === true) {
      writer.uint32(104).bool(message.canBeExecuted);
    }
    if (message.hash !== "") {
      writer.uint32(114).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsyncMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsyncMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.emissionSlot = Slot.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.emissionIndex = longToNumber(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.destination = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.handler = reader.string();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.maxGas = longToNumber(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.fee = longToNumber(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag != 65) {
            break;
          }

          message.coins = longToNumber(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.validityStart = Slot.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.validityEnd = Slot.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.trigger = AsyncMessageTrigger.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.canBeExecuted = reader.bool();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.hash = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsyncMessage {
    return {
      emissionSlot: isSet(object.emissionSlot) ? Slot.fromJSON(object.emissionSlot) : undefined,
      emissionIndex: isSet(object.emissionIndex) ? Number(object.emissionIndex) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      handler: isSet(object.handler) ? String(object.handler) : "",
      maxGas: isSet(object.maxGas) ? Number(object.maxGas) : 0,
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      coins: isSet(object.coins) ? Number(object.coins) : 0,
      validityStart: isSet(object.validityStart) ? Slot.fromJSON(object.validityStart) : undefined,
      validityEnd: isSet(object.validityEnd) ? Slot.fromJSON(object.validityEnd) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      trigger: isSet(object.trigger) ? AsyncMessageTrigger.fromJSON(object.trigger) : undefined,
      canBeExecuted: isSet(object.canBeExecuted) ? Boolean(object.canBeExecuted) : false,
      hash: isSet(object.hash) ? String(object.hash) : "",
    };
  },

  toJSON(message: AsyncMessage): unknown {
    const obj: any = {};
    message.emissionSlot !== undefined &&
      (obj.emissionSlot = message.emissionSlot ? Slot.toJSON(message.emissionSlot) : undefined);
    message.emissionIndex !== undefined && (obj.emissionIndex = Math.round(message.emissionIndex));
    message.sender !== undefined && (obj.sender = message.sender);
    message.destination !== undefined && (obj.destination = message.destination);
    message.handler !== undefined && (obj.handler = message.handler);
    message.maxGas !== undefined && (obj.maxGas = Math.round(message.maxGas));
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.coins !== undefined && (obj.coins = Math.round(message.coins));
    message.validityStart !== undefined &&
      (obj.validityStart = message.validityStart ? Slot.toJSON(message.validityStart) : undefined);
    message.validityEnd !== undefined &&
      (obj.validityEnd = message.validityEnd ? Slot.toJSON(message.validityEnd) : undefined);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.trigger !== undefined &&
      (obj.trigger = message.trigger ? AsyncMessageTrigger.toJSON(message.trigger) : undefined);
    message.canBeExecuted !== undefined && (obj.canBeExecuted = message.canBeExecuted);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  create<I extends Exact<DeepPartial<AsyncMessage>, I>>(base?: I): AsyncMessage {
    return AsyncMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AsyncMessage>, I>>(object: I): AsyncMessage {
    const message = createBaseAsyncMessage();
    message.emissionSlot = (object.emissionSlot !== undefined && object.emissionSlot !== null)
      ? Slot.fromPartial(object.emissionSlot)
      : undefined;
    message.emissionIndex = object.emissionIndex ?? 0;
    message.sender = object.sender ?? "";
    message.destination = object.destination ?? "";
    message.handler = object.handler ?? "";
    message.maxGas = object.maxGas ?? 0;
    message.fee = object.fee ?? 0;
    message.coins = object.coins ?? 0;
    message.validityStart = (object.validityStart !== undefined && object.validityStart !== null)
      ? Slot.fromPartial(object.validityStart)
      : undefined;
    message.validityEnd = (object.validityEnd !== undefined && object.validityEnd !== null)
      ? Slot.fromPartial(object.validityEnd)
      : undefined;
    message.data = object.data ?? new Uint8Array();
    message.trigger = (object.trigger !== undefined && object.trigger !== null)
      ? AsyncMessageTrigger.fromPartial(object.trigger)
      : undefined;
    message.canBeExecuted = object.canBeExecuted ?? false;
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseAsyncMessageTrigger(): AsyncMessageTrigger {
  return { address: "", datastoreKey: undefined };
}

export const AsyncMessageTrigger = {
  encode(message: AsyncMessageTrigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.datastoreKey !== undefined) {
      writer.uint32(18).bytes(message.datastoreKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AsyncMessageTrigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsyncMessageTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.datastoreKey = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AsyncMessageTrigger {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      datastoreKey: isSet(object.datastoreKey) ? bytesFromBase64(object.datastoreKey) : undefined,
    };
  },

  toJSON(message: AsyncMessageTrigger): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.datastoreKey !== undefined &&
      (obj.datastoreKey = message.datastoreKey !== undefined ? base64FromBytes(message.datastoreKey) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AsyncMessageTrigger>, I>>(base?: I): AsyncMessageTrigger {
    return AsyncMessageTrigger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AsyncMessageTrigger>, I>>(object: I): AsyncMessageTrigger {
    const message = createBaseAsyncMessageTrigger();
    message.address = object.address ?? "";
    message.datastoreKey = object.datastoreKey ?? undefined;
    return message;
  },
};

function createBaseLedgerChangeEntry(): LedgerChangeEntry {
  return { address: "", value: undefined };
}

export const LedgerChangeEntry = {
  encode(message: LedgerChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.value !== undefined) {
      LedgerChangeValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LedgerChangeEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerChangeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = LedgerChangeValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LedgerChangeEntry {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      value: isSet(object.value) ? LedgerChangeValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LedgerChangeEntry): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.value !== undefined && (obj.value = message.value ? LedgerChangeValue.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LedgerChangeEntry>, I>>(base?: I): LedgerChangeEntry {
    return LedgerChangeEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LedgerChangeEntry>, I>>(object: I): LedgerChangeEntry {
    const message = createBaseLedgerChangeEntry();
    message.address = object.address ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? LedgerChangeValue.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseLedgerChangeValue(): LedgerChangeValue {
  return { type: 0, createdEntry: undefined, updatedEntry: undefined };
}

export const LedgerChangeValue = {
  encode(message: LedgerChangeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.createdEntry !== undefined) {
      LedgerEntry.encode(message.createdEntry, writer.uint32(18).fork()).ldelim();
    }
    if (message.updatedEntry !== undefined) {
      LedgerEntryUpdate.encode(message.updatedEntry, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LedgerChangeValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerChangeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.createdEntry = LedgerEntry.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.updatedEntry = LedgerEntryUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LedgerChangeValue {
    return {
      type: isSet(object.type) ? ledgerChangeTypeFromJSON(object.type) : 0,
      createdEntry: isSet(object.createdEntry) ? LedgerEntry.fromJSON(object.createdEntry) : undefined,
      updatedEntry: isSet(object.updatedEntry) ? LedgerEntryUpdate.fromJSON(object.updatedEntry) : undefined,
    };
  },

  toJSON(message: LedgerChangeValue): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = ledgerChangeTypeToJSON(message.type));
    message.createdEntry !== undefined &&
      (obj.createdEntry = message.createdEntry ? LedgerEntry.toJSON(message.createdEntry) : undefined);
    message.updatedEntry !== undefined &&
      (obj.updatedEntry = message.updatedEntry ? LedgerEntryUpdate.toJSON(message.updatedEntry) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LedgerChangeValue>, I>>(base?: I): LedgerChangeValue {
    return LedgerChangeValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LedgerChangeValue>, I>>(object: I): LedgerChangeValue {
    const message = createBaseLedgerChangeValue();
    message.type = object.type ?? 0;
    message.createdEntry = (object.createdEntry !== undefined && object.createdEntry !== null)
      ? LedgerEntry.fromPartial(object.createdEntry)
      : undefined;
    message.updatedEntry = (object.updatedEntry !== undefined && object.updatedEntry !== null)
      ? LedgerEntryUpdate.fromPartial(object.updatedEntry)
      : undefined;
    return message;
  },
};

function createBaseLedgerEntry(): LedgerEntry {
  return { balance: 0, bytecode: new Uint8Array(), entries: [] };
}

export const LedgerEntry = {
  encode(message: LedgerEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== 0) {
      writer.uint32(9).fixed64(message.balance);
    }
    if (message.bytecode.length !== 0) {
      writer.uint32(18).bytes(message.bytecode);
    }
    for (const v of message.entries) {
      BytesMapFieldEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LedgerEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.balance = longToNumber(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bytecode = reader.bytes();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.entries.push(BytesMapFieldEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LedgerEntry {
    return {
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      bytecode: isSet(object.bytecode) ? bytesFromBase64(object.bytecode) : new Uint8Array(),
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => BytesMapFieldEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: LedgerEntry): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.bytecode !== undefined &&
      (obj.bytecode = base64FromBytes(message.bytecode !== undefined ? message.bytecode : new Uint8Array()));
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? BytesMapFieldEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LedgerEntry>, I>>(base?: I): LedgerEntry {
    return LedgerEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LedgerEntry>, I>>(object: I): LedgerEntry {
    const message = createBaseLedgerEntry();
    message.balance = object.balance ?? 0;
    message.bytecode = object.bytecode ?? new Uint8Array();
    message.entries = object.entries?.map((e) => BytesMapFieldEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLedgerEntryUpdate(): LedgerEntryUpdate {
  return { balance: undefined, bytecode: undefined, datastore: [] };
}

export const LedgerEntryUpdate = {
  encode(message: LedgerEntryUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      SetOrKeepBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    if (message.bytecode !== undefined) {
      SetOrKeepBytecode.encode(message.bytecode, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.datastore) {
      SetOrDeleteDatastoreEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LedgerEntryUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerEntryUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.balance = SetOrKeepBalance.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bytecode = SetOrKeepBytecode.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.datastore.push(SetOrDeleteDatastoreEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LedgerEntryUpdate {
    return {
      balance: isSet(object.balance) ? SetOrKeepBalance.fromJSON(object.balance) : undefined,
      bytecode: isSet(object.bytecode) ? SetOrKeepBytecode.fromJSON(object.bytecode) : undefined,
      datastore: Array.isArray(object?.datastore)
        ? object.datastore.map((e: any) => SetOrDeleteDatastoreEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LedgerEntryUpdate): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance ? SetOrKeepBalance.toJSON(message.balance) : undefined);
    message.bytecode !== undefined &&
      (obj.bytecode = message.bytecode ? SetOrKeepBytecode.toJSON(message.bytecode) : undefined);
    if (message.datastore) {
      obj.datastore = message.datastore.map((e) => e ? SetOrDeleteDatastoreEntry.toJSON(e) : undefined);
    } else {
      obj.datastore = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LedgerEntryUpdate>, I>>(base?: I): LedgerEntryUpdate {
    return LedgerEntryUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LedgerEntryUpdate>, I>>(object: I): LedgerEntryUpdate {
    const message = createBaseLedgerEntryUpdate();
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? SetOrKeepBalance.fromPartial(object.balance)
      : undefined;
    message.bytecode = (object.bytecode !== undefined && object.bytecode !== null)
      ? SetOrKeepBytecode.fromPartial(object.bytecode)
      : undefined;
    message.datastore = object.datastore?.map((e) => SetOrDeleteDatastoreEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetOrKeepBalance(): SetOrKeepBalance {
  return { type: 0, balance: undefined };
}

export const SetOrKeepBalance = {
  encode(message: SetOrKeepBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.balance !== undefined) {
      writer.uint32(17).fixed64(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetOrKeepBalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetOrKeepBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.balance = longToNumber(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetOrKeepBalance {
    return {
      type: isSet(object.type) ? setOrKeepTypeFromJSON(object.type) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : undefined,
    };
  },

  toJSON(message: SetOrKeepBalance): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = setOrKeepTypeToJSON(message.type));
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    return obj;
  },

  create<I extends Exact<DeepPartial<SetOrKeepBalance>, I>>(base?: I): SetOrKeepBalance {
    return SetOrKeepBalance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetOrKeepBalance>, I>>(object: I): SetOrKeepBalance {
    const message = createBaseSetOrKeepBalance();
    message.type = object.type ?? 0;
    message.balance = object.balance ?? undefined;
    return message;
  },
};

function createBaseSetOrKeepBytecode(): SetOrKeepBytecode {
  return { type: 0, bytecode: undefined };
}

export const SetOrKeepBytecode = {
  encode(message: SetOrKeepBytecode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.bytecode !== undefined) {
      writer.uint32(18).bytes(message.bytecode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetOrKeepBytecode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetOrKeepBytecode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bytecode = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetOrKeepBytecode {
    return {
      type: isSet(object.type) ? setOrKeepTypeFromJSON(object.type) : 0,
      bytecode: isSet(object.bytecode) ? bytesFromBase64(object.bytecode) : undefined,
    };
  },

  toJSON(message: SetOrKeepBytecode): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = setOrKeepTypeToJSON(message.type));
    message.bytecode !== undefined &&
      (obj.bytecode = message.bytecode !== undefined ? base64FromBytes(message.bytecode) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetOrKeepBytecode>, I>>(base?: I): SetOrKeepBytecode {
    return SetOrKeepBytecode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetOrKeepBytecode>, I>>(object: I): SetOrKeepBytecode {
    const message = createBaseSetOrKeepBytecode();
    message.type = object.type ?? 0;
    message.bytecode = object.bytecode ?? undefined;
    return message;
  },
};

function createBaseSetOrDeleteDatastoreEntry(): SetOrDeleteDatastoreEntry {
  return { type: 0, datastoreEntry: undefined };
}

export const SetOrDeleteDatastoreEntry = {
  encode(message: SetOrDeleteDatastoreEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.datastoreEntry !== undefined) {
      BytesMapFieldEntry.encode(message.datastoreEntry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetOrDeleteDatastoreEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetOrDeleteDatastoreEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.datastoreEntry = BytesMapFieldEntry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetOrDeleteDatastoreEntry {
    return {
      type: isSet(object.type) ? setOrDeleteTypeFromJSON(object.type) : 0,
      datastoreEntry: isSet(object.datastoreEntry) ? BytesMapFieldEntry.fromJSON(object.datastoreEntry) : undefined,
    };
  },

  toJSON(message: SetOrDeleteDatastoreEntry): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = setOrDeleteTypeToJSON(message.type));
    message.datastoreEntry !== undefined &&
      (obj.datastoreEntry = message.datastoreEntry ? BytesMapFieldEntry.toJSON(message.datastoreEntry) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetOrDeleteDatastoreEntry>, I>>(base?: I): SetOrDeleteDatastoreEntry {
    return SetOrDeleteDatastoreEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetOrDeleteDatastoreEntry>, I>>(object: I): SetOrDeleteDatastoreEntry {
    const message = createBaseSetOrDeleteDatastoreEntry();
    message.type = object.type ?? 0;
    message.datastoreEntry = (object.datastoreEntry !== undefined && object.datastoreEntry !== null)
      ? BytesMapFieldEntry.fromPartial(object.datastoreEntry)
      : undefined;
    return message;
  },
};

function createBaseDenunciationIndex(): DenunciationIndex {
  return { blockHeader: undefined, endorsement: undefined };
}

export const DenunciationIndex = {
  encode(message: DenunciationIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeader !== undefined) {
      DenunciationBlockHeader.encode(message.blockHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.endorsement !== undefined) {
      DenunciationEndorsement.encode(message.endorsement, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenunciationIndex {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenunciationIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.blockHeader = DenunciationBlockHeader.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.endorsement = DenunciationEndorsement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenunciationIndex {
    return {
      blockHeader: isSet(object.blockHeader) ? DenunciationBlockHeader.fromJSON(object.blockHeader) : undefined,
      endorsement: isSet(object.endorsement) ? DenunciationEndorsement.fromJSON(object.endorsement) : undefined,
    };
  },

  toJSON(message: DenunciationIndex): unknown {
    const obj: any = {};
    message.blockHeader !== undefined &&
      (obj.blockHeader = message.blockHeader ? DenunciationBlockHeader.toJSON(message.blockHeader) : undefined);
    message.endorsement !== undefined &&
      (obj.endorsement = message.endorsement ? DenunciationEndorsement.toJSON(message.endorsement) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DenunciationIndex>, I>>(base?: I): DenunciationIndex {
    return DenunciationIndex.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DenunciationIndex>, I>>(object: I): DenunciationIndex {
    const message = createBaseDenunciationIndex();
    message.blockHeader = (object.blockHeader !== undefined && object.blockHeader !== null)
      ? DenunciationBlockHeader.fromPartial(object.blockHeader)
      : undefined;
    message.endorsement = (object.endorsement !== undefined && object.endorsement !== null)
      ? DenunciationEndorsement.fromPartial(object.endorsement)
      : undefined;
    return message;
  },
};

function createBaseDenunciationBlockHeader(): DenunciationBlockHeader {
  return { slot: undefined };
}

export const DenunciationBlockHeader = {
  encode(message: DenunciationBlockHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== undefined) {
      Slot.encode(message.slot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenunciationBlockHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenunciationBlockHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slot = Slot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenunciationBlockHeader {
    return { slot: isSet(object.slot) ? Slot.fromJSON(object.slot) : undefined };
  },

  toJSON(message: DenunciationBlockHeader): unknown {
    const obj: any = {};
    message.slot !== undefined && (obj.slot = message.slot ? Slot.toJSON(message.slot) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DenunciationBlockHeader>, I>>(base?: I): DenunciationBlockHeader {
    return DenunciationBlockHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DenunciationBlockHeader>, I>>(object: I): DenunciationBlockHeader {
    const message = createBaseDenunciationBlockHeader();
    message.slot = (object.slot !== undefined && object.slot !== null) ? Slot.fromPartial(object.slot) : undefined;
    return message;
  },
};

function createBaseDenunciationEndorsement(): DenunciationEndorsement {
  return { slot: undefined, index: 0 };
}

export const DenunciationEndorsement = {
  encode(message: DenunciationEndorsement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== undefined) {
      Slot.encode(message.slot, writer.uint32(10).fork()).ldelim();
    }
    if (message.index !== 0) {
      writer.uint32(21).fixed32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenunciationEndorsement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenunciationEndorsement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slot = Slot.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.index = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenunciationEndorsement {
    return {
      slot: isSet(object.slot) ? Slot.fromJSON(object.slot) : undefined,
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: DenunciationEndorsement): unknown {
    const obj: any = {};
    message.slot !== undefined && (obj.slot = message.slot ? Slot.toJSON(message.slot) : undefined);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  create<I extends Exact<DeepPartial<DenunciationEndorsement>, I>>(base?: I): DenunciationEndorsement {
    return DenunciationEndorsement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DenunciationEndorsement>, I>>(object: I): DenunciationEndorsement {
    const message = createBaseDenunciationEndorsement();
    message.slot = (object.slot !== undefined && object.slot !== null) ? Slot.fromPartial(object.slot) : undefined;
    message.index = object.index ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
