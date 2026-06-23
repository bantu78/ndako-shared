export type Currency = {
  code: string;
  name: string;
  symbol: string;
  flag: string;
};

export const CURRENCIES: Currency[] = [
  { code: "XAF", name: "Central African Franc", symbol: "FCFA", flag: "🇨🇬" },
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬" },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "₵", flag: "🇬🇭" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh", flag: "🇰🇪" },
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "🇿🇦" },
  { code: "MAD", name: "Moroccan Dirham", symbol: "MAD", flag: "🇲🇦" },
  { code: "EGP", name: "Egyptian Pound", symbol: "E£", flag: "🇪🇬" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
];

export const currencyCodes = CURRENCIES.map((c) => c.code);
export const CURRENCY_KEY = "selected_currency";


 // ── facility icon map ──────────────────────────────────────────────────────
export const FACILITY_MAP = {
  parking:    { icon: "car-outline" as const,              lib: "ion" as const },
  pool:       { icon: "water-outline" as const,            lib: "ion" as const },
  gym:        { icon: "barbell-outline" as const,          lib: "ion" as const },
  restaurant: { icon: "restaurant-outline" as const,       lib: "ion" as const },
  wifi:       { icon: "wifi-outline" as const,             lib: "ion" as const },
  pets:       { icon: "paw-outline" as const,               lib: "ion" as const },
  sports:     { icon: "football-outline" as const,         lib: "ion" as const },
  laundry:    { icon: "shirt-outline" as const,            lib: "ion" as const },
  security:   { icon: "shield-checkmark-outline" as const, lib: "ion" as const },
  elevator:   { icon: "arrow-up-outline" as const,         lib: "ion" as const },
  garden:     { icon: "leaf-outline" as const,             lib: "ion" as const },
  balcony:    { icon: "home-outline" as const,             lib: "ion" as const },
} satisfies Record<string, { icon: string; lib: "ion" | "mci" }>;

export type Facility = keyof typeof FACILITY_MAP;

export const FACILITIES = Object.keys(FACILITY_MAP) as Facility[];

export const BASE_CURRENCY = "XAF";
