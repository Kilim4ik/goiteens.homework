import { ClipLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="loader-container">
      <ClipLoader
        visible={true}
        size={120}
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#3f51b5"
      />
    </div>
  );
};

export default Loader;
