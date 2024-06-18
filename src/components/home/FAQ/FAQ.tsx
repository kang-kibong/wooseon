import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Inner } from "@components/common/";
import * as S from "./FAQ.styled";
import { FAQS } from "@utils/constants/faqs";

const FAQ = () => {
  return (
    <S.Layout>
      <S.Title>자주하는 질문</S.Title>
      <Inner>
        {FAQS.map(({ id, question, answer }) => (
          <MuiAccordion key={id} style={{ boxShadow: "none" }} disableGutters>
            <MuiAccordionSummary
              id={`panel-header-${id}`}
              aria-controls={`panel-content-${id}`}
              expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" }} />}
            >
              <S.Question>{question}</S.Question>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
              <S.Answer>{answer}</S.Answer>
            </MuiAccordionDetails>
          </MuiAccordion>
        ))}
      </Inner>
    </S.Layout>
  );
};

export default FAQ;
