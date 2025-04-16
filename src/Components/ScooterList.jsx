import EditModal from "./EditModal";

export default function ScooterList({ scooters, setScooters, setShowModal, setSelectedScooter, showModal, selectedScooter }) {

  const handleDelete = (id) => {
    const updated = scooters.filter(s => s.id !== id);
    localStorage.setItem('kolt_scooters', JSON.stringify(updated));
    setScooters(updated);
  };

  const handleEdit = (scooter) => {
    setSelectedScooter(scooter);
    setShowModal(true);
  };

  return (

    <div>

      {
        scooters.map(scooter => (
          <div className="card mb-3 shadow-sm" key={scooter.id}>
            <div className="card-body d-flex justify-content-between align-items-center">

              {/* Information*/}
              <div>
                <h5 className="card-title mb-1 text-primary">{scooter.registrationCode}</h5>
                <p className="mb-1">
                  <strong>Last use:</strong> {scooter.lastUseTime}
                </p>
                <p className="mb-1">
                  <strong>Kilometres:</strong> {scooter.totalRideKilometres} km
                </p>
                <span className={`badge ${scooter.isBusy ? 'bg-danger' : 'bg-success'}`}>
                  {scooter.isBusy ? 'Busy' : 'Available'}
                </span>
              </div>

              {/* Buttons */}
              <div>
                <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => handleEdit(scooter)}>Edit</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(scooter.id)}>Delete</button>
              </div>

            </div>
          </div>

        ))

      }

      {showModal && (
        <EditModal
          scooter={selectedScooter}
          setShowModal={setShowModal}
          setScooters={setScooters}
        />
      )}

    </div>
  )
}
