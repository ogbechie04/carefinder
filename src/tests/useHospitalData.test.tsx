import React from 'react';
import { render, screen } from '@testing-library/react';
import useHospitalData from '../hooks/useHospitalData';
import { useEffect } from 'react';

const mockHospitals = [
  {
    name: 'Paelon Memorial Clinic',
    location: 'Ikeja',
    address: 'Address 1',
    phoneNumber: ['123456'],
    state: 'Lagos',
    type: 'Clinic',
    email: 'clinic@example.com',
    imageURL: '',
  },
  {
    name: 'May Clinics Ltd',
    location: 'Victoria Island',
    address: 'Address 2',
    phoneNumber: ['789012'],
    state: 'Lagos',
    type: 'Hospital',
    email: 'hospital@example.com',
    imageURL: '',
  },
];

jest.mock('../backend/hospital-repo', () => ({
  hospitalList: () => Promise.resolve(mockHospitals),
}));

// A test component to use the hook
const TestComponent = () => {
  const { hospitals, setSearchTerm } = useHospitalData();

  useEffect(() => {
    setSearchTerm('Paelon');
  }, [setSearchTerm]);

  return (
    <div>
      {hospitals.map((hospital) => (
        <div key={hospital.name}>{hospital.name}</div>
      ))}
    </div>
  );
};

describe('useHospitalData', () => {
  it('filters hospitals based on search term', async () => {
    render(<TestComponent />);
    expect(await screen.findByText('Paelon Memorial Clinic')).toBeInTheDocument();
  });
});
