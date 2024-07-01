"use client";

import { createGlobalStyle } from "styled-components";
import { device } from "./media";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-Thin.woff2") format("woff2"),
      url("/fonts/Pretendard-Thin.woff") format("woff");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-ExtraLight.woff2") format("woff2"),
      url("/fonts/Pretendard-ExtraLight.woff") format("woff");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-Light.woff2") format("woff2"),
      url("/fonts/Pretendard-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-Regular.woff2") format("woff2"),
      url("/fonts/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-Medium.woff2") format("woff2"),
      url("/fonts/Pretendard-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-SemiBold.woff2") format("woff2"),
      url("/fonts/Pretendard-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-Bold.woff2") format("woff2"),
      url("/fonts/Pretendard-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-ExtraBold.woff2") format("woff2"),
      url("/fonts/Pretendard-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src:
      url("/fonts/Pretendard-Black.woff2") format("woff2"),
      url("/fonts/Pretendard-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }

  :root {
    --color-primary: #3b82f6;
    --color-primary-hover: #3269c3;
    --color-gray: #e0e2e7;
    --color-gray-dark: #A8A8A8;
    --color-gray-darker: #707070;
    --color-gray-hover: #f7f8fa;
    --color-black: #333;
    --color-white: #fff;
    --color-error: #ee5151;

    font-size: 10px;

    @media ${device.tablet} {
      font-size: 9px;
    }
  }

  * {
      margin: 0;
      padding: 0;
      font-family: "Pretendard", "Arial", sans-serif;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    min-width: 32rem;
    font-family: "Pretendard", "Arial", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: 0;
    background: transparent;
    appearance: none;
    cursor: pointer;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button,
  input,
  select,
  textarea {
    font-size: inherit;
    background-color: transparent;
    border: 0;
    border-radius: 0.6rem;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  .category-swiper {
    .swiper-slide {
      width: auto;
    }
  }

  .swal2-popup {
    font-size: 1.6rem;

    .btn {
      color: var(--color-black);
      border: .1rem solid var(--color-gray-dark);
      background-color: var(--color-white);
      transition: background-color .2s;

      &.btn-primary{
        color: var(--color-white);
        background-color: var(--color-primary);
        border: none;

        &:hover {
          background-color: var(--color-primary-hover);
        }
      }

      &:hover {
        background-color: var(--color-gray-hover);
      }
    }
  }
`;

export default GlobalStyle;
