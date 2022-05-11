import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import palette from '../../theme/palette';
import AllieImg from '../../assets/images/static/Allie.jpg';
import FamilyImg from '../../assets/images/static/dog-walking-lake.jpg'

export const About: FC = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        style={{
          marginTop: '70px',
          backgroundColor: palette.gray,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          sm={12}
          md={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: palette.text.contrast,
          }}
        >
          <Typography variant="h4" style={{ fontWeight: 'bold', padding: '50px 50px 0 50px' }}>
            Hi! My name is Allie McCain.
          </Typography>
          <Typography variant="h6" style={{ padding: '50px' }}>
            I am the owner and head trainer at Rogue K9 Academy, and I am a{' '}
            <span style={{ fontWeight: 'bold' }}>Certified Foundation Style Dog Trainer</span>. Our
            core values are <span style={{ fontWeight: 'bold' }}>passion</span>,{' '}
            <span style={{ fontWeight: 'bold' }}>knowledge</span>, and{' '}
            <span style={{ fontWeight: 'bold' }}>respect</span>. My own focus is on providing
            science-based training that makes sense, and does not cause negative side effects.
            <span style={{ fontWeight: 'bold' }}>Foundation Style Dog Training</span> is a holistic
            approach to dog training, implementing operant conditioning, applied behavior analysis,
            and cynopraxis.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              backgroundColor: palette.disabled,
              backgroundImage: `url(${AllieImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '250px',
              height: '400px',
              width: '400px',
            }}
          />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" style={{ padding: '50px' }}>
          My passion is working with <span style={{ fontWeight: 600 }}>aggressive dogs</span>.
        </Typography>
      </Grid>
      <Grid
        item
        container
        style={{
          backgroundColor: palette.paper.secondary,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          sm={12}
          md={5}
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: palette.text.contrast,
          }}
        >
          <Typography variant="h5" style={{ padding: '50px' }}>
            I believe in taking the whole family, canine genetics, your goals, and the issues at
            hand into consideration, to create a training plan that makes sense and is achievable!
            This common sense approach makes solutions for puppy rearing, more advanced training,
            aggression, fear, adoption acclimation, and any other behavioral issue, become wholly
            achievable.
          </Typography>
        </Grid>
        <Grid item sm={12} md={7} style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <div
            style={{
              height: '100%',
              width: '75%',
              background: `linear-gradient(to top, ${palette.paper.secondaryTransparent}, ${palette.paper.secondaryTransparent}), url(${FamilyImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom'
            }}
          >
          </div>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" style={{ padding: '50px' }}>
          <span style={{ fontWeight: 600 }}>Foundation Style Dog Training</span> is hack-free
          training that simply seeks to develop relationships between the handler and canine,
          resulting in: you becoming a confident dog-handling-ninja who truly understands their dog,
          and the dog being confident in the expectations set for them, with complete trust that
          their human has their best interests at heart... thereby producing obedience!
        </Typography>
      </Grid>
      <Grid
        item
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'bottom',
        }}
      >
        <Grid
          item
          sm={12}
          md={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: palette.text.contrast,
          }}
        >
          <iframe
            width="500px"
            height="300px"
            src="https://www.youtube.com/embed/-vDBns5hlyk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Meet Your Trainer"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography variant="h5" style={{ padding: '50px' }}>
            I am fully committed to your success, and offer a hands-on approach. I belong to a
            mentorship program, and believe in always continuing my education to become better, not
            just in relation to dog training, but in canine nutrition and in disease prevention, so
            that I can continue to offer my very best to each family that trusts me to be a part of
            their journey.
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={12} style={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          style={{ letterSpacing: '10px', padding: '50px', fontWeight: 100 }}
        >
          I AM HERE FOR YOU!
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" style={{ padding: '50px 50px 0 50px' }}>
          I am also part of a group of active trainers who meet weekly to discuss cases, support
          each other, and hold ourselves accountable to a higher standard in this un-standardized
          industry. In addition, I am constantly learning more about how to better help our dogs.
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography
          variant="h3"
          style={{ padding: '50px 50px 0 50px', color: palette.paper.secondary, fontWeight: 800 }}
        >
          Beyond Training, I am Certified in
        </Typography>
      </Grid>
      <Grid
        item
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <Grid
          item
          sm={12}
          md={4}
          style={{
            backgroundColor: palette.disabled,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '30px',
          }}
        >
          <Typography variant="h4">Veterinary Nutrition</Typography>
        </Grid>
        <Grid
          item
          container
          sm={12}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <Grid
            item
            style={{
              cursor: 'pointer',
              backgroundColor: palette.disabled,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '30px',
            }}
          >
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Myofascial Massage
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sm={12}
          md={4}
          style={{
            backgroundColor: palette.disabled,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '30px',
          }}
        >
          <Typography variant="h4">Cold Laser Therapy</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
