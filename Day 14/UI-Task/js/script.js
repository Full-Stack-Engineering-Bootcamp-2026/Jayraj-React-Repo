const orders = [
  {
    id: "ORD-7891",
    customer: "Emma Wilson",
    product: "Pro Dashboard",
    status: "Completed",
    date: "Feb 14, 2026",
    amount: "$299"
  },
  {
    id: "ORD-7890",
    customer: "James Chen",
    product: "Team Plan",
    status: "Processing",
    date: "Feb 14, 2026",
    amount: "$599"
  },
  {
    id: "ORD-7889",
    customer: "Sofia Garcia",
    product: "Enterprise",
    status: "Completed",
    date: "Feb 13, 2026",
    amount: "$1499"
  },
  {
    id: "ORD-7888",
    customer: "Alex Thompson",
    product: "Single License",
    status: "Pending",
    date: "Feb 13, 2026",
    amount: "$79"
  },
  {
    id: "ORD-7887",
    customer: "Rohan Mehta",
    product: "Enterprise License",
    status: "Completed",
    date: "Feb 12, 2026",
    amount: "$1299"
  },
  {
    id: "ORD-7886",
    customer: "Ananya Sharma",
    product: "Starter Plan",
    status: "Pending",
    date: "Feb 12, 2026",
    amount: "$199"
  },
  {
    id: "ORD-7885",
    customer: "Vikram Singh",
    product: "Pro Subscription",
    status: "Processing",
    date: "Feb 11, 2026",
    amount: "$499"
  },
  {
    id: "ORD-7884",
    customer: "Neha Kapoor",
    product: "Team Plan",
    status: "Completed",
    date: "Feb 11, 2026",
    amount: "$699"
  },
  {
    id: "ORD-7883",
    customer: "Arjun Patel",
    product: "Basic Plan",
    status: "Pending",
    date: "Feb 10, 2026",
    amount: "$149"
  },
  {
    id: "ORD-7882",
    customer: "Priya Nair",
    product: "Enterprise Suite",
    status: "Processing",
    date: "Feb 10, 2026",
    amount: "$1599"
  }
];

function loadOrders() {
  const table = document.getElementById("orderTable");

  if (!table) return; 

  orders.forEach(order => {
    const row = `
      <tr>
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.product}</td>
        <td><span class="badge ${getStatusClass(order.status)}">${order.status}</span></td>
        <td>${order.date}</td>
        <td>${order.amount}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function getStatusClass(status) {
  if (status === "Completed") return "green";
  if (status === "Pending") return "yellow";
  if (status === "Processing") return "processing";
  return "red";
}

loadOrders();