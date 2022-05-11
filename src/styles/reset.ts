import { css } from 'styled-components';

const resetStyles = css`
  /* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }

  /* Указываем box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Убираем внутренние отступы
   *Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class
  */
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }

  /* Убираем внешние отступы */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Выставляем основные настройки по-умолчанию для body */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizespeed;
  }

  /* Элементы a */
  a,
  a:visited,
  a:active,
  a:focus {
    color: inherit;
    text-decoration: none;
  }

  /* Наследуем шрифты для инпутов и кнопок */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default resetStyles;
