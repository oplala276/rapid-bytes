
import { Box, styled } from '@mui/material';
// import styled from '@emotion/styled';

import Header from './components/header';
import InfoHeader from './components/infoHeader';
import Articles from './components/Articles';

const Cont = styled(Box)(({ theme }) => ({
  width: '60%',
  margin: '25px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '80%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%'
  }

}));
function App() {
  return (
    <Box>
      <Header />
      <Cont>
        <InfoHeader />
        <Articles />
      </Cont>
    </Box>
  );
}

export default App;
