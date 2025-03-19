import "../assets/dashboard.css"
import {useEffect, useState} from "react";
import CartChart from "./charts/CartChart.jsx";
import LineChart from "./charts/lineChart.jsx";

export default function Dashboard() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            let response = await fetch("/src/page/data.json")


            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json()
            console.log(json)
            setData(json)
        }

        getData()

    }, []);

    if (!data) return null;

    return (
        <div className="dashboard">

            <div id={"cart"}>
                <CartChart data={data}></CartChart>
            </div>
            <div id={"users"}>
                <LineChart data={data}></LineChart>
            </div>
            <div id={"products"}>

            </div>
            <div id={"global"}></div>
        </div>
    )
}
