/**
 * Trigger the in-app purchase flow modal.
 */
export declare const trigger: (messageOptions: import("../channel").MessageDataType<"inAppPurchases"> & import("../channel").BaseMessageOptions) => Promise<unknown>;
export type inAppPurchases = {
    responseType: unknown;
    featureId: string;
};
