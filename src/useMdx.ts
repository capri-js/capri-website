import { useMemo } from "preact/hooks";
import * as _jsx_runtime from "preact/jsx-runtime";

export function useMdx(code: string) {
  return useMemo(() => {
    const scope = { _jsx_runtime };
    const fn = new Function(...Object.keys(scope), code);
    const { default: Component } = fn(...Object.values(scope));
    return Component;
  }, [code]);
}
