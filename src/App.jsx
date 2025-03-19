
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./page/Dashboard.jsx";
function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Dashboard/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
