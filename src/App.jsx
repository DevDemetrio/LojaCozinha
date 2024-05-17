import {produtos} from '../src/assets/data.json'
function App() {
  return (
    <>
        {
          produtos.map((item) =>(
            <img src={item.imagem} alt="" />
          ))
        }
    </>
  )
}

export default App
