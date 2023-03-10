export function scrollLeftAuction() {
  const left = document.querySelector(".carouselAuctionCardsContainer");
  const childrenScroll = left?.children.item(1)?.scrollWidth
  if(childrenScroll){
    console.log(left)
    left?.scrollBy(-childrenScroll as number, 0);
  }
}

export function scrollRightAuction() {
  const right = document.querySelector(".carouselAuctionCardsContainer");
  const childrenScroll = right?.children.item(1)?.scrollWidth
  if(childrenScroll){
    right?.scrollBy(childrenScroll as number, 0);
  }
}

export function scrollLeftCar() {
  const leftCar = document.querySelector(".carouselSaleCars");
  const childrenScroll = leftCar?.children.item(1)?.scrollWidth
  if(childrenScroll){
    leftCar?.scrollBy(-childrenScroll as number, 0);
  }
}

export function scrollRightCar() {
  const rightCar = document.querySelector(".carouselSaleCars");
  const childrenScroll = rightCar?.children.item(1)?.scrollWidth
  if(childrenScroll){
    rightCar?.scrollBy(childrenScroll as number, 0);
  }
}
export function scrollLeftMotorcycle() {
  const leftMotorcycle = document.querySelector(".carouselSaleMotorcycle");
  const childrenScroll = leftMotorcycle?.children.item(1)?.scrollWidth
  if(childrenScroll){
    leftMotorcycle?.scrollBy(-childrenScroll as number, 0);
  }
}

export function scrollRightMotorcycle() {
  const rightMotorcycle = document.querySelector(".carouselSaleMotorcycle");
  const childrenScroll = rightMotorcycle?.children.item(1)?.scrollWidth
  if(childrenScroll){
    rightMotorcycle?.scrollBy(childrenScroll as number, 0);
  }
}
