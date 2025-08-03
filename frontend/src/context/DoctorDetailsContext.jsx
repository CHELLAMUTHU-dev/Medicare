import React from "react";

export const DoctorDetailsContext = React.createContext(null);

export const DoctorDetailsProvider = (props) => {
  const [doctors, setDoctors] = React.useState([
    {
      id: 1,
      name: "Dr. Johnson",
      specialty: "Cardiology",
      location: "main",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193874/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background-removebg-preview_el5tpt.png",
      bio: "Board-certified cardiologist with 15 years of experience.",
      specialization: [
        "Coronary Artery Disease (CAD)",
        "Heart Failure Management",
        "Arrhythmias (e.g., Atrial Fibrillation)",
        "Interventional Procedure (Angioplasty, Stenting)",
      ],
      availability: {
        "2025-08-05": ["09:00 AM", "11:00 AM", "02:00 PM"],
        "2025-08-06": ["10:00 AM", "03:00 PM"],
        "2025-08-07": ["09:30 AM", "01:00 PM", "04:00 PM"],
      },
    },
    {
      id: 2,
      name: "Dr. Michael Smith",
      specialty: "Dermatology",
      location: "north",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193550/doctor-with-his-arms-crossed-white-background-removebg-preview_xbszwq.png",
      bio: "Specializes in skin conditions and cosmetic dermatology.",
      specialization: [
        "Acne Treatment",
        "Psoriasis Management",
        "Eczema Care",
        "Cosmetic Procedures (Botox, Fillers)",
      ],
      availability: {
        "2025-08-05": ["10:30 AM", "01:30 PM"],
        "2025-08-06": ["09:00 AM", "11:30 AM", "02:30 PM"],
        "2025-08-08": ["08:00 AM", "12:00 PM", "03:30 PM"],
      },
    },
    {
      id: 3,
      name: "Dr. Emily",
      specialty: "Pediatrics",
      location: "south",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193874/front-view-young-female-doctor-white-medical-suit-with-stethoscope-wearing-white-protective-mask-white_gkuuyk-removebg-preview_u4cytm.png",
      bio: "Pediatrician focused on child wellness and development.",
      specialization: [
        "Childhood Vaccinations",
        "Growth and Development Monitoring",
        "Common Childhood Illnesses",
        "Nutrition and Dietary Guidance",
      ],
      availability: {
        "2025-08-05": ["08:30 AM", "11:00 AM", "03:00 PM"],
        "2025-08-07": ["09:00 AM", "01:00 PM"],
        "2025-08-09": ["10:00 AM", "02:00 PM", "04:30 PM"],
      },
    },
    {
      id: 4,
      name: "Dr. Robert",
      specialty: "Neurology",
      location: "main",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193549/portrait-hansome-young-male-doctor-man-removebg-preview_vvhozh.png",
      bio: "Expert in neurological disorders and treatment.",
      specialization: [
        "Epilepsy Management",
        "Stroke Care",
        "Multiple Sclerosis Treatment",
        "Neuropathic Pain Management",
      ],
      availability: {
        "2025-08-06": ["08:00 AM", "12:00 PM", "04:00 PM"],
        "2025-08-08": ["09:30 AM", "02:30 PM"],
        "2025-08-10": ["10:00 AM", "01:00 PM", "03:30 PM"],
      },
    },
    {
      id: 5,
      name: "Dr. Maria Garcia",
      specialty: "Orthopedics",
      location: "main",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193549/beautiful-young-female-doctor-looking-camera-office-removebg-preview_z88rpl.png",
      bio: "Expert in Orthopedics disorders and treatment.",
      specialization: [
        "Joint Replacement Surgery",
        "Sports Medicine",
        "Fracture Care",
        "Arthritis Management",
      ],
      availability: {
        "2025-08-06": ["08:00 AM", "12:00 PM", "04:00 PM"],
        "2025-08-08": ["09:30 AM", "02:30 PM"],
        "2025-08-10": ["10:00 AM", "01:00 PM", "03:30 PM"],
      },
    },
    {
      id: 6,
      name: "Dr. Sarah Lee",
      specialty: "Cardiology",
      location: "main",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193550/doctor-smiling-with-stethoscope-removebg-preview_qd7rc4.png",
      bio: "Expert in Orthopedics disorders and treatment.",
      specialization: [
        "Coronary Artery Disease (CAD)",
        "Heart Failure Management",
        "Arrhythmias (e.g., Atrial Fibrillation)",
        "Interventional Procedure (Angioplasty, Stenting)",
      ],
      availability: {
        "2025-08-06": ["08:00 AM", "12:00 PM", "04:00 PM"],
        "2025-08-08": ["09:30 AM", "02:30 PM"],
        "2025-08-10": ["10:00 AM", "01:00 PM", "03:30 PM"],
      },
    },
    {
      id: 7,
      name: "Dr. Emily jackson",
      specialty: "Dermatology",
      location: "south",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193874/front-view-young-female-doctor-white-medical-suit-with-stethoscope-wearing-white-protective-mask-white_gkuuyk-removebg-preview_u4cytm.png",
      bio: "Pediatrician focused on child wellness and development.",
      specialization: [
        "Childhood Vaccinations",
        "Growth and Development Monitoring",
        "Common Childhood Illnesses",
        "Nutrition and Dietary Guidance",
      ],
      availability: {
        "2025-08-05": ["08:30 AM", "11:00 AM", "03:00 PM"],
        "2025-08-07": ["09:00 AM", "01:00 PM"],
        "2025-08-09": ["10:00 AM", "02:00 PM", "04:30 PM"],
      },
    },
    {
      id: 8,
      name: "Dr. Wilson Smith",
      specialty: "Neurology",
      location: "main",
      image:
        "https://res.cloudinary.com/dwo2f3fyw/image/upload/v1754193874/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background-removebg-preview_el5tpt.png",
      bio: "Expert in neurological disorders and treatment.",
      specialization: [
        "Epilepsy Management",
        "Stroke Care",
        "Multiple Sclerosis Treatment",
        "Neuropathic Pain Management",  

      ],
      availability: {
        "2025-08-06": ["08:00 AM", "12:00 PM", "04:00 PM"],
        "2025-08-08": ["09:30 AM", "02:30 PM"],
        "2025-08-10": ["10:00 AM", "01:00 PM", "03:30 PM"],
      },
    },
  ]);

  const contextValue = {
    doctors,
    setDoctors,
  };

  return (
    <DoctorDetailsContext.Provider value={contextValue}>
      {props.children}
    </DoctorDetailsContext.Provider>
  );
};

export default DoctorDetailsProvider;
