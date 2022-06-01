import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={110}
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
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="/faq"
                color="text.primary"
                variant={'subtitle2'}
              >
                FAQ
              </Link>
            </Box>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="/policy"
                color="text.primary"
                variant={'subtitle2'}
              >
                Privacy
              </Link>
            </Box>   
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="/terms"
                color="text.primary"
                variant={'subtitle2'}
              >
                Terms of Use
              </Link>
            </Box>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="/careers"
                color="text.primary"
                variant={'subtitle2'}
              >
                Careers
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="/whitepaper"
                size="small"
              >
                Whitepaper
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Virtualground. 2022. All rights reserved
        </Typography>
        {/* 
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
        */}
      </Grid>
    </Grid>
  );
};

export default Footer;
