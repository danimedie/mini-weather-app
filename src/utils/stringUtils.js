export function toPascalCase(str) {
  return str
    .toLowerCase()
    .replace(/(?:^|[^a-zA-Z0-9]+)([a-z0-9])/g, (_, chr) => chr.toUpperCase())
}
