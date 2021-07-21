import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return <Helmet>{title} | Guista</Helmet>;
};

PageTitle.prototype = {
  title: PropTypes.string.isrequired,
};

export default PageTitle;
