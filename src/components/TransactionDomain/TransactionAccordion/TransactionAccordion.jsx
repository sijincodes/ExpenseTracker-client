import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TransactionCard from "../TransactionCard/TransactionCard";

export default function TransactionAccordion({
  transactionType,
  transactions,
}) {
  return (
    <div style={{ marginBottom: "7px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{transactionType}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {transactions.map((transaction, index) => (
            <TransactionCard key={index} transaction={transaction} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
