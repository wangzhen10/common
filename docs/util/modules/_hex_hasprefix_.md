

# Functions

<a id="hexhasprefix"></a>

##  hexHasPrefix

▸ **hexHasPrefix**(value: *`string` | `null` | `undefined`*): `boolean`

*Defined in [hex/hasPrefix.ts:22](https://github.com/polkadot-js/common/blob/5cb5390/packages/util/src/hex/hasPrefix.ts#L22)*

*__name__*: hexHasPrefix

*__signature__*: hexHasPrefix (value: ?string): boolean

*__summary__*: Tests for the existence of a `0x` prefix.

*__description__*: Checks for a valid hex input value and if the start matched `0x`

*__example__*:   

```javascript
import { hexHasPrefix } from '@polkadot/util';

console.log('has prefix', hexHasPrefix('0x1234')); // => true
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` | `null` | `undefined` |

**Returns:** `boolean`

___

