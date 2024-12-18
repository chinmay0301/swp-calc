'use client';

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';

const InvestmentCalculator = () => {
  // State variables for inputs
  const [totalCorpus, setTotalCorpus] = useState(2000000);
  const [sipAllocation, setSipAllocation] = useState(70);
  const [swpAllocation, setSwpAllocation] = useState(30);
  const [sipAnnualReturn, setSipAnnualReturn] = useState(12);
  const [swpAnnualReturn, setSwpAnnualReturn] = useState(10);
  const [years, setYears] = useState(10);
  const [monthlyWithdrawalAmount, setMonthlyWithdrawalAmount] = useState(10000);
  const [yearlyWithdrawalIncrease, setYearlyWithdrawalIncrease] = useState(0); // New slider state

  // Handle SIP Allocation Change
  const handleSipAllocationChange = (value) => {
    setSipAllocation(value);
    setSwpAllocation(100 - value);
  };

  // Memoized corpus allocations
  const corpusAllocations = useMemo(() => {
    const sipCorpus = totalCorpus * (sipAllocation / 100);
    const swpCorpus = totalCorpus * (swpAllocation / 100);
    return {
      sip: sipCorpus,
      swp: swpCorpus
    };
  }, [totalCorpus, sipAllocation, swpAllocation]);

  // Initial annual withdrawal (for reference)
  const initialAnnualWithdrawalAmount = useMemo(() => {
    return monthlyWithdrawalAmount * 12;
  }, [monthlyWithdrawalAmount]);

  // SIP Calculation
  const calculateSIP = useMemo(() => {
    let currentValue = corpusAllocations.sip;
    const yearlyData = [];

    for (let year = 1; year <= years; year++) {
      // Calculate growth with SIP-specific return
      currentValue *= (1 + sipAnnualReturn / 100);

      yearlyData.push({
        year,
        startValue: corpusAllocations.sip,
        endValue: currentValue,
        growth: currentValue - corpusAllocations.sip
      });
    }

    return yearlyData;
  }, [corpusAllocations.sip, sipAnnualReturn, years]);

  // SWP Calculation with yearly increasing withdrawals
  const calculateSWP = useMemo(() => {
    let currentValue = corpusAllocations.swp;
    const yearlyData = [];
    let totalWithdrawn = 0;

    for (let year = 1; year <= years; year++) {
      // Calculate this year's monthly withdrawal with increase applied
      const thisYearMonthlyWithdrawal =
        monthlyWithdrawalAmount * Math.pow(1 + yearlyWithdrawalIncrease / 100, year - 1);
      const thisYearAnnualWithdrawal = thisYearMonthlyWithdrawal * 12;

      // Calculate growth before withdrawal using SWP-specific return
      currentValue *= (1 + swpAnnualReturn / 100);

      // Subtract annual withdrawal from SWP corpus
      const remainingAfterWithdrawal = currentValue - thisYearAnnualWithdrawal;
      totalWithdrawn += thisYearAnnualWithdrawal;

      yearlyData.push({
        year,
        startValue: currentValue,
        withdrawal: thisYearAnnualWithdrawal,
        endValue: Math.max(remainingAfterWithdrawal, 0),
        growthRate: swpAnnualReturn,
        totalWithdrawn
      });

      // Update current value for next iteration
      currentValue = Math.max(remainingAfterWithdrawal, 0);

      // Stop if SWP corpus is exhausted
      if (currentValue <= 0) break;
    }

    return yearlyData;
  }, [corpusAllocations.swp, swpAnnualReturn, years, monthlyWithdrawalAmount, yearlyWithdrawalIncrease]);

  // Calculate total corpus after years
  const totalCorpusAfterYears = useMemo(() => {
    const sipEndValue = calculateSIP[calculateSIP.length - 1].endValue;
    const swpEndValue = calculateSWP[calculateSWP.length - 1]?.endValue ?? 0;
    return sipEndValue + swpEndValue;
  }, [calculateSIP, calculateSWP]);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Advanced Corpus Allocation Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Inputs Section */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <Label>Total Corpus (₹)</Label>
              <Input 
                type="number" 
                value={totalCorpus}
                onChange={(e) => setTotalCorpus(Number(e.target.value))}
                className="mt-2"
              />
            </div>
            <div>
              <Label>SIP Allocation (%)</Label>
              <Slider
                value={[sipAllocation]}
                onValueChange={(val) => handleSipAllocationChange(val[0])}
                max={100}
                step={1}
                className="mt-4"
              />
              <span className="text-sm text-muted-foreground">
                SIP: {sipAllocation}% (₹{corpusAllocations.sip.toLocaleString()})
                | SWP: {swpAllocation}% (₹{corpusAllocations.swp.toLocaleString()})
              </span>
            </div>
            <div>
              <Label>SIP Annual Return (%)</Label>
              <Slider
                value={[sipAnnualReturn]}
                onValueChange={(val) => setSipAnnualReturn(val[0])}
                max={20}
                step={0.5}
                className="mt-4"
              />
              <span className="text-sm text-muted-foreground">
                {sipAnnualReturn}%
              </span>
            </div>
            <div>
              <Label>SWP Annual Return (%)</Label>
              <Slider
                value={[swpAnnualReturn]}
                onValueChange={(val) => setSwpAnnualReturn(val[0])}
                max={20}
                step={0.5}
                className="mt-4"
              />
              <span className="text-sm text-muted-foreground">
                {swpAnnualReturn}%
              </span>
            </div>
            <div>
              <Label>Investment Duration (Years)</Label>
              <Slider
                value={[years]}
                onValueChange={(val) => setYears(val[0])}
                max={30}
                step={1}
                className="mt-4"
              />
              <span className="text-sm text-muted-foreground">
                {years} years
              </span>
            </div>
            <div>
              <Label>Monthly Withdrawal Amount (₹)</Label>
              <Input 
                type="number" 
                value={monthlyWithdrawalAmount}
                onChange={(e) => setMonthlyWithdrawalAmount(Number(e.target.value))}
                className="mt-2"
              />
              <span className="text-sm text-muted-foreground">
                Initial Annual Withdrawal: ₹{initialAnnualWithdrawalAmount.toLocaleString()}
              </span>
            </div>
            <div>
              <Label>Yearly Withdrawal Increase (%)</Label>
              <Slider
                value={[yearlyWithdrawalIncrease]}
                onValueChange={(val) => setYearlyWithdrawalIncrease(val[0])}
                max={20}
                step={1}
                className="mt-4"
              />
              <span className="text-sm text-muted-foreground">
                {yearlyWithdrawalIncrease}%
              </span>
            </div>
          </div>

          {/* Tabs for SIP and SWP Results */}
          <Tabs defaultValue="sip">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sip">SIP Analysis</TabsTrigger>
              <TabsTrigger value="swp">SWP Analysis</TabsTrigger>
            </TabsList>
            <TabsContent value="sip">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2">Year</th>
                      <th className="p-2">Start Value (₹)</th>
                      <th className="p-2">End Value (₹)</th>
                      <th className="p-2">Total Growth (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculateSIP.map((data) => (
                      <tr key={data.year} className="border-b">
                        <td className="p-2 text-center">{data.year}</td>
                        <td className="p-2 text-right">
                          {data.startValue.toLocaleString()}
                        </td>
                        <td className="p-2 text-right">
                          {data.endValue.toLocaleString()}
                        </td>
                        <td className="p-2 text-right">
                          {data.growth.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="swp">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2">Year</th>
                      <th className="p-2">Start Value (₹)</th>
                      <th className="p-2">Withdrawal (₹)</th>
                      <th className="p-2">End Value (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculateSWP.map((data) => (
                      <tr key={data.year} className="border-b">
                        <td className="p-2 text-center">{data.year}</td>
                        <td className="p-2 text-right">
                          {data.startValue.toLocaleString()}
                        </td>
                        <td className="p-2 text-right">
                          {data.withdrawal.toLocaleString()}
                        </td>
                        <td className="p-2 text-right">
                          {data.endValue.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>

          {/* Summary Section */}
          <div className="mt-6 bg-muted p-4 rounded">
            <h3 className="text-lg font-semibold mb-4">Corpus Allocation Summary</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p>Total Initial Corpus: ₹{totalCorpus.toLocaleString()}</p>
                <p>SIP Allocation: {sipAllocation}% (₹{corpusAllocations.sip.toLocaleString()})</p>
                <p>SIP Annual Return: {sipAnnualReturn}%</p>
                <p>SIP Corpus Value after {years} years: ₹{calculateSIP[calculateSIP.length - 1].endValue.toLocaleString()}</p>
              </div>
              <div>
                <p>SWP Allocation: {swpAllocation}% (₹{corpusAllocations.swp.toLocaleString()})</p>
                <p>SWP Annual Return: {swpAnnualReturn}%</p>
                <p>Initial Monthly Withdrawal: ₹{monthlyWithdrawalAmount.toLocaleString()}</p>
                <p>Yearly Withdrawal Increase: {yearlyWithdrawalIncrease}%</p>
                <p>SWP Corpus Value after {years} years: ₹{(calculateSWP[calculateSWP.length - 1]?.endValue ?? 0).toLocaleString()}</p>
                <p>Total Amount Withdrawn: ₹{(calculateSWP[calculateSWP.length - 1]?.totalWithdrawn ?? 0).toLocaleString()}</p>
              </div>
            </div>
            <div className="mt-4 border-t pt-4">
              <h4 className="text-md font-semibold mb-2">Total Corpus Overview</h4>
              <p>
                Total Corpus Value after {years} years:{" "}
                <strong>₹{totalCorpusAfterYears.toLocaleString()}</strong>
              </p>
              <p>
                Net Change: ₹{(totalCorpusAfterYears - totalCorpus).toLocaleString()} 
                ({((totalCorpusAfterYears / totalCorpus - 1) * 100).toFixed(2)}%)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentCalculator;
