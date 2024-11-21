import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"

function Header() {
    return (
        <header className="bg-yellow-400 uppercase border-b border-stone-200 px-4 sm:px-6 py-3 flex items-center justify-between">
            <Link to="/" className="tracking-widest"> Fast React Pizza Co.</Link>
            <SearchOrder />
          <Username />
        </header>
    )
}

export default Header
