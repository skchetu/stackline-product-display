# Simple Product Display

## Description

A simple webpage using Typecript, React, Redux, and Chart.js to display product data in a graph and table. Data is given by the provided JSON file. 

## Table of Contents

- [Notes](#notes)
- [Demo](#demo)
- [How to Run](#how-to-run)

## Notes

- Types have been created for data retrieved from the JSON file. This helps destructure the object into usable data.
- Testing or error-checking can be improved throughout the application. Focus was mainly on displaying the data.
- Chart.js was used for displaying a line graph. Chart.js is easy to integrate and straightfoward to use especially for simple data or simple graphs.
- A custom table was built with custom SortableHeader components. This gives the table sorting capabilities by the selected column.

#### Demo



## How to Run

To run this React project for a very simple demo, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/skchetu/stackline-product-display.git
   ```

2. Change your working directory to the project folder:

   ```
   cd stackline-product-display
   ```

3. Install project dependencies using npm:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

The application should open in your default web browser. If not, you can access it at [http://localhost:3000](http://localhost:3000).

Now, you can view the dispaly and interact with the sortable table.
