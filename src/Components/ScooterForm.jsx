import { useState } from "react";


export default function ScooterForm({ setScooters }) {

  const [date, setDate] = useState('');
  const [totalRideKilometres, setTotalRideKilometres] = useState('');

  const handleAdd = () => {
    if (!date || !totalRideKilometres) {
      return;
    }
    const scooters = JSON.parse(localStorage.getItem('kolt_scooters')) || [];
    const newId = scooters.length ? scooters[scooters.length - 1].id + 1 : 1;


    // Registration code generation function
    const generateCode = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = '';
      for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return code;
    };

    const newScooter = {
      id: newId,
      registrationCode: generateCode(),
      isBusy: 0,
      lastUseTime: date,
      totalRideKilometres: parseFloat(parseFloat(totalRideKilometres).toFixed(2))
    };

    localStorage.setItem('kolt_scooters', JSON.stringify([...scooters, newScooter]));
    setScooters(prev => [...prev, newScooter]);
    setDate('');
    setTotalRideKilometres('');


  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Last Use Date</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Total Ride Kilometres</label>
          <input type="number" className="form-control" value={totalRideKilometres} onChange={(e) => setTotalRideKilometres(e.target.value)} />
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={handleAdd}>
            Add Scooter
          </button>
        </div>
      </form>
    </>
  )
}
