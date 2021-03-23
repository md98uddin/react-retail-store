import React from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

const RenderPopover = ({ isProductOpen, togglePopover, id, name, image }) => {
  return (
    <Popover
      placement="bottom"
      isOpen={isProductOpen}
      target={id}
      toggle={() => togglePopover({ id, name, image })}
    >
      <PopoverHeader>{name}</PopoverHeader>
      <PopoverBody>
        <img src={image} alt={name} with={175} height={250} />
      </PopoverBody>
    </Popover>
  );
};

const Cart = ({
  isModalOpen,
  toggleCart,
  removeFromCart,
  cart,
  togglePopover,
  isProductOpen,
  product,
}) => {
  console.log("product", product);
  return (
    <Modal isOpen={isModalOpen} toggle={toggleCart}>
      <ModalHeader toggle={toggleCart} style={{ backgroundColor: "#e5e5f0" }}>
        My Shop Cart
      </ModalHeader>
      <ModalBody>
        <Container>
          <Table responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Qty</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <Container>
                    <td
                      style={{ cursor: "pointer" }}
                      id={`product${item.id}`}
                      onClick={() => togglePopover(item)}
                    >
                      {item.name}
                    </td>
                  </Container>
                  <td>{item.size}</td>
                  <td>{item.qty}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button onClick={() => removeFromCart(item.id)}>
                      <i className="fa fa-trash" />
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <strong>${cart.reduce((a, c) => a + c["price"], 0)}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
          <RenderPopover
            isProductOpen={isProductOpen}
            id={`product${product.id ? product.id : 1}`}
            name={product.name}
            image={product.image}
            togglePopover={togglePopover}
          />
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default Cart;
