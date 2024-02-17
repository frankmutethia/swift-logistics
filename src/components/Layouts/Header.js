import Logo  from '../../assets/swift.jpg';
import { Link } from 'react-router-dom';


export const Header = () => {
  return ( 
   <header>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to ="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src= {Logo} className="h-8" alt="Swift Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Swift Logistics</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="flex items-center">
        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear'></span>
        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search'></span>
        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-cart'></span>
        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle'></span>
        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-7-circle-fill'></span>
    </div>
  </div>
</nav>
</header>
  )
}

