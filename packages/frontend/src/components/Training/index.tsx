import React, { FC, useState } from 'react';
import { Typography, Box, Grid, List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import palette from '../../theme/palette';
import heroImg from '../../assets/images/static/erns-58.jpg';

export const Training: FC = () => {
  const [showPrivateSessions, setShowPrivateSessions] = useState(false);
  const [showGroupClasses, setShowGroupClasses] = useState(false);
  const [showBiothaneLeash, setShowBiothaneLeash] = useState(false);
  const [showSessionSupport, setShowSessionSupport] = useState(false);
  const [showWellnessCoaching, setShowWellnessCoaching] = useState(false);
  const [showPersonalShopping, setShowPersonalShopping] = useState(false);

  return (
    <Grid container>
      <Grid
        item
        md={12}
        style={{
          margin: '70px 0 50px 0',
          height: '50vh',
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
          backgroundColor: palette.paper.secondary,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          color: palette.text.contrast,
        }}
      >
        <Typography variant="h4" style={{ fontWeight: 600 }}>
          Our Training Package
        </Typography>
        <Typography variant="h4" style={{ display: 'flex', alignSelf: 'end', fontWeight: 600 }}>
          $655
        </Typography>
      </Grid>
      <Grid item md={12} style={{ padding: '50px' }}>
        <Typography variant="h5" style={{ fontWeight: 600, paddingBottom: '25px' }}>
          When you hire me to work with you and your dog, you are hiring a personalized, “all-in”
          coaching service, dedicated to helping you build the relationship that you want, with your
          dog.
        </Typography>
        <Typography variant="h5" style={{ paddingBottom: '25px' }}>
          Off-leash training and personal protection are just a few of the more advanced goals
          available. We will progress through the training at you and your dog’s pace. Together, we
          will take the training as far as you would like to go.
        </Typography>
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant="h5" style={{ fontWeight: 600, paddingBottom: '25px' }}>
            With this package you get:
          </Typography>
          <Typography variant="h5" style={{ paddingBottom: '25px', fontStyle: 'italic' }}>
            *click on each to learn more
          </Typography>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <List>
            <ListItemButton onClick={() => setShowPrivateSessions(!showPrivateSessions)}>
              <ListItemText primary="Five, 60 minute Private Sessions" />
              {showPrivateSessions ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={showPrivateSessions} timeout="auto" unmountOnExit>
              <List>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - One on one, in person coaching. Here you will learn how to teach your dog and
                  practice new behaviors. This is where the rubber meets the road.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - Full access to myself and the RK9 community between sessions to troubleshoot
                  issues and maintain momentum.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - An interactive training journal where you can upload videos of you practicing
                  your homework, between sessions, and receive feedback in real time.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - You and your dog will learn how to communicate predictably, tackling
                  housebreaking, management, leadership and obedience that will progress at you and
                  your dog’s pace.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px', fontWeight: 600 }}>
                  - The possibilities are endless. You and your dog deserve the freedom of a mutual
                  relationship and the loving bond that comes with fair and advanced training.
                </ListItem>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setShowGroupClasses(!showGroupClasses)}>
              <ListItemText primary="Group Classes" />
              {showGroupClasses ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={showGroupClasses} timeout="auto" unmountOnExit>
              <List>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - Group classes and social events are scheduled monthly for you to practice
                  training and proper social skills in a safe and controlled environment.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - We do everything from obedience classes, to aggression support groups, to
                  swimming lessons and fitness with Fido. These classes are uplifting, fun, and will
                  make you a more confident dog handler, who your dog can trust, in any situation.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - These classes are uplifting, fun, and will make you a more confident dog
                  handler, who your dog can trust, in any situation.
                </ListItem>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setShowBiothaneLeash(!showBiothaneLeash)}>
              <ListItemText primary="One 6ft Biothane Leash in your color of choice" />
              {showBiothaneLeash ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={showBiothaneLeash} timeout="auto" unmountOnExit>
              <List>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - Super comfy, easy to handle and clean, and perfect for the dedicated handler!
                </ListItem>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setShowSessionSupport(!showSessionSupport)}>
              <ListItemText
                primary="Between session support, video instruction, troubleshooting, and homelife problem
            solving"
              />
              {showSessionSupport ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={showSessionSupport} timeout="auto" unmountOnExit>
              <List>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - Relationship building and keeping momentum takes more than one practice per
                  week, and, as you will be doing homework between sessions and committed to your
                  dogs, so will I.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - I will keep in touch and respond to questions via text, emails or phone calls,
                  and communicate solutions as they arise. I will also send instructional videos to
                  help, when needed.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - You will also have access to our group forum where there will be training tips,
                  videos and a community of other Rogue K9 Academy members, like yourself, who are
                  working to achieve their goals.
                </ListItem>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setShowWellnessCoaching(!showWellnessCoaching)}>
              <ListItemText primary="Wellness Coaching" />
              {showWellnessCoaching ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={showWellnessCoaching} timeout="auto" unmountOnExit>
              <List>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - There is more to dog ownership than obedience. A healthy dog is a happy dog. I
                  will help you make educated decisions about health care and nutrition.
                </ListItem>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setShowPersonalShopping(!showPersonalShopping)}>
              <ListItemText primary="“Personal Shopping”" />
              {showPersonalShopping ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={showPersonalShopping} timeout="auto" unmountOnExit>
              <List>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - I will help you pick out any additional gear you and your dog may need,
                  including training collars, and the very best training treats.
                </ListItem>
                <ListItem style={{ paddingLeft: '50px' }}>
                  - Consider me your dog’s concierge service (these items will be charged
                  separately)!
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Grid>
      <Grid
        item
        container
        style={{
          backgroundColor: palette.paper.secondary,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          color: palette.text.contrast,
        }}
      >
        <Typography variant="h4" style={{ fontWeight: 600 }}>
          Consultation
        </Typography>
        <Typography variant="h4" style={{ display: 'flex', alignSelf: 'end', fontWeight: 600 }}>
          $50
        </Typography>
      </Grid>
      <Grid item md={12} style={{ padding: '50px' }}>
        <Typography variant="h5" style={{ fontWeight: 600, paddingBottom: '25px' }}>
          To set up your consultation, contact us at{' '}
          <a
            href="mailto: allie@dogtraining.love"
            style={{ fontStyle: 'italic', color: palette.black }}
          >
            allie@dogtraining.love
          </a>{' '}
          or{' '}
          <a href="tel: 909-964-1382" style={{ fontStyle: 'italic', color: palette.black }}>
            (909) 964-1382
          </a>
          .
        </Typography>
        <Typography variant="h5" style={{ paddingBottom: '25px' }}>
          Consultations are held via zoom and last about 1.5 hours.
        </Typography>
        <Typography variant="h5" style={{ paddingBottom: '15px' }}>
          Prior to your consultation, you will receive a welcome packet with a bunch of
          complimentary information that will help you right away, and help you decide if you want
          to invest further.
        </Typography>
        <Typography variant="h5" style={{ paddingBottom: '15px' }}>
          Your consultation will give you tools to start your dog on the right path, regardless of
          whether or not you decide to move forward with training. We will also be able to answer
          any questions that you have.
        </Typography>
        <Typography variant="h5" style={{ paddingBottom: '25px' }}>
          <span style={{ fontWeight: 600 }}>Foundation Style Dog Training</span> can help any dog
          and handler team achieve any goal, because it is based on understanding animal behavior
          and how to train animals. It is not a hack, or “quick fix”!
        </Typography>
      </Grid>
      <Grid
        item
        container
        style={{
          backgroundColor: palette.paper.secondary,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          color: palette.text.contrast,
        }}
      >
        <Typography variant="h4" style={{ fontWeight: 600 }}>
          Online Training
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" style={{ padding: '50px', fontWeight: 550 }}>
          If you have an aggressive dog and are out of the area, please take advantage of my online
          aggression consultations, support, and online training. There is hope! I am here for you!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Training;
