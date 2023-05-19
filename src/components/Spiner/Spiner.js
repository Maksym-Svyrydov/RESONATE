import { Rings } from 'react-loader-spinner';

// import style from './Spiner.module.css';

export const Loader = () => {
  return (
    <Rings
      height="120"
      width="120"
      color="gray"
      radius="12"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        marginLeft: 'auto',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};
