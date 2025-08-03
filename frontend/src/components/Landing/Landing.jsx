import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { DoctorDetailsContext } from "../../context/DoctorDetailsContext";
const Landing = () => {
  const { doctors } = useContext(DoctorDetailsContext);
  const [searchParams, setSearchParams] = useState({
    specialty: "",
    location: "",
    date: "",
  });
  const [doctorsList, setDoctorsList] = useState(doctors);
  const [open, setOpen] = useState(false);
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const filteredDoctors = doctors.filter((doctor) => {
      const matchesSpecialty = searchParams.specialty
        ? doctor.specialty.toLowerCase() ===
          searchParams.specialty.toLowerCase()
        : true;
      const matchesLocation = searchParams.location
        ? doctor.location.toLowerCase() === searchParams.location.toLowerCase()
        : true;
      const matchesDate = searchParams.date
        ? Object.keys(doctor.availability).includes(searchParams.date)
        : true;

      return matchesSpecialty && matchesLocation && matchesDate;
    });
    setDoctorsList(filteredDoctors);
  }, [searchParams]);
  return (
    <div className="landing-container">
      <h1 className="title">Healthcare Appointment System</h1>
      <p className="description">
        Welcome to the healthcare appointment system. Please navigate through
        the application to book your appointments.See open slots and pick the
        best time for your visit. Book with one click and get email/SMS
        reminders.
      </p>
      <div className="search-section">
        <div className="input-group">
          <label htmlFor="specialty">Specialty: </label>
          <select name="specialty" onChange={handleSearchChange}>
            <option value="">All Specialties</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="location">Location: </label>
          <select name="location" onChange={handleSearchChange}>
            <option value="">All Locations</option>
            <option value="main">Main Hospital</option>
            <option value="north">North Clinic</option>
            <option value="south">South Clinic</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date">Appointment Date: </label>
          <input
            type="date"
            id="date"
            min="2025-08-01"
            max="2025-08-30"
            name="date"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <h2 className="doctors-title">Available Doctors</h2>
      <p className="doctors-count"><strong>{doctorsList.length} </strong>doctor(s) found</p>
      <div className="doctors-list">
       {doctorsList.length > 0 ?  doctorsList.map((doctor) => (
          <Link
            to={`/doctor/${doctor.id}`}
            key={doctor.id}
          >
            <img src={doctor.image} alt={doctor.name} />
            <h2>{doctor.name}</h2>
            <p>
              <strong>Specialty:</strong> {doctor.specialty}
            </p>
           
          </Link>
        )):<p className="no-doctors">No doctors available for the selected criteria. Please book another slot.....</p>}
      </div>
    </div>
  );
};

export default Landing;
