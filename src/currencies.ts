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