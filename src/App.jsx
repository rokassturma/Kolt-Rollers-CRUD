import { useState, useEffect } from 'react';
import './App.scss';
import ScooterStats from './Components/ScooterStats';
import ScooterForm from './Components/ScooterForm';
import ScooterList from './Components/ScooterList';
import ScooterSort from './Components/ScooterSort';
import EditModal from './Components/EditModal';

function App() {
  
  const [scooters, setScooters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedScooter, setSelectedScooter] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedScooters = JSON.parse(localStorage.getItem('kolt_scooters')) || [];
    setScooters(storedScooters);
  }, []);

  return (

      <div className="container py-5">
      <h1 className="text-center mb-5 text-white">Kolt Rental ADMIN</h1>

      <div className="mb-4">
        <ScooterForm setScooters={setScooters} />
      </div>

      <div className="mb-4">
        <ScooterStats scooters={scooters} />
      </div>

      <div className="mb-4 d-flex justify-content-end">
        <ScooterSort 
        setScooters={setScooters}
        scooters={scooters} />
      </div>

      <div className="row">
        <div className="col-md-6">
          <ScooterList
            scooters={scooters}
            setScooters={setScooters}
            setShowModal={setShowModal}
            setSelectedScooter={setSelectedScooter}
            showModal={showModal}
          />
        </div>
        <div className="col-md-6">
          {showModal && (
            <EditModal
              scooter={selectedScooter}
              setShowModal={setShowModal}
              setScooters={setScooters}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
