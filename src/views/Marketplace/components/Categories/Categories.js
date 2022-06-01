/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import LandscapeIcon from '@mui/icons-material/Landscape';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WatchIcon from '@mui/icons-material/Watch';
import CategoryIcon from '@mui/icons-material/Category';

const mock = [
  {
    title: 'Avatars',
    icon: (
      <FaceIcon sx={{height:48, width:48}} />
    ),
  },
  {
    title: 'Estates',
    icon: (
      <HouseIcon sx={{height:48, width:48}} />
    ),
  },
  {
    title: 'Land',
    icon: (
      <LandscapeIcon sx={{height:48, width:48}} />
    ),
  },
  {
    title: 'Clothing',
    icon: (
      <CheckroomIcon sx={{height:48, width:48}} />
    ),
  },
  {
    title: 'Accessories',
    icon: (
      <WatchIcon sx={{height:48, width:48}} />
    ),
  },
  {
    title: 'Miscellaneous',
    icon: (
      <CategoryIcon sx={{height:48, width:48}} />
    ),
  },
];

const Categories = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Categories
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Choose your product by categories
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Buy ready to use Virtual products:
          <br />
          Securely and Comfortably
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Button variant="contained" color="primary" size="large">
            See all categories
          </Button>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={6} md={2} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component={Card}
                  padding={4}
                  borderRadius={2}
                  width={1}
                  height={1}
                  bgcolor={'alternate.main'}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                  >
                    <Box
                      width={50}
                      height={50}
                      bgcolor={'secondary.dark'}
                      borderRadius={'100%'}
                      sx={{
                        transform: `translate(${theme.spacing(
                          2,
                        )}, ${theme.spacing(-2)})`,
                        marginTop: 2,
                      }}
                    />
                    <Box
                      sx={{
                        color: 'primary.dark',
                        position: 'absolute',
                        bottom: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant={'subtitle1'}
                    align={'center'}
                    sx={{ fontWeight: 500, marginTop: 2 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Categories;
