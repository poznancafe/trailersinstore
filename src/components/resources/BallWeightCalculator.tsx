import React, { useState } from 'react';
import { Scale, AlertTriangle } from 'lucide-react';

interface BallWeightResult {
  ballWeight: number;
  percentage: number;
  isValid: boolean;
  message: string;
}

export default function BallWeightCalculator() {
  const [values, setValues] = useState({
    trailerWeight: '',
    loadDistribution: ''
  });

  const [result, setResult] = useState<BallWeightResult | null>(null);

  const calculateBallWeight = () => {
    const weight = parseFloat(values.trailerWeight);
    const distribution = parseFloat(values.loadDistribution) / 100;
    
    const ballWeight = weight * distribution;
    const percentage = distribution * 100;
    const isValid = percentage >= 10 && percentage <= 15;

    setResult({
      ballWeight,
      percentage,
      isValid,
      message: isValid 
        ? "Ball weight is within recommended range"
        : "Ball weight should be between 10-15% of total trailer weight"
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <Scale className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Ball Weight Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Trailer Weight (kg)
          </label>
          <input
            type="number"
            value={values.trailerWeight}
            onChange={(e) => setValues({ ...values, trailerWeight: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter total weight"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Load Distribution (%)
          </label>
          <input
            type="number"
            value={values.loadDistribution}
            onChange={(e) => setValues({ ...values, loadDistribution: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter distribution percentage"
          />
        </div>
      </div>

      <button
        onClick={calculateBallWeight}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Calculate Ball Weight
      </button>

      {result && (
        <div className={`mt-4 p-4 rounded-md ${result.isValid ? 'bg-green-50' : 'bg-yellow-50'}`}>
          <div className="flex items-center space-x-2">
            {!result.isValid && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
            <p className={result.isValid ? 'text-green-700' : 'text-yellow-700'}>
              {result.message}
            </p>
          </div>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p>Ball Weight: {result.ballWeight.toFixed(2)} kg</p>
            <p>Percentage of Total Weight: {result.percentage.toFixed(1)}%</p>
          </div>
        </div>
      )}
    </div>
  );
}