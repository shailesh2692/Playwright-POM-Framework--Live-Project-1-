// TypeScript File for Writing Common User Actions To Perform On All Car Brand Pages

// Import playwright test and it's functions
import { Page } from '@playwright/test';

// Import BasePage class
import { BasePage } from './BasePage';  

// Import locators from JSON file
import allLocators from '../locators/locators.json';

// Define a class for the Car Brand Pages
export class CarBase extends BasePage {
    
    //Adding constructor for super class(BasePage)
    constructor(page: Page) {

        super(page);

    }

    // Create a variable to hold locators for Brand Cars Page
    private locators = allLocators.BrandCarsPage;

    // Method to get the title text of the Brand Cars Page
    async getBrandCarsTitleText(): Promise<string> {

        return await this.getText(this.locators.brandCarsTitle);

    }

    // Method to get all car names and their prices on the Brand Cars Page
    async getAllCarNamesAndPrices(){

        // Using locators from locators.json file to create Playwright locators for car names and prices
        // Declare variables to hold locators for car names and prices
        const carNames = this.page.locator(this.locators.carNames);
        const carPrices = this.page.locator(this.locators.carPrices);

        // Declare a variable to hold count of cars
        const carsCount = await carPrices.count();

        // Declare an array to hold car names and prices
        const carsList: { name: string, price: string}[] = [];

        // Loop through each car name and price and print them
        for(let i = 0; i < carsCount; i++){

            // Declare a variable to hold car name
            const carName = await carNames.nth(i).innerText();

            // Declare a variable to hold car price
            const carPrice = await carPrices.nth(i).innerText();

            // Print car name and price in the console
            // console.log(`Car Name: ${carName} | Price: ${carPrice}`);

            // Push car name and price to the array
            carsList.push({ name: carName, price: carPrice });

        }

        // Return the array of car names and prices
        return carsList;

    }

}