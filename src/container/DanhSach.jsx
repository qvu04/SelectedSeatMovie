import React from 'react'
import { dataPhim } from './dataPhim'

export default function DanhSach({ handleSelectedSeat, selectedSeat }) {
    let renderPhim = () => {
        return dataPhim.map((item, index) => {
            return <div className='flex mb-3 items-center justify-center w-full' key={index}>
                <span className='text-yellow-300 text-3xl font-bold gap-5 text-center w-1/2'>{item.hang}</span>
                {item.danhSachGhe.map((item, index) => {

                    return (
                        <div className='grid grid-cols-10 gap-2 w-full items-center justify-center'>
                            <button onClick={() => {
                                handleSelectedSeat(item);

                            }} className='px-4 py-2 rounded-sm border-2 w-fit text-center cursor-pointer border-yellow-200 bg-gray-100' key={index} style={{
                                backgroundColor: item.daDat ? "gray" : selectedSeat.some((seat) => seat.soGhe === item.soGhe) ? "green" : "white",
                                cursor: item.daDat ? "not-allowed" : "pointer",

                            }}>
                                {item.soGhe}

                            </button>
                        </div>
                    )
                })}

            </div>
        })
    }
    return (
        <div>
            {renderPhim()}
        </div>
    )
}
