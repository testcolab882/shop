import { SearchIcon, ShoppingCartIcon } from "lucide-react"
import { Link } from "react-router"

const Header=()=>{
    return <>
        <header className="px-2">
            <div className="w-full max-w-280 border-b-1 border-gray-200 py-4 px-2 mx-auto flex items-center justify-between">
                <div>
                    shop
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex">
                        <div className="px-2 py-1 grow outline outline-offset-[-1] outline-gray-400 mr-[1px] px-2 py-1 rounded-tl-lg rounded-bl-lg">
                            <input type="text" className="px-2 py-1 block outline-none" />
                        </div>
                        <button className="outline outline-offset-[-1] outline-gray-400 px-2 py-1 rounded-tr-lg rounded-br-lg">
                            <SearchIcon size={22} className="text-gray-400"/>
                        </button>
                    </div>
                    <Link to="/login" className="text-gray-500">Sign in</Link>
                    <button className="flex items-center cursor-pointer">
                        <ShoppingCartIcon size={22} className="text-gray-400"/>
                        <span className="text-sm ml-1">0</span>
                    </button>
                </div>
            </div>
        </header>
    </>
}

export default Header