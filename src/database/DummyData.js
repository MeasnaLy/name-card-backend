const userService = require("../services/UserService");
const nameCardService = require("../services/NameCardService");

const checkIfNoUserThenInitUser = () => {
    userService.isUserExist()
        .then(exist => {
            if (!exist) {
                _createFirstUser();
            }
        })
        .catch(err => console.log("error: " + err));
}

const _createFirstUser = () => {
    userService.createUser("measna@lazi.com", "lazi", "12345678")
                .then(user => console.log("First User Create Successful!"))
                .catch(err => console.log("Create User: " + err));
}

const checkIfCreateSampleNameCards = () => {
    nameCardService.isNameCardExist()
        .then(exist => {
            if (!exist) {
                _createNameCards();
            }
        })
        .catch(err => console.log("error: " + err));
}

const _createNameCards = () => {
    let nameCards = [
        {
            firstname: "Sovannmeasna",
            lastname: "Ly",
            position: "IT Manager",
            phone: "+85577498555",
            email: "sovannmeasna.ly@spacianet.com",
            address: "8F Amass Tower, BKK1, Phnom Penh",
            website: "https://spacianet.com.kh",
            company: "SpaciaNet",
            image: "sample.jpg",
        },
        {
            firstname: "Mariana",
            lastname: "Anderson",
            position: "Marketing Manager",
            phone: "+1234567890",
            email: "hello@reallygreatsite.com",
            address: "123 Anywhere St., Any City",
            website: "www.reallygreatsite.com",
            image: "sample1.jpg",
        },
        {
            firstname: "DANI",
            lastname: "MARTINES",
            position: "FINANCE MANAGER",
            phone: "+1234567890",
            email: "hello@reallygreatsite.com",
            address: "123 Anywhere St., Any City",
            website: "www.reallygreatsite.com",
            image: "sample2.jpg",
        }
    ]
    nameCardService.createNameCards(nameCards)
                .then(cards => console.log("Dummy Name Card create successful!"))
                .catch(err => console.log("Dummy Name Card create: " + err));
}

const initDummyData = () => {
    checkIfNoUserThenInitUser();
    checkIfCreateSampleNameCards();
}

module.exports = { 
    initDummyData 
};

