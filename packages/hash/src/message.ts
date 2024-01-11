import {keccak256} from "./crypto/keccak";
import {concat, toUtf8Bytes} from "./data";

const MessagePrefix: string = "\x19Ethereum Signed Message:\n";

export function hashMessage(message: Uint8Array | string): string {
  if (typeof (message) === "string") {
    message = toUtf8Bytes(message);
  }
  return keccak256(concat([
    toUtf8Bytes(MessagePrefix),
    toUtf8Bytes(String(message.length)),
    message
  ]));
}
