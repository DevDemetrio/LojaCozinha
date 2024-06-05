import { 
         ImgProductContainer,
         ImgProduct,
         ItemContainer, 
         GeneralContainerItem, 
         DescriptionContainer,
         TitleProduct,
         DescriptionProduct,
         DiscountPrice,
         PriceProduct,
         DescriptionContainerItens,
         BuyButton

          } from "./styled"

const ContainerProduct = ({produtos}) =>{
  return(
    <GeneralContainerItem>
      {
        produtos.map((item) => (
          <ItemContainer key={item.id}>
            <ImgProductContainer>
              <ImgProduct src={item.imagem} alt={item.descricao} />
            </ImgProductContainer>
              <DescriptionContainer>
                <DescriptionContainerItens>
                  <TitleProduct>{item.nome}</TitleProduct>
                  <DescriptionProduct>{item.descricao}</DescriptionProduct>
                  <DiscountPrice $temDesconto={item.temDesconto}>{item.precoDesconto}</DiscountPrice>
                  <PriceProduct  $temDesconto={item.temDesconto}>{item.preco}</PriceProduct>
                </DescriptionContainerItens>
                    <BuyButton>Comprar</BuyButton>
              </DescriptionContainer>

          </ItemContainer>
        ))
      }
    </GeneralContainerItem>
  )
}

export default ContainerProduct