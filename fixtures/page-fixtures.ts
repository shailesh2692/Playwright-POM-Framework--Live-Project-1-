// TypeScript File To Define All Page Fixtures And Store The Instances Of Page Classes

// Import playwright test and it's functions
import { Page } from '@playwright/test';

// import the HomePage class
import { HomePage } from '../pages/HomePage';

// import the NewCarsPage class
import { NewCarsPage } from '../pages/NewCarsPage';

// import BMWCarsPage class
import { BMWCarsPage } from '../pages/BMWCarsPage';

// import ToyotaCarsPage class
import { ToyotaCarsPage } from '../pages/ToyotaCarsPage';

// import HondaCarsPage class
import { HondaCarsPage } from '../pages/HondaCarsPage'; 

// import HyundaiCarsPage class
import { HyundaiCarsPage } from '../pages/HyundaiCarsPage';

// import CarBase class
import { CarBase } from '../pages/CarBase';

// Define a class for Page Fixtures Which will hold instances of all page classes
export class PageFixtures {

    // Declare variables to hold the Page objects for each page class
    readonly page: Page;   // Declare a variable to hold the Page object

    // Declare variables to hold the instances of each page class
    readonly homePage: HomePage;
    readonly newCarsPage: NewCarsPage;
    readonly bmwCarsPage: BMWCarsPage;
    readonly toyotaCarsPage: ToyotaCarsPage;
    readonly hondaCarsPage: HondaCarsPage;
    readonly hyundaiCarsPage: HyundaiCarsPage;  

    // Declare variable to hold instance of CarBase class
    readonly carBasePage: CarBase

    // Constructor to initialize the Page objects for each page class
    constructor(page: Page) {

        // Initialize the Page object
        this.page = page;

        // Initialize the instances of each page class
        this.homePage = new HomePage(this.page);
        this.newCarsPage = new NewCarsPage(this.page);
        this.bmwCarsPage = new BMWCarsPage(this.page);
        this.toyotaCarsPage = new ToyotaCarsPage(this.page);
        this.hondaCarsPage = new HondaCarsPage(this.page);
        this.hyundaiCarsPage = new HyundaiCarsPage(this.page);

        // Initialize the instance of CarBase class
        this.carBasePage = new CarBase(this.page);

    }

    // Getter method to access the Page object
    get basePage(): Page {
        
        return this.page;
    
    }

}