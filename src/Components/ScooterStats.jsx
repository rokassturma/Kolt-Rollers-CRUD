export default function ScooterStats({ scooters }) {

  const count = scooters.length;

  const totalKm = scooters.reduce((sum, scooter) => {
    return sum + parseFloat(scooter.totalRideKilometres);
  }, 0);

  return (

    <div className="alert alert-success d-flex justify-content-between">
      <span><strong>Total scooters:</strong> {count}</span>
      <span><strong>Total kilometres:</strong> {totalKm} km</span>
    </div>



  )
}
