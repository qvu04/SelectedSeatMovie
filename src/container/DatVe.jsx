import React from 'react'

export default function DatVe({ selectedSeat, handleDeleteSeat }) {
    let totalPrice = selectedSeat.reduce((sum, seat) => sum + seat.gia, 0);
    let renderDanhSach = () => {
        return selectedSeat.map((item, index) => {
            return (
                <tr className='text-center' key={index}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia.toLocaleString()}</td>
                    <td className='text-center'><button onClick={() => {
                        handleDeleteSeat(item)
                    }} className='text-xl text-red-500'>X</button></td>
                </tr>
            )
        })
    }
    return (
        <div className='border-2 border-yellow-400 p-5 w-full'>
            <h2 className='text-2xl font-bold text-white'>Danh sách ghế đã chọn:</h2>
            {selectedSeat.length === 0 ? (
                <p className='text-white font-bold'>Chưa chọn ghế nào</p>
            ) : (
                <div className='w-full'>
                    <table className='w-full text-white text-2xl'>
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-yellow-500 border-white border-2'>{renderDanhSach()}</tbody>
                    </table>
                    <div className="mt-4 text-right text-lg font-bold">
                        Tổng tiền: <span className="text-red-500">{totalPrice.toLocaleString()} VND</span>
                    </div>
                </div>
            )}
        </div>
    )
}
