import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  
  function InitialFocus() {
    const [isOpen, setIsOpen] = useState(true);
  
    const initialRef = React.useRef();
    const finalRef = React.useRef();
  
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
  
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form>
  
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default InitialFocus;