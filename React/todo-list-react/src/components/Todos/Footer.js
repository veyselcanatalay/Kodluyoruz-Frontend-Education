import React from 'react';

// eslint-disable-next-line react/prop-types
function Footer({ setStatus }) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <button onClick={statusHandler} value="all">
        All
      </button>
      <button onClick={statusHandler} value="completed">
        Completed
      </button>
      <button onClick={statusHandler} value="uncompleted">
        Uncompleted
      </button>
      <button onClick={statusHandler} value="select-all">
        Select All
      </button>
    </div>
  );
}

export default Footer;
