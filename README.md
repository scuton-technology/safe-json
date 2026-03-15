<div align="center">

# safe-json

**Safe JSON parse & stringify. Never throws. Zero dependencies.**

[![npm](https://img.shields.io/npm/v/@scuton/safe-json?style=flat-square)](https://www.npmjs.com/package/@scuton/safe-json)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](package.json)

</div>

---

## Install

```bash
npm install @scuton/safe-json
```

## Usage

```typescript
import { safeParse, safeStringify, isJSON, jsonClone } from '@scuton/safe-json';

safeParse('{"valid": true}');                   // { valid: true }
safeParse('invalid json');                       // undefined
safeParse('invalid', { fallback: {} });          // {}
safeParse<User>('{"name":"John"}');              // typed result

safeStringify({ key: 'value' });                 // '{"key":"value"}'
safeStringify(circularObj);                      // undefined (no crash)
safeStringify(data, { pretty: true });           // formatted JSON

isJSON('{"valid": true}');                       // true
isJSON('nope');                                  // false

const clone = jsonClone({ nested: { value: 1 } });
```

## API

| Function | Returns | Description |
|----------|---------|-------------|
| `safeParse<T>(input, options?)` | `T \| undefined` | Parse JSON safely. Options: `fallback`, `reviver` |
| `safeStringify(value, options?)` | `string \| undefined` | Stringify safely. Options: `pretty`, `replacer`, `fallback` |
| `isJSON(input)` | `boolean` | Check if string is valid JSON |
| `jsonClone<T>(value)` | `T \| undefined` | Deep clone via JSON serialization |

## License

MIT — [Scuton Technology](https://scuton.com)
