// import Layout from "../components/Layout"

const HomePage = () => {
    return <>
        <h1>Latest Products</h1>
        <div className="py-3 grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="border border-gray-200 rounded-md">
                <div className="relative pb-[40%]">
                    <img src="https://picsum.photos/500/500" alt="" className="absolute top-0 left-0 right-0 bottom-0 object-cover object-center" />
                </div>
            </div>
            <div className="border border-gray-200 rounded-md">
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="border border-gray-200 rounded-md">
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="border border-gray-200 rounded-md">
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
        </div>
    </>
}

export default HomePage