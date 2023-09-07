import React from 'react';
import useForm from '../utils/hooks/useForm';
import validate from '../utils/helpers/validate';

const Contact = () => {
  const { values, handleInputChange, handleSubmit, errors } = useForm(submit, validate)

    const { title, body, author, number, email } = values;
    
    
    function submit() {
        console.log("No errors", values)
        const post = values;
      console.log('Submit form', post)
    }
  return (
    <section className=" w-4/5 mx-auto body-font relative">
    {/* <div className="absolute h-4/5 inset-10">
      <iframe className='w-full h-full'  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{filter: `grayscale${(1)} contrast${(1.2)} opacity${(0.4)}`}}></iframe>
    </div> */}
    <div className="container px-5 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 py-10 shadow-md my-auto">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Form</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Send a message</p>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
       <form onSubmit={handleSubmit} noValidate
              className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 py-10 shadow-md my-auto"
       >
                <label className="leading-7 text-sm text-gray-600 mt-4">Blog title:</label>
                <input
                    type="text"
                    required 
                    name="title"
                    value={title || ""}
                    onChange={handleInputChange}
                    // onBlur={validateInputs}
                    className={`w-full bg-white rounded border ${errors.title ? 'border-red-600' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
              {errors.title && (<p className="text-red-600 text-sm">{errors.title}</p>)}

                <label className="leading-7 text-sm text-gray-600 mt-4">Blog body:</label>
                <textarea
                    required
                    name="body"
                    value={body || ""}
                    onChange={handleInputChange}
                    // onBlur={validateInputs}
                    className={`w-full bg-white rounded border ${errors.body ? 'border-red-600' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.body && (
          <p className="text-red-600 text-sm">{errors.body}</p>
        )}
                <label className="leading-7 text-sm text-gray-600 mt-4">Author:</label>
                <input
                    type="text"
                    required
                    name="author"
                    value={author || ""}
                    onChange={handleInputChange}
                    // onBlur={validateInputs}
                    className={`w-full bg-white rounded border ${errors.author ? 'border-red-600' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.author && (
          <p className="text-red-600 text-sm">{errors.author}</p>
        )}
                <label className="leading-7 text-sm text-gray-600 mt-4">Number:</label>
                <input
                    type="number"
                    required
                    name="number"
                    value={number || ""}
                    onChange={handleInputChange}
                    // onBlur={validateInputs}
                    className={`w-full bg-white rounded border ${errors.number ? 'border-red-600' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                  {errors.number && (
          <p className="text-red-600 text-sm">{errors.number}</p>
        )}
                <label className="leading-7 text-sm text-gray-600 mt-4">Email:</label>
                <input
                    type="text"
                    required
                    name="email"
                    value={email || ""}
                    onChange={handleInputChange}
                    // onBlur={validateInputs}
                    className={`w-full bg-white rounded border ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                  {errors.email && (
          <p className="text-red-600 text-sm">{errors.email}</p>
        )}
                <button className="text-white mt-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>
            </form>
    </div>
  </section>
  ); 
};

export default Contact;
