import React from "react";
import styled from "@emotion/styled";
import { Color } from "../types";
import { mapColorToHex } from "../utils";

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`;

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  & + & {
    margin-top: 12px;
  }
`;

const Name = styled.div`
  grid-column: span 4 / span 4;
  color: #374151;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 12px;
`;

const Amount = styled.div`
  gride-column: span 1 / span 1;
  font-size: 12px;
  color: #374151;
`;

const GaugeWrapper = styled.div`
  grid-column: span 7 / span 7;
  border-radius: 12px;
  background-color: #e5e7eb;
`;

const Gauge = styled.div<{ percentage: number; color: string }>`
  backgroun-color: ${({ color }) => color}
  width: ${({ percentage }) => `${percentage}%`}
`;

interface Props {
  stats: Array<Stat>;
  color: Color;
}

const Stats: React.FC<Props> = ({ stats, color }) => {
  return (
    <Base>
      <Title color={mapColorToHex(color?.name)}>능력치</Title>
      <List>
        <ListItem>
          <Name>name</Name>
          <Amount>amout</Amount>
          <GaugeWrapper>
            <Gauge color={mapColorToHex(color?.name)} />
          </GaugeWrapper>
        </ListItem>
      </List>
    </Base>
  );
};

export default Stats;
