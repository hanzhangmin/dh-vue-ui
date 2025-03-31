export declare const viewLoadProps: {
    readonly isOnce: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly options: {
        readonly type: readonly [ObjectConstructor];
        readonly default: () => {
            threshold: number;
        };
    };
};
export declare const viewLoadEmits: {
    callback: (option: Object) => undefined;
};
export declare type ViewLoadProps = typeof viewLoadProps;
export declare type ViewLoadEmits = typeof viewLoadEmits;
