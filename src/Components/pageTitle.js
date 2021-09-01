import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | Guista</title>
    </Helmet>
  );
}

PageTitle.prototype = {
  title: PropTypes.string.isrequired,
};

export default PageTitle;
