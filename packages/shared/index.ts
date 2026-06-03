export type ToEngine = {
    messageType: "onramp";
    userId: string;
    balance: string;
} | {
    messageType: "create_order";
    price: string;
    qty: string;
    side: "Short" | "Long";
    marketId: string;
    type: "Limit" | "Market";
    equity: string;
    userId: string;
    orderId: string;
} | {
    messageType: "cancel_order";
    orderId: string;
    userId: string;
} | {
    messageType: "create_market";
    marketId: string;

};