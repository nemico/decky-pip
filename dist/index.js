var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$5(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$5;

var eq$4 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$4(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var ListCache$3 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$3;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();

var _root = root$8;

var root$7 = _root;

/** Built-in value references. */
var Symbol$4 = root$7.Symbol;

var _Symbol = Symbol$4;

var Symbol$3 = _Symbol;

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$e.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$e.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$d = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$d.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$2 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$5(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$5;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$7;

var baseGetTag$4 = _baseGetTag,
    isObject$6 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$5(value) {
  if (!isObject$6(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$4(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$5;

var root$6 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$6['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$4 = isFunction_1,
    isMasked = _isMasked,
    isObject$5 = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$c = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$5(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$4(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$7;

var getNative$6 = _getNative,
    root$5 = _root;

/* Built-in method references that are verified to be native. */
var Map$3 = getNative$6(root$5, 'Map');

var _Map = Map$3;

var getNative$5 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$5(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$9.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$8.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$2 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache$2),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$2(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype['delete'] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;

var _MapCache = MapCache$2;

var ListCache$1 = _ListCache,
    Map$1 = _Map,
    MapCache$1 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$2.prototype.clear = stackClear;
Stack$2.prototype['delete'] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;

var _Stack = Stack$2;

var getNative$4 = _getNative;

var defineProperty$2 = (function() {
  try {
    var func = getNative$4(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$1 = defineProperty$2;

var defineProperty$1 = _defineProperty$1;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$3(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$3;

var baseAssignValue$2 = _baseAssignValue,
    eq$3 = eq_1;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue$2(object, key, value) {
  if ((value !== undefined && !eq$3(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$2(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue$2;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var _cloneBuffer = {exports: {}};

(function (module, exports) {
	var root = _root;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer; 
} (_cloneBuffer, _cloneBuffer.exports));

var _cloneBufferExports = _cloneBuffer.exports;

var root$4 = _root;

/** Built-in value references. */
var Uint8Array$2 = root$4.Uint8Array;

var _Uint8Array = Uint8Array$2;

var Uint8Array$1 = _Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$1;

var cloneArrayBuffer = _cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

var isObject$4 = isObject_1;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate$1 = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$4(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$2;

var overArg$1 = _overArg;

/** Built-in value references. */
var getPrototype$2 = overArg$1(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$2;

/** Used for built-in method references. */

var objectProto$9 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$3(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

  return value === proto;
}

var _isPrototype = isPrototype$3;

var baseCreate = _baseCreate,
    getPrototype$1 = _getPrototype,
    isPrototype$2 = _isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$1(object) {
  return (typeof object.constructor == 'function' && !isPrototype$2(object))
    ? baseCreate(getPrototype$1(object))
    : {};
}

var _initCloneObject = initCloneObject$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$6(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$6;

var baseGetTag$3 = _baseGetTag,
    isObjectLike$5 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$5(value) && baseGetTag$3(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$4 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$4(value) && hasOwnProperty$7.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments$2;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$4 = Array.isArray;

var isArray_1 = isArray$4;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$2(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$2;

var isFunction$3 = isFunction_1,
    isLength$1 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$4(value) {
  return value != null && isLength$1(value.length) && !isFunction$3(value);
}

var isArrayLike_1 = isArrayLike$4;

var isArrayLike$3 = isArrayLike_1,
    isObjectLike$3 = isObjectLike_1;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$3(value) && isArrayLike$3(value);
}

var isArrayLikeObject_1 = isArrayLikeObject$1;

var isBuffer$3 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer; 
} (isBuffer$3, isBuffer$3.exports));

var isBufferExports = isBuffer$3.exports;

var baseGetTag$2 = _baseGetTag,
    getPrototype = _getPrototype,
    isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$1(value) {
  if (!isObjectLike$2(value) || baseGetTag$2(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$6.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject$1;

var baseGetTag$1 = _baseGetTag,
    isLength = isLength_1,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag = '[object Function]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;

var _nodeUtil = {exports: {}};

(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil; 
} (_nodeUtil, _nodeUtil.exports));

var _nodeUtilExports = _nodeUtil.exports;

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$3 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$3;

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function safeGet$2(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet$2;

var baseAssignValue$1 = _baseAssignValue,
    eq$2 = eq_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq$2(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

var _assignValue = assignValue$1;

var assignValue = _assignValue,
    baseAssignValue = _baseAssignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$2;

var baseTimes = _baseTimes,
    isArguments$1 = isArguments_1,
    isArray$3 = isArray_1,
    isBuffer$2 = isBufferExports,
    isIndex$1 = _isIndex,
    isTypedArray$2 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$3(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$2(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$2(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex$1(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$2;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn$1;

var isObject$3 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike$2 = isArrayLike_1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$2(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
}

var keysIn_1 = keysIn$2;

var copyObject = _copyObject,
    keysIn$1 = keysIn_1;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject$1(value) {
  return copyObject(value, keysIn$1(value));
}

var toPlainObject_1 = toPlainObject$1;

var assignMergeValue$1 = _assignMergeValue,
    cloneBuffer = _cloneBufferExports,
    cloneTypedArray = _cloneTypedArray,
    copyArray = _copyArray,
    initCloneObject = _initCloneObject,
    isArguments = isArguments_1,
    isArray$2 = isArray_1,
    isArrayLikeObject = isArrayLikeObject_1,
    isBuffer$1 = isBufferExports,
    isFunction$2 = isFunction_1,
    isObject$2 = isObject_1,
    isPlainObject = isPlainObject_1,
    isTypedArray$1 = isTypedArray_1,
    safeGet$1 = _safeGet,
    toPlainObject = toPlainObject_1;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key),
      srcValue = safeGet$1(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray$2(srcValue),
        isBuff = !isArr && isBuffer$1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$2(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject$2(objValue) || isFunction$2(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep$1;

var Stack$1 = _Stack,
    assignMergeValue = _assignMergeValue,
    baseFor = _baseFor,
    baseMergeDeep = _baseMergeDeep,
    isObject$1 = isObject_1,
    keysIn = keysIn_1,
    safeGet = _safeGet;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge$1(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack$1);
    if (isObject$1(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

var _baseMerge = baseMerge$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity$2(value) {
  return value;
}

var identity_1 = identity$2;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;

var apply = _apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

var _overRest = overRest$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;

var constant = constant_1,
    defineProperty = _defineProperty$1,
    identity$1 = identity_1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;

var baseSetToString = _baseSetToString,
    shortOut = _shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut(baseSetToString);

var _setToString = setToString$1;

var identity = identity_1,
    overRest = _overRest,
    setToString = _setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

var _baseRest = baseRest$1;

var eq$1 = eq_1,
    isArrayLike$1 = isArrayLike_1,
    isIndex = _isIndex,
    isObject = isObject_1;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall$1(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$1(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq$1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall$1;

var baseRest = _baseRest,
    isIterateeCall = _isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner$1(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner$1;

var baseMerge = _baseMerge,
    createAssigner = _createAssigner;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

var merge$1 = /*@__PURE__*/getDefaultExportFromCjs(merge_1);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/SP_REACT.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/SP_REACT.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/SP_REACT.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/SP_REACT.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaEdit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},"child":[]}]})(props);
}function FaTv (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},"child":[]}]})(props);
}

/**
 * {:TSDOC_TYPE_DESC_STATE_CHANGE_EVENT_TYPE:}
 * @see -{:DOCS_API_CORE_URL:}/StateChangeEventType
 * @public
 */
var StateChangeEventType;
(function (StateChangeEventType) {
    /**
     * {:DESC_STATE_CHANGE_EVENT_TYPE_SET:}
     */
    StateChangeEventType[StateChangeEventType["SET"] = 1] = "SET";
    /**
     * {:DESC_STATE_CHANGE_EVENT_TYPE_RESET:}
     */
    StateChangeEventType[StateChangeEventType["RESET"] = 2] = "RESET";
    /**
     * {:DESC_STATE_CHANGE_EVENT_TYPE_INIT:}
     */
    StateChangeEventType[StateChangeEventType["INIT"] = 3] = "INIT";
})(StateChangeEventType || (StateChangeEventType = {}));

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function isFunction$1(value) {
    return typeof value === 'function';
}

let counter = 0;
function getAutomaticName() {
    return `UnnamedStateManager_${String(++counter).padStart(3, '0')}`;
}

/**
 * Creates a Watcher.
 * @example
 * const watcher = new Watcher()
 * const unwatch = watcher.M$watch(() => { ... })
 * watcher.M$refresh(...) // Arguments can be passed
 * unwatch()
 */
class Watcher {
    constructor() {
        this.M$isDisposed = false;
        this.M$watcherCollection = {};
        this.M$incrementalWatchId = 0;
        /**
         * Accepts a callback and start watching for changes. The callback will be
         * invoked whenever a refresh is triggered.
         */
        this.M$watch = (callback) => {
            const newId = ++this.M$incrementalWatchId;
            this.M$watcherCollection[newId] = callback;
            return () => { delete this.M$watcherCollection[newId]; };
        };
        /**
         * Triggers a refresh.
         */
        this.M$refresh = (...args) => {
            if (this.M$isDisposed) {
                return;
            } // Early exit
            const callbackStack = Object.values(this.M$watcherCollection);
            for (let i = 0; i < callbackStack.length; i++) {
                callbackStack[i](...args);
            }
        };
        /**
         * Forcefully remove all watchers.
         */
        this.M$unwatchAll = () => {
            this.M$watcherCollection = {};
        };
        /**
         * Removes all watchers and prevent new ones from being added.
         */
        this.M$dispose = () => {
            this.M$isDisposed = true;
            this.M$unwatchAll();
        };
    }
}

/**
 * Unique runtime identifier for scoped State Managers.
 */
let scopeIdCounter = 0;
/**
 * @public
 */
class SimpleStateManager {
    /**
     * {:TSDOC_DESC_SIMPLE_STATE_MANAGER:}
     * @param defaultState - {:COMMON_DESC_DEFAULT_STATE:}
     * @param options - {:TSDOC_PARAM_DESC_STATE_MANAGER_OPTIONS_GENERAL:}
     * @see -{:DOCS_API_CORE_URL:}/SimpleStateManager
     */
    constructor(defaultState, options = {}) {
        this.type = 'SimpleStateManager';
        /**
         * @internal
         */
        this.M$watcher = new Watcher();
        const { clientOnly, name, scope } = options;
        this.get = this.get.bind(this);
        this.set = this.set.bind(this);
        this.reset = this.reset.bind(this);
        this.watch = this.watch.bind(this);
        this.unwatchAll = this.unwatchAll.bind(this);
        this.wait = this.wait.bind(this);
        this.dispose = this.dispose.bind(this);
        this.defaultState = defaultState;
        this.M$internalState = this.defaultState;
        this.name = (name && name !== '') ? name : getAutomaticName();
        this.clientOnly = clientOnly ?? false;
        this.scopeId = scope?.scopeId ?? ++scopeIdCounter;
    }
    /**
     * {:TSDOC_METHOD_DESC_GET:}
     * @see -{:DOCS_API_CORE_URL:}/SimpleStateManager#get
     * @returns -{:RETURN_DESC_GET:}
     */
    get() {
        return this.M$internalState;
    }
    set(newStateOrFn) {
        this.M$internalState = isFunction$1(newStateOrFn)
            ? newStateOrFn(this.M$internalState, this.defaultState)
            : newStateOrFn;
        this.M$watcher.M$refresh(this.M$internalState, StateChangeEventType.SET);
    }
    /**
     * {:TSDOC_METHOD_DESC_RESET:}
     * @see -{:DOCS_API_CORE_URL:}/SimpleStateManager#reset
     * @returns -{:RETURN_DESC_RESET:}
     */
    reset() {
        this.M$internalState = this.defaultState;
        this.M$watcher.M$refresh(this.M$internalState, StateChangeEventType.RESET);
    }
    /**
     * {:TSDOC_METHOD_DESC_WATCH:}
     * @param callback - {:TSDOC_PARAM_DESC_WATCH_CALLBACK:}
     * @see -{:DOCS_API_CORE_URL:}/SimpleStateManager#watch
     * @returns -{:RETURN_DESC_WATCH:}
     */
    watch(callback) {
        return this.M$watcher.M$watch(callback);
    }
    /**
     * {:TSDOC_METHOD_DESC_UNWATCH_ALL:}
     * @see -{:DOCS_API_CORE_URL:}/SimpleStateManager#unwatchAll
     * @returns -{:RETURN_DESC_UNWATCH_ALL:}
     */
    unwatchAll() {
        this.M$watcher.M$unwatchAll();
    }
    wait(valueOrEvaluator) {
        const fulfillsCondition = ($state, $eventType) => isFunction$1(valueOrEvaluator)
            ? valueOrEvaluator($state, this.defaultState, $eventType)
            : Object.is(valueOrEvaluator, $state);
        if (fulfillsCondition(this.M$internalState, null)) {
            return Promise.resolve(this.M$internalState);
        }
        else {
            return new Promise((resolve) => {
                const unwatch = this.M$watcher.M$watch((state, eventType) => {
                    if (fulfillsCondition(state, eventType)) {
                        unwatch();
                        resolve(state);
                    }
                });
            });
        }
    }
    /**
     * {:TSDOC_METHOD_DESC_DISPOSE:}
     * @see -{:DOCS_API_CORE_URL:}/SimpleStateManager#dispose
     * @returns -{:RETURN_DESC_DISPOSE:}
     */
    dispose() {
        this.M$watcher.M$dispose();
    }
}

/**
 * {:TSDOC_DESC_OPTIONS_VISIBILITY_DETAILED:}
 * @see -{:DOCS_API_CORE_URL:}/StateManagerVisibility
 * @public
 */
var StateManagerVisibility;
(function (StateManagerVisibility) {
    /**
     * {:DESC_STATE_MANAGER_VISIBILITY_ENVIRONMENT:}
     */
    StateManagerVisibility[StateManagerVisibility["ENVIRONMENT"] = 0] = "ENVIRONMENT";
    /**
     * {:DESC_STATE_MANAGER_VISIBILITY_EXPOSED:}
     */
    StateManagerVisibility[StateManagerVisibility["EXPOSED"] = 1] = "EXPOSED";
    /**
     * {:DESC_STATE_MANAGER_VISIBILITY_HIDDEN:}
     */
    StateManagerVisibility[StateManagerVisibility["HIDDEN"] = 2] = "HIDDEN";
})(StateManagerVisibility || (StateManagerVisibility = {}));
/**
 * @public
 */
class StateManager extends SimpleStateManager {
    /**
     * {:TSDOC_DESC_STATE_MANAGER:}
     * @param defaultState - {:COMMON_DESC_DEFAULT_STATE:}
     * @param options - {:TSDOC_PARAM_DESC_STATE_MANAGER_OPTIONS_GENERAL:}
     * @see -{:DOCS_API_CORE_URL:}/StateManager
     */
    constructor(defaultState, options = {}) {
        const { lifecycle, suspense, visibility, ...otherOptions } = options;
        super(defaultState, otherOptions);
        // @ts-expect-error Forceful override
        // This allows TS to show an error when `useSimpleStateValue` with any
        // State Manager type other than `SimpleStateManager`.
        this.type = 'StateManager';
        /**
         * @internal
         */
        this.M$mutationQueue = [];
        /**
         * @internal
         */
        this.M$internalQueue = (newStateOrFn, eventType) => {
            if (eventType !== StateChangeEventType.INIT && this.isInitializing.get()) {
                return; // Early exit
            }
            const mutationQueueIsEmptyAtInvocationTime = this.M$mutationQueue.length <= 0;
            this.M$mutationQueue.push(() => {
                const previousState = this.M$internalState;
                this.M$internalState = isFunction$1(newStateOrFn)
                    ? newStateOrFn(this.M$internalState, this.defaultState)
                    : newStateOrFn;
                this.M$watcher.M$refresh(this.M$internalState, eventType);
                // #region Post-handling: lifecycle hooks
                if (eventType === StateChangeEventType.SET) {
                    if (this.M$lifecycle.didSet) {
                        this.M$lifecycle.didSet({
                            state: this.M$internalState,
                            defaultState: this.defaultState,
                            previousState,
                        });
                    }
                }
                else if (eventType === StateChangeEventType.RESET) {
                    if (this.M$lifecycle.didReset) {
                        this.M$lifecycle.didReset();
                    }
                }
                // #endregion Post-handling: lifecycle hooks
            });
            if (mutationQueueIsEmptyAtInvocationTime) {
                while (this.M$mutationQueue.length > 0) {
                    // We need to preserve the callback in the queue until it has finished
                    // executing so that it becomes possible to check if there are any
                    // pending callbacks when we need to add new ones to the queue.
                    this.M$mutationQueue[0]();
                    this.M$mutationQueue.shift();
                }
            }
        };
        this.isInitializing = new SimpleStateManager(false, {
            name: `${this.name} (isInitializing)`,
        });
        this.suspense = suspense ?? false;
        this.visibility = visibility ?? StateManagerVisibility.ENVIRONMENT;
        this.M$lifecycle = { ...lifecycle };
        this.init = this.init.bind(this);
        this.reinitialize = this.reinitialize.bind(this);
        if (this.M$lifecycle.init) {
            this.init(this.M$lifecycle.init);
        }
    }
    /**
     * {:TSDOC_METHOD_DESC_INIT:}
     * @param initFn - {:TSDOC_PARAM_DESC_INIT_FN:}
     * @see -{:DOCS_API_CORE_URL:}/StateManager#init
     * @returns -{:RETURN_DESC_INIT:}
     */
    async init(initFn) {
        if (this.isInitializing.get()) ;
        let effectiveCommitStrategy;
        this.isInitializing.set(true);
        await initFn({
            currentState: this.M$internalState,
            defaultState: this.defaultState,
            commitNoop: () => {
                if (effectiveCommitStrategy) {
                    return; // Early exit
                }
                this.isInitializing.set(false);
                effectiveCommitStrategy = 'commitNoop';
            },
            commit: (state) => {
                if (effectiveCommitStrategy) {
                    return; // Early exit
                }
                this.M$internalQueue(state, StateChangeEventType.INIT);
                this.isInitializing.set(false);
                effectiveCommitStrategy = 'commit';
            },
        });
        await this.isInitializing.wait(false);
    }
    /**
     * {:TSDOC_METHOD_DESC_REINITIALIZE:}
     * @see -{:DOCS_API_CORE_URL:}/StateManager#reinitialize
     * @returns -{:RETURN_DESC_REINITIALIZE:}
     */
    async reinitialize() {
        if (this.M$lifecycle.init) {
            await this.init(this.M$lifecycle.init);
        }
    }
    set(newStateOrFn) {
        this.M$internalQueue(newStateOrFn, StateChangeEventType.SET);
    }
    /**
     * {:TSDOC_METHOD_DESC_RESET:}
     * @see -{:DOCS_API_CORE_URL:}/StateManager#reset
     * @returns -{:RETURN_DESC_RESET:}
     */
    reset() {
        this.M$internalQueue(this.defaultState, StateChangeEventType.RESET);
    }
    // NOTE: `wait` method is not implemented here but it seems like TS docs will
    // fallback to the one from parent class, but we really don't need that extra
    // layer of complexity of creating a wrapper function around the parent class
    // method... :facepalm:
    /**
     * {:TSDOC_METHOD_DESC_DISPOSE:}
     * @see -{:DOCS_API_CORE_URL:}/StateManager#dispose
     * @returns -{:RETURN_DESC_DISPOSE:}
     */
    dispose() {
        this.isInitializing.dispose();
        super.dispose();
    }
}

/**
 * {:TSDOC_DESC_ENUM_BUILD_TYPE:}
 * @see -{:DOCS_API_MISC_URL:}/BuildType
 * @public
 */
var BuildType$1;
(function (BuildType) {
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_CJS:}
     */
    BuildType["CJS"] = "CJS";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_ES:}
     */
    BuildType["ES"] = "ES";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_MJS:}
     */
    BuildType["MJS"] = "MJS";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_UMD:}
     */
    BuildType["UMD"] = "UMD";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_UMD_MIN:}
     */
    BuildType["UMD_MIN"] = "UMD_MIN";
})(BuildType$1 || (BuildType$1 = {}));

// Decky Loader will pass this api in, it's versioned to allow for backwards compatibility.
// @ts-ignore

// Prevents it from being duplicated in output.
const manifest = {"name":"Picture in Picture","author":"nemico (fork of Ross Squires)","flags":["no_python"],"api_version":1,"version":"1.0.5","publish":{"tags":["web","video","pip","movies","tv"],"description":"Watch your favorite stream while you game! (forked, JS-only)","image":"https://raw.githubusercontent.com/nemico/decky-pip/main/picture.jpg","note":"Original: rossimo/decky-pip"}};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
// Initialize
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
// Version 1 throws on version mismatch so we have to account for that here.
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
const routerHook = api.routerHook;
const definePlugin = (fn) => {
    return (...args) => {
        // TODO: Maybe wrap this
        return fn(...args);
    };
};

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache,
    arraySome = _arraySome,
    cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var Symbol$1 = _Symbol,
    Uint8Array = _Uint8Array,
    eq = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;

var arrayPush = _arrayPush,
    isArray$1 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter = _arrayFilter,
    stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$1;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var getNative$3 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$3(root$3, 'DataView');

var _DataView = DataView$1;

var getNative$2 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$1(root$1, 'Set');

var _Set = Set$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$2 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$2;

var DataView = _DataView,
    Map = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap$1 = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap$1);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag$1(new Map) != mapTag) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag) ||
    (WeakMap$1 && getTag$1(new WeakMap$1) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

var Stack = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray = isArray_1,
    isBuffer = isBufferExports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
}

var _baseIsEqual = baseIsEqual$1;

var baseIsEqual = _baseIsEqual;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

var isEqual$1 = /*@__PURE__*/getDefaultExportFromCjs(isEqual_1);

SP_REACT.createContext({});

const $$INTERNALS = {};

/**
 * {:TSDOC_DESC_ENUM_BUILD_TYPE:}
 * @see -{:DOCS_API_MISC_URL:}/BuildType
 * @public
 */
var BuildType;
(function (BuildType) {
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_CJS:}
     */
    BuildType["CJS"] = "CJS";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_ES:}
     */
    BuildType["ES"] = "ES";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_MJS:}
     */
    BuildType["MJS"] = "MJS";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_UMD:}
     */
    BuildType["UMD"] = "UMD";
    /**
     * {:TSDOC_DESC_ENUM_BUILD_TYPE_UMD_MIN:}
     */
    BuildType["UMD_MIN"] = "UMD_MIN";
})(BuildType || (BuildType = {}));

/**
 * This allows us to control the behavior of displaying the debug name in the
 * future. For example, displaying the name based on certain conditions.
 * But for now, this will do.
 */
function useDebugName(stateManager) {
    SP_REACT.useDebugValue(stateManager?.['name']);
}
function useInspectableValue(visibility, valueToShow) {
    SP_REACT.useDebugValue(evaluateDebugValueVisibility(visibility)
        ? valueToShow.get($$INTERNALS)
        : undefined);
}
/**
 * @returns `true` if visible, otherwise `false`.
 */
function evaluateDebugValueVisibility(visibility) {
    if (visibility) {
        return visibility === StateManagerVisibility.EXPOSED;
    }
    else {
        return "production" !== 'production';
    }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFn = () => { };
const emptyWatcher = () => emptyFn;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function isFunction(value) {
    return typeof value === 'function';
}

const MockInitState = new SimpleStateManager(false);
function useSuspenseWaiter(stateManager) {
    // SimpleStateManager does not have this property.
    // NOTE: Unable to use `instanceof` to check because for UMD builds somehow,
    // it will always be `false`.
    const isInitializingState = stateManager.isInitializing ?? MockInitState;
    const isInitializing = SP_REACT.useSyncExternalStore(isInitializingState.watch, isInitializingState.get, isInitializingState.get);
    if (stateManager.suspense && isInitializing) {
        // A function is returned and invoked immediately
        createSuspenseWaiter(isInitializingState.wait(false))();
    }
}
// Modified based from ovieokeh's `wrapPromise` method. Reference:
// https://github.com/ovieokeh/suspense-data-fetching/blob/master/lib/api/wrapPromise.js
var SuspenseStatus;
(function (SuspenseStatus) {
    /** Success */ SuspenseStatus[SuspenseStatus["S"] = 0] = "S";
    /** Pending */ SuspenseStatus[SuspenseStatus["P"] = 1] = "P";
    /**   Error */ SuspenseStatus[SuspenseStatus["E"] = 2] = "E";
})(SuspenseStatus || (SuspenseStatus = {}));
function createSuspenseWaiter(promise) {
    let status = SuspenseStatus.P;
    let res = null;
    const suspender = promise
        .then((r) => {
        status = SuspenseStatus.S;
        res = r;
    })
        .catch((e) => {
        status = SuspenseStatus.E;
        res = e;
    });
    // Throwing must be done in a callback so that it is not run in the same 'tick'
    // Otherwise, status will always be pending
    return () => {
        switch (status) {
            case SuspenseStatus.P: throw suspender;
            case SuspenseStatus.E: throw res;
        }
    };
}

function useStateValue(stateManager, selector = null, ...optionalArgs) {
    useSuspenseWaiter(stateManager);
    useDebugName(stateManager);
    let active;
    let isEqual;
    if (optionalArgs.length >= 2) {
        isEqual = optionalArgs[0] ?? Object.is;
        active = optionalArgs[1] ?? false;
    }
    else {
        if (isFunction(optionalArgs[0])) {
            isEqual = optionalArgs[0];
            active = true;
        }
        else {
            isEqual = Object.is;
            active = optionalArgs[0] ?? true;
        }
    }
    // TOFIX: Remove `| null` After React 19 - Cannot assign to 'current' because it is a read-only property.ts(2540)
    const selectorRef = SP_REACT.useRef(null);
    selectorRef.current = selector;
    // TOFIX: Remove `| null` After React 19 - Cannot assign to 'current' because it is a read-only property.ts(2540)
    const isEqualRef = SP_REACT.useRef(null);
    isEqualRef.current = isEqual;
    const selectValue = SP_REACT.useCallback(() => {
        const fullStateSnapshot = stateManager.get(1);
        if (selectorRef.current) {
            return selectorRef.current(fullStateSnapshot);
        }
        else {
            return fullStateSnapshot;
        }
    }, [stateManager]);
    // TOFIX: Remove `| null` After React 19 - Cannot assign to 'current' because it is a read-only property.ts(2540)
    const cachedSyncValue = SP_REACT.useRef(null);
    const getSnapshot = SP_REACT.useCallback(() => {
        if (Object.is(cachedSyncValue.current, null) ||
            !isEqualRef.current(cachedSyncValue.current.get($$INTERNALS), selectValue())) {
            cachedSyncValue.current = new WeakMap([
                [$$INTERNALS, selectValue()],
            ]);
        }
        return cachedSyncValue.current;
    }, [selectValue]);
    const stateValue = SP_REACT.useSyncExternalStore(active ? stateManager.watch : emptyWatcher, getSnapshot, stateManager.clientOnly ? undefined : getSnapshot);
    useInspectableValue(stateManager.visibility, stateValue);
    return stateValue.get($$INTERNALS);
}

const GlobalContext = SP_REACT.createContext(new StateManager({}));
const useGlobalState = () => {
    const context = SP_REACT.useContext(GlobalContext);
    const state = useStateValue(context);
    const setState = (setter) => context.set(setter(context.get()));
    return [state, setState, context];
};

const intersectRectangles = (rectangles) => {
    if (rectangles.length === 0) {
        return null; // No rectangles to intersect
    }
    let intersection = rectangles[0];
    for (let i = 1; i < rectangles.length; i++) {
        const rect = rectangles[i];
        // Calculate intersection coordinates
        const x1 = Math.max(intersection.x, rect.x);
        const y1 = Math.max(intersection.y, rect.y);
        const x2 = Math.min(intersection.x + intersection.width, rect.x + rect.width);
        const y2 = Math.min(intersection.y + intersection.height, rect.y + rect.height);
        // Check if there's an intersection
        if (x2 <= x1 || y2 <= y1) {
            return null; // No intersection
        }
        // Update intersection rectangle
        intersection = { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
    }
    return intersection;
};

var UIComposition;
(function (UIComposition) {
    UIComposition[UIComposition["Hidden"] = 0] = "Hidden";
    UIComposition[UIComposition["Notification"] = 1] = "Notification";
    UIComposition[UIComposition["Overlay"] = 2] = "Overlay";
    UIComposition[UIComposition["Opaque"] = 3] = "Opaque";
    UIComposition[UIComposition["OverlayKeyboard"] = 4] = "OverlayKeyboard";
})(UIComposition || (UIComposition = {}));
const useUIComposition = DFL.findModuleChild((m) => {
    if (typeof m !== "object")
        return undefined;
    for (let prop in m) {
        if (typeof m[prop] === "function" &&
            m[prop].toString().includes("AddMinimumCompositionStateRequest") &&
            m[prop].toString().includes("ChangeMinimumCompositionStateRequest") &&
            m[prop].toString().includes("RemoveMinimumCompositionStateRequest") &&
            !m[prop].toString().includes("m_mapCompositionStateRequests")) {
            return m[prop];
        }
    }
});

const SCREEN_WIDTH = 854;
const SCREEN_HEIGHT = 534;
const PICTURE_WIDTH = SCREEN_WIDTH * 0.4;
const PICTURE_HEIGHT = PICTURE_WIDTH * (1.0 / 1.85);
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["Expand"] = 1] = "Expand";
    ViewMode[ViewMode["Picture"] = 2] = "Picture";
    ViewMode[ViewMode["Closed"] = 3] = "Closed";
})(ViewMode || (ViewMode = {}));
var Position;
(function (Position) {
    Position[Position["Top"] = 0] = "Top";
    Position[Position["TopRight"] = 1] = "TopRight";
    Position[Position["Right"] = 2] = "Right";
    Position[Position["BottomRight"] = 3] = "BottomRight";
    Position[Position["Bottom"] = 4] = "Bottom";
    Position[Position["BottomLeft"] = 5] = "BottomLeft";
    Position[Position["Left"] = 6] = "Left";
    Position[Position["TopLeft"] = 7] = "TopLeft";
})(Position || (Position = {}));

const Browser = ({ url, visible, x, y, width, height }) => {
    useUIComposition(UIComposition.Notification);
    const [{ browser, view }] = SP_REACT.useState(() => {
        const root = DFL.Router.WindowStore?.GamepadUIMainWindowInstance;
        const view = root.CreateBrowserView("pip");
        const browser = view.GetBrowser();
        window['pip'] = view;
        return {
            view,
            browser
        };
    });
    SP_REACT.useEffect(() => {
        browser.SetVisible(visible);
    }, [visible]);
    SP_REACT.useEffect(() => {
        view.LoadURL(url);
    }, [url]);
    SP_REACT.useEffect(() => {
        browser.SetBounds(x, y, width, height);
    }, [x, y, width, height]);
    SP_REACT.useEffect(() => {
        return () => view.Destroy();
    }, []);
    return null;
};
const getBounds = (document) => {
    return {
        x: document?.defaultView?.screenLeft,
        y: document?.defaultView?.screenTop,
        width: document?.defaultView?.outerWidth,
        height: document?.defaultView?.outerHeight,
    };
};
const getDeckComponentBounds = () => {
    const trees = DFL.getGamepadNavigationTrees();
    const nav = trees.find((tree) => tree?.id === 'MainNavMenuContainer')?.m_Root?.m_element?.ownerDocument.defaultView ?? null;
    const navHidden = nav?.document.hidden;
    const navBounds = navHidden
        ? null
        : getBounds(nav?.document);
    const qam = trees.find((tree) => tree?.id === 'QuickAccess-NA')?.m_Root?.m_element?.ownerDocument.defaultView ?? null;
    const qamHidden = qam?.document.hidden;
    const qamBounds = qamHidden
        ? null
        : getBounds(qam?.document);
    const virtualKeyboard = trees.find((tree) => tree?.id === 'virtual keyboard')?.m_Root?.m_element?.ownerDocument.defaultView ?? null;
    const virtualKeyboardHidden = !virtualKeyboard;
    // this is a guess, gotta figure out how to inspect to keyboard DOM
    const virtualKeyboardBounds = virtualKeyboardHidden
        ? null
        : {
            x: 0,
            y: SCREEN_HEIGHT - 240,
            width: SCREEN_WIDTH,
            height: 240
        };
    return {
        nav: navBounds,
        qam: qamBounds,
        virtualKeyboard: virtualKeyboardBounds,
    };
};
const useDeckComponentBounds = () => {
    const [state, setState] = SP_REACT.useState(getDeckComponentBounds());
    SP_REACT.useEffect(() => {
        const interval = setInterval(() => {
            setState(current => {
                const next = getDeckComponentBounds();
                return isEqual$1(next, current)
                    ? current
                    : next;
            });
        }, 250);
        return () => clearInterval(interval);
    }, []);
    return state;
};
const Pip = () => {
    const { nav, qam, virtualKeyboard } = useDeckComponentBounds();
    const [{ viewMode, position, size, url, visible, ...settings }] = useGlobalState();
    const pictureWidth = PICTURE_WIDTH * size;
    const pictureHeight = PICTURE_HEIGHT * size;
    const availableBounds = [{
            x: 0,
            y: 0,
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT
        }];
    if (nav) {
        availableBounds.push({
            x: nav.width,
            y: 0,
            width: SCREEN_WIDTH - nav.width,
            height: SCREEN_HEIGHT
        });
    }
    if (qam) {
        availableBounds.push({
            x: 0,
            y: 0,
            width: SCREEN_WIDTH - qam.width,
            height: SCREEN_HEIGHT
        });
    }
    if (virtualKeyboard) {
        availableBounds.push({
            x: 0,
            y: 0,
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT - virtualKeyboard.height
        });
    }
    const bounds = intersectRectangles(availableBounds) ?? {
        x: 0,
        y: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    };
    const margin = viewMode == ViewMode.Expand
        ? 30
        : settings.margin;
    bounds.x += margin;
    bounds.y += margin;
    bounds.width -= margin * 2;
    bounds.height -= margin * 2;
    switch (viewMode) {
        case ViewMode.Expand:
            break;
        case ViewMode.Picture:
            {
                switch (position) {
                    case Position.Top:
                        {
                            bounds.x += bounds.width / 2 - pictureWidth / 2;
                        }
                        break;
                    case Position.TopRight:
                        {
                            bounds.x += bounds.width - pictureWidth;
                        }
                        break;
                    case Position.Right:
                        {
                            bounds.x += bounds.width - pictureWidth;
                            bounds.y += bounds.height / 2 - pictureHeight / 2;
                        }
                        break;
                    case Position.BottomRight:
                        {
                            bounds.x += bounds.width - pictureWidth;
                            bounds.y += bounds.height - pictureHeight;
                        }
                        break;
                    case Position.Bottom:
                        {
                            bounds.x += bounds.width / 2 - pictureWidth / 2;
                            bounds.y += bounds.height - pictureHeight;
                        }
                        break;
                    case Position.BottomLeft:
                        {
                            bounds.y += bounds.height - pictureHeight;
                        }
                        break;
                    case Position.Left:
                        {
                            bounds.y += bounds.height / 2 - pictureHeight / 2;
                        }
                        break;
                }
                bounds.width = pictureWidth;
                bounds.height = pictureHeight;
            }
            break;
    }
    return window.SP_REACT.createElement(Browser, { url: url, visible: visible, ...bounds });
};
const PipOuter = () => {
    const [{ viewMode }] = useGlobalState();
    if (viewMode == ViewMode.Closed) {
        return null;
    }
    return window.SP_REACT.createElement(Pip, null);
};

const modalWithState = (Component) => {
    return ({ value, ...props }) => window.SP_REACT.createElement(GlobalContext.Provider, { value: value },
        window.SP_REACT.createElement(Component, { ...props }));
};

const UrlModal = (props) => {
    const [{ url }, setGlobalState] = useGlobalState();
    const [field, setField] = SP_REACT.useState(url);
    SP_REACT.useEffect(() => {
        setGlobalState(state => ({
            ...state,
            visible: false
        }));
        return () => setGlobalState(state => ({
            ...state,
            visible: true
        }));
    }, []);
    return window.SP_REACT.createElement(DFL.ConfirmModal, { ...props, strTitle: 'Address', onOK: () => {
            setGlobalState(state => ({
                ...state,
                visible: true,
                url: field
            }));
        }, onCancel: () => {
            setGlobalState(state => ({
                ...state,
                visible: true
            }));
        } },
        window.SP_REACT.createElement(DFL.TextField, { value: field, onChange: e => setField(e.target.value) }));
};
const UrlModalWithState = modalWithState(UrlModal);

const Settings = () => {
    const [{ viewMode, position, margin, url, size }, setGlobalState, stateContext] = useGlobalState();
    SP_REACT.useEffect(() => {
        setGlobalState(state => ({
            ...state,
            visible: true,
            viewMode: state.viewMode == ViewMode.Closed
                ? ViewMode.Picture
                : state.viewMode
        }));
    }, []);
    // スライダー左端 -> 右端 で時計回りに移動
    const clockwisePositions = [
        Position.TopLeft,
        Position.Top,
        Position.TopRight,
        Position.Right,
        Position.BottomRight,
        Position.Bottom,
        Position.BottomLeft,
        Position.Left,
    ];
    const positionIndex = clockwisePositions.indexOf(position);
    return window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.PanelSection, null,
            viewMode == ViewMode.Closed && window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ButtonItem, { bottomSeparator: "none", layout: "below", onClick: () => setGlobalState(state => ({
                            ...state,
                            viewMode: ViewMode.Picture
                        })) }, "Open"))),
            viewMode != ViewMode.Closed && window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ButtonItem, { label: 'Address', layout: "below", onClick: () => DFL.showModal(window.SP_REACT.createElement(UrlModalWithState, { value: stateContext })) },
                        window.SP_REACT.createElement("div", { style: { display: 'flex' } },
                            window.SP_REACT.createElement(FaEdit, null),
                            "\u00A0\u00A0",
                            window.SP_REACT.createElement("div", { style: { maxWidth: 180, textOverflow: 'ellipsis', overflow: 'hidden' } }, url)))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ToggleField, { label: 'Expand', checked: viewMode == ViewMode.Expand, onChange: (checked) => {
                            setGlobalState(state => ({
                                ...state,
                                viewMode: checked
                                    ? ViewMode.Expand
                                    : ViewMode.Picture
                            }));
                        } }))),
            viewMode == ViewMode.Picture && window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.SliderField, { label: 'View Position', value: positionIndex < 0 ? 0 : positionIndex, onChange: (i) => setGlobalState(state => ({
                            ...state,
                            position: clockwisePositions[i] ?? Position.TopLeft,
                            visible: true,
                            viewMode: ViewMode.Picture
                        })), min: 0, max: clockwisePositions.length - 1, step: 1, notchCount: clockwisePositions.length, notchTicksVisible: true, notchLabels: [
                            { label: 'TL', notchIndex: 0, value: 0 },
                            { label: 'T', notchIndex: 1, value: 1 },
                            { label: 'TR', notchIndex: 2, value: 2 },
                            { label: 'R', notchIndex: 3, value: 3 },
                            { label: 'BR', notchIndex: 4, value: 4 },
                            { label: 'B', notchIndex: 5, value: 5 },
                            { label: 'BL', notchIndex: 6, value: 6 },
                            { label: 'L', notchIndex: 7, value: 7 },
                        ] })),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.SliderField, { label: 'Size', value: size, onChange: (size) => setGlobalState(state => ({
                            ...state,
                            size,
                            visible: true,
                            viewMode: ViewMode.Picture
                        })), min: 0.70, max: 1.30, step: 0.15, notchCount: 3, notchTicksVisible: true, notchLabels: [
                            { label: "S", notchIndex: 0, value: 0.70 },
                            { label: "M", notchIndex: 1, value: 1 },
                            { label: "L", notchIndex: 2, value: 1.30 }
                        ] })),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.SliderField, { label: 'Margin', value: margin, onChange: (margin) => setGlobalState(state => ({
                            ...state,
                            margin,
                            visible: true,
                            viewMode: ViewMode.Picture
                        })), min: 0, max: 60, step: 15, notchCount: 3, notchTicksVisible: true, notchLabels: [
                            { label: "S", notchIndex: 0, value: 0 },
                            { label: "M", notchIndex: 1, value: 30 },
                            { label: "L", notchIndex: 2, value: 60 },
                        ] }))),
            viewMode != ViewMode.Closed && window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ButtonItem, { bottomSeparator: "none", layout: "below", onClick: () => setGlobalState(state => ({
                            ...state,
                            viewMode: ViewMode.Closed
                        })) }, "Close")))));
};

var index = definePlugin(() => {
    const state = new StateManager(merge$1({}, {
        viewMode: ViewMode.Closed,
        visible: true,
        position: Position.TopRight,
        margin: 30,
        size: 1,
        url: "https://netflix.com"
    }, JSON.parse(localStorage.getItem('pip') ?? '{}')));
    state.watch(({ position, margin, size, url }) => localStorage.setItem('pip', JSON.stringify({ position, margin, size, url })));
    routerHook.addGlobalComponent("PictureInPicture", () => {
        return window.SP_REACT.createElement(GlobalContext.Provider, { value: state },
            window.SP_REACT.createElement(PipOuter, null));
    });
    return {
        name: "Picture in Picture",
        titleView: window.SP_REACT.createElement("div", { className: DFL.quickAccessMenuClasses.Title }, "Picture in Picture"),
        icon: window.SP_REACT.createElement(FaTv, null),
        content: window.SP_REACT.createElement(GlobalContext.Provider, { value: state },
            window.SP_REACT.createElement(Settings, null)),
        onDismount() {
            routerHook.removeGlobalComponent("PictureInPicture");
        },
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
