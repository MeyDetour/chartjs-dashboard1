import {Line} from "react-chartjs-2"
import "../../assets/cartChart.css"
import {
    CategoryScale,
    Chart as ChartJs,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

function CartChart({data}) {
    ChartJs.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    const lineChartData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "They visited website",
                data: data.users.connected,
                borderColor: "#EA5F39",
                borderWidth: 1,
            },
            {
                label: "They Made a Purchase",
                data: data.users.buySomething,
                borderColor: "#c147ca",
                borderWidth: 1,
            },
            {
                label: "They Abandoned Their Cart",
                data: data.users.clear,
                borderColor: "#219CFB",
                borderWidth: 1,
            },
            {
                label: "They placed Their First Order",
                data: data.users.firstOrder,
                borderColor: "#6DBE16",
                borderWidth: 1,
            },
            {
                label: "They created account",
                data: data.users.new,
                borderColor: "#FBEF2D",
                borderWidth: 1,
            }
        ]

    }
    const options = {
        animations: {
            tension: {
                duration: 3000,
                easing: "ease",
                from: 0.8,
                to: 0.2,
                loop: true,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {position: "bottom"},

        }
    }
    return (
        <>
            <h4>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 1H4.764L5.309 3H23.387L19.721 14H7.78L7.28 16H22V18H4.72L5.966 13.011L3.236 3H0V1ZM4 21C4 20.4696 4.21071 19.9609 4.58579 19.5858C4.96086 19.2107 5.46957 19 6 19C6.53043 19 7.03914 19.2107 7.41421 19.5858C7.78929 19.9609 8 20.4696 8 21C8 21.5304 7.78929 22.0391 7.41421 22.4142C7.03914 22.7893 6.53043 23 6 23C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21ZM18 21C18 20.4696 18.2107 19.9609 18.5858 19.5858C18.9609 19.2107 19.4696 19 20 19C20.5304 19 21.0391 19.2107 21.4142 19.5858C21.7893 19.9609 22 20.4696 22 21C22 21.5304 21.7893 22.0391 21.4142 22.4142C21.0391 22.7893 20.5304 23 20 23C19.4696 23 18.9609 22.7893 18.5858 22.4142C18.2107 22.0391 18 21.5304 18 21Z"
                        fill="white" style={{fill: 'white', fillOpacity: 1}}/>
                </svg>
                Cart
            </h4>
            <div>
                <div className={"leftList"}>
                    <div>
                        <span>Most Expensive Cart (Validated)</span>
                        <span>{data.cart.mostExpensiveCart}€</span>
                    </div>
                    <div>
                        <span>Cheapest Cart (Validated)</span>
                        <span>{data.cart.cheapestCart}€</span>
                    </div>
                    <div>
                        <span>Largest Cart (Number of Items)</span>
                        <span>{data.cart.largestCart}</span>
                    </div>
                    <div>
                        <span>Smallest Cart (Number of Items)</span>
                        <span>{data.cart.leastFilledtCart}</span>
                    </div>
                    <div>
                        <span>Total Orders This Week</span>
                        <span>{data.cart.totalOrderThisWeek}</span>
                    </div>
                    <div>
                        <span>Abandoned Carts</span>
                        <span>{data.cart.cleanedCart}</span>
                    </div>
                    <div>
                        <span>Average Number of Products per Cart</span>
                        <span>{data.cart.averageOfNumberOfProduct}</span>
                    </div>
                    <div>
                        <span>Revenue Generated This Week (€)</span>
                        <span>{data.cart.turnOverThisWeek}€</span>
                    </div>
                    <div>
                        <span>Users Without Any Orders</span>
                        <span>{data.cart.totlaUserWithoutOrder} / {data.totalUserCreated}  ( {Math.round( data.cart.totlaUserWithoutOrder / data.totalUserCreated * 100)}% ) </span>
                    </div>
                </div>

                <div className={"vr"}></div>
                <div className={"rightList"}></div>
            </div>
        </>
    )
}

export default CartChart
