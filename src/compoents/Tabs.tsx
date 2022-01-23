import React from "react";
import styled from "@emotion/styled";
import { Color } from "../types";
import { mapColorToHex } from "../utils";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  & + & {
    margin-left: 16px;
  }
`;

const TabButton = styled.button<{ active?: boolean; color: string }>`
  margin: 0;
  border-radius: 8px;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  padding: 6px 12px;
  background-color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${({ active, color }) => (active ? color : "#6B7280")};
`;

interface Props {
  tab: "about" | "status" | "evolution";
  onClick: (tab: "about" | "status" | "evolution") => void;
  color?: Color;
}

const Tabs: React.FC<Props> = ({ tab, onClick, color }) => {
  return (
    <List>
      <ListItem onClick={() => onClick("about")}>
        <TabButton active={tab === "about"} color={mapColorToHex(color?.name)}>
          About
        </TabButton>
      </ListItem>
      <ListItem onClick={() => onClick("status")}>
        <TabButton active={tab === "status"} color={mapColorToHex(color?.name)}>
          Status
        </TabButton>
      </ListItem>
      <ListItem onClick={() => onClick("evolution")}>
        <TabButton
          active={tab === "evolution"}
          color={mapColorToHex(color?.name)}
        >
          Evolution
        </TabButton>
      </ListItem>
    </List>
  );
};

export default Tabs;
