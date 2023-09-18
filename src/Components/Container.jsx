const Container = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      {children}
    </div>
  );
};

export default Container;
