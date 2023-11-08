

import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const UpdateBlogs = () => {

    
        const handleUpdateBlog = (event) => {
          event.preventDefault();
      
          const form = event.target;
          const title = form.title.value;
          const category = form.category.value;
          const date = form.date.value;
          const shortDescription = form.shortDescription.value;
          const longDescription = form.longDescription.value;
          const photoUrl = form.photoUrl.value;
          const updateBlog = {
            title,
            category,
            date,
            shortDescription,
            longDescription,
            photoUrl,
          };
          console.log(updateBlog);
      
          // send data to the server
          fetch(`https://chapter-server.vercel.app/blog/${_id}`,{
              method:'PUT',
              headers:{
                  'content-type': 'application/json'
              },
              body:JSON.stringify(updateBlog)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if(data.modifiedCount > 0){
                  Swal.fire({
                      title: "Good job!",
                      text: "Blog Updated Successfully!",
                      icon: "success"
                    });
              }
          })
        };

const blog = useLoaderData();
const { _id, title, photoUrl, shortDescription, longDescription,category ,date} = blog;

    return (
        <div>
         <div className="bg-purple-300 p-24">
      <h1 className="text-3xl font-extrabold text-center">Update Blogs:{title}</h1>
      <form onSubmit={handleUpdateBlog}>
        {/* form name, category row */}
        <div className="md:flex mb-8 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={title}
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
              {/* <input
                name="category"
                type="select" 
                placeholder="Category"
                className="input input-bordered w-full"
              /> */}
              <select  className='input input-bordered w-full ' name="category" id='blogs'>
                <option value=""> </option>
                <option value="Fitness"> Fitness</option>
                <option value="Travel"> Travel</option>
                <option value="Photography"> Photography</option>
                <option value="Health & Wellness"> Health & Wellness</option>
                <option value="Home Improvement"> Home Improvement</option>
                <option value="Science & Environment">Science & Environment</option>
                <option value="Technology"> Technology
l</option>
                <option value="Writing & Literature"> Writing & Literature</option>
                <option value="Food & Cooking"> Food & Cooking</option>
                <option value="History"> History</option>
                
              </select>
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
              defaultValue={shortDescription}
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
              defaultValue={longDescription}
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
              defaultValue={date}
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
              defaultValue={photoUrl}
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
          value="updateBlog"
        />
      </form>
    </div>
        </div>
    );
};

export default UpdateBlogs;