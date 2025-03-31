export declare const scrollLoadProps: {
    readonly noMore: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isEmpty: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showNoMore: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare const scrollLoadEmits: {
    load: () => undefined;
};
export declare type ScrollLoadProps = typeof scrollLoadProps;
export declare type ScrollLoadEmits = typeof scrollLoadEmits;
