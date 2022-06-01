import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import NavItem from './components/NavItem';
import Login from 'blocks/web3';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Virtualground"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Flogo2.png?alt=media&token=55fcb307-a743-4c3e-9b9d-a4d9f3512572'
                : 'https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Flogo2.png?alt=media&token=55fcb307-a743-4c3e-9b9d-a4d9f3512572'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem items={pages} />
        </Box>
        <Box marginTop={2}>
          <Login connectBtnName="Connect"/>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default SidebarNav;
