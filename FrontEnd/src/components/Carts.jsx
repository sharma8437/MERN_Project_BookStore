import React from 'react'

const Carts = ({items}) => {
  
  return (
    <>
    <div className='mt-6 my-3 px-3  dark:text-white' >
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={items.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {items.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${items.price}</div>
      <div className=" cursor-pointer px-2 py-1  border-[1px] rounded-lg  hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Carts