import { Container } from '@chakra-ui/react'
import spin from '../assets/spin.svg';

export default function Loading() {
  return (
    <Container>
      <img src={spin} alt="Loading icon"/>
    </Container>
  )
}