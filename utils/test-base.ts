// TypeScript File To Implement Page Fixtures

// Import playwright test and it's functions
import { test as baseTest, expect, Page } from '@playwright/test';    // baseTest will help to implement fixtures

// Import the PageFixtures class
import { PageFixtures } from '../fixtures/page-fixtures';

// Define a type for the fixtures
type Fixtures = {

    pages: PageFixtures;   // Declare a variable to hold the instance of PageFixtures class

};

// Export expect for assertions
export {expect};

// Extend the base test to include the fixtures
export const test = baseTest.extend<Fixtures>({

    pages: async ({ page }, use) => {   
        // 'page' is the built-in fixture provided by Playwright
        // 'use' is a function to pass the fixture to the test

        await use(new PageFixtures(page));
    
    },

});