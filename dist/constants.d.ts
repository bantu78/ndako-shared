export type Currency = {
    code: string;
    name: string;
    symbol: string;
    flag: string;
};
export declare const CURRENCIES: Currency[];
export declare const currencyCodes: string[];
export declare const CURRENCY_KEY = "selected_currency";
export declare const FACILITY_MAP: {
    parking: {
        icon: "car-outline";
        lib: "ion";
    };
    pool: {
        icon: "water-outline";
        lib: "ion";
    };
    gym: {
        icon: "barbell-outline";
        lib: "ion";
    };
    restaurant: {
        icon: "restaurant-outline";
        lib: "ion";
    };
    wifi: {
        icon: "wifi-outline";
        lib: "ion";
    };
    pets: {
        icon: "paw-outline";
        lib: "ion";
    };
    sports: {
        icon: "football-outline";
        lib: "ion";
    };
    laundry: {
        icon: "shirt-outline";
        lib: "ion";
    };
    security: {
        icon: "shield-checkmark-outline";
        lib: "ion";
    };
    elevator: {
        icon: "arrow-up-outline";
        lib: "ion";
    };
    garden: {
        icon: "leaf-outline";
        lib: "ion";
    };
    balcony: {
        icon: "home-outline";
        lib: "ion";
    };
};
export declare const FACILITIES: (keyof typeof FACILITY_MAP)[];
export declare const BASE_CURRENCY = "XAF";
//# sourceMappingURL=constants.d.ts.map