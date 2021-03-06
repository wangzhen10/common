

# Functions

<a id="hexaddprefix"></a>

##  hexAddPrefix

▸ **hexAddPrefix**(value: *`string` | `null` | `undefined`*): `string`

*Defined in [hex/addPrefix.ts:22](https://github.com/polkadot-js/common/blob/5cb5390/packages/util/src/hex/addPrefix.ts#L22)*

*__name__*: hexAddPrefix

*__signature__*: hexAddPrefix (value: ?string): string

*__summary__*: Adds the `0x` prefix to string values.

*__description__*: Returns a `0x` prefixed string from the input value. If the input is already prefixed, it is returned unchanged.

*__example__*:   

```javascript
import { hexAddPrefix } from '@polkadot/util';

console.log('With prefix', hexAddPrefix('0a0b12')); // => 0x0a0b12
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` | `null` | `undefined` |

**Returns:** `string`

___

