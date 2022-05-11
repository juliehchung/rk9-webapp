import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import palette from '../../theme/palette';
import heroImg from '../../assets/images/static/erns-20.jpg';
import respectImg from '../../assets/images/static/four-women-dogs-smiley.jpg';
import humanCanineImg from '../../assets/images/static/tilted-head-dogs.jpg';
import workingDogImg from '../../assets/images/static/dog-musle-standing.jpg';
import allieImg from '../../assets/images/static/allie-stormy-overlook.jpg';

export const Home: FC = () => {
  const history = useHistory();

  return (
    <Grid container>
      <Grid
        item
        md={12}
        style={{
          marginTop: '70px',
          height: '85vh',
          width: '100%',
          backgroundColor: palette.disabled,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        md={12}
        container
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          sm={12}
          md={6}
          style={{
            marginTop: '50px',
            width: '100%',
            height: '300px',
            backgroundColor: palette.disabled,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${respectImg})`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          sm={12}
          md={6}
          style={{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 30px 30px 70px',
          }}
        >
          <Typography variant="h4">A PLACE OF RESPECT</Typography>
          <Typography variant="h5">
            We believe that working with animals is a gift, and we strive to always remember this.
            This also means that our training will benefit the whole family.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        md={12}
        container
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          sm={12}
          md={6}
          style={{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'right',
            padding: '30px 70px 30px 30px',
          }}
        >
          <Typography variant="h4">HUMAN and CANINE</Typography>
          <Typography variant="h5">
            Our focus is to work for you and your dog(s), building holistic training plans that
            address all of your concerns and goals, with everything from:
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          style={{
            marginTop: '50px',
            height: '300px',
            width: '100%',
            backgroundColor: palette.disabled,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${humanCanineImg})`,
            backgroundSize: '100%',
            backgroundPosition: 'bottom',
          }}
        />
      </Grid>
      <Grid
        item
        md={12}
        container
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '50px',
        }}
      >
        <Grid
          item
          md={6}
          style={{
            marginTop: '50px',
            height: '300px',
            width: '100%',
            backgroundColor: palette.disabled,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${workingDogImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          md={6}
          style={{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 30px 30px 70px',
          }}
        >
          <Typography variant="h4">PUPPY REARING, to SEVERE AGGRESSION, to WORKING DOGS</Typography>
          <Typography variant="h5">
            I will walk side by side with you and your pack, to offer ongoing support and
            consultation.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{
          marginBottom: '50px',
          backgroundColor: palette.paper.secondary,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => history.push('/about')}
      >
        <Grid
          item
          sm={12}
          md={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: palette.text.contrast,
            padding: '30px',
          }}
        >
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '30px' }}>
            GET TO KNOW ALLIE
          </Typography>
          <Typography variant="h6">
            I am the owner and head trainer at Rogue K9 Academy, and I am a Certified Foundation
            Style Dog Trainer. Our core values are passion, knowledge, and respect. My own focus is
            on providing science-based training that makes sense, and does not cause negative side
            effects. Foundation Style Dog Training is a holistic approach to dog training,
            implementing operant conditioning, applied behavior analysis, and cynopraxis....
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: palette.disabled }}>
            <img src={allieImg} style={{ height: '100%' }} alt="" />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
