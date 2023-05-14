

import Comment from './Comment.jsx';
import Faq from './Faq.jsx';
import Footer from './Footer.jsx';
import HelpLine from './HelpLine.jsx';
import IconDescription from './IconDescription.jsx';
import Navbar from './Navbar.jsx';
import Services from './Services.jsx';

const Home = () => {
    return (
        <>
            <Navbar />
            <IconDescription />
            <Comment />
            <Services />
            <Faq />
            <HelpLine />
            <Footer/>
            
           
            
        </>
    );
};

export default Home;