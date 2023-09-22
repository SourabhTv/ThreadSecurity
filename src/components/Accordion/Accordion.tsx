import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS if you haven't already

interface CustomAccordionProps {
  activeKey?: string | null;
  eventKey?: string;
  disabled?: boolean;
  title?: string;
  additionalProps?: Record<string, any>; // Additional props to pass to the Card
  children: any;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  activeKey,
  eventKey = "1",
  disabled,
  title,
  additionalProps = {},
  children
}) => {
  return (
    <Accordion defaultActiveKey={activeKey}>
      <Accordion.Item eventKey={eventKey} {...additionalProps}>
        <Accordion.Header
          as={Card.Header}
          eventKey={eventKey}
          disabled={disabled}
        >
          {title}
        </Accordion.Header>
        <Accordion.Body>
          <Card.Body>{children}</Card.Body>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CustomAccordion;
