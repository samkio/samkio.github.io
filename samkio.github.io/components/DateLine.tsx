import styled from "@emotion/styled";

const StyledDateLine = styled.p`
  font-size: 0.9em;
  padding: 0;
`;

type DateLineProps = {
  date: Date;
  text: string;
};

export default function DateLine(props: DateLineProps) {
  return (
    <StyledDateLine>
      {props.text}{" "}
      <time dateTime={props.date.toUTCString()}>
        {props.date.toLocaleDateString("en-GB", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </time>
    </StyledDateLine>
  );
}
