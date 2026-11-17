// TypeScript file to read CSV files and parse the data

// import fs
import fs from 'fs';

// import path
import path  from 'path';

// import parse from 'csv-parse/sync'
import { parse } from 'csv-parse/sync';

// export function for reading CSV files
export function readCSVData(filePath: string) {

    // Resolve the absolute path of the file. __dirname is the directory of the current module. 
    // filePath is the relative path to the CSV file. 
    // We provide the relative path to the CSV file from the current module's directory.
    // This ensures that the file is read correctly regardless of where the script is executed.
    // After __dirname, we use '..' to go one level up in the directory structure,
    // and then we append the filePath to get the full path to the CSV file.
    // Read the file content synchronously. The 'fs.readFileSync' method reads the file content synchronously.
    // The 'utf-8' encoding is specified to read the file as a string.
 

    const absolutePath = path.resolve(__dirname, '..', filePath);    
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');

    // Parse the CSV content into an array of objects
    // Each object represents a row in the CSV file, with keys corresponding to the column headers
    return parse(fileContent, {

        // Options for parsing the CSV file

        columns: true, // Use the first row as column headers
        skip_empty_lines: true, // Skip empty lines in the CSV file
        trim: true, // Trim whitespace from the beginning and end of each field
    
    });


}