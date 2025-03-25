export function objectToFilterString(obj: Record<string, string>): string {
  if (!obj || typeof obj !== "object") {
    throw new Error("Input must be a valid object");
  }

  return Object.entries(obj)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}
