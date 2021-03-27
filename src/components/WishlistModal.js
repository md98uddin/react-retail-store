import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Container,
  Table,
  Button,
} from "reactstrap";

const WishListModal = ({
  isModalOpen,
  toggleWishList,
  wishlist,
  removeFromWishList,
  addToCartFromWishList,
  togglePopover,
}) => {
  return (
    <Modal isOpen={isModalOpen} toggle={toggleWishList} size="lg">
      <ModalHeader
        toggle={toggleWishList}
        style={{ backgroundColor: "#e5e5f0" }}
      >
        My Wishlist
      </ModalHeader>
      <ModalBody>
        <Container>
          <Table responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.name + item.size}>
                  <td
                    style={{ cursor: "pointer" }}
                    id={`product${item.id}`}
                    onClick={() => togglePopover(item)}
                  >
                    <span className="mt-5">{item.name}</span>
                  </td>
                  <td>{item.size}</td>
                  <td>${item.price} </td>
                  <td>
                    <Button
                      onClick={() => addToCartFromWishList(item)}
                      style={{ backgroundColor: "#e5e5f0" }}
                    >
                      <i className="fa fa-plus" style={{ color: "#9f9ad8" }} />
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => removeFromWishList(item.id)}
                      style={{ backgroundColor: "#e5e5f0" }}
                    >
                      <i className="fa fa-trash" style={{ color: "#9f9ad8" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default WishListModal;
