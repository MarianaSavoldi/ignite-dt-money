import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal isModalOpen={handleOpenNewTransactionModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
