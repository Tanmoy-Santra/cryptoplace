import  { useEffect, useState } from 'react';

const ApiPlanDetails = () => {
  const [planData, setPlanData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-pro-api-key': 'CG-sjpDbL4K8HpibhU23cuaVrPs', // Replace with your API key
        },
      };

      try {
        const response = await fetch('https://pro-api.coingecko.com/api/v3/key', options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPlanData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlanData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!planData) return <p>Loading...</p>;

  return (
    <div>
      <h2>API Plan Details</h2>
      <p>Plan: {planData.plan}</p>
      <p>Rate Limit: {planData.rate_limit_request_per_minute} requests/min</p>
      <p>Monthly Call Credit: {planData.monthly_call_credit}</p>
      <p>Remaining Calls: {planData.current_remaining_monthly_calls}</p>
    </div>
  );
};

export default ApiPlanDetails;
