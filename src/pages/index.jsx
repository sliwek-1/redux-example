import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import App from "../App"
import { UserList } from "./userList"

export function Index() {
    return (
        <>
            <BrowserRouter>

                <header>
                    <Link to="/">Home</Link>
                    <Link to="/usersList">Lista użytkowników</Link>
                </header>

                <Routes>
                    <Route  path="/" element={<App/>}/>
                    <Route  path="/usersList" element={<UserList/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}