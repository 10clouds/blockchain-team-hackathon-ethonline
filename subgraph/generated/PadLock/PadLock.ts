// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BreakupApproved extends ethereum.Event {
  get params(): BreakupApproved__Params {
    return new BreakupApproved__Params(this);
  }
}

export class BreakupApproved__Params {
  _event: BreakupApproved;

  constructor(event: BreakupApproved) {
    this._event = event;
  }

  get relationshipId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get initiator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approver(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class BreakupProposal extends ethereum.Event {
  get params(): BreakupProposal__Params {
    return new BreakupProposal__Params(this);
  }
}

export class BreakupProposal__Params {
  _event: BreakupProposal;

  constructor(event: BreakupProposal) {
    this._event = event;
  }

  get relationshipId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get initiator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get relationshipId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get depositor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RelationshipApproved extends ethereum.Event {
  get params(): RelationshipApproved__Params {
    return new RelationshipApproved__Params(this);
  }
}

export class RelationshipApproved__Params {
  _event: RelationshipApproved;

  constructor(event: RelationshipApproved) {
    this._event = event;
  }

  get relationshipId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get firstHalf(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get secondHalf(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get startedAt(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get NFTPadlock(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get NFTFraction(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class RelationshipEvent extends ethereum.Event {
  get params(): RelationshipEvent__Params {
    return new RelationshipEvent__Params(this);
  }
}

export class RelationshipEvent__Params {
  _event: RelationshipEvent;

  constructor(event: RelationshipEvent) {
    this._event = event;
  }

  get relationshipMemo(): string {
    return this._event.parameters[0].value.toString();
  }

  get ipfsURI(): string {
    return this._event.parameters[1].value.toString();
  }

  get lover(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get relationshipId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class RelationshipProposed extends ethereum.Event {
  get params(): RelationshipProposed__Params {
    return new RelationshipProposed__Params(this);
  }
}

export class RelationshipProposed__Params {
  _event: RelationshipProposed;

  constructor(event: RelationshipProposed) {
    this._event = event;
  }

  get relationshipId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get firstHalf(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get secondHalf(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PadLock__getRewardsDataResultRewardInfoStruct extends ethereum.Tuple {
  get rewardTokenSymbol(): string {
    return this[0].toString();
  }

  get rewardTokenAddress(): Address {
    return this[1].toAddress();
  }

  get rewardOracleAddress(): Address {
    return this[2].toAddress();
  }

  get emissionPerSecond(): BigInt {
    return this[3].toBigInt();
  }

  get incentivesLastUpdateTimestamp(): BigInt {
    return this[4].toBigInt();
  }

  get tokenIncentivesIndex(): BigInt {
    return this[5].toBigInt();
  }

  get emissionEndTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get rewardPriceFeed(): BigInt {
    return this[7].toBigInt();
  }

  get rewardTokenDecimals(): i32 {
    return this[8].toI32();
  }

  get precision(): i32 {
    return this[9].toI32();
  }

  get priceFeedDecimals(): i32 {
    return this[10].toI32();
  }
}

export class PadLock__idToRelationshipResultBreakupStruct extends ethereum.Tuple {
  get initiator(): Address {
    return this[0].toAddress();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }
}

export class PadLock__idToRelationshipResultAniversaryWithdrawStruct extends ethereum.Tuple {
  get firstHalfAgree(): boolean {
    return this[0].toBoolean();
  }

  get secondHalfAgree(): boolean {
    return this[1].toBoolean();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }
}

export class PadLock__idToRelationshipResult {
  value0: Bytes;
  value1: BigInt;
  value2: Address;
  value3: Address;
  value4: boolean;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: Address;
  value9: PadLock__idToRelationshipResultBreakupStruct;
  value10: PadLock__idToRelationshipResultAniversaryWithdrawStruct;

  constructor(
    value0: Bytes,
    value1: BigInt,
    value2: Address,
    value3: Address,
    value4: boolean,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: Address,
    value9: PadLock__idToRelationshipResultBreakupStruct,
    value10: PadLock__idToRelationshipResultAniversaryWithdrawStruct
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromTuple(this.value9));
    map.set("value10", ethereum.Value.fromTuple(this.value10));
    return map;
  }

  getId(): Bytes {
    return this.value0;
  }

  getStartedAt(): BigInt {
    return this.value1;
  }

  getFirstHalf(): Address {
    return this.value2;
  }

  getSecondHalf(): Address {
    return this.value3;
  }

  getEstablished(): boolean {
    return this.value4;
  }

  getNFTPadlock(): BigInt {
    return this.value5;
  }

  getNFTFraction(): BigInt {
    return this.value6;
  }

  getInitialFee(): BigInt {
    return this.value7;
  }

  getVault(): Address {
    return this.value8;
  }

  getBreakup(): PadLock__idToRelationshipResultBreakupStruct {
    return this.value9;
  }

  getAniversaryWithdraw(): PadLock__idToRelationshipResultAniversaryWithdrawStruct {
    return this.value10;
  }
}

export class PadLock extends ethereum.SmartContract {
  static bind(address: Address): PadLock {
    return new PadLock("PadLock", address);
  }

  erc1155(): Address {
    let result = super.call("erc1155", "erc1155():(address)", []);

    return result[0].toAddress();
  }

  try_erc1155(): ethereum.CallResult<Address> {
    let result = super.tryCall("erc1155", "erc1155():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  erc721(): Address {
    let result = super.call("erc721", "erc721():(address)", []);

    return result[0].toAddress();
  }

  try_erc721(): ethereum.CallResult<Address> {
    let result = super.tryCall("erc721", "erc721():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRewardsData(): Array<PadLock__getRewardsDataResultRewardInfoStruct> {
    let result = super.call(
      "getRewardsData",
      "getRewardsData():((string,address,address,uint256,uint256,uint256,uint256,int256,uint8,uint8,uint8)[])",
      []
    );

    return result[0].toTupleArray<
      PadLock__getRewardsDataResultRewardInfoStruct
    >();
  }

  try_getRewardsData(): ethereum.CallResult<
    Array<PadLock__getRewardsDataResultRewardInfoStruct>
  > {
    let result = super.tryCall(
      "getRewardsData",
      "getRewardsData():((string,address,address,uint256,uint256,uint256,uint256,int256,uint8,uint8,uint8)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<PadLock__getRewardsDataResultRewardInfoStruct>()
    );
  }

  idToRelationship(param0: Bytes): PadLock__idToRelationshipResult {
    let result = super.call(
      "idToRelationship",
      "idToRelationship(bytes20):(bytes20,uint256,address,address,bool,uint256,uint256,uint256,address,(address,uint256),(bool,bool,uint256))",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new PadLock__idToRelationshipResult(
      result[0].toBytes(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBoolean(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toAddress(),
      changetype<PadLock__idToRelationshipResultBreakupStruct>(
        result[9].toTuple()
      ),
      changetype<PadLock__idToRelationshipResultAniversaryWithdrawStruct>(
        result[10].toTuple()
      )
    );
  }

  try_idToRelationship(
    param0: Bytes
  ): ethereum.CallResult<PadLock__idToRelationshipResult> {
    let result = super.tryCall(
      "idToRelationship",
      "idToRelationship(bytes20):(bytes20,uint256,address,address,bool,uint256,uint256,uint256,address,(address,uint256),(bool,bool,uint256))",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PadLock__idToRelationshipResult(
        value[0].toBytes(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBoolean(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toAddress(),
        changetype<PadLock__idToRelationshipResultBreakupStruct>(
          value[9].toTuple()
        ),
        changetype<PadLock__idToRelationshipResultAniversaryWithdrawStruct>(
          value[10].toTuple()
        )
      )
    );
  }

  incentives(): Address {
    let result = super.call("incentives", "incentives():(address)", []);

    return result[0].toAddress();
  }

  try_incentives(): ethereum.CallResult<Address> {
    let result = super.tryCall("incentives", "incentives():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  loverToRelationshipId(param0: Address): Bytes {
    let result = super.call(
      "loverToRelationshipId",
      "loverToRelationshipId(address):(bytes20)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBytes();
  }

  try_loverToRelationshipId(param0: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "loverToRelationshipId",
      "loverToRelationshipId(address):(bytes20)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  minimalFee(): BigInt {
    let result = super.call("minimalFee", "minimalFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minimalFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minimalFee", "minimalFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  relationships(param0: BigInt): Bytes {
    let result = super.call(
      "relationships",
      "relationships(uint256):(bytes20)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBytes();
  }

  try_relationships(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "relationships",
      "relationships(uint256):(bytes20)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  vaultFactory(): Address {
    let result = super.call("vaultFactory", "vaultFactory():(address)", []);

    return result[0].toAddress();
  }

  try_vaultFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall("vaultFactory", "vaultFactory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  weth(): Address {
    let result = super.call("weth", "weth():(address)", []);

    return result[0].toAddress();
  }

  try_weth(): ethereum.CallResult<Address> {
    let result = super.tryCall("weth", "weth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _weth(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _incentives(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _minimalFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _poolAddressProvider(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _rewardsController(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _uiIncentiveDataProvider(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddRelationshipEventCall extends ethereum.Call {
  get inputs(): AddRelationshipEventCall__Inputs {
    return new AddRelationshipEventCall__Inputs(this);
  }

  get outputs(): AddRelationshipEventCall__Outputs {
    return new AddRelationshipEventCall__Outputs(this);
  }
}

export class AddRelationshipEventCall__Inputs {
  _call: AddRelationshipEventCall;

  constructor(call: AddRelationshipEventCall) {
    this._call = call;
  }

  get _relationshipMemo(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _ipfsURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AddRelationshipEventCall__Outputs {
  _call: AddRelationshipEventCall;

  constructor(call: AddRelationshipEventCall) {
    this._call = call;
  }
}

export class ApproveBreakUpCall extends ethereum.Call {
  get inputs(): ApproveBreakUpCall__Inputs {
    return new ApproveBreakUpCall__Inputs(this);
  }

  get outputs(): ApproveBreakUpCall__Outputs {
    return new ApproveBreakUpCall__Outputs(this);
  }
}

export class ApproveBreakUpCall__Inputs {
  _call: ApproveBreakUpCall;

  constructor(call: ApproveBreakUpCall) {
    this._call = call;
  }
}

export class ApproveBreakUpCall__Outputs {
  _call: ApproveBreakUpCall;

  constructor(call: ApproveBreakUpCall) {
    this._call = call;
  }
}

export class ApproveRelationshipCall extends ethereum.Call {
  get inputs(): ApproveRelationshipCall__Inputs {
    return new ApproveRelationshipCall__Inputs(this);
  }

  get outputs(): ApproveRelationshipCall__Outputs {
    return new ApproveRelationshipCall__Outputs(this);
  }
}

export class ApproveRelationshipCall__Inputs {
  _call: ApproveRelationshipCall;

  constructor(call: ApproveRelationshipCall) {
    this._call = call;
  }

  get _relationshipId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ApproveRelationshipCall__Outputs {
  _call: ApproveRelationshipCall;

  constructor(call: ApproveRelationshipCall) {
    this._call = call;
  }
}

export class ApproveWithdrawCall extends ethereum.Call {
  get inputs(): ApproveWithdrawCall__Inputs {
    return new ApproveWithdrawCall__Inputs(this);
  }

  get outputs(): ApproveWithdrawCall__Outputs {
    return new ApproveWithdrawCall__Outputs(this);
  }
}

export class ApproveWithdrawCall__Inputs {
  _call: ApproveWithdrawCall;

  constructor(call: ApproveWithdrawCall) {
    this._call = call;
  }
}

export class ApproveWithdrawCall__Outputs {
  _call: ApproveWithdrawCall;

  constructor(call: ApproveWithdrawCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ProposeBreakUpCall extends ethereum.Call {
  get inputs(): ProposeBreakUpCall__Inputs {
    return new ProposeBreakUpCall__Inputs(this);
  }

  get outputs(): ProposeBreakUpCall__Outputs {
    return new ProposeBreakUpCall__Outputs(this);
  }
}

export class ProposeBreakUpCall__Inputs {
  _call: ProposeBreakUpCall;

  constructor(call: ProposeBreakUpCall) {
    this._call = call;
  }
}

export class ProposeBreakUpCall__Outputs {
  _call: ProposeBreakUpCall;

  constructor(call: ProposeBreakUpCall) {
    this._call = call;
  }
}

export class ProposeRelationshipCall extends ethereum.Call {
  get inputs(): ProposeRelationshipCall__Inputs {
    return new ProposeRelationshipCall__Inputs(this);
  }

  get outputs(): ProposeRelationshipCall__Outputs {
    return new ProposeRelationshipCall__Outputs(this);
  }
}

export class ProposeRelationshipCall__Inputs {
  _call: ProposeRelationshipCall;

  constructor(call: ProposeRelationshipCall) {
    this._call = call;
  }

  get _secondHalf(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _relationshipFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ProposeRelationshipCall__Outputs {
  _call: ProposeRelationshipCall;

  constructor(call: ProposeRelationshipCall) {
    this._call = call;
  }
}

export class ProposeWithdrawCall extends ethereum.Call {
  get inputs(): ProposeWithdrawCall__Inputs {
    return new ProposeWithdrawCall__Inputs(this);
  }

  get outputs(): ProposeWithdrawCall__Outputs {
    return new ProposeWithdrawCall__Outputs(this);
  }
}

export class ProposeWithdrawCall__Inputs {
  _call: ProposeWithdrawCall;

  constructor(call: ProposeWithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ProposeWithdrawCall__Outputs {
  _call: ProposeWithdrawCall;

  constructor(call: ProposeWithdrawCall) {
    this._call = call;
  }
}

export class SlashBrakeUpCall extends ethereum.Call {
  get inputs(): SlashBrakeUpCall__Inputs {
    return new SlashBrakeUpCall__Inputs(this);
  }

  get outputs(): SlashBrakeUpCall__Outputs {
    return new SlashBrakeUpCall__Outputs(this);
  }
}

export class SlashBrakeUpCall__Inputs {
  _call: SlashBrakeUpCall;

  constructor(call: SlashBrakeUpCall) {
    this._call = call;
  }
}

export class SlashBrakeUpCall__Outputs {
  _call: SlashBrakeUpCall;

  constructor(call: SlashBrakeUpCall) {
    this._call = call;
  }
}
