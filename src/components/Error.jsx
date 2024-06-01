const Error = ({ msg, retry }) => {
  return (
    <div className="error">
      <p>We are sorry. Something went wrong while accessing the data.</p>
      <p className="text">{msg}</p>
      <button onClick={retry} className="btn">
        <span> Try Again. </span>
      </button>
    </div>
  );
};

export default Error;
