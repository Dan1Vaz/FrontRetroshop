import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Link onClick={goBack}>
      <ArrowBackIcon className="size-10" />
    </Link>
  );
};

export default BackButton;
