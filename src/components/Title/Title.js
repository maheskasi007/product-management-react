import { Helmet } from 'react-helmet-async';

const Title = ({ titleName, description, href }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{titleName}</title>
      <link rel="shortcut icon" href={href} type="image/x-icon" />
    </Helmet>
  );
};
export default Title;
