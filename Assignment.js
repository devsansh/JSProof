/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

//Array for storing NFTs and use of const keyword so, that it can't be modified in future easily.
const myNFTs = [] 

//Function to create an NFT object
function mintNFT (_name,_year,_mkrtvalue,_county,_bling) {
    // Now we will declare an object
    const Mint_NFT = {
        "name":_name ,
        "year":_year ,
        "mkrtvalue":_mkrtvalue ,
        "country":_county,
        "bling": _bling
    };

    // Now store aove created NFT into myNFTs array
    console.log("Your NFT "+ "'"+ _name+"'"+" has been minted...")
    myNFTs.push(Mint_NFT)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    // We will be using while loop here
    let i = 0
    while( i < myNFTs.length){
        console.log("\nStoring NFTs metadata... ")
        console.log("\n*****************************************")
        console.log("Name of NFT      : "+ myNFTs[i].name)
        console.log("Year of Emergence: "+ myNFTs[i].year)
        console.log("Current mkrtValue: "+ myNFTs[i].mkrtvalue)
        console.log("Counrty of Origin: "+ myNFTs[i].country)
        console.log("Bling Value      : "+ myNFTs[i].bling)
        i++;
        console.log("\ndone!")
        console.log("\n*****************************************")
    }
    console.log("\ndone!")
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs available: "+ myNFTs.length)
}

// call your functions below this line
mintNFT("IndoG",2002,500,"India",200)
mintNFT("RajDUT",2009,300,"India",180)
mintNFT("Varun",2021,550,"India",230)
listNFTs()
getTotalSupply()

