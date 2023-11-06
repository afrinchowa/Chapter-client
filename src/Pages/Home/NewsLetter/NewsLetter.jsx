const NewsLetter = () => {
  return (
    <div className="text-center p-20  bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-400  border-[180px] border-purple-900">
        <h1 className="text-4xl text-purple-800 font-bold mb-4">NEWSLETTER</h1>
        <p className="mb-4">KEEP UP OUR LATEST NEWS AND EVENT.SUBSCRIBE OUR NEWSLETTER</p>
      <div>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item  rounded-r-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
