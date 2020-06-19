
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000, years: 5, rate: 5,
  }
  calculateMonthlyPayment(values);
  expect(values.monthlyPayment).toEqual(188.71);
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000, years: 5, rate: 5,
  }
  calculateMonthlyPayment(values);
  expect(values.monthlyPayment).toBeCloseTo(188.71,2);
});

/// etc
