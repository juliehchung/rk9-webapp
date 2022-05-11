import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import palette from '../../theme/palette';
import heroImg from '../../assets/images/static/bed-practice.jpg';

export const Philosophy: FC = () => {
  return (
    <Grid container>
      <Grid
        item
        md={12}
        style={{
          marginTop: '70px',
          height: '100vh',
          width: '100%',
          backgroundColor: palette.disabled,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
        }}
      >
      </Grid>
      <Grid
        item
        container
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <Grid
          item
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" style={{ paddingBottom: '25px' }}>
            At Rogue K9 Academy, we focus on practicing LIMA and Cynopraxis in all of our affairs.
          </Typography>
          <Typography variant="h4" style={{ fontWeight: 550 }}>
            WHAT IS LIMA? WHAT DOES CYNOPRAXIS MEAN?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{
          backgroundColor: palette.paper.secondary,
          display: 'flex',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <Grid
          item
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: palette.text.contrast,
          }}
        >
          <Typography variant="h5" style={{ fontWeight: 600, paddingBottom: '25px' }}>
            Steven R. Lindsay (the founder of these practices) defines it:
          </Typography>
          <Typography variant="h5" style={{ paddingBottom: '25px' }}>
            Cynopraxic trainers should make an effort to conform their training interventions to the
            LIMA (least intrusive and minimally aversive) principle, by employing procedures that
            represent the least necessary intrusion upon the human-dog bond and cause the dog a
            minimal amount of discomfort, as is necessary to achieve the behavioral objective.
          </Typography>
          <Typography variant="h5" style={{ paddingBottom: '25px' }}>
            Further, training recommendations should do no harm to the human-dog relationship, to
            the dog, or to the owner, in the process of implementing them.
          </Typography>
          <Typography variant="h5" style={{ paddingBottom: '25px' }}>
            Rather than dictating a one-sided program that cannot be realistically implemented by
            the family, the cynopraxic counselor should work with the family in a spirit of
            teamwork, to find a common solution.
          </Typography>
          <Typography variant="h5">
            Toward achieving this aim, the counselor should listen to the family’s needs and be
            creative. Just as it is certainly true of dogs, people are individuals possessing unique
            strengths and weaknesses that need to be recognized and integrated into the training
            plan. Good cynopraxic counselors know how to work well with both people and dogs.
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" style={{ padding: '50px', fontWeight: 550 }}>
          This means that our training is truly for the benefit of the whole family, both human and
          canine. I want to provide training that actually addresses your goals and your concerns,
          and will walk side by side with you and your family, to provide support throughout the
          entire process.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Philosophy;
