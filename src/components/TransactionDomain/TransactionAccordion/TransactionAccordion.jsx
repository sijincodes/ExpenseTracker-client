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
  transactionTime,
  setTransactionList,
}) {
  return (
    <div style={{ marginBottom: "7px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: "#332FD0",
            borderRadius: "5px",
            boxShadow: "0 15px 25px rgba(0,0,0,.2)",
          }}
        >
          <Typography style={{ color: "#FFE6E6", fontSize: "15px" }}>
            {transactionType}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction._id}
              transaction={transaction}
              transactionTime={transactionTime}
              setTransactionList={setTransactionList}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
