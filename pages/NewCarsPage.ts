// TypeScript File for Writing User Actions To Perform On NewCars Page

// Import playwright test and it's functions
import { Page } from '@playwright/test';

// Import BasePage class
import { BasePage } from './BasePage';

// Import locators from JSON file
import allLocators from '../locators/locators.json';    

// Define a class for the New Cars Page and extend it from BasePage class
export class NewCarsPage extends BasePage {

    // Create a variable to hold locators for New Cars Page
    private locators = allLocators.NewCarsPage;

    // Adding constructor for super class(BasePage)
    constructor(page: Page) {
        super(page);
    }

    // Method to check header text on New Cars Page
    async getHeaderText(): Promise<string> {

        // Return the heading text
        return await this.getText(this.locators.newCarsHeading); // Calling the getText method of BasePage class

    }

    // Method to click View More Brands button
    async clickViewMoreBrands() {

        // Click on View More Brands button
        await this.clickElement(this.locators.viewMoreBrandsButton); // Calling the clickElement method of BasePage class

    }

    // Method to click BMW car brand
    async clickBMWBrand() {

        // Click on BMW car tab
        await this.clickElement(this.locators.bmwCarTab); // Calling the clickElement method of BasePage class   

    }

    // Method to click Toyota car brand
    async clickToyotaBrand() {  

        // Click on Toyota car tab
        await this.clickElement(this.locators.toyotaCarTab); // Calling the clickElement method of BasePage class   

    }

    // Method to click Honda car brand
    async clickHondaBrand() {

        // Click on Honda car tab
        await this.clickElement(this.locators.hondaCarTab); // Calling the clickElement method of BasePage class
    
    }

    // Method to click Hyundai car brand
    async clickHyundaiBrand() {

        // Click on Hyundai car tab
        await this.clickElement(this.locators.hyundaiCarTab); // Calling the clickElement method of BasePage class

    }

   
}