import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className='flex justify-around p-20 bg-gray-100 shadow-lg'>
            <div>
                <Link to="/" className="flex">
                    <h2 className='font-bold text-5xl tracking-tight text-gray-900 mb-2'>
                        Lead
                    </h2>
                    <span className='bg-gray-900 tracking-tight text-yellow-500 m-0  rounded  font-bold text-4xl' >Icon</span>
                </Link>
                <p className='mt-3'> নিজেই হয়ে উঠুন নিজের Icon.</p>
                <p className='mt-3'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
                <div className='flex gap-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-pink-200 m-3">
                        <path d="M19.5 0h-15C2.678 0 0 2.678 0 6v12c0 3.322 2.678 6 6 6h7.5v-9h-2.25v-3h2.25v-1.5c0-2.722 1.861-4.5 4.5-4.5 1.281 0 2.519.238 2.519.238l-.344 2.771s-.962-.174-1.875-.174c-.966 0-1.031.477-1.031 1.219v1.5h2.203l-.286 3h-1.917v9H19.5c3.322 0 6-2.678 6-6v-12c0-3.322-2.678-6-6-6z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 bg-pink-200 m-3">
                        <path fill="#1DA1F2" d="M22.46 5.54c-.8.36-1.64.6-2.52.7.91-.54 1.62-1.4 1.95-2.42-.86.5-1.82.86-2.83 1.05-.81-.87-1.96-1.41-3.23-1.41-2.45 0-4.43 1.98-4.43 4.43 0 .35.04.7.1 1.04-3.68-.18-6.95-1.95-9.14-4.63-.38.65-.6 1.41-.6 2.22 0 1.53.78 2.87 1.96 3.66-.72-.02-1.4-.22-2-.54v.06c0 2.14 1.51 3.92 3.5 4.33-.36.09-.74.14-1.14.14-.28 0-.55-.03-.82-.08.55 1.7 2.14 2.94 4.04 2.98-1.48 1.15-3.34 1.83-5.37 1.83-.35 0-.7-.02-1.04-.06 1.92 1.23 4.2 1.94 6.67 1.94 8.02 0 12.42-6.64 12.42-12.42 0-.19-.01-.37-.02-.56.85-.62 1.58-1.4 2.16-2.28z" />
                    </svg>
                    <svg className="w-6 h-6 bg-pink-200 m-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.046 7.87c-.243-.903-.96-1.608-1.863-1.85a9.986 9.986 0 0 0-4.144-.906c-1.5-.038-3 .03-4.487.216a7.914 7.914 0 0 0-3.618 1.564C6.24 8.848 6 10.405 6 12.002v.504c0 1.597.24 3.154.699 4.662a7.914 7.914 0 0 0 3.618 4.254c1.487.186 2.987.254 4.487.216a9.984 9.984 0 0 0 4.144-.906c.903-.242 1.62-.947 1.863-1.85.222-.813.206-1.67-.054-2.482a8.019 8.019 0 0 0-1.41-2.282 8.007 8.007 0 0 0-2.282-1.41c-.813-.26-1.67-.276-2.483-.054zm-11.046 6.128V9.001l5.955 3.5-5.955 3.497z" /></svg>
                    <svg className="w-6 h-6 bg-pink-200 m-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.7 5H6.3C4.8 5 3.6 6.2 3.6 7.7v9.6c0 1.5 1.2 2.7 2.7 2.7h11.3c1.5 0 2.7-1.2 2.7-2.7V7.7c0-1.5-1.2-2.7-2.7-2.7zM12 14.4c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zM16.2 8c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z" /></svg>


                </div>
                <p>2022 Lead Limited. All rights reserved.</p>
            </div>
            <div>
                <p className='mb-5 font-bold'> কুইক লিঙ্ক </p>
                <p className='mb-3'>  ফ্রি রেজিস্ট্রেশন</p>
                <p className='mb-3'>লগ ইন / সাইন আপ</p>
                <p className='mb-3'>সচরাচর পাওয়া প্রশ্নসমূহ</p>
                <p className='mb-3'> শর্তাবলী</p>
            </div>
            <div>
                <p className='mb-5 font-bold'> যোগাযোগ </p>
                <a className='mb-2 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 font-bold mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                    <span>+8801960888814</span></a>
                <a className='mb-2 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                    <span>lead@icon.com</span></a>
                <a className='mb-2 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>


                    <span>lead@icon.com</span></a>

            </div>

        </div>
    );
};

export default Footer;