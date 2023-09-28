import { render, screen } from '@testing-library/react';
import BookingTable from './components/BookingTable'

import App from './App';



test("Renders the BookingForm heading", () => {
  render(<BookingTable />);
  const headingElement = screen.getByText("Book a Table")
  expect(headingElement).toBeInTheDocument();
})

test("The time slots are initialized",  () => {
  const result = App.prototype.initializeTimes();

  expect(result).toBe(["17:00","18:00","19:00","20:00","21:00","22:00"])
})

test('updateTimes function dispatches SET_TIMES action', () => {
  const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]

 const result = App.prototype.updateTimes(availableTimes);

  // Assert that the dispatch function was called with the expected action
  expect(result).toBe({ type: 'SET_TIMES', payload: availableTimes });
});