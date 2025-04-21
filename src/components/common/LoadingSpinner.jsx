const LoadingSpinner = ({ small = false }) => {
  return (
    <div className={`loading-spinner ${small ? "small" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
