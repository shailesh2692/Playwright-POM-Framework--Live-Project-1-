// TypeScript File for Writing Common Methods and Properties for All Pages

// Import playwright test and it's functions
import { Page } from "@playwright/test";


// Define a class for the Base Page
export class BasePage { 

    // Declare a variable to hold the Page object
    protected page: Page;

    // Constructor to initialize the Page object
    constructor(page: Page) {
        this.page = page;
    }   

    // Method to click on an element using a locator
    async clickElement(locator: string) {
        await this.page.locator(locator).click();
    }

    // Method to fill text in an input field using a locator
    async fillInputField(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    // Method to get text from an element using a locator
    async getText(locator: string): Promise<string> {
        return await this.page.locator(locator).innerText();
    }

    // Method to hover on an element using a locator
    async hoverOnElement(locator: string) {
        await this.page.locator(locator).hover();
    }

    // Method to navigate to any URL
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Method to wait for a specific timeout
    async waitForTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }


}