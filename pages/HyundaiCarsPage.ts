// TypeScript File for Writing User Actions To Perform On Hyundai Cars Page

// Import playwright test and it's functions
import { Page } from '@playwright/test';

// Import BasePage class
import { BasePage } from './BasePage';

// Import locators from JSON file
import allLocators from '../locators/locators.json';

// Define a class for the Hyundai Cars Page
export class HyundaiCarsPage extends BasePage {

    // Declare a variable to hold the Page object
    // Below code calls the Page fixture provided by Playwright
    // private page: Page;

    // // Constructor to initialize the Page object
    // constructor(page: Page) {
    //     this.page = page;
    // }

    // Create a variable to hold locators for Home Page
    // private locators = allLocators.HomePage;

    // Adding constructor for super class(BasePage)
    constructor(page: Page) {
        super(page);
    }

}