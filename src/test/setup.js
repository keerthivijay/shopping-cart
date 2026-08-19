import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Clean up DOM elements after every test case execution
afterEach(() => {
  cleanup();
});