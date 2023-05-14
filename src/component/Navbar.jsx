import { Link } from "react-router-dom";


const Navbar = () => {

   
    return (
        <div className=" bg-[#1A1A4C]">
            <div className='hero-top navbar px-20 flex justify-between'>
                
                    <div className="flex-1">
                        <h2 className='font-bold text-5xl  text-gray-100 mb-2 tracking-tight'>
                            Lead
                        </h2>
                        <span className='bg-gray-900 text-yellow-500 m-0 tracking-tight rounded  font-bold text-4xl' >Icon</span>
                    </div>

                
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-gray-200 ">
                        <li className='text-sm font-bold'><a><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        </span>Learn more <span>+8801960888814</span></a></li>

                        <li className='text-sm font-bold'>
                            <Link to="/login"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                         Login/Signup</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hero-bottom flex gap-4 text-light-200 px-20">
                <div className="hero-info">
                    <h2 className='text-5xl text-white mt-[88px]'>আয় করতে চান, ঘরে বসে? <br />যুক্ত হোন Lead ICON হিসেবে</h2>
                    <p className='text-sm my-5 font-medium text-white'>নিজেই হয়ে উঠুন নিজের Icon.</p>
                    <div className='flex mt-10'>
                        <div className='border-r-2 border-gray-500 p-4'>
                            <p className='text-2xl font-medium text-white'>৬০ জন+</p>
                            <p className='text-sm font-bold text-white'>সফল আইকন</p>
                        </div>
                        <div className='border-r-2 border-gray-500 p-4'>
                            <p className='text-2xl font-medium text-white'>৳ ১.৫ লাখ+</p>
                            <p className='text-sm font-bold text-white'>মোট ইনকাম</p>
                        </div>
                        <div className='border-r-2 border-gray-500 p-4'>
                            <p className='text-2xl font-medium text-white'>৳ ৭ হাজার+</p>
                            <p className='text-sm font-bold text-white'>মোট গড় আয়</p>
                        </div>
                    </div>
                    <div className='bg-gray-600 mt-10 hover:bg-gray-800 rounded-md inline-block'>
                        <Link to="/login"  className='px-5 py-2 text-white text-sm font-bold flex'>
                            Earnning Start
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6 font-bold text-white ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                       </Link></div>
                </div>
                <div className="hero-img mt-[48px]">
                    <img className="w-full h-[477px]" src="https://cdn.ostad.app/public/upload/2023-03-01T08-34-20.903Z-hero-img.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Navbar;