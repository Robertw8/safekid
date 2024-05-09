import { AddKidScreen } from '@/screens/adult';

const KidAdd: React.FC = () => {
  const parentId = 'someParentId';
  const deviceId = 'someDeviceId';

  return <AddKidScreen parentId={parentId} deviceId={deviceId} />;
};

export default KidAdd;
