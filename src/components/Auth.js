import React from "react";
import RenderRegisterModal from "./shared/RegisterModal";
import RenderLoginModal from "./shared/LoginModal";

const LoginModal = (props) => {
  return (
    !props.user && (
      <React.Fragment>
        <RenderLoginModal
          user={props.user}
          isModalOpen={props.isLoginOpen}
          toggleLogin={props.toggleLogin}
          toggleRegister={props.toggleRegister}
          submitLogin={props.submitLogin}
        />
        <RenderRegisterModal
          user={props.user}
          isModalOpen={props.isRegisterOpen}
          toggleRegister={props.toggleRegister}
          toggleLogin={props.toggleLogin}
          submitRegister={props.submitRegister}
        />
      </React.Fragment>
    )
  );
};

export default LoginModal;
