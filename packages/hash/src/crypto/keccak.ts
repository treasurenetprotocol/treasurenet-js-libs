import { keccak_256 } from "@noble/hashes/sha3";
import {BytesLike, getBytes, hexlify} from "../data";


let locked = false;

const _keccak256 = function(data: Uint8Array): Uint8Array {
  return keccak_256(data);
}

let __keccak256: (data: Uint8Array) => BytesLike = _keccak256;

export function keccak256(_data: BytesLike): string {
  const data = getBytes(_data, "data");
  return hexlify(__keccak256(data));
}
keccak256._ = _keccak256;
keccak256.lock = function(): void { locked = true; }
keccak256.register = function(func: (data: Uint8Array) => BytesLike) {
  if (locked) { throw new TypeError("keccak256 is locked"); }
  __keccak256 = func;
}
Object.freeze(keccak256);
