import { ChevronRight, Pointer } from 'lucide-react'
import React from 'react'
import logo from '../assets/images/ecommerce-logo-free-png.webp'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (

        // <footer className="w-full pt-8 border-t-4 border-black-500">
    //   <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
    //     <div className="w-full  px-4 md:w-1/2 lg:px-0">
    //       <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
    //       <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
    //         <input
    //           className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    //           type="email"
    //           placeholder="Email"
    //         ></input>
    //         <button
    //           type="button"
    //           className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //         >
    //           <ChevronRight className="h-4 w-4" />
    //         </button>
    //       </form>
    //     </div>
        
    //     <div className="mt-8 flex grid ml-8 grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
    //       {Array.from({ length: 3 }).map((_, i) => (
    //         <div key={i} className="mb-8 lg:mb-0">
    //           <p className="mb-6 text-lg font-semibold text-gray-700 ">Features</p>
    //           <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
    //             <li>Inventory Management</li>
    //             <li>Product Recommendations</li>
    //             <li>Product Reviews</li>
    //             <li>SEO</li>
    //             <li>Social Selling</li>
    //           </ul>
    //         </div>
            
    //       ))}
    //     </div>
    //   </div>
    //   <hr className="my-4" />
    //   <div className="mx-auto max-w-6xl items-center justify-between px-4 pb-2 md:flex lg:px-0">
    //     <Link to='/' className="inline-flex items-center">
    //     <img src={logo} alt="" width={"50px"} />
    //       <span className="ml-4 text-lg font-bold">Shop Online</span>
    //     </Link>
    //     <div className="mt-4 md:mt-0">
    //       <p className="text-sm font-medium text-gray-500">Designed & Developed By <Link to='https://linkedin.com/in/ravimeranjan'>Ravi Ranjan</Link></p>
    //     </div>
    //     <div className="mt-4 md:mt-0">
    //       <p className="text-sm font-medium text-gray-500">© 2023 Shop Online. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>



<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Features</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Inventory Management</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Social Selling</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Automated Emails</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Product Reviews</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Insights & Blogs</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Developer Resources</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">User Guide</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Cookie Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Discover</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Guides</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Templates</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Customer Stories</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Integrations</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h1 className="title-font font-large text-gray-900 tracking-widest text-sm mb-3">Subscribe to our Newsletter</h1>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" className="leading-7 text-sm text-gray-600"> </label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Join Now</button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        {/* <svg src="assest/image/shopkart-logo.png" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <img src={logo} alt="" width={"50px"} />
        
        <span className="ml-3 text-xl">Shopkart</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Shopkart Shop Online. All rights reserved.
        <a href="'https://linkedin.com/in/ravimeranjan'" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Ravi Ranjan</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

  )
}


