import styled from "styled-components";

export const ImgProduct = styled.img`
   display: block;
   max-width: 100%;
   width: 168px;
   height: 168px;

   margin: 1.5rem auto 0 auto;

   
   @media (min-width: 400px){
    width: 220px;
    height: 220px;
   }

   @media (min-width: 420px){
    width: 220px;
    height: 220px;
   }

   @media (min-width: 600px){
    width: 275px;
    height: 275px;
   }
   
   @media (min-width: 800px){
    width: 323px;
    height: 323px;
   }
   
  `


export const GeneralContainerItem = styled.div`
  
`
export const ItemContainer = styled.article`
  max-width: 700px;
  margin: 0 auto 10px auto;
  
  border: 1px solid #000000;
  @media (min-width: 700px) {
    display: flex;
  }


`

export const DescriptionContainer = styled.div`
   width: 220px;
   padding: 0 0px 0 25px;

   margin: 20px auto 0 auto;

   @media (min-width: 400px){
    width: 266px;
    height: 136px;
   }


   @media (min-width: 600px){
    width: 326px;
    height: 136px;
   }

   @media (min-width: 800px){
    width: 376px;
    height: 136px;
   }
`

export const TitleProduct = styled.h2`
`

export const DescriptionProduct = styled.p`
  
`
export const DiscountPrice = styled.span`
  
`

export const PriceProduct = styled.span`
  
`
export const BuyButton = styled.button`
display: block;
width: 200px;
height: 30px;
margin: 20px auto 20px auto;

font-size: 18px;
font-weight: bold;
`
