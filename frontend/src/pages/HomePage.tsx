// import Layout from "../components/Layout"

import Carousel from "@/components/Carousel"
import { Rating,RatingButton } from "@/components/ui/shadcn-io/rating"


const products=[
    {
    "image":"https://picsum.photos/500/500",
    "name":"product x",
    rating:4,
    price:10.2
},
  {
    "image":"https://picsum.photos/500/500",
    "name":"product x",
    rating:4,
    price:10.2
},
  {
    "image":"https://picsum.photos/500/500",
    "name":"product x",
    rating:4,
    price:10.2
},
  {
    "image":"https://picsum.photos/500/500",
    "name":"product x",
    rating:4,
    price:10.2
},
  {
    "image":"https://picsum.photos/500/500",
    "name":"product x",
    rating:4,
    price:10.2
},
]

const HomePage = () => {
    return <>
        <Carousel/>
        <h1 className="text-2xl font-semibold mt-4">Latest Products</h1>
        <div className="py-3 grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {
                products.map((product)=>(
                                <div className="border border-gray-200 rounded-md p-3 space-y-2">
                                    <div className="relative pb-[80%]">
                                        <img src={product.image} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
                                    </div>
                                    <div className="text-lg font-bold">{product.name}</div>
                                    <Rating value={product.rating} readOnly>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <RatingButton className="text-yellow-500" key={index} />
                                        ))}
                                    </Rating>
                                    <div className="text-2xl font-bold mb-5">${product.price}</div>
                                </div>
                ))
            }
            {/* <div className="border border-gray-200 rounded-md">
                <div className="relative pb-[80%] bg-green-500">
                    <img src="https://picsum.photos/500/500" alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
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
            </div> */}
        </div>
    </>
}

export default HomePage