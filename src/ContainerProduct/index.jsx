import { 
         ImgProduct,
         ItemContainer, 
         GeneralContainerItem, 
         DescriptionContainer,
         TitleProduct,
         DescriptionProduct,
         DiscountPrice,
         PriceProduct,
         BuyButton

          } from "./styled"

const ContainerProduct = ({produtos}) =>{
  return(
    <GeneralContainerItem>
      {
        produtos.map((item) => (
          <ItemContainer key={item.id}>
            <div>
              <ImgProduct src={item.imagem} alt={item.descricao} />
            </div>
              <DescriptionContainer>
                  <TitleProduct>{item.nome}</TitleProduct>
                  <DescriptionProduct>{item.descricao}</DescriptionProduct>
                  <DiscountPrice>{item.precoDesconto}</DiscountPrice>
                  <PriceProduct>{item.preco}</PriceProduct>
                  <BuyButton>Comprar</BuyButton>
              </DescriptionContainer>

          </ItemContainer>
        ))
      }
    </GeneralContainerItem>
  )
}

export default ContainerProduct