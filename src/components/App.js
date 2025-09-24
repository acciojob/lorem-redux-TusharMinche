import React, { useEffect } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from './../state/loremSlice';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>
        Below Contains A title and Body gotten froma random API, Please take your time to Review
      </h4>

      {loading && <h4>Loading...</h4>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && data && (
        <ul>
          <li>
            <strong className="title">Title :{data.title}</strong>
            <p className="body">{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;
