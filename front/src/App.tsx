import React, { Suspense } from 'react';
import {Routes, Route} from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';
import { RecoilRoot } from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';
import PostList from "@pages/List";
import Login from "@pages/Login";
import Mypage from "@pages/Mypage";
import PrivateRoutes from "@utils/PrivateRoutes/privateRoutes";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import theme from './styles/theme';
import GlobalStyle from "./styles/GlobalStyle";

library.add(fas)

const Container = styled.div`
  letter-spacing: -0.01em;
  font-weight: 400;
  background: #dcd9e6;
  min-height: 100vh;
  padding: 50px 0;
`;
function App() {
  const Register = React.lazy(() => import("@pages/Register"));
  const Write = React.lazy(() => import("@pages/Write"));
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Container>
            <Routes>
              <Route path='/' element={<PostList/>}/>
              <Route path='/mypage' element={<Mypage/>}/>
              {/* 접근시 인증이 안 되어있어야 함 */}
              <Route element={<PrivateRoutes authentication={false}/>}>
                <Route path="/login" element={<Login/>} />
              </Route>
              {/* 회원가입은 자주 사용되지 않기 때문에 코드 스플리팅 진행 */}
              <Route element={<PrivateRoutes authentication={false}/>}>
                <Route path='/register' element={<Suspense><Register/></Suspense>}/>
              </Route>

              {/* 회원만 작성을 하기 때문에 코드 스플리팅 진행 */}
              {/* 접근시 인증이 되어있어야 함 */}
              <Route element={<PrivateRoutes authentication/>}>
                  <Route path='/write' element={<Suspense><Write/></Suspense>}/>
              </Route>
              
            </Routes>
          </Container>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  )
}
export default App;
