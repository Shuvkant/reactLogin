import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {
        /*
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.pexels.com/photos/3699654/pexels-photo-3699654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
      */
      }
      <h1 className="uppercase text-center font-medium text-red-600">
        Employee Management System
      </h1>
      <div className="bg-zinc-300 w-1/6 h-full mt-2 rounded-xl">
        <img
          className="rounded-2xl cursor-pointer"
          src="https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="flex flex-col py-3 px-5  space-y-[2px]">
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semi-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Home
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semi-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Employee Database
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semi-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Attendance and leave management
          </button>

          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semi-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Payroll Information
          </button>
        </div>

        <div className=" py-2 items-center flex flex-col">
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semi-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

