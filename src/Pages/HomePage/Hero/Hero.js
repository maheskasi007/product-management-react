import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'left',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Hero = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 4,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 8 }}
        sx={{
          alignItems: 'center',
        }}
      >
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <img
            src="/assets/hero.png"
            alt="Hero banner - Product Management system"
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Item>
            <Typography variant="h3">
              “A great product manager has the brain of an engineer, the heart
              of a designer, and the speech of a diplomat.”
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Hero;
