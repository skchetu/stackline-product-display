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

## Demo
<img width="1757" alt="Screenshot 2023-12-08 at 4 44 22 PM" src="https://github.com/skchetu/stackline-product-display/assets/35510454/083dc8c6-4c5f-4f19-bc1c-0fa4590edcd0">
<img width="1757" alt="Screenshot 2023-12-08 at 4 45 29 PM" src="https://github.com/skchetu/stackline-product-display/assets/35510454/60c9f4b9-0e5f-43fc-b1e8-bfe7b8c7f9f5">
<img width="1757" alt="Screenshot 2023-12-08 at 4 45 43 PM" src="https://github.com/skchetu/stackline-product-display/assets/35510454/b5339f11-af92-42d2-81d6-ab0cbc78e890">

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
