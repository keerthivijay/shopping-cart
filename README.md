
# ShoppingCart

ShoppingCart is a full featured e-commerce application build using ReactJS. It allows users to browse products, manage their cart in real-time, register/login securely, and stimulate a checkout process with secure payments.



## Features

- Product catalog - Browse, search, and filter products.
- Checkout System - Step by step checkout including shopping and payment
- Order history - Track previous orders, delivery status and receipts.
- Cross platform


## Tech Stack

**Client:** React, Redux, css, Js, Html

## Run Locally

Clone the project

```bash
  git clone https://github.com/keerthivijay/shopping-cart.git
```

Go to the project directory

```bash
  cd shopping-cart
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Project Structure

```text
├── project/
│   ├── public/          # Static assets
|   └──  src/            
│       ├── assets       # Images and icons
│       ├── components/  # Reusable UI elements (Navbar, Footer, CartItem)
│       │   └──  ui/     # Common UI elements (Modal, Slider)
│       ├── config/      # Routes and breadcrubls Json
│       ├── pages/       # Page components (Home, Cart, Product, Login)
│       ├── services/    # Web services calls
│       ├── store/       # Redux store and slices
│       ├── test/        # Unit testing scripts
│       ├── utils/       # Validations and debounce methods
│       └── App.js       # Main React app router
└── README.md
```

## License

Copyright (c) 2026 keerthivijay

## Author

- [@keerthivijay](https://github.com/keerthivijay)

