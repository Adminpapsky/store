import _checkPrivateRedeclaration from "./_check_private_redeclaration";

export default function _classPrivateFieldInit(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
