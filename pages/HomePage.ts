// TypeScript File for Writing User Actions To Perform On Home Page

// Import playwright test and it's functions
import { Page } from '@playwright/test';

// Import BasePage class
import { BasePage } from './BasePage';

// Import locators from JSON file
import allLocators from '../locators/locators.json';

// Define a class for the Home Page
export class HomePage extends BasePage {

    // Declare a variable to hold the Page object
    // Below code calls the Page fixture provided by Playwright
    // private page: Page;

    // // Constructor to initialize the Page object
    // constructor(page: Page) {
    //     this.page = page;
    // }

    // Create a variable to hold locators for Home Page
    private locators = allLocators.HomePage;

    // Adding constructor for super class(BasePage)
    constructor(page: Page) {
        super(page);
    }

    // // Method to navigate to the home page i.e. https://www.carwale.com
    // async navigateToHomePage() {

    //     await this.page.goto('/');

    // }
    
    async navigateToHomePage() {

        await this.navigateTo('/'); // Calling the navigateTo method of BasePage class          
    }

    // Locators for Home Page elements

    // New Cars option selector
    // private newCarsMenu = () => this.page.locator('//div[normalize-space()="NEW CARS"]');

    // Find New Cars option selector
    // private findNewCarsMenu = () => this.page.locator('text=Find New Cars');

    // Method to navigate to Find New Cars option
    async navigateToFindNewCars() {

        // Hover on New Cars option
        // await this.newCarsMenu().hover();
        // await this.hoverOnElement('//div[normalize-space()="NEW CARS"]');
        await this.hoverOnElement(this.locators.newCarsMenu);

        // Wait for 2 seconds for menu to be visible
        // await this.page.waitForTimeout(2000);
        await this.waitForTimeout(2000);

        // Click on Find New Cars option
        // await this.findNewCarsMenu().click();
        // await this.page.locator('text=Find New Cars').click();
        // await this.clickElement('text=Find New Cars');
        await this.clickElement(this.locators.findNewCarsMenu);

        // Wait for 2 seconds for menu to be visible
        // await this.page.waitForTimeout(2000);
        await this.waitForTimeout(2000);

    }

    // Method to navigate to Search Cars option
    async navigateToSearchCars() {


    }

    // Method to navigate to Upcoming Cars option
    async navigateToUpcomingCars() {

        
    }


}