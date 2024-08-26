import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientReviewCard from '../components/patientReviewCard';

describe('PatientReviewCard', () => {
  const patientName = 'John Doe';
  const patientReview = 'Great service!';
  const patientImage = 'https://example.com/john-doe.jpg';

  it('renders patient review card with correct data', () => {
    render(
      <PatientReviewCard
        patientName={patientName}
        patientReview={patientReview}
        patientImage={patientImage}
      />
    );

    expect(screen.getByText(patientName)).toBeInTheDocument();
    expect(screen.getByText(patientReview)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: patientName })).toHaveAttribute('src', patientImage);
  });
});
