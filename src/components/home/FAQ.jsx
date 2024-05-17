import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import Inner from "../common/Inner";
import styled from "styled-components";

const FAQData = [
  {
    question: "어떤 사람들이 주로 신청하나요?",
    answer:
      "아래와 같은 분들이 주로 신청합니다.\n\n- 대기업/공기업/금융기업을 희망하나 준비 방향을 찾지 못하는 취준생",
  },
  {
    question: "멘토링 시작일은 언제인가요?",
    answer:
      "결제일 기준으로 2주 후 시작합니다. 결제일 다음 주 멘토링 매칭이 시작되며, 목요일이나 금요일 사이에 일정 조율 연락을 문자로 드리게 됩니다.\n멘토링 배정이 확정되면 그 다음주 정해진 요일과 시간에 첫 멘토링이 시작됩니다.",
  },
  {
    question: "멘토님은 무엇을 해주나요?",
    answer:
      '멘토님은 말 그대로 멘티분들의 "멘토님" 입니다.\n회사에 지원하는 전략, 멘토님의 취준 관련 노하우, 본인의 개인적인 고민 등 많은 것들을 터놓고 인간적으로 지낼 수 있습니다.',
  },
  {
    question: "멘토링 비용 외에 추가적으로 들어가는 비용이 있나요?",
    answer: "추가 비용은 받고 있지 않습니다.",
  },
  {
    question: "멘토님은 언제 저에게 매칭되나요?",
    answer:
      "매 주 월요일마다 매칭 작업이 시작됩니다.\n그리고 목~금요일 정도에 운영 매니저님이 멘티님께 스케줄 조율 연락을 드려 최종 조율 후 시간을 확정합니다.\n예를 들어, 화요일에 결제하셨으면 다음 주 월요일에 매칭이 시작되고, 그 주 목~금요일에 매칭이 확정됩니다.",
  },
  {
    question: "멘토님을 제가 직접 선택할 수 있나요?",
    answer:
      "내부적인 알고리즘으로 최적의 멘토님을 매칭하고 있기 때문에 멘토를 직접 선택하시는 것은 불가능합니다.\n하지만 멘토님들을 아주 엄격하게 검증해서 뽑기 때문에 매칭받은 멘토님들에 대한 만족도는 매우 높습니다.",
  },
  {
    question: "제가 바라는 부분을 멘토링 받을 수 있나요?",
    answer: "네 희망하시는 멘토링을 받을 수 있습니다.",
  },
  {
    question: "경력자의 경우 직장을 다니면서도 병행이 가능한가요?",
    answer: "네 가능합니다.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <h2>우선 FAQ</h2>
      <Inner>
        {FAQData.map(({ question, answer }, index) => (
          <Accordion key={index} style={{ boxShadow: "none" }}>
            <AccordionSummary
              id={`panel-header-${index}`}
              aria-controls={`panel-content-${index}`}
              expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" }} />}
            >
              <Question>{question}</Question>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#efefef" }}>
              <Answer>{answer}</Answer>
            </AccordionDetails>
          </Accordion>
        ))}
      </Inner>
    </Layout>
  );
};

export default FAQ;

const Layout = styled.section`
  padding: 120px 0 120px 0;
  white-space: pre-wrap;
  color: #292d32;
  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 24px;

    @media screen and (max-width: 1023px) {
      font-size: 38px;
    }

    @media screen and (max-width: 540px) {
      font-size: 26px;
    }
  }
`;

const Question = styled.strong`
  font-weight: 700;
  color: #292d32;
`;

const Answer = styled.p`
  line-height: 1.2;
  font-size: 14px;
  color: rgb(77, 85, 94);
`;
