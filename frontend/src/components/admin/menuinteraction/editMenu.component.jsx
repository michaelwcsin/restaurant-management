import React from "react";
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

const EditMenu = () => (
  <ButtonGroup>
    <Button negative>Delete Menu</Button>
    <ButtonOr />
    <Button positive>Save Changes</Button>
  </ButtonGroup>
);

export default EditMenu;
