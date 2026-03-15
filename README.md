# @scuton/safe-json

Safe JSON parse & stringify. Never throws. Returns default value on error.

## Install

```bash
npm install @scuton/safe-json
```

## Usage

```typescript
import { safeParse, safeStringify, isJSON, jsonClone } from '@scuton/safe-json';

// Parse safely
safeParse('{"valid": true}');           // { valid: true }
safeParse('invalid json');               // undefined
safeParse('invalid json', { fallback: {} }); // {}
safeParse<User>('{"name":"John"}');      // typed result

// Stringify safely
safeStringify({ key: 'value' });         // '{"key":"value"}'
safeStringify(circularObj);              // undefined (no crash)
safeStringify(data, { pretty: true });   // formatted JSON

// Check if string is valid JSON
isJSON('{"valid": true}');  // true
isJSON('nope');             // false

// Deep clone via JSON
const clone = jsonClone({ nested: { value: 1 } });
```

## API

### `safeParse<T>(input: string, options?): T | undefined`

Parse JSON safely. Returns `undefined` (or `fallback`) on error.

Options:
- `fallback?: T` — value to return on parse error
- `reviver?: (key, value) => any` — JSON.parse reviver

### `safeStringify(value: any, options?): string | undefined`

Stringify safely. Returns `undefined` (or `fallback`) on error (e.g., circular refs).

Options:
- `pretty?: boolean` — indent with 2 spaces
- `replacer?: (key, value) => any` — JSON.stringify replacer
- `fallback?: string` — value to return on error

### `isJSON(input: string): boolean`

Returns `true` if the string is valid JSON.

### `jsonClone<T>(value: T): T | undefined`

Deep clone a value via JSON serialization.

## License

MIT © Scuton Technology
