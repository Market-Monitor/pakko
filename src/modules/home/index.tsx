import Seo from '../../components/Seo';
import DefaultLayout from '../../layouts/Default';
import HomeAuthForm from './authform';

const HomePage = () => {
  return (
    <DefaultLayout>
      <Seo title="Admin | Pharmer Web" />

      <HomeAuthForm />
    </DefaultLayout>
  );
};

export default HomePage;
