import React from "react";
import styled from "styled-components";

import closeIcon from "../img/closeIcon.png"

const Notification = ({ onClick, statusType = "success", children }) => {
  if (statusType === 200) {
    statusType = "success";
  }
  if (statusType > 200) {
    statusType = "error";
  }
  if (statusType > 200 && statusType < 500) {
    statusType = "warning";
  }
  return (
    <NotificationContainer>
      <InnerContainer statusType={statusType}>
        {children}
          <Img onClick={onClick} src={closeIcon} alt="close"/>
      </InnerContainer>
    </NotificationContainer>
  );
};

const notificationColors = {
  success: "#89C057",
  error: "#B33A3A",
  warning: "#f90",
};

const Img = styled.img`
width: 20px;
cursor: pointer;
`

const InnerContainer = styled.section`
  padding: 10px 15px;
  color: #333;
  border: 1px solid #ffffff50;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ statusType }) => notificationColors[statusType]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

const NotificationContainer = styled.article`
  height: 50px;
  width: 100%;
  position: static;
  top: 0;
  left: 0;
  right: 0;
`;

export default Notification;
