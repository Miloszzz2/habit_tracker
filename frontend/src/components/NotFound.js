import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../components/img/loader.png';
import { useState } from 'react';

function NotFound() {
  const [second, setSeconds] = useState(4);

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });
  useEffect(() => {
    setInterval(() => {
      setSeconds(second - 1);
    }, 1000);
  });
  return (
    <>
      <div className='notFoundWrapper'>
        <h1>Page not found</h1>
        <p>You will be redirected to Homepage in {second} ...</p>
        <img src={Loader} alt='loader' className='loader' />
      </div>
    </>
  );
}

export default NotFound;
