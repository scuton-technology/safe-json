export interface SafeParseOptions<T = any> {
  fallback?: T;
  reviver?: (key: string, value: any) => any;
}

export interface SafeStringifyOptions {
  pretty?: boolean;
  replacer?: (key: string, value: any) => any;
  fallback?: string;
}

export function safeParse<T = any>(
  input: string,
  options?: SafeParseOptions<T>
): T | undefined {
  try {
    return JSON.parse(input, options?.reviver);
  } catch {
    return options?.fallback;
  }
}

export function safeStringify(
  value: any,
  options?: SafeStringifyOptions
): string | undefined {
  try {
    return JSON.stringify(value, options?.replacer, options?.pretty ? 2 : undefined);
  } catch {
    return options?.fallback;
  }
}

export function isJSON(input: string): boolean {
  try {
    JSON.parse(input);
    return true;
  } catch {
    return false;
  }
}

export function jsonClone<T>(value: T): T | undefined {
  const str = safeStringify(value);
  if (str === undefined) return undefined;
  return safeParse<T>(str);
}
