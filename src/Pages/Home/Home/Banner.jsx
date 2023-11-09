import img1 from "../../../assets/img-1.jpg";
import img2 from "../../../assets/img-2.jpg";
import img3 from "../../../assets/img-3.jpg";
import img4 from "../../../assets/img-4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex justify-center items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white pl-12 space-y-7 w-1/2  ">
            <h2 className="text-6xl font-bold">
              Discover Inspiration and Insights
            </h2>
            <p> Your Source for Creativity and Knowledge.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle bg-purple-300  mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-purple-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Explore Life is Adventures</h2>
            <p>Travel, Food, and Stories from Around the World.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle bg-purple-300 mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-purple-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Unleash Your Inner Chef</h2>
            <p> Mouthwatering Recipes and Culinary Adventures Await.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide2" className="btn btn-circle bg-purple-300 mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-purple-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-6xl font-bold">Embrace a Healthier You</h2>
            <p>Wellness Tips, Fitness Insights, and More..</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle bg-purple-300  mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-purple-300">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
