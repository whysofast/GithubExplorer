import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    /* Faz o bloco input ocupar o máximo de espaço possível (700 - tamanho do botão) */
    flex: 1;
    height: 70px;
    /* Distancia o Texto da borda do input */
    padding: 0 24px;
    border: 0;
    /* Arredonda bordas nos lados da esquerda */
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    /* arredonda os cantos da direita */
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    /* cria uma transição suave entre o estado normal e o de hover */
    transition: background-color 0.2s;
    /* Aplica o hvoer no button, por conta do '&' */
    /* O shade é um atributo do polished que deixa o objeto numa cor mais escura*/
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  /* mesmo tamanho do input */
  max-width: 700px;

  /* regra geral para todo o conjunto */
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    /* por padrão, o display do <a> é inline. daí para aplicar
    o fundo branco envolta de todo o conjunto, usamos o block, porém
    é aparentemente desnecessário  */
    display: block;
    /* retira o underscore do text */
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    /* Aplica uma margem top APENAS PROS <a> seguintes */
    & + a {
      margin-top: 16px;
    }
    /* hover maneiro para o conjunto */
    &:hover {
      transform: translateX(10px);
    }
    img {
      width: 64px;
      height: 64px;
      /* deixa a imagem circular perfeitamente */
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 16px;
      /* bold */
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
