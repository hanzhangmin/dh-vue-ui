export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "danger", "info", "text", ""];
export declare const buttonNativeTypes: readonly ["button", "submit", "reset"];
export declare const buttonSizes: readonly ["small", "medium", "large"];
export declare const buttonProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly values: readonly ["default", "primary", "success", "warning", "danger", "info", "text", ""];
        readonly default: "default";
    };
    readonly nativeType: {
        readonly type: StringConstructor;
        readonly values: readonly ["button", "submit", "reset"];
        readonly default: "button";
    };
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "button";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly values: readonly ["small", "medium", "large"];
        readonly default: "medium";
    };
};
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type ButtonProps = Readonly<typeof buttonProps>;
export declare type ButtonType = ButtonProps['type'];
export declare type ButtonEmits = typeof buttonEmits;
export declare type ButtonNativeType = ButtonProps['nativeType'];
