import {
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function Dropdowns({ items = [], title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} >
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        borderRadius={5}
        padding={2}
        marginTop={5}
        fontWeight='500'
        _hover={{ bg: "white", color: "orange" }}
        _expanded={{ bg: "white", color: "orange"}}
      >
        <Text fontSize={{md: '1.1rem', xl: '1.3rem'}}>{title}</Text>
      </MenuButton>
      <MenuList
        className="drop"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        color="blue.600"
      >
        {items?.map((e, index) => {
          return (
            <MenuItem key={index + 1} _hover={{ bg: "orange", color: "white",fontWeight:'600' }}>
              <Link to={e.links}>{e.elem}</Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
