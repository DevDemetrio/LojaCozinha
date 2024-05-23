import styled from "styled-components";

export const ImgProduct = styled.img`
   display: block;
   max-width: 100%;
   width: 168px;
   height: 168px;

   margin-left: auto;
   margin-right: auto;

   
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
  border: 1px solid #000000;


`

export const DescriptionContainer = styled.div`
   width: 220px;
   padding: 0 0px 0 25px;

   margin-left: auto;
   margin-right: auto;

   @media (min-width: 400px){
    width: 266px;
    height: 266px;
   }


   @media (min-width: 600px){
    width: 326px;
    height: 326px;
   }

   @media (min-width: 800px){
    width: 376px;
    height: 376px;
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
`
