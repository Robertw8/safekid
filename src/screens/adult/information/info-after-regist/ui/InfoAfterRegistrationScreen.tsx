import { PrimaryContainer } from '@/shared/ui';
import { InfoAfterRegistration } from '@/widgets/adult';
import React, { useState } from 'react';

const InfoAfterRegistrationScreen: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setChecked(prev => !prev);
  };

  return (
    <PrimaryContainer>
      <InfoAfterRegistration checked={checked} onToggle={handleToggle} />
    </PrimaryContainer>
  );
};

export default InfoAfterRegistrationScreen;
