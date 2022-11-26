import { useNavigate } from "react-router-dom";
import "../styles.css"; 

import Button from "@mui/material/Button";
function HomeButton() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/*  <Button variant="primary" onClick={handleSubmit}>
        Home
      </Button> */}
      <Button variant="contained" onClick={handleSubmit}>
        Material UI
      </Button>
      <Button variant="outlined" onClick={handleSubmit}>
        Outlined button
      </Button>
    </>
  );
}
export default HomeButton;
