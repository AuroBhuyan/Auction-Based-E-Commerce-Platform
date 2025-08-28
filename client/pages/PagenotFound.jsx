import React from 'react';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '80px', color: 'red' }}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Button onClick={()=>{navigate("/")}}> 
          Home
        </Button>
      </div>
    </Layout>
  );
};

export default PageNotFound;
