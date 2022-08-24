// import { useRouter } from "next/router";
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledNavLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.isActive ? 'orange' : 'yellowgreen'};
`;

const NavItem = ({ link, text }) => {
  const { pathname }  = useRouter();
  const isActive = link === pathname;

  return (
    <li>
      <Link href={link}>
        <StyledNavLink isActive={isActive}>{text}</StyledNavLink>
      </Link>
    </li>
  )
};

export default NavItem;