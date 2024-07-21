# Pure Choice

## Project Description

Helps track the intake of proteins, fats, carbohydrates, and calories in a daily diet.

## Mechanics

1. **Selecting a Product**

2. **Adding to Plate (Basket)**
    - Clicking the "Add" button adds a portion of 100 grams.
    - Clicking the "Add More" button adds 100 grams to the weight of the product on the plate.
    - A number next to the plate indicates the total portions of all products added to the plate.

3. **Catalog**
    - A filter for the product list by type.

4. **Search**
    - Search for products by name.

5. **Plate**
    - The page displays a table with the added products with the following columns:
        - Product
        - Product Weight
        - Calories
        - Proteins
        - Fats
        - Carbohydrates
    - The weight can be adjusted using up and down arrows or by keyboard input. Setting the weight to 0 removes the product from the table.
    - The "Clear Plate" button clears the table, removing all selected products from the list.

## Requirements

- Node.js (v14.21.3)

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone git@github.com:MXCHSTKV/
  pure_choice.git
  ```

2. To install dependencies and clean the git repo run:

  ```shell
  $ yarn install
  ```

  *We recommend using `yarn` for installing packages, but you can use `npm` instead*:

  ```shell
  $ npm install
  ```
3. Create first build

  ```shell
  $ yarn run build:prod
  ```
4. Copy .env.example file to .env and make the necessary changes there

5. Run project in Dev mode

  ```shell
  $ yarn run dev
  ```

## Features

* Redux
* Modern ES6 for using template strings, JSX syntax, object destructuring arrow functions and more
* Babel for old browser support
* SASS/SCSS: make styles greate again
* Tailwind
* React Router
* Hot Module Replacement for comfortable development

## Command Line Commands

#### Installation

```Shell
yarn install
```
Installs the dependencies.

#### Development

```Shell
yarn run dev
```

Starts the development server running on `http://localhost:8080` using the webpack.dev.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

```Shell
yarn run dev:server
```

Starts the development server and makes your application accessible at http://localhost:8080.

#### Building

```Shell
yarn build:prod
```

Prepares your app for deployment to production environment (using the webpack.prod.js) (does not run tests). Optimizes and minifies all files, piping them to the `dist` folder.
