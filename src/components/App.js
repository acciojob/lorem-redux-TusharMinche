import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchLorem } from './../state/loremSlice'; // ✅ named import

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>A Short Noration of Lorem Ipsum</h1>
      <p>Below contains a Title and Body gotten from a mock API, please take your time to review</p>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
