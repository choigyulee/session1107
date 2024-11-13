//Coin.tsx
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

interface RouteParms {
  coinId: string;
}

interface RouteState {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParms>();
  const { state } = useLocation<RouteState>();


  return (
    <Container>
    <Header>
      <Title>코인 {coinId}</Title>
      <Info>name : {state?.name || "loading"}</Info>
      <Info>symbol : {state?.symbol || "loading"}</Info>
      <Info>rank : {state?.rank || "loading"}</Info>
      <Info>type : {state?.type || "loading"}</Info>
    </Header>
    {loading ? "Loading..." : null}
  </Container>
  );
}
export default Coin;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
`;

const Info = styled.div`
  background-color: #ffffff;
  margin: 8px 0;
  padding: 15px 20px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: 600;
    font-size: 1.1em;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;
