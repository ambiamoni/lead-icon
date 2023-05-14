import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className='bg-gray-100 p-20 text-center'>
            <h2 className='text-center text-4xl text-gray-800 font-bold py-20'>Lead <span className='mr-5 text-yellow-500 tracking-tight  font-bold text-4xl' >ICON</span>Program এ যা যা থাকছে </h2>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
                    <figure><img className="bg-pink-200" src="https://cdn.ostad.app/public/upload/2022-12-21T05-03-36.065Z-icon-14.svg" alt="Shoes" /></figure>
                    <div className="card-body py-4 ">
                        <h2 className="card-title text-lg">১. রেজিস্ট্রেশন করুন</h2>
                        <p>আপনার মোবাইল নম্বরটি দেয়ার পর, ওটিপি চলে আসবে ঐ নম্বরে এবং তারপর আপনার সুবিধামতো একটি পাসওয়ার্ড দিয়ে রেজিষ্ট্রেশন করুন।.</p>

                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
                    <figure><img className="bg-green-200" src="https://cdn.ostad.app/public/upload/2022-12-21T05-04-16.842Z-icon-15.svg" alt="Shoes" /></figure>
                    <div className="card-body py-4 ">
                        <h2 className="card-title text-lg">১. রেজিস্ট্রেশন করুন</h2>
                        <p>আপনার মোবাইল নম্বরটি দেয়ার পর, ওটিপি চলে আসবে ঐ নম্বরে এবং তারপর আপনার সুবিধামতো একটি পাসওয়ার্ড দিয়ে রেজিষ্ট্রেশন করুন।.</p>

                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
                    <figure><img className="bg-blue-200" src="https://cdn.ostad.app/public/upload/2022-12-21T05-04-45.921Z-icon-16.svg" alt="Shoes" /></figure>
                    <div className="card-body py-4 ">
                        <h2 className="card-title text-lg">১. রেজিস্ট্রেশন করুন</h2>
                        <p>আপনার মোবাইল নম্বরটি দেয়ার পর, ওটিপি চলে আসবে ঐ নম্বরে এবং তারপর আপনার সুবিধামতো একটি পাসওয়ার্ড দিয়ে রেজিষ্ট্রেশন করুন।.</p>

                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
                    <figure><img className="bg-pink-200" src="https://cdn.ostad.app/public/upload/2022-12-21T05-03-36.065Z-icon-14.svg" alt="Shoes" /></figure>
                    <div className="card-body py-4 ">
                        <h2 className="card-title text-lg">১. রেজিস্ট্রেশন করুন</h2>
                        <p>আপনার মোবাইল নম্বরটি দেয়ার পর, ওটিপি চলে আসবে ঐ নম্বরে এবং তারপর আপনার সুবিধামতো একটি পাসওয়ার্ড দিয়ে রেজিষ্ট্রেশন করুন।.</p>

                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
                    <figure><img className="bg-pink-200" src="https://cdn.ostad.app/public/upload/2022-12-21T05-03-36.065Z-icon-14.svg" alt="Shoes" /></figure>
                    <div className="card-body py-4 ">
                        <h2 className="card-title text-lg">১. রেজিস্ট্রেশন করুন</h2>
                        <p>আপনার মোবাইল নম্বরটি দেয়ার পর, ওটিপি চলে আসবে ঐ নম্বরে এবং তারপর আপনার সুবিধামতো একটি পাসওয়ার্ড দিয়ে রেজিষ্ট্রেশন করুন।.</p>

                    </div>
                </div>
            </div>
            <div className='bg-gray-600 mt-10 hover:bg-gray-800 rounded-md inline-block'>
                <Link to="/login" className='px-5 py-2 text-white text-sm font-bold flex'>
                    Earnning Start
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6 font-bold text-white ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link></div>
        </div>
    );
};

export default Services;