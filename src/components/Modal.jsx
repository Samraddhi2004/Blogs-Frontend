/* eslint-disable react/prop-types */
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App({blog}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="bg-blue-200" onPress={onOpen}>Read More</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={`blur`} className="bg-gray-200">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-bold">{blog.Title}</ModalHeader>
              <ModalBody>
                <p className="text-lg">
                  {blog.Data}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
