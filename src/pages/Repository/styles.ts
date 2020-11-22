import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    font-size: 24px;

    &:hover {
      color: #667;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        /* só pra colocar um em cima do outro, pq o p e span são inline */
        display: block;
        font-size: 36px;

        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  /* mesmo tamanho do input */

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
