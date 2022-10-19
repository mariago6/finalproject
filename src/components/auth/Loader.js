import styles from "./loader.module.scss";
import ReactDOM from "react-dom";

function Loader() {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src='./images/loaderPan.gif' alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader; 