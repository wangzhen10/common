

# Hierarchy

 `TxDb`

**↳ TrieDb**

# Implemented by

* [Trie](../classes/_index_.trie.md)

# Properties

<a id="db"></a>

##  db

**● db**: *`TxDb`*

*Defined in [types.ts:37](https://github.com/polkadot-js/common/blob/5cb5390/packages/trie-db/src/types.ts#L37)*

___

# Methods

<a id="close"></a>

##  close

▸ **close**(): `void`

*Inherited from BaseDb.close*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:18](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L18)*

**Returns:** `void`

___
<a id="del"></a>

##  del

▸ **del**(key: *`Uint8Array`*): `void`

*Inherited from BaseDb.del*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:26](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `void`

___
<a id="drop"></a>

##  drop

▸ **drop**(): `void`

*Inherited from BaseDb.drop*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:20](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L20)*

**Returns:** `void`

___
<a id="empty"></a>

##  empty

▸ **empty**(): `void`

*Inherited from BaseDb.empty*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:21](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L21)*

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`Uint8Array`*): `Uint8Array` | `null`

*Inherited from BaseDb.get*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:27](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |

**Returns:** `Uint8Array` | `null`

___
<a id="getroot"></a>

##  getRoot

▸ **getRoot**(): `Uint8Array`

*Defined in [types.ts:39](https://github.com/polkadot-js/common/blob/5cb5390/packages/trie-db/src/types.ts#L39)*

**Returns:** `Uint8Array`

___
<a id="maintain"></a>

##  maintain

▸ **maintain**(fn: *`ProgressCb`*): `void`

*Inherited from BaseDb.maintain*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:22](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `ProgressCb` |

**Returns:** `void`

___
<a id="open"></a>

##  open

▸ **open**(): `void`

*Inherited from BaseDb.open*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:19](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L19)*

**Returns:** `void`

___
<a id="put"></a>

##  put

▸ **put**(key: *`Uint8Array`*, value: *`Uint8Array`*): `void`

*Inherited from BaseDb.put*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:28](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Uint8Array` |
| value | `Uint8Array` |

**Returns:** `void`

___
<a id="rename"></a>

##  rename

▸ **rename**(base: *`string`*, file: *`string`*): `void`

*Inherited from BaseDb.rename*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:23](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `string` |
| file | `string` |

**Returns:** `void`

___
<a id="setroot"></a>

##  setRoot

▸ **setRoot**(rootHash: *`Uint8Array`*): `void`

*Defined in [types.ts:40](https://github.com/polkadot-js/common/blob/5cb5390/packages/trie-db/src/types.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rootHash | `Uint8Array` |

**Returns:** `void`

___
<a id="size"></a>

##  size

▸ **size**(): `number`

*Inherited from BaseDb.size*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:24](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L24)*

**Returns:** `number`

___
<a id="snapshot"></a>

##  snapshot

▸ **snapshot**(dest: *[TrieDb](_types_.triedb.md)*, fn: *`ProgressCb`*): `number`

*Defined in [types.ts:41](https://github.com/polkadot-js/common/blob/5cb5390/packages/trie-db/src/types.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dest | [TrieDb](_types_.triedb.md) |
| fn | `ProgressCb` |

**Returns:** `number`

___
<a id="transaction"></a>

##  transaction

▸ **transaction**(fn: *`function`*): `boolean`

*Inherited from TxDb.transaction*

*Defined in [/home/travis/build/polkadot-js/common/packages/db/src/types.ts:32](https://github.com/polkadot-js/common/blob/5cb5390/packages/db/src/types.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `boolean`

___

