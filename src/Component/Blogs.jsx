import React from 'react'
import {Link} from 'react-router-dom'
import blogs from './Blogs.json'; 


const Blogs = () => {
  return (
    <div className="">
    <h1 className='ml-5 m-2 text-2xl text-gray-600 '>Blogs</h1>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-6'>
      {
        blogs.map((records, index)=>{
          const spliceText = records.summary.slice(0,150)
          return (
          
          <div key={index} className="bg-gray-100 border border-gray-300  w-[100%] rounded-xl ">
            <div className='p-3'>
          <h1 className='font-semibold text-gray-600'>Title: {records.title}</h1>
          <p className='text-[.9rem] p-2 text-gray-600'>{spliceText}...... </p>
            <h3 className='text-gray-600 font-semi'> <span className='font-semibold'>Lesson:</span> <span className='text-[.9rem]'> {records.lesson}</span> </h3>
            <h3 className='text-gray-600'><span className='font-semibold'>Reference</span> <span className='text-[.9rem]'> {records.reference}</span> </h3>
            <Link to={`/BlogsDetails/${records.title}`}>
                <button className="bg-gray-200 border border-gray-300 w-[17%] mt-3 cursor-pointer hover:text-gray-200 hover:bg-gray-500 transition-all duration-300 rounded p-[.2rem] text-gray-600 text-[.8rem]">Read more</button>

            </Link>

        </div>
      </div>

        )})

      }
    </div>
</div>
  )
}

export default Blogs
