// TypeScript File for Writing Test Cases

// // import { test, expect } from '@playwright/test';
// import { test, expect } from '@playwright/test';

// // import the HomePage class
// import { HomePage } from '../pages/HomePage';

// // import the NewCarsPage class
// import { NewCarsPage } from '../pages/NewCarsPage';

// Comment out above imports and use only the below one single import to use page fixtures

// Import the test and expect from test-base file
import {test, expect} from '../utils/test-base';

// Import the readCSVData function to read data from CSV file
import { readCSVData } from '../utils/readCSV';

// Define a test suite for Find New Car functionality
test.describe('Find New Car Functionality', () => {

    // Declare a variable to hold the HomePage object
    // let homePage: HomePage;

    // Declare a variable to hold the NewCarsPage object
    // let newCarsPage: NewCarsPage;

    // Before each test, create a new instance of HomePage and navigate to the home page before each test
    test.beforeEach(async ({ pages }) => {

        // Create a new instance of HomePage
        // homePage = new HomePage(page);

        // Create a new instance of NewCarsPage
        // newCarsPage = new NewCarsPage(page);

        // Navigate to the home page
        await pages.homePage.navigateToHomePage();

    });

    // Test case to verify navigation to Find New Cars page
    test.skip('Navigate to Find New Cars Page', async ({ pages }) => {

        // Navigate to Find New Cars page
        await pages.homePage.navigateToFindNewCars();

        // Verify that the URL contains 'new-cars'
        await expect(pages.page).toHaveURL(/.*new-cars/);

        // Verify that the page title contains 'New Cars'
        console.log(await pages.newCarsPage.getHeaderText());

        // Verify that the header text is 'New Cars'
        expect(await pages.newCarsPage.getHeaderText()).toContain('New Cars');

        // Verify click on View More Brands button to show more car brands
        await pages.newCarsPage.clickViewMoreBrands();

        // Wait for 2 seconds to see more car brands
        await pages.newCarsPage.waitForTimeout(2000);

        // Verify click on BMW car brand
        await pages.newCarsPage.clickBMWBrand();

        // Verify that the URL contains 'bmw'
        await expect(pages.page).toHaveURL(/.*bmw-cars/);

        // Wait for 2 seconds to see more car brands
        await pages.newCarsPage.waitForTimeout(2000);

    });

    // Test case to verify navigation to Find New Cars page

    // Read test data from CSV file
    const testData = readCSVData('data/testdata.csv');
    
    test('Parameterized Test For Find New Car', async ({ pages }) => {

        // Loop through each data set from the CSV file
        for(const data of testData) {

            // Type assertion to treat data as CarBrand and CarTitle type
            const carData = data as { carBrand: string, carTitle: string };
            
            // Navigate to Find New Cars page
            await pages.homePage.navigateToFindNewCars();

            // Verify that the URL contains 'new-cars'
            await expect(pages.page).toHaveURL(/.*new-cars/);

            // Verify that the page title contains 'New Cars'
            console.log(await pages.newCarsPage.getHeaderText());

            // Verify that the header text is 'New Cars'
            expect(await pages.newCarsPage.getHeaderText()).toContain('New Cars');

            // Verify click on View More Brands button to show more car brands
            await pages.newCarsPage.clickViewMoreBrands();

            // Wait for 2 seconds to see more car brands
            await pages.newCarsPage.waitForTimeout(2000);

            // Click on car brand based on the data from CSV file
            if(carData.carBrand === 'bmw') {

                // Verify click on BMW car brand
                await pages.newCarsPage.clickBMWBrand();

                // Verify that the URL contains 'bmw'
                await expect(pages.page).toHaveURL(/.*bmw-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            } 

            else if(carData.carBrand === 'toyota') {

                // Verify click on Toyota car brand
                await pages.newCarsPage.clickToyotaBrand();

                // Verify that the URL contains 'toyota'
                await expect(pages.page).toHaveURL(/.*toyota-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            }

            else if(carData.carBrand === 'honda') {

                // Verify click on Honda car brand
                await pages.newCarsPage.clickHondaBrand();  

                // Verify that the URL contains 'honda'
                await expect(pages.page).toHaveURL(/.*honda-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            }   

            else if(carData.carBrand === 'hyundai') {  

                // Verify click on Hyundai car brand
                await pages.newCarsPage.clickHyundaiBrand();  

                // Verify that the URL contains 'hyundai'
                await expect(pages.page).toHaveURL(/.*hyundai-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            }

            // Create an instance of CarBase class to access its methods
            const carTitle = await pages.carBasePage.getBrandCarsTitleText();

            // Print the brand car title
            console.log(`The title of ${carData.carBrand} brand page is: ${carTitle}`);

            // Verify that the brand car title contains the car brand name
            expect(carTitle).toContain(carData.carTitle);

        }

    });

    // Test case to display car names and their prices for all Brand Cars Page    
    test('Parameterized Test For All Car Names And Prices', async ({ pages }) => {

        // Loop through each data set from the CSV file
        for(const data of testData) {

            // Type assertion to treat data as CarBrandData type
            const carData = data as { carBrand: string, carTitle: string };
            
            // Navigate to Find New Cars page
            await pages.homePage.navigateToFindNewCars();

            // Verify that the URL contains 'new-cars'
            await expect(pages.page).toHaveURL(/.*new-cars/);

            // Verify that the page title contains 'New Cars'
            console.log(await pages.newCarsPage.getHeaderText());

            // Verify that the header text is 'New Cars'
            expect(await pages.newCarsPage.getHeaderText()).toContain('New Cars');

            // Verify click on View More Brands button to show more car brands
            await pages.newCarsPage.clickViewMoreBrands();

            // Wait for 2 seconds to see more car brands
            await pages.newCarsPage.waitForTimeout(2000);

            // Click on car brand based on the data from CSV file
            if(carData.carBrand === 'bmw') {

                // Verify click on BMW car brand
                await pages.newCarsPage.clickBMWBrand();

                // Verify that the URL contains 'bmw'
                await expect(pages.page).toHaveURL(/.*bmw-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            } 

            else if(carData.carBrand === 'toyota') {

                // Verify click on Toyota car brand
                await pages.newCarsPage.clickToyotaBrand();

                // Verify that the URL contains 'toyota'
                await expect(pages.page).toHaveURL(/.*toyota-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            }

            else if(carData.carBrand === 'honda') {

                // Verify click on Honda car brand
                await pages.newCarsPage.clickHondaBrand();  

                // Verify that the URL contains 'honda'
                await expect(pages.page).toHaveURL(/.*honda-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            }   

            else if(carData.carBrand === 'hyundai') {  

                // Verify click on Hyundai car brand
                await pages.newCarsPage.clickHyundaiBrand();  

                // Verify that the URL contains 'hyundai'
                await expect(pages.page).toHaveURL(/.*hyundai-cars/);

                // Wait for 2 seconds to see more car brands
                await pages.newCarsPage.waitForTimeout(2000);

            }

            // Create an instance of CarBase class to access its methods
            const carTitle = await pages.carBasePage.getBrandCarsTitleText();

            // Print the brand car title
            console.log(`The title of ${carData.carBrand} brand page is: ${carTitle}`);

            // Verify that the brand car title contains the car brand name
            expect(carTitle).toContain(carData.carTitle);

            // Declare a variable to hold all car names and their prices by calling the method from CarBase class
            const carNamesAndPrices = await pages.carBasePage.getAllCarNamesAndPrices();

            // Display all car names and their prices in the console
            console.log(carNamesAndPrices);

        }

    });
     
});