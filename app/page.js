"use client"

import { useForm } from "react-hook-form"
import React, { useState, useEffect } from 'react';


export default function Home() {

  const [formResults, setFormResults] = useState(null);


  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      Name: "Vanesa", // it could be any previous value, state, data, etc.
    },
  });

  const onSubmit = data => {
    console.log(data);

    setFormResults((data));
    reset()
  }
  console.log(errors);

  const watchedName = (watch("Name"));

  return (
    <div className="flex flex-col justify-center items-center ">

      <h1 className="text-3xl font-semibold mt-20">Use-Hook-Form Library Practice</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <label htmlFor="Name" className="text-2xl mt-10">Name:</label>
        <input id="Name" type="text" placeholder="Name" {...register("Name", {
          required: "This field is required", max: 10, minLength: {
            value: 5,
            message: "Too short"
          }, maxLength: 20, pattern: /^[a-zA-Z0-9]+$/i
        })} className='border border-black p-2' />

        <p><span className="font-bold">Watch:</span> {watchedName}</p>

        <p className="text-red-500">{errors.Name?.message}</p>


        <label htmlFor="Fruit" className="mt-10 text-2xl">Favourite fruit:</label>
        <select {...register("Fruit", { required: "Choose one" })} className='border border-black p-2' id="Fruit">
          <option value="">Select a fruit</option>
          <option value="apple">apple</option>
          <option value=" mango"> mango</option>
          <option value=" banana"> banana</option>
        </select>

        <p className="text-red-500">{errors.Fruit?.message}</p>


        {/*Checkboxes */}

        <div className="mt-10">

          <label htmlFor="color" className="mt-10 text-2xl">Favourite color:</label>
          <div className="grid justify-center space-y-2">
            {/* red section */}
            <div className="flex space-x-4 items-center ">
              <input
                type="checkbox"
                value='red'
                className="w-5 h-5"

                {...register("color", {
                  required: {
                    value: true,
                    message: 'Color is required'
                  }
                })}
              />
              <p className="text-2xl">Red</p>
            </div>

            {/* yellow section */}
            <div className="flex space-x-4 items-center ">
              <input
                type="checkbox"
                value='yellow'
                className="w-5 h-5"

                {...register("color", {
                  required: {
                    value: true,
                    message: 'Color is required',
                    max: 2
                  }
                })}
              />
              <p className="text-2xl">Yellow</p>
            </div>

            {/* blue section */}
            <div className="flex space-x-4 items-center ">
              <input
                type="checkbox"
                value='blue'
                className="w-5 h-5"

                {...register("color", {
                  required: {
                    value: true,
                    message: 'Color is required'
                  }
                })}
              />
              <p className="text-2xl">Blue</p>
            </div>

            {/* green section */}
            <div className="flex space-x-4 items-center ">
              <input
                type="checkbox"
                value='green'
                className="w-5 h-5"

                {...register("color", {
                  required: {
                    value: true,
                    message: 'Color is required'
                  }
                })}
              />
              <p className="text-2xl">Green</p>
            </div>
            <div>
              {errors.color && <span className='text-red-500'>{errors.color.message}</span>}
            </div>
          </div>

        </div>


        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'>Submit</button>



      </form >

      {/* //Why I am using"?" ???? because of this Error: Objects are not valid as a React child (found: object with keys {Name, Fruit}). If you meant to render a collection of children, use an array instead. */}
      <div className="my-10">
        <p><span className="font-bold">Name: </span>{formResults?.Name}</p>
        <p><span className="font-bold">Fruit: </span>{formResults?.Fruit}</p>
        <p><span className="font-bold">Color: </span>{`${formResults?.color[0] ? formResults?.color[0] : ''}  
        ${formResults?.color[1] ? "& " + formResults?.color[1] : ''}  
        
        ${formResults?.color[2] ? "& " + formResults?.color[2] : ''}    
        ${formResults?.color[3] ? "& " + formResults?.color[3] : ''}`}
        </p>
      </div>
    </div >
  );
}


//FORM STATE: 

// The formState object is destructured to access the errors property, which contains any validation errors that occurred during form submission.

//HANDLE SUBMIT: 

//he handleSubmit function is being called with the onSubmit function as an argument.