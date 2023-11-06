const Reviews = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-800">
        
          Happy Customer Reviews
        </h1>
        <p className="mt-8">
          At CHAPTER, our readers satisfaction is our top priority. We are
          delighted to share some of the heartwarming reviews from our happy
          customers who have found inspiration, knowledge, and enjoyment in our
          content.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 ">
        <div className=" card card-side bg-base-100 shadow-xl w-96 h-80">
          <div className="avatar">
            <div className="w-24 h-28 mt-8 rounded-full">
              <img src="https://i.ibb.co/Dwksv7G/Kayla-Person.jpg" />
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title text-purple-600">Aleen Raia</h2>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <p>
              {" "}
              I can not express how valuable this blog has been in expanding my
              knowledge and interests. The content is consistently enlightening
              and well-presented. It is my go-to destination for inspiration and
              learning.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl w-96 h-80">
          <div className="avatar">
            <div className="w-24 h-28 mt-8 rounded-full">
              <img src="https://i.ibb.co/TB83Hhy/download.jpg" />
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title text-purple-600">Jackson Mendel</h2>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <p>
              The articles on this blog are not just informative; they are
              awe-inspiring. The diverse range of topics keeps me coming back
              for more. It is a treasure trove of ideas and insights!
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl w-96 h-80">
          <div className="avatar">
            <div className="w-24 h-28 mt-8 rounded-full">
              <img src="https://i.ibb.co/fd1W8Px/pexels-photo-220453.webp" />
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title text-purple-600">Robert Frost</h2>
            <div className="rating ">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <p>
              I have been a regular reader of this blog for some time, and I am
              consistently impressed by the depth of research and the engaging
              writing style. The content provides a unique perspective on
              various subjects, and it is always a pleasure to read.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <button className="mt-8 bg-purple-400 btn btn-wide">See More</button>

    </div>
  );
};

export default Reviews;
