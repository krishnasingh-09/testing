export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Anand Singh",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Mohit Raina",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Krishna Rajput",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Rahul",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Aditi Singh",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Ajeet Singh",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Shiva",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Piyush Sanywal",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
