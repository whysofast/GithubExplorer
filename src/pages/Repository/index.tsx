import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  console.log(params);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="avatar"
          />
          <div>
            <strong>facebook/react</strong>
            <p>repository description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>10</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>9</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>8</strong>
            <span>Opened issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/asdfasdfasd">
          <div>
            <strong>asdfasdf</strong>
            <p>asdfasdf</p>
          </div>

          <FiChevronRight size={22} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
