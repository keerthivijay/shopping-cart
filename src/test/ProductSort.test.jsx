import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProductSort from "../components/ProductSort";


describe('Home component', () => {

    test('load page', () => {
        const { getByText } = render(<ProductSort/>);
        const priceLowToHigh = getByText('Price Low to High');
        const priceHightOLow = getByText('Price High to Low');
        expect(priceLowToHigh).toBeInTheDocument();
        expect(priceHightOLow).toBeInTheDocument();
    })
});
