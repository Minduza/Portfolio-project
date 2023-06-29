import PropTypes from "prop-types";
import { Heading, HeadingSection, Subheading } from "./SectionHeading.styled";

const SectionHeading = ({ heading, subheading }) => {
  return (
    <HeadingSection>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </HeadingSection>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
};

export default SectionHeading;
