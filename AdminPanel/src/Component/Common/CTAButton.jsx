const CTAButton = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;