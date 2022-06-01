import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import VideocamIcon from '@mui/icons-material/Videocam';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    media: 'https://images.unsplash.com/photo-1626379961798-54f819ee896a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    eventLink: 'https://www.linkedin.com/video/event/urn:li:ugcPost:6919601072034439168/',
    title: 'Are we Metaverse - Ready?',
    eventBy: 'Photon Legal',
    time: 'Apr 26, 2022, 5:30 PM - Apr 29, 2022, 6:30 PM (GMT+2)',
    place: 'Online',
    attendies: '105',
  },
  {
    media: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpcnR1YWwlMjByZWFsaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    eventLink: 'https://www.linkedin.com/video/event/urn:li:ugcPost:6897535166252998656/',
    title: 'Business in Metaverse',
    eventBy: 'Arpit Apoorva',
    time: 'Apr 30, 2022, 6:30 PM (GMT+2)',
    place: 'Online',
    attendies: '86',
  },
  {
    media: 'https://images.unsplash.com/photo-1538388149542-5e24932d11a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    eventLink: 'https://www.linkedin.com/events/6905146775913558016/',
    title: 'Privacy in Metaverse',
    eventBy: 'Tsaaro',
    time: 'Apr 29, 2022, 6:30 AM - 7:30 AM (GMT+2)',
    place: 'Online',
    attendies: '270',
  },
  {
    media: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFsa3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    eventLink: 'https://www.linkedin.com/events/6916623734611079168/',
    title: 'Why Every Brand Needs A Web3 & Metaverse Strategy',
    eventBy: 'Aquent Australia',
    time: 'Apr 29, 2022, 2:00 AM - 3:00 AM (GMT+2)',
    place: 'Online',
    attendies: '303',
  },
];

const Spaces = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          align={'center'}
          gutterBottom
          color={'secondary'}
        >
          Events
        </Typography>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Join our upcoming events
        </Typography>
        <Typography
          variant="h6" 
          color={'text.secondary'} 
          data-aos={'fade-up'} 
          align={'center'}
        >
          Here are our upcoming events you might want to learn more.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            View all
          </Button>
        </Box>
      </Box>
      <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none' }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component={'svg'}
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1921 273"
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      <polygon
                        fill={theme.palette.background.paper}
                        points="0,273 1921,273 1921,0 "
                      />
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'flex-end'}
                      position={'absolute'}
                      bottom={0}
                      padding={2}
                      width={1}
                      zIndex={2}
                    >
                      
                      <Button
                        variant={'contained'}
                        color="primary"
                        size="large"
                        href={item.eventLink}
                        startIcon={
                          <NoteAltOutlinedIcon/>
                        }
                      >
                        Register
                      </Button>
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={'h7'}
                      gutterBottom
                      align={'left'}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      display={'flex'}
                      flexDirection={{ xs: 'column', sm: 'cloumn' }}
                      alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
                      justifyContent={'left'}
                      marginTop={1}
                    >
                      <Box display={'flex'} alignItems={'center'} marginBottom={1}>
                        <Typography variant={'h8'}>
                           Event by &nbsp;
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ fontWeight: 800 }} color="text.secondary">
                           {item.eventBy}
                        </Typography>
                      </Box>
                      <Box display={'flex'} alignItems={'center'}>
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                          marginRight={1}
                        >
                          <VideocamIcon/>
                        </Box>
                        <Typography variant={'subtitle1'} color="text.secondary">
                           {item.place}
                        </Typography>
                      </Box>
                      <Box display={'flex'} alignItems={'center'}>
                        <Box
                          component={'svg'}
                          width={24}
                          height={24}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          marginRight={1}
                        >
                          <CalendarMonthIcon/>
                        </Box>
                        <Typography variant={'subtitle2'} color="text.secondary">
                          {item.time}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <Box display={'flex'} alignItems={'center'}>
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                          marginRight={1}
                        >
                         <PeopleAltIcon/>
                        </Box>
                       <Typography variant={'subtitle2'} color="text.secondary" >{item.attendies} attendees</Typography>
                      </Box>
                      <Box display={'flex'} alignItems={'center'}>
                       <Button href={item.eventLink}>
                         Learn more
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                  
                  
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Spaces;
