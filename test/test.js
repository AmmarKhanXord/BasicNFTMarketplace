const { expect } = require("chai");
const { poll } = require("ethers/lib/utils");
const { waffle,ethers } = require("hardhat");
const { userInfo } = require("os");
const provider = waffle.provider;
const web3 = require("web3");

describe('NFT Marketplace', () =>{

    const [owner, accountOne] = provider.getWallets();

    before(async () => {
        NftMarketplace = await ethers.getContractFactory("NftMarketplace");
        nftMarketplace = await NftMarketplace.deploy();
        ERC721 = await ethers.getContractFactory("BasicNft");
        ERC721a = await ERC721.deploy("Dogie","DOG");
        ERC721b = await ERC721.deploy("Cato","CAT");
    });

    it('List the token', async () =>{
        await ERC721a.mintNft(owner.address);
        await ERC721a.mintNft(owner.address);
        ERC721a.mintNft(accountOne.address);
        // approve
        await ERC721a.approve(nftMarketplace.address, 0);
        await ERC721a.approve(nftMarketplace.address, 1);
        // listItem
        await expect(nftMarketplace.listItem(ERC721a.address,0,10*18))
        await expect(nftMarketplace.listItem(ERC721a.address,1,100*81))
        // updateListing
        console.log("Price before: " + (await nftMarketplace.getListing(ERC721a.address, 0)).price.toString());
        await nftMarketplace.updateListing(ERC721a.address, 0,10000*18)
        console.log("Price after: " + (await nftMarketplace.getListing(ERC721a.address, 0)).price.toString());
        // cancelListing
        await nftMarketplace.cancelListing(ERC721a.address,1);
        // getListing
        console.log((await nftMarketplace.getListing(ERC721a.address, 0)).price.toString());
        // buyItem        
        await nftMarketplace.connect(accountOne).buyItem(ERC721a.address,0, {value: 10000*18});
        // getProceeds
        console.log("Withdrawable of Seller: " + (await nftMarketplace.getProceeds(owner.address)).toString());
        console.log("Balance before withdraw: " + (await provider.getBalance(owner.address)).toString());
        // withdrawProceeds
        await nftMarketplace.withdrawProceeds();
        console.log("Balance after withdraw : " + (await provider.getBalance(owner.address)).toString());        
    });   
})