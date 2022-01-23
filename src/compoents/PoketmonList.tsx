import React from "react";
import styled from "@emotion/styled";

const Base = styled.div`
  margin-top: "24px";
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  & + & {
    margin-top: 18px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Image = styled.img``;

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transfrom: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #d1d5db;
`;

const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

const PoketmonList: React.FC = () => {
  return (
    <Base>
      <List>
        <ListItem>
          <Image src={getImageUrl(1)} />
          <Name>bulbasur</Name>
          <Index>#001</Index>
        </ListItem>
      </List>
    </Base>
  );
};

export default PoketmonList;
