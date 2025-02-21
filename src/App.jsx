import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import DanhSach from './container/DanhSach'
import DatVe from './container/DatVe'
import { dataPhim } from './container/dataPhim'

function App() {
  let [selectedSeat, setSelectedSeat] = useState([]);
  let handleSelectedSeat = (seat) => {
    console.log('✌️seat --->', seat);
    if (seat.daDat) return;
    return setSelectedSeat((prev) =>
      prev.some((s) => s.soGhe === seat.soGhe)
        ? prev.filter((s) => s.soGhe !== seat.soGhe)
        : [...prev, seat]
    );
  }
  let handleDeleteSeat = (seat) => {
    console.log('✌️seat --->', seat);
    let newSeat = selectedSeat.filter((item) => {
      return item.soGhe !== seat.soGhe;
    });
    setSelectedSeat(newSeat);
  }
  return (
    <div>
      <Header />
      <div className='flex'>
        <DanhSach selectedSeat={selectedSeat} handleSelectedSeat={handleSelectedSeat} />
        <DatVe selectedSeat={selectedSeat} handleDeleteSeat={handleDeleteSeat} />
      </div>
    </div>
  )
}

export default App
