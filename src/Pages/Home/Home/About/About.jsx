
import about from '../../../../assets/img-25.jpg'
import aboutUs from '../../../../assets/img-24.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mb-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className='w-1/2 relative'>
        <img
          src={about}
          className="origin-bottom -rotate-12 w-3/4 rounded-lg shadow-2xl"/>
        <img
          src={aboutUs}
          className="origin-top-left rotate-12 w-1/2 absolute right-5 top-1/3 border-8 border-white rounded-lg shadow-2xl"/>
      
        </div>
        <div className='lg:w-1/2'>
          <h1 className="text-3xl font-bold text-purple-800">About Us</h1>
          <h1 className="text-5xl font-bold">we're here to help you</h1>
          <p className="py-6">
          Welcome to CHAPTER, a place where words come to life, ideas are shared, and stories unfold. We are more than just a blogging website; we are a community of passionate writers, thinkers, and storytellers who have come together to create a platform where knowledge, inspiration, and creativity thrive.
          </p>
          <button className="btn btn-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
