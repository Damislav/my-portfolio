import styled from "styled-components";

export const HeroSection = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const HeroTitle = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  width: 100%;
  color: linear-gradient(121.57deg, #ffffff 18.77%, 60.15%;);

  background: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "48px" : "32px")};

    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;
export const HeroText = styled.p`
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.7);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const HeroSpan = styled.span`
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.86);
  font-weight: bold;
  display: block;
`;

export const HeroButton = styled.div`
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 670px;
  }
`;
