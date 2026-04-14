declare module "tailwindcss/lib/util/flattenColorPalette.js" {
  const flattenColorPalette: (colors: Record<string, unknown>) => Record<string, string>;
  export default flattenColorPalette;
}
declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function flattenColorPalette(
    pallette: Record<string, string>
  ): Record<string, string>;
}
