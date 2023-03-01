import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUsers } from "./Stores/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const clearUser = () => {
      dispatch(deleteUsers());
  }
  return <Wrapper>
    <button className="btn clear-btn" onClick={clearUser}>clear All</button>
    </Wrapper>;
};

const Wrapper = styled.section`
.clear-btn{
  text-transform: capitalize;
  background-color: #db338a;
  margin-top:2rem;
}
`