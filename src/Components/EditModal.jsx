import { useState } from "react";

export default function EditModal({ scooter, setShowModal, setScooters }) {

  if (!scooter) return null;

  const [newDate, setNewDate] = useState('');
  const [addedKm, setAddedKm] = useState('');
  const [busy, setBusy] = useState(scooter?.isBusy || false);

  const handleSave = () => {
    if (!newDate || !addedKm) return;

    const updatedScooter = {
      id: scooter.id,
      registrationCode: scooter.registrationCode,
      lastUseTime: newDate,
      totalRideKilometres: parseFloat(scooter.totalRideKilometres) + parseFloat(addedKm),
      isBusy: busy ? 1 : 0
    };

    const allScooters = JSON.parse(localStorage.getItem('kolt_scooters')) || [];
    const updatedList = allScooters.map(s =>
      s.id === scooter.id ? updatedScooter : s
    );

    localStorage.setItem('kolt_scooters', JSON.stringify(updatedList));
    setScooters(updatedList);
    setShowModal(false);
  };

  return (
    <>
      {/* Fono užtamsinimas */}
      <div className="modal-backdrop show"></div>

      {/* Modal langas */}
      <div className="modal d-block" tabIndex="-1" style={{ zIndex: 1050 }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">Edit scooter</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>

            {/* Modal turinys */}
            <div className="modal-body">
              <p><strong>Registration code:</strong> {scooter.registrationCode}</p>
              <p><strong>Last use:</strong> {scooter.lastUseTime}</p>

              <div className="mb-3">
                <label className="form-label">New date</label>
                <input
                  type="date"
                  className="form-control"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
              </div>

              <p><strong>Total km:</strong> {scooter.totalRideKilometres} km</p>

              <div className="mb-3">
                <label className="form-label">Add km</label>
                <input
                  type="number"
                  className="form-control"
                  value={addedKm}
                  onChange={(e) => setAddedKm(e.target.value)}
                />
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={busy}
                  onChange={(e) => setBusy(e.target.checked)}
                  id="isBusyCheckbox"
                />
                <label className="form-check-label" htmlFor="isBusyCheckbox">
                  Is busy
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn btn-success" onClick={handleSave}>
                Save
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
