import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";
import NavBar from "./NavBar";
const PageOne = () => {
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
    <div className="bg-gray-200">
      <NavBar></NavBar>
      <div className="h-screen">
        <div className="flex justify-center mx-auto py-8">
          <form onSubmit={handleForm}>
            <div className="bg-white flex flex-col gap-5 max-w-xs border p-4 rounded-md shadow-lg">
              <h1 className="text-amber-500 font-semibold">
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
                <input
                  type="checkbox"
                  required
                  className="checkbox checkbox-info"
                />
                <p className="text-gray-500"> Agree to terms</p>
              </div>
              <button className="bg-amber-500 font-semibold px-3 py-1 text-white hover:bg-amber-600 rounded-md">
                Submit
              </button>
              <label
                htmlFor="test-modal"
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
              >
                Show stored data
              </label>
            </div>
          </form>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default PageOne;
