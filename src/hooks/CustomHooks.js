import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function CustomHooks() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/maateusilva"
  );

  if (loading) {
    <h1>Loading ...</h1>;
  }

  return (
    <div>
      <h1>{JSON.stringify(response)}</h1>
    </div>
  );
}

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse(json);
    })();
  }, [url]);

  return [loading, response];
}

export default CustomHooks;
