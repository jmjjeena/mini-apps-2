import React from 'react';
import Data from './Data.jsx';

const ResultsList = ({ results }) => {
  return (
    <div className='historical-records-container'>
        {results.map((data, index) => (
          <Data key={index} data={data} spot={index} />
        ))}
      </div>
  );
}

export default ResultsList;
