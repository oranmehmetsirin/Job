const Button = ({ text, type = "submit" }) => {
  return (
    <button type={type} className="c_button">
      <span class="circle1"></span>
      <span class="circle2"></span>
      <span class="circle3"></span>
      <span class="circle4"></span>
      <span class="circle5"></span>
      <span class="text">{text}</span>
    </button>
  );
};

export default Button;
