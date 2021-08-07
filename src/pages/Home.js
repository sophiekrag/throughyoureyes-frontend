import React from "react";
import styled from "styled-components";
import diary from "../img/diary.jpeg";
import Button from "../components/Button"

const Home = () => {
  return (
    <>
      <Header>
        My life through your eyes
        <Img src={diary} alt="Home writing img" />
      </Header>
      <Container>
        <ContainerChild>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            faucibus lectus. Phasellus nec est nec enim mollis posuere at eget
            mauris. Etiam mi libero, luctus rhoncus velit ac, tincidunt faucibus
            dolor. Proin lacinia quam in interdum porta. Aenean varius, tortor
            et venenatis malesuada, est diam molestie dui, vel condimentum massa
            turpis vel lorem. Fusce semper enim turpis, quis rutrum arcu ornare
            at. Maecenas interdum libero in elementum tristique. Praesent
            vestibulum fringilla augue interdum mollis. Fusce tincidunt tempor
            faucibus. Cras maximus vel lorem id aliquam. Curabitur cursus congue
            tellus. Quisque in finibus turpis, sed scelerisque mauris. Duis
            interdum quam vitae mattis mattis. Proin sed interdum mauris, vel
            pharetra augue. Ut tempor, velit vitae tristique ultricies, nunc est
            vehicula turpis, vel consequat orci magna eu lacus. Sed massa erat,
            euismod eu blandit id, pellentesque vitae est. Mauris dictum magna
            id felis dignissim, sed rutrum odio vulputate. Maecenas aliquet,
            risus at consectetur rutrum, purus quam blandit justo, sit amet
            tristique leo sem rhoncus metus. Vivamus euismod tellus volutpat,
            facilisis enim id, fermentum tellus. Praesent dictum, nulla in
            dictum dapibus, mi elit posuere lorem, id vehicula mi lacus ac
            ligula. Nullam non purus ac ex accumsan tincidunt ut non nulla.
            Vestibulum quis ullamcorper ex. Praesent viverra leo at diam
            suscipit, ac rhoncus erat fermentum. Phasellus at egestas nisi. Cras
            ligula diam, cursus nec consequat vitae, semper a mauris. Integer
            vitae hendrerit dolor. Suspendisse blandit feugiat pellentesque.
            Integer volutpat neque vitae dolor viverra sagittis. Ut iaculis
            mauris mauris, in vestibulum dui tincidunt nec. Proin a vestibulum
            velit. Nam sapien elit, mattis scelerisque eleifend id, malesuada at
            massa. Vestibulum maximus orci augue, ac laoreet tellus lacinia sed.
            Nam malesuada, quam et viverra lobortis, diam dui ullamcorper ex, id
            vehicula purus dui euismod metus. Mauris eu elit viverra neque
            commodo vulputate. In non nisi ornare, bibendum elit eu, ultricies
            lorem. Proin et odio non magna vestibulum sodales sit amet sed
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Morbi gravida massa ipsum, nec
            ornare nibh porttitor eu. Suspendisse sit amet pretium felis.
            Quisque eros mauris, fringilla nec pellentesque quis, elementum id
            mi. Donec posuere ligula at mauris sagittis, at condimentum orci
            blandit. Praesent imperdiet, lectus eget vulputate tincidunt, nunc
            eros molestie elit, porttitor consectetur magna tortor ut nunc.
            Maecenas sagittis elit urna, sed tempus mi consequat ac. Sed in
            cursus neque. Nulla venenatis, ipsum eget iaculis egestas, eros
            justo maximus risus, quis consectetur magna urna ut risus. Mauris
            vulputate condimentum eros id tempus. Integer libero nibh, ultrices
            quis mi a, vestibulum vehicula nulla. Quisque in purus sit amet
            turpis efficitur porttitor. Aenean scelerisque eros nibh, vel
            commodo enim pellentesque eget. Integer vel metus non libero mollis
            fermentum. Donec non congue dui. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam arcu erat, facilisis a justo sed, scelerisque vehicula lorem.
            Fusce condimentum augue dolor, eget ullamcorper enim elementum at.
          </p>
        </ContainerChild>
        <ContainerChild>
            <h2>Start Now</h2>
            <Button to="/login">Login</Button>
            <p>or</p>
            <Button to="/signup">Singup</Button>
        </ContainerChild>
      </Container>
    </>
  );
};

const Header = styled.h1`
  font-size: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
`;
const Img = styled.img`
  width: 150px;
  border-radius: 50px;
`;

const Container = styled.section`
  display: flex;
`;

const ContainerChild = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export default Home;
