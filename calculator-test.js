
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 5.4,
  }
  expect(calculateMonthlyPayment(values)).toEqual('108.03')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 25000,
    years: 12,
    rate: 6.2,
  };
  expect(calculateMonthlyPayment(values)).toEqual('246.56')
});

/// etc
