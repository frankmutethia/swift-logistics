import { Link } from "react-router-dom";

export const ProductCard = () => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/" className="relative" >
            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Swift</span>
            <img className="rounded-t-lg w-full h-64" src="/assets/elevate-dI-aXC7DWpQ-unsplash.jpg" alt=""/>
        </Link>
        <div className="p-5">
            <Link to="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Swift</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est vitae fugit maiores architecto odit pariatur dolor, expedita fugiat nesciunt incidunt, commodi doloribus. Mollitia ipsum eligendi non officia! Minima, eius.</p>
            
            <div className="flex items-center my-2">
            </div>

            <div className="flex justify-between items-center">
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>

            </div>
         
        </div>
    </div>
  )
}

