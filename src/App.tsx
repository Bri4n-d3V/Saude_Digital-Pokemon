import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/index.css';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Header/>
        <Suspense fallback={<Spinner size='xl'/>}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:name" element={<Details />} />
          </Routes>
        </BrowserRouter>
        </Suspense>
    </ChakraProvider>
  )
}

export default App
