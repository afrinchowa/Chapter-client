import Swal from 'sweetalert2'

const AddBlogs = () => {
  const handleAddBlog = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const category = form.category.value;
    const date = form.date.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const photoUrl = form.photoUrl.value;
    const newBlog = {
      title,
      category,
      date,
      shortDescription,
      longDescription,
      photoUrl,
    };
    console.log(newBlog);

    // send data to the server
    fetch('http://localhost:5000/blog',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(newBlog)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: "Good job!",
                text: "Blog Added Successfully!",
                icon: "success"
              });
        }
    })
  };

  return (
    <div className="bg-purple-300 p-24">
      <h1 className="text-3xl font-extrabold text-center">Add Blogs</h1>
      <form onSubmit={handleAddBlog}>
        {/* form name, category row */}
        <div className="md:flex mb-8 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                name="title"
                type="text"
                placeholder="Blog Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Short des ,long des  row */}
        <div className="md:flex mb-8 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description </span>
            </label>
            <label className="input-group">
              <input
                name="shortDescription"
                type="text"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                name="longDescription"
                type="text"
                placeholder="Long Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo Url  row */}
        <div className="md:flex mb-8 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Posted Date</span>
            </label>
            <label className="input-group">
              <input
                name="date"
                type="date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                name="photoUrl"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-block bg-purple-400"
          type="submit"
          value="Add Blog"
        />
      </form>
    </div>
  );
};

export default AddBlogs;
