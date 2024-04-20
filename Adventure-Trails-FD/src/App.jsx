import "./App.css"
import Header from "./components/header"
import Footer from "./components/footer/footer"
import { Outlet } from 'react-router-dom'
import {TrilhasContextProvider} from "./context/TrilhasContext"


function App() {
    return (
        <>
            <TrilhasContextProvider>
                <Header />
                <Outlet />
                <Footer />
            </TrilhasContextProvider>
        </>
    )
}
export default App