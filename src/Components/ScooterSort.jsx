

export default function ScooterSort({ scooters, setScooters }) {

  const sortByDate = () => {
    const sorted = [...scooters].sort((a, b) =>
      new Date(a.lastUseTime) - new Date(b.lastUseTime)
    );
    setScooters(sorted)
  }

  const sortByKilometres = () => {
    const sorted = [...scooters].sort((a, b) =>
      b.totalRideKilometres - a.totalRideKilometres
    );
    setScooters(sorted);
  }


  return (
    <div className="d-flex">
      <button className="btn btn-warning me-2" onClick={sortByDate}>
        Sort by date
      </button>
      <button className="btn btn-warning" onClick={sortByKilometres}>
        Sort by kilometres
      </button>
    </div>


  )
}
