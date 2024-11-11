import { Container, Divider, Typography } from '@mui/material';
import Title from '../../components/Title/Title';

const AboutUsPage = () => {
  return (
    <>
      <Title
        titleName="About Us | Product Management System"
        description="About us - Product Management System"
        href={'/assets/about.png'}
      />
      <section>
        <Container maxWidth="lg">
          <Typography sx={{ py: 5 }} variant="h2">
            About us
          </Typography>
          <Typography sx={{ pb: 2 }} variant="body1">
            A Product Management System (PMS) is a framework that helps
            organizations manage the entire lifecycle of a product, from
            conception to launch and beyond. It involves several key components:
          </Typography>
          <Divider />

          <Typography sx={{ p: 2 }} variant="body2">
            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
              Process:
            </Typography>{' '}
            This includes steps like market research, product planning,
            development, and launch. It ensures that all stages are
            systematically followed to bring a product to market successfully.
          </Typography>
          <Divider />

          <Typography sx={{ p: 2 }} variant="body2">
            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
              Tools:
            </Typography>{' '}
            These are software applications used to facilitate various tasks
            within the product management process. Examples include data
            analytics tools, project management software, and collaboration
            platforms.
          </Typography>
          <Divider />

          <Typography sx={{ p: 2 }} variant="body2">
            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
              Team:
            </Typography>{' '}
            A cross-functional team is essential, involving members from
            different departments such as development, marketing, and sales.
            This team collaborates to ensure the product meets market needs and
            organizational goals.
          </Typography>
          <Divider />

          <Typography sx={{ p: 2 }} variant="body2">
            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
              Strategy:
            </Typography>{' '}
            This involves setting a clear product vision, defining goals, and
            creating a roadmap that outlines the steps needed to achieve these
            goals.
          </Typography>
          <Divider />

          <Typography sx={{ p: 2 }} variant="body2">
            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
              Metrics:
            </Typography>{' '}
            Identifying and tracking key performance indicators (KPIs) to
            measure the product’s success and make data-driven decisions.
          </Typography>

          <Typography sx={{ pt: 2, pb: 5 }} variant="body1">
            A well-implemented PMS helps in creating a single source of truth,
            ensuring all stakeholders are aligned and informed throughout the
            product’s lifecycle.
          </Typography>
        </Container>
      </section>
    </>
  );
};
export default AboutUsPage;
