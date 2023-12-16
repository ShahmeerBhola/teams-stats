const Wrapper = ({ children }) => {
  const styles = {
    backgroundImage: `url('/images/bg.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (<>
    <div className="h-screen w-screen m-0 fixed top-0 left-0" style={styles}>
      {children}
    </div>
  
  
  </>
  );
};
export default Wrapper;
