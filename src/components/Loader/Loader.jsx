import { BarLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <BarLoader
      color="#0b0b09"
      style={{
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '0 auto',
      }}
    />
  );
};
