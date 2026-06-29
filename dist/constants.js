"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_CURRENCY = exports.FACILITY_LABEL_KEYS = exports.FACILITIES = exports.FACILITY_MAP = exports.CURRENCY_KEY = exports.currencyCodes = exports.CURRENCIES = void 0;
exports.CURRENCIES = [
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
exports.currencyCodes = exports.CURRENCIES.map((c) => c.code);
exports.CURRENCY_KEY = "selected_currency";
// ── facility icon map ──────────────────────────────────────────────────────
exports.FACILITY_MAP = {
    parking: { icon: "car-outline", lib: "ion" },
    pool: { icon: "water-outline", lib: "ion" },
    gym: { icon: "barbell-outline", lib: "ion" },
    restaurant: { icon: "restaurant-outline", lib: "ion" },
    wifi: { icon: "wifi-outline", lib: "ion" },
    pets: { icon: "paw-outline", lib: "ion" },
    sports: { icon: "football-outline", lib: "ion" },
    laundry: { icon: "shirt-outline", lib: "ion" },
    security: { icon: "shield-checkmark-outline", lib: "ion" },
    elevator: { icon: "arrow-up-outline", lib: "ion" },
    garden: { icon: "leaf-outline", lib: "ion" },
    balcony: { icon: "home-outline", lib: "ion" },
};
exports.FACILITIES = Object.keys(exports.FACILITY_MAP);
exports.FACILITY_LABEL_KEYS = {
    parking: "facilities.parking",
    pool: "facilities.pool",
    gym: "facilities.gym",
    restaurant: "facilities.restaurant",
    wifi: "facilities.wifi",
    pets: "facilities.pets",
    sports: "facilities.sports",
    laundry: "facilities.laundry",
    security: "facilities.security",
    elevator: "facilities.elevator",
    garden: "facilities.garden",
    balcony: "facilities.balcony",
};
exports.BASE_CURRENCY = "XAF";
//# sourceMappingURL=constants.js.map