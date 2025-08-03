import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DoctorDetailsContext } from "../../context/DoctorDetailsContext";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import "./DoctorDetails.css";

const DoctorDetails = (props) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { doctors } = useContext(DoctorDetailsContext);

  return (
    <div className="doctor-details-container">
      <h1>Doctor Details: </h1>
      {doctors.length === 0 ? (
        <p>Loading...</p>
      ) : (
        doctors.map((doctor) => {
          if (doctor.id === parseInt(id)) {
            return (
              <div key={doctor.id} className="doctor-details">
                <img
                  src={doctor.image}
                  alt={`${doctor.name}'s profile`}
                  className="doctor-image"
                />
                <div>
                  <h2>{doctor.name}</h2>
                  <p>Specialty: {doctor.specialty}</p>
                  <p>Location: {doctor.location}</p>
                  <p>Bio: {doctor.bio}</p>
                  
                  {doctor.specialization && (
                    <>
                      <p className="specialization">Specialization:</p>
                      <ul>
                        {doctor.specialization.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {doctor.availability && (
                    <>
                      <p className="availability">Availability:</p>
                      <ul>
                        {Object.entries(doctor.availability).map(([date, times]) => (
                          <li key={date}>
                            {date}: {times.join(", ")}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <button
                    className="book-appointment-btn"
                    onClick={() => setOpen(true)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            );
          }
          return null; // Handle case where no doctor matches the ID
        })
      )}
      <RegisterPopup open={open} setOpen={setOpen} />
    </div>
  );
};

export default DoctorDetails;