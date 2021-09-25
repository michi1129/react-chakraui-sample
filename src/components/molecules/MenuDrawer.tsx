import { Button } from "@chakra-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { memo, VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onHomeClick: () => void;
  onUserManagementClick: () => void;
  onSettingClick: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onHomeClick,
    onUserManagementClick,
    onSettingClick,
  } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onHomeClick}>
              TOP
            </Button>
            <Button w="100%" onClick={onUserManagementClick}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onSettingClick}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
