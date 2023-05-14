
import img1 from '../assets/img/team1.png'

const Comment = () => {
    return (
        <div className='mt-[88px]'>
            <h2 className='text-center text-3xl font-bold text-gray-700 '>সফল আইকনরা যা বলেছেন</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className='bg-gray-100 m-20 p-10 border rounded-xl shawdow-lg'>
                    <div className='flex'>
                        <img src={img1} className='w-24 h-24 rounded-full m-2' alt="" />
                        <div>
                            <h5>Xafnun Ahmed</h5>
                            <p>Film and Television Department, Jagannath University</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-500">
                            <path d="M21.305 10.415c-.833-.833-2.187-.833-3.02 0-.695.695-.84 1.725-.444 2.532.374.705 1.064 1.224 1.846 1.399v4.59h-4.37c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h8.28c.828 0 1.5-.673 1.5-1.5v-8.28c0-.782-.618-1.472-1.399-1.846zm-9.305 0c-.833-.833-2.187-.833-3.02 0-.695.695-.84 1.725-.444 2.532.374.705 1.064 1.224 1.846 1.399v4.59h-4.37c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h8.28c.828 0 1.5-.673 1.5-1.5v-8.28c0-.782-.618-1.472-1.399-1.846z" />
                        </svg>
                        <p> Ostad Icon হিসেবে আমার জার্নিটা শুরু হয়েছিল গত তিনমাস আগে। Ostad এর কোর্সগুলোর অনেক সাফল্য থাকার কারণে খুব সহজেই সেল করা যায়।</p>
                    </div>
                </div>
                <div className='bg-gray-100 m-20 p-10 border rounded-lg shawdow-lg'>
                    <div className='flex'>
                        <img src={img1} className='w-24 h-24 rounded-full' alt="" />
                        <div>
                            <h5>Xafnun Ahmed</h5>
                            <p>Film and Television Department, Jagannath University</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-500">
                            <path d="M21.305 10.415c-.833-.833-2.187-.833-3.02 0-.695.695-.84 1.725-.444 2.532.374.705 1.064 1.224 1.846 1.399v4.59h-4.37c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h8.28c.828 0 1.5-.673 1.5-1.5v-8.28c0-.782-.618-1.472-1.399-1.846zm-9.305 0c-.833-.833-2.187-.833-3.02 0-.695.695-.84 1.725-.444 2.532.374.705 1.064 1.224 1.846 1.399v4.59h-4.37c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h8.28c.828 0 1.5-.673 1.5-1.5v-8.28c0-.782-.618-1.472-1.399-1.846z" />
                        </svg>
                        <p> Ostad Icon হিসেবে আমার জার্নিটা শুরু হয়েছিল গত তিনমাস আগে। Ostad এর কোর্সগুলোর অনেক সাফল্য থাকার কারণে খুব সহজেই সেল করা যায়।</p>
                    </div>
                </div>
            </div>
        </div>
        


    );
};

export default Comment;