import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const Cart = ({
  isModalOpen,
  toggleCart,
  removeFromCart,
  cart,
  cartTotal,
  togglePopover,
}) => {
  return (
    <Modal isOpen={isModalOpen} toggle={toggleCart} size="lg">
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
            {cart.length === 0 ? (
              <div style={{ textAlign: "center" }}>
                <i>Your cart is empty</i>
              </div>
            ) : (
              <tbody>
                {cart.map((item) => (
                  <tr key={item.name + item.size}>
                    <td
                      style={{ cursor: "pointer" }}
                      id={`product${item.id}`}
                      onClick={() => togglePopover(item)}
                    >
                      <span className="mt-5">{item.name}</span>
                    </td>
                    <td>{item.size}</td>
                    <td>{item.qty}</td>
                    <td>${item.price * item.qty}</td>
                    <td>
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        style={{ backgroundColor: "#e5e5f0" }}
                      >
                        <i
                          className="fa fa-trash"
                          style={{ color: "#9f9ad8" }}
                        />
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>Total ${cartTotal(cart).toFixed(2)}</strong>
                  </td>
                </tr>
              </tbody>
            )}
          </Table>
          <Link to="/checkout" onClick={toggleCart}>
            <Button style={{ backgroundColor: "#e5e5f0", color: "black" }}>
              <i className="fa fa-shopping-cart" style={{ color: "black" }} />{" "}
              Check Out
            </Button>
          </Link>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default Cart;
