export async function register() {
  const globalWithStorage = globalThis as any;
  const storage = globalWithStorage.localStorage as { getItem?: unknown } | undefined;

  if (storage && typeof storage.getItem !== "function") {
    try {
      delete globalWithStorage.localStorage;
    } catch {
      globalWithStorage.localStorage = undefined;
    }
  }
}
