import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Link onClick={goBack}>
      <ArrowBackIcon className="size-7" />
    </Link>
  );
};

export default BackButton;
