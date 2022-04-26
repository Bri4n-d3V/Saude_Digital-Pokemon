import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Suspense fallback={
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.5000'
          size='xl'
        />
        }>
        <Header/>
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
