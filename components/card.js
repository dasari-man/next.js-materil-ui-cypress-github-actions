export const Card = ({ children, className, ...props }) => {
  return (
    <div className={`base-card ${className}`} {...props}>
      {children}
    </div>
  );
};
