//=======================================================//
import makeWASocket from "./Socket/index.js";
import * as WAProto from "../WAProto/index.js";

// 🔥 normalize proto
const proto = WAProto.proto ?? WAProto;

export { proto };
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "./WAUSync/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./Types/index.js";
export * from "./WAM/index.js";
export { makeWASocket };

export default {
  proto,
  makeWASocket
};

export default baileys;

// 🔥 CommonJS compatibility
try {
  module.exports = {
    ...module.exports,
    proto: WAProto,
    makeWASocket,
    default: baileys
  };
} catch {}
//=======================================================//
