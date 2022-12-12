import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";
import NavBar from "./NavBar";

const PageTwo = () => {
  const [sectorData, setScetorData] = useState();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setScetorData(data);
      });
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const sector = event.target.sector.value;

    const inputData = {
      name: name,
      sector: sector,
    };
    localStorage.setItem("formData", JSON.stringify(inputData));
    event.target.reset();
    toast.success('Your data is successfully stored!')
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-white h-screen">
        <div className="flex justify-center mx-auto my-8">
          <form onSubmit={handleForm}>
            <div className="bg-blue-200 flex flex-col gap-5 max-w-xs border p-4 rounded-md shadow-lg">
              <h1 className="text-gray-600 font-semibold">
                Please enter your name and pick the Sectors you are currently
                involved in.
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sector</span>
                </label>
                <select
                  name="sector"
                  required
                  className="select select-bordered w-full max-w-xs"
                >
                  {sectorData &&
                    sectorData?.map((data) => (
                      <option key={data?.id}>{data?.name}</option>
                    ))}
                </select>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" required />
                <p> Agree to terms</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-gray-500 font-semibold px-3 py-1 hover:bg-gray-600 text-white rounded-md w-full">
                  Submit
                </button>
                <label
                  htmlFor="test-modal"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer w-full"
                >
                  View data
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default PageTwo;
