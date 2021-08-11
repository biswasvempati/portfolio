import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;

const StyledCertificate = styled.p`
  color: ${colors.lightestSlate};
  font-size: ${fontSizes.xxl};
  font-weight: 300;
  margin-bottom: 5px;
`;

const Certifications = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="certifications" ref={revealContainer}>
      <Heading>{'Certifications'}</Heading>
      <ul>
        {data &&
          data.map(({ node }, i) => {
            const { title } = node.frontmatter;
            return (
              <li>
                <StyledCertificate>{title}</StyledCertificate>
              </li>
            );
          })}
      </ul>
    </StyledContainer>
  );
};

export default Certifications;
