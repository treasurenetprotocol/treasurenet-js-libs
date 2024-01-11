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

export function hexMessage(message: string): string {
  // eslint-disable-next-line no-control-regex
  let strWithoutNullCharacter = message.replace(/^(?:\u0000)/, '');
  // eslint-disable-next-line no-control-regex
  strWithoutNullCharacter = strWithoutNullCharacter.replace(/(?:\u0000)$/, '');

  let hex: string = "";
  for (var i = 0; i < strWithoutNullCharacter.length; i++) {
    var code = strWithoutNullCharacter.charCodeAt(i);
    var n = code.toString(16);
    hex += n.length < 2 ? '0' + n : n;
  }

  return "0x" + hex;
}
