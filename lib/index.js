//=======================================================//
import makeWASocket from "./Socket/index.js";
import * as WAProto from "../WAProto/index.js";
//=======================================================//
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "../WAProto/index.js";
export * from "./WAUSync/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./Types/index.js";
export * from "./WAM/index.js";
//=======================================================//
export { makeWASocket };

// 🔥 legacy named export
export const proto = WAProto;

// 🔥 legacy default export (ESM)
const baileys = {
  proto: WAProto,
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
