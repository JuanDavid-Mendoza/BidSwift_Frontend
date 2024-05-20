export class AuctionPageData {
  constructor(
    imgIndex, setImgIndex, itemId, navigate, auctions, setAuctions, auction, setAuction, 
    bidsHistory, setBidsHistory, user, userBid, userBidButton, state, auctionButton, auctionList,
    auctionIterator, message
  ) {
    this.imgIndex = imgIndex;
    this.setImgIndex = setImgIndex;
    this.itemId = itemId;
    this.navigate = navigate;
    this.auctions = auctions;
    this.setAuctions = setAuctions;
    this.auction = auction;
    this.setAuction = setAuction;
    this.bidsHistory = bidsHistory;
    this.setBidsHistory = setBidsHistory;
    this.user = user;
    this.userBid = userBid;
    this.userBidButton = userBidButton;
    this.state = state;
    this.auctionButton = auctionButton;
    this.auctionList = auctionList;
    this.auctionIterator = auctionIterator;
    this.message = message;
  }
}