import { Heading, HeadingSection, Subheading } from "./SectionHeading.styled";

const SectionHeading = ({ heading, subheading }) => {
  return (
    <HeadingSection>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </HeadingSection>
  );
};

export default SectionHeading;
