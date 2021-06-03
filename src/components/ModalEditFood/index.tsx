import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface Food { 
  id?: number;
  name: string;
  description: string;
  price: string;
  available?: boolean;
  image: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleUpdateFood: (data: Food) => Promise<void>;
  editingFood: Food;
}

export function ModalEditFood({ isOpen, onRequestClose, handleUpdateFood, editingFood}: ModalAddFoodProps) {
  const formRef = createRef<any>();

 async function handleSubmit(data: Food) {
    handleUpdateFood(data);
    onRequestClose();
  };
  
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}