// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Post must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get postId(): BigInt {
    let value = this.get("postId");
    return value!.toBigInt();
  }

  set postId(value: BigInt) {
    this.set("postId", Value.fromBigInt(value));
  }

  get deadline(): BigInt {
    let value = this.get("deadline");
    return value!.toBigInt();
  }

  set deadline(value: BigInt) {
    this.set("deadline", Value.fromBigInt(value));
  }
}

export class Comment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Comment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Comment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Comment", id.toString(), this);
    }
  }

  static load(id: string): Comment | null {
    return changetype<Comment | null>(store.get("Comment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get commenter(): Bytes {
    let value = this.get("commenter");
    return value!.toBytes();
  }

  set commenter(value: Bytes) {
    this.set("commenter", Value.fromBytes(value));
  }

  get postId(): BigInt {
    let value = this.get("postId");
    return value!.toBigInt();
  }

  set postId(value: BigInt) {
    this.set("postId", Value.fromBigInt(value));
  }

  get commentId(): BigInt {
    let value = this.get("commentId");
    return value!.toBigInt();
  }

  set commentId(value: BigInt) {
    this.set("commentId", Value.fromBigInt(value));
  }
}

export class Like extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Like entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Like must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Like", id.toString(), this);
    }
  }

  static load(id: string): Like | null {
    return changetype<Like | null>(store.get("Like", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get postId(): BigInt {
    let value = this.get("postId");
    return value!.toBigInt();
  }

  set postId(value: BigInt) {
    this.set("postId", Value.fromBigInt(value));
  }

  get commentId(): BigInt {
    let value = this.get("commentId");
    return value!.toBigInt();
  }

  set commentId(value: BigInt) {
    this.set("commentId", Value.fromBigInt(value));
  }
}

export class Tipped extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Tipped entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Tipped must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Tipped", id.toString(), this);
    }
  }

  static load(id: string): Tipped | null {
    return changetype<Tipped | null>(store.get("Tipped", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tipper(): Bytes {
    let value = this.get("tipper");
    return value!.toBytes();
  }

  set tipper(value: Bytes) {
    this.set("tipper", Value.fromBytes(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get tip(): BigInt {
    let value = this.get("tip");
    return value!.toBigInt();
  }

  set tip(value: BigInt) {
    this.set("tip", Value.fromBigInt(value));
  }
}