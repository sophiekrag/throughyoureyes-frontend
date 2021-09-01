import React from "react";
import styled from "styled-components";

const Notification = ({ onClick, statusType = "success", children }) => {
  return (
    <NotificationContainer>
      <InnerContainer statusType={statusType}>
        {children}
        {/* <Close onClick={setCloseModal}>x</Close> */}
        <Close>x</Close>
      </InnerContainer>
    </NotificationContainer>
  );
};

const notificationColors = {
  success: "green",
  error: "red",
  warning: "#f90",
};

const Close = styled.button`
  background-color: grey;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const InnerContainer = styled.section`
  padding: 10px 15px;
  color: #333;
  border: 1px solid #ffffff50;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ statusType }) => notificationColors[statusType]};
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

const NotificationContainer = styled.article`
  height: 100px;
  width: 100%;
  margin-top: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default Notification;
