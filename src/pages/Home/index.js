import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { storage } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import * as Types from "../../store/types";
import { Button } from "../../components/atoms";

const Container = styled.div`
  height: 100vh;
  display: flex;
  overflow: auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 25%;
  position: relative;
`;

const CheckImage = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 97%;
  display: flex;
`;

function Home() {
  const [state, setState] = useState({
    imageUrl: [],
    selectedImages: [],
  });
  const storeData = useSelector((store) => store.data);
  console.log(storeData);
  useEffect(() => {
    storage
      .ref(storeData.school)
      .listAll()
      .then((res) => {
        if (res.items.length > 0) {
          const temp = [];
          res.items.forEach(function (itemRef) {
            itemRef.getDownloadURL().then(function (url) {
              temp.push(url);
              setState({
                ...state,
                imageUrl: temp,
              });
            });
          });
        }
      });
  }, []);

  const selectImage = (url) => {
    console.log(url);
    const check = state.selectedImages.filter((e) => e.includes(url));
    console.log(check);
    if (check.length > 0) {
      const index = state.selectedImages.indexOf(check[0]);
      const temp = state.selectedImages;
      temp.splice(index, 1);
      setState({ ...state, selectedImages: temp });
    } else {
      setState({ ...state, selectedImages: [...state.selectedImages, url] });
    }
  };
  return (
    <Container>
      {state.imageUrl.map((item, index) => (
        <ImageContainer key={index}>
          <Image src={item} onClick={() => selectImage(item)} image={item} />
          {state.selectedImages.map((items, index) => {
            if (items.includes(item))
              return (
                <CheckImage
                  src={"/assets/images/check.png"}
                  key={index}
                  onClick={() => selectImage(item)}
                />
              );
          })}
        </ImageContainer>
      ))}
      {state.selectedImages.length > 0 && (
        <ButtonContainer>
          <Button>Next</Button>
        </ButtonContainer>
      )}
    </Container>
  );
}

export default Home;
