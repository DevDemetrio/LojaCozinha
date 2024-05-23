import ContainerProduct from './ContainerProduct'
import {produtos} from '../src/assets/data.json'
import { styled } from 'styled-components'

const Main =  styled.main`
  padding: 20px 8px 0 8px;
  background-color: #F5F5F5;
`
function App() {
  return (
    <Main>
      <ContainerProduct  produtos={produtos}/>
    </Main>
  )
}

export default App
