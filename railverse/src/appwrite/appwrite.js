
import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('662d25c700168148b922');

const databases = new Databases(client);

async function bookticket(trainno , trainname , source , destination , time  ) {

    function generateRandomNumber() {
        // Generate a random number between 10000000 and 99999999
        const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
        return randomNumber;
      }
      
      // Example usage:
      const randomNum = generateRandomNumber();
      console.log(randomNum);
      
      // Example usage:
      const pnr_no = generateRandomNumber();
      

const promise = databases.createDocument(
    '662e69b80031ee24dff2',
    '662e69c7003bd8bbd95c',
    ID.unique(),
    { "train_no": trainno.toString() ,
    "train_name": trainname ,
"to_stn": source ,
"from_stn": destination ,
    
    "journey_hours": time ,
    "pnr_number": pnr_no.toString() 
    
}

);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}

export {bookticket}