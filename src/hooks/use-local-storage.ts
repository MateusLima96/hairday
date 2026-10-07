import * as lib from "use-local-storage";

type UseLocalStorage = typeof lib.default;

// use-local-storage is CJS; depending on bundler interop the default export
// may arrive wrapped as { default: fn }, so unwrap it when needed.
const mod = lib as unknown as { default: UseLocalStorage | { default: UseLocalStorage } };
const useLocalStorage: UseLocalStorage =
  typeof mod.default === "function" ? mod.default : mod.default.default;

export default useLocalStorage;