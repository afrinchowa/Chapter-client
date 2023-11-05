import NewsLetter from "../NewsLetter/NewsLetter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import About from "./About/About";
import Banner from "./Banner";
import Reviews from "./Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <RecentBlogs></RecentBlogs>
            <NewsLetter></NewsLetter>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;