import Swal from "sweetalert2";

const NewsLetter = () => {


  
  return (
    <div className="text-center p-20  bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-400  border-8 border-purple-900">
      <h1 className="text-4xl text-purple-800 font-bold mb-4">NEWSLETTER</h1>
      <p className="mb-4">
        KEEP UP OUR LATEST NEWS AND EVENT.SUBSCRIBE OUR NEWSLETTER
      </p>
      <div>
        <div className=" md:join felx flex-col md:flex-row">
          <input
            className="input input-bordered md:join-item "
            placeholder="Email"
          />
          <button className="btn md:join-item  rounded-r-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
