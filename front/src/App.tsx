import React from 'react';
import {Routes, Route} from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';
import { RecoilRoot } from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';
import PostList from "@pages/List";
import Login from "@pages/Login";
import Mypage from "@pages/Mypage";
import Register from "@pages/Register";
import Write from "@pages/Write";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import theme from './styles/theme';
import GlobalStyle from "./styles/GlobalStyle";

library.add(fas)

const Container = styled.div`
  letter-spacing: -0.01em;
  font-weight: 400;
  background: #beb1e4;
  min-height: 100vh;
  padding: 50px 0;
`;

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Container>
            <Routes>
              <Route path='/' element={<PostList/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/mypage' element={<Mypage/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/write' element={<Write/>}/>
            </Routes>
          </Container>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  )
    ;
}
export default App;
