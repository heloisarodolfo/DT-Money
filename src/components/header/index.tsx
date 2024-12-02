import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import * as Dialog from "@radix-ui/react-dialog";

import igniteLogo from "../../assets/igniteLogo.svg";
import { NewTransactionModal } from "../newTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={igniteLogo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

            <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
