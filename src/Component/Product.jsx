import React from 'react'
import Mixcat from '../assets/mixcat.png'

function Product() {
  return (
    <div className="flex justify-center items-center flex-col">
        <span className='flex w-[1000px] items-center flex-col'>
            <div className="flex w-full justify-strat">
                <h1 className='text-[32px] py-[32px]'>Snack</h1>
            </div>
            <div className="grid grid-cols-3 gap-[5px]">

                <a href='' className='w-[330px] h-[588px] group' id='Card-1'>
                    <div className="group w-[330px] h-[500px] overflow-hidden">
                        <img src={Mixcat} alt="" className='h-full group-hover:scale-125 duration-1000' />
                    </div>
                    <a href='' className='text-[1rem] group-hover:border-b-2 border-gray-500 delay-200'>TheFatCat</a>
                    <p className='text-[1.2rem]'>From 999 THB</p>
                </a>

                <a href='' className='w-[330px] h-[588px] group' id='Card-2'>
                    <div className="group w-[330px] h-[500px] overflow-hidden">
                        <img src={Mixcat} alt="" className='h-full group-hover:scale-125 duration-1000' />
                    </div>
                    <a href='' className='text-[1rem] group-hover:border-b-2 border-gray-500 delay-200'>TheFatCat</a>
                    <p className='text-[1.2rem]'>From 999 THB</p>
                </a>

                <a href='' className='w-[330px] h-[588px] group' id='Card-3'>
                    <div className="group w-[330px] h-[500px] overflow-hidden">
                        <img src={Mixcat} alt="" className='h-full group-hover:scale-125 duration-1000' />
                    </div>
                    <a href='' className='text-[1rem] group-hover:border-b-2 border-gray-500 delay-200'>TheFatCat</a>
                    <p className='text-[1.2rem]'>From 999 THB</p>
                </a>

                <a href='' className='w-[330px] h-[588px] group' id='Card-4'>
                    <div className="group w-[330px] h-[500px] overflow-hidden">
                        <img src={Mixcat} alt="" className='h-full group-hover:scale-125 duration-1000' />
                    </div>
                    <a href='' className='text-[1rem] group-hover:border-b-2 border-gray-500 delay-200'>TheFatCat</a>
                    <p className='text-[1.2rem]'>From 999 THB</p>
                </a>

            </div>
        </span>

        <span className='flex w-[1000px] items-center flex-col'>
            <div className="flex w-full justify-strat">
                <h1 className='text-[32px] py-[32px]'>Drink</h1>
            </div>
            <div className="grid grid-cols-3 gap-[5px]">

                <a href='' className='w-[330px] h-[588px] group' id='Card-5'>
                    <div className="group w-[330px] h-[500px] overflow-hidden">
                        <img src={Mixcat} alt="" className='h-full group-hover:scale-125 duration-1000' />
                    </div>
                    <a href='' className='text-[1rem] group-hover:border-b-2 border-gray-500 delay-200'>TheFatCat</a>
                    <p className='text-[1.2rem]'>From 999 THB</p>
                </a>

                <a href='' className='w-[330px] h-[588px] group' id='Card-6'>
                    <div className="group w-[330px] h-[500px] overflow-hidden">
                        <img src={Mixcat} alt="" className='h-full group-hover:scale-125 duration-1000' />
                    </div>
                    <a href='' className='text-[1rem] group-hover:border-b-2 border-gray-500 delay-200'>TheFatCat</a>
                    <p className='text-[1.2rem]'>From 999 THB</p>
                </a>
            </div>
        </span>
    </div>
  )
}

export default Product