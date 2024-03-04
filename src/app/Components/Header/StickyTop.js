"use client";

import React from "react";
import styled from "styled-components";

const StickyTop = () => {
  return (
    <Wrapper className="bg-[#3c3633] text-center decoration-[#eeedeb] py-2">
      avail 15% off on all orders above ₹3500, use code - PY15
    </Wrapper>
  );
};
export default StickyTop;

const Wrapper = styled.div`
  font-size: 12px;
  color: #eeedeb;
  letter-spacing: 0.2em;
  padding: 7px 20px 6px;
  text-align: center;
  text-transform: uppercase;
  transition: opacity 0.75s ease;
`;
