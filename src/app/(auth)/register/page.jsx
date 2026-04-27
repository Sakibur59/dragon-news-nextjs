"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { name, email, password, photo } = data;

    const { data:res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res,error);
    if(error){
      alert(error.message);
    }
    if(res){
      alert("SignUp Successful");
    }
  };

  return (
    <div className="w-300 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="px-20 py-20 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6 ">
          Register Your Account
        </h2>
        <form
          onSubmit={handleSubmit(handleRegisterFunc)}
          className="space-y-4 border-t border-t-slate-200"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              {...register("name", { required: "Name field is required" })}
              type="text"
              className="input"
              placeholder="Type your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              {...register("email", { required: "Email field is required" })}
              type="email"
              className="input"
              placeholder="Type your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              {...register("photo", {
                required: "Photo URL field is required",
              })}
              type="text"
              className="input"
              placeholder="Type your Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", {
                required: "Password field is required",
              })}
              type="password"
              className="input"
              placeholder="Enter your Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn bg-slate-800 text-white w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
