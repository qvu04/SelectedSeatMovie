import React from 'react'
import { dataPhim } from './dataPhim'

export default function DanhSach({ handleSelectedSeat, selectedSeat }) {
    let renderPhim = () => {
        return dataPhim.map((item, index) => {
            return <div className='flex mb-3 items-center justify-center w-full' key={index}>
                <span className='text-yellow-300 text-3xl font-bold gap-5 text-center'>{item.hang}</span>
                {item.danhSachGhe.map((item, index) => {
                    return <button onClick={() => {
                        handleSelectedSeat(item);

                    }} className='p-3 m-3 border-2 cursor-pointer hover:bg-gray-200 border-yellow-200 gap-2 bg-gray-100' key={index} style={{
                        backgroundColor: item.daDat ? "gray" : selectedSeat.some((seat) => seat.soGhe === item.soGhe) ? "green" : "white",
                        cursor: item.daDat ? "not-allowed" : "pointer",

                    }}>
                        {item.soGhe}

                    </button>
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
