import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const onUpdate = () => alert("");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                isReadOnly={!isAdmin}
                onChange={onUsernameChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                isReadOnly={!isAdmin}
                onChange={onNameChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>メール</FormLabel>
              <Input
                value={email}
                isReadOnly={!isAdmin}
                onChange={onEmailChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                isReadOnly={!isAdmin}
                onChange={onPhoneChange}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
