import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
      const performActionBeforeRedirect = async () => {
        // Perform your action here (e.g., checking authentication, fetching data, etc.)
        await new Promise(resolve => setTimeout(resolve, 5000)); // Simulating a delay for the action
        // Redirect to the login page
        navigate('/login');
      };
  
      performActionBeforeRedirect();
    }, [navigate]);
  
    return loading ? <Loading /> : null;
}

export default Loader