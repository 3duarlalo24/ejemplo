import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Hero, Hub, Partners, Pricings, Carrusel} from './components';  
import { integrations } from './data';


// const Carrusel = React.lazy(() => import('./components/Carrusel' ));

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '50%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.shape}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Hub />
        </Section>
      </div>

      <Section>
        <Partners data={integrations} />
      </Section>

      <SectionAlternate  data-aos="fade-up">
        <Carrusel />
      </SectionAlternate>
    
      <Section narrow>
        <Pricings />
      </Section>
    
    </div>
  );
};

export default Home;
