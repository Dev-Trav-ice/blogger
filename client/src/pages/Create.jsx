import React, { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flexCenter">
        <div>
          <h1 className="text-center text-2xl font-bold my-5">
            Create New Post
          </h1>

          <form className="flex flex-col gap-5 md:w-[350px]">
            <div className="p-3 bg-gray-300">
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
              />
            </div>

            <div className="p-3 bg-gray-300">
              <input
                type="text"
                placeholder="Summary"
                name="summary"
                onChange={handleChange}
                className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
              />
            </div>

            <div className="p-3 bg-gray-300">
              <textarea
                name="description"
                onChange={handleChange}
                placeholder="description"
                className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
              ></textarea>
            </div>

            <div>
              <input type="file" name="" id="" />
            </div>

            <button className="p-3 bg-black text-white text-[16px] rounded-md">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
