// App.jsx
import React, { useState } from 'react';
import SenderInfoForm from './components/SenderInfoForm';
import ReceiverInfoForm from './components/ReceiverInfoForm';
import SummaryAndStopover from './components/SummaryAndStopover';
import ParcelInfoForm from './components/ParcelInfoForm';
import PaymentDetailsForm from './components/PaymentDetailsForm';
import ConfirmationForm from './components/ConfirmationForm';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    sender: { address: '', city: '', province: '' },
    receiver: { address: '', city: '', province: '' },
    stopovers: [],
    parcel: { weight: '', vehicleType: '' },
    payment: { method: '', codAmount: '' },
  });

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);
  const handleFormDataChange = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], ...data },
    }));
  };

  return (
    <div>
      {step === 1 && (
        <SenderInfoForm
          data={formData.sender}
          onChange={(data) => handleFormDataChange('sender', data)}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <ReceiverInfoForm
          data={formData.receiver}
          onChange={(data) => handleFormDataChange('receiver', data)}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <SummaryAndStopover
          data={formData}
          onChange={(data) => setFormData(data)}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 4 && (
        <ParcelInfoForm
          data={formData.parcel}
          onChange={(data) => handleFormDataChange('parcel', data)}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 5 && (
        <PaymentDetailsForm
          data={formData.payment}
          onChange={(data) => handleFormDataChange('payment', data)}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 6 && (
        <ConfirmationForm
          data={formData}
          onBack={handleBack}
          onConfirm={() => alert('Form Submitted')}
        />
      )}
    </div>
  );
};

export default App;
