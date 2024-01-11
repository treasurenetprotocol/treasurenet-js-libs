type UnicodeNormalizationForm = "NFC" | "NFD" | "NFKC" | "NFKD";
type DataHexString = string;
export type BytesLike = DataHexString | Uint8Array;
const HexCharacters: string = "0123456789abcdef";

export function concat(datas: ReadonlyArray<BytesLike>): string {
  return "0x" + datas.map((d) => hexlify(d).substring(2)).join("");
}

export function toUtf8Bytes(str: string, form?: UnicodeNormalizationForm): Uint8Array {

  if (form != null) {
    //assertNormalize(form);
    str = str.normalize(form);
  }

  let result: Array<number> = [];
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);

    if (c < 0x80) {
      result.push(c);

    } else if (c < 0x800) {
      result.push((c >> 6) | 0xc0);
      result.push((c & 0x3f) | 0x80);

    } else if ((c & 0xfc00) == 0xd800) {
      i++;
      const c2 = str.charCodeAt(i);

      /*assertArgument(i < str.length && ((c2 & 0xfc00) === 0xdc00),
        "invalid surrogate pair", "str", str);*/

      // Surrogate Pair
      const pair = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
      result.push((pair >> 18) | 0xf0);
      result.push(((pair >> 12) & 0x3f) | 0x80);
      result.push(((pair >> 6) & 0x3f) | 0x80);
      result.push((pair & 0x3f) | 0x80);

    } else {
      result.push((c >> 12) | 0xe0);
      result.push(((c >> 6) & 0x3f) | 0x80);
      result.push((c & 0x3f) | 0x80);
    }
  }

  return new Uint8Array(result);
}

export function getBytes(value: BytesLike, name?: string): Uint8Array {
  return _getBytes(value, name, false);
}

export function hexlify(data: BytesLike): string {
  const bytes = getBytes(data);

  let result = "0x";
  for (let i = 0; i < bytes.length; i++) {
    const v = bytes[i];
    result += HexCharacters[(v & 0xf0) >> 4] + HexCharacters[v & 0x0f];
  }
  return result;
}

function _getBytes(value: BytesLike, name?: string, copy?: boolean): Uint8Array {
  if (value instanceof Uint8Array) {
    if (copy) { return new Uint8Array(value); }
    return value;
  }

  if (typeof(value) === "string" && value.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const result = new Uint8Array((value.length - 2) / 2);
    let offset = 2;
    for (let i = 0; i < result.length; i++) {
      result[i] = parseInt(value.substring(offset, offset + 2), 16);
      offset += 2;
    }
    return result;
  }

  /*assertArgument(false, "invalid BytesLike value", name || "value", value);*/
}
