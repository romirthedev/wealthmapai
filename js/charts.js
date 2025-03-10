// js/charts.js
document.addEventListener("DOMContentLoaded", () => {
    // Spending Pie Chart
    new Chart(document.getElementById("spending-chart"), {
        type: "pie",
        data: {
            labels: ["Housing", "Food", "Transport", "Other"],
            datasets: [{
                data: [1200, 400, 300, 600],
                backgroundColor: ["#A4F9C8", "#FFFFFF", "#333333", "#D3D3D3"],
            }]
        },
        options: {
            animation: { duration: 2000 },
            plugins: { legend: { position: "bottom" }}
        }
    });

    // Saving Pie Chart
    new Chart(document.getElementById("saving-chart"), {
        type: "pie",
        data: {
            labels: ["Emergency", "Retirement", "Goals"],
            datasets: [{
                data: [500, 700, 300],
                backgroundColor: ["#A4F9C8", "#FFFFFF", "#333333"],
            }]
        },
        options: {
            animation: { duration: 2000 },
            plugins: { legend: { position: "bottom" }}
        }
    });

    // Investing Pie Chart
    new Chart(document.getElementById("investing-chart"), {
        type: "pie",
        data: {
            labels: ["Stocks", "Bonds", "Real Estate"],
            datasets: [{
                data: [800, 400, 300],
                backgroundColor: ["#A4F9C8", "#FFFFFF", "#333333"],
            }]
        },
        options: {
            animation: { duration: 2000 },
            plugins: { legend: { position: "bottom" }}
        }
    });

    // Growth Line Chart
    new Chart(document.getElementById("growth-chart"), {
        type: "line",
        data: {
            labels: ["Year 0", "Year 5", "Year 10", "Year 20"],
            datasets: [{
                label: "Growth",
                data: [10000, 15000, 30000, 80000],
                borderColor: "#A4F9C8",
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            animation: { duration: 2000 },
            scales: { y: { beginAtZero: true } },
            plugins: { tooltip: { callbacks: { label: (ctx) => `$${ctx.raw}` } } }
        }
    });
});
