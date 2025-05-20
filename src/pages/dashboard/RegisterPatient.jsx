import React from 'react';
import PatientRegistrationForm from '../../components/PatientRegistrationForm';

const RegisterPatient = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Register New Patient</h1>
      <div className="w-full max-w-2xl">
        <PatientRegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPatient; 