enum OrderStatus {
    pending,
    paid,
    shipped,
    delivered
}

let sTatus: OrderStatus;

sTatus = OrderStatus.pending;
sTatus = OrderStatus.shipped;
sTatus = OrderStatus.paid;
sTatus = OrderStatus.delivered;
// sTatus = OrderStatus.cancelled;


enum OrderStatus {
    Pending = "Pending",
    Paid = "Paid",
    Shipped = "Shipped",
    Delivered = "Delivered"
}

let status: OrderStatus = OrderStatus.Pending;

console.log(status);


type Status = "Pending" | "Paid" | "Shipped" | "Delivered";

let orderStatus: Status = "Pending";

console.log(orderStatus);