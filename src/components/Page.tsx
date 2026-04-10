import * as React from 'react';
import styled from '@emotion/styled';

const StyledPage = styled.div`
  display: block;
  flex: 1;
`;

interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>;

export default Page;
