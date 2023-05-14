
import img2 from '../assets/img/architect.png'

const HelpLine = () => {
    return (
        <div>
            <div className='bg-[#1d2939] w-90 h-[250px] rounded-lg m-20 flex justify-between'>
                <div className='flex  p-5'>
                    <img src={img2} alt="" className='rounded-full w-24 h-24 mx-10 mt-10' />
                    <div className='mt-10'>
                        <h2 className='text-xl font-bold text-white'>আপনার কি হেল্প প্রয়োজন?</h2>
                        <h3 className='text-lg font-bold text-white'>আইকন, প্রোগ্রাম, কোর্স এবং যেকোনো প্রয়োজনে কল করুন</h3>
                        <p className='text-sm font-bold text-white'> সকাল ৯ টা - রাত ১০ টা</p>


                    </div>

                </div>
                <div>
                    <button className='px-8 py-2 bg-gray-500 hover:bg-gray-700 rounded m-20 flex'>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 font-bold text-white mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                       
                        <span className='text-white'>+8801960888814</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default HelpLine;