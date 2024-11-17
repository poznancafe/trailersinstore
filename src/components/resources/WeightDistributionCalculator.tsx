import React, { useState } from 'react';
import { Scale, AlertTriangle } from 'lucide-react';

interface WeightDistributionResult {
  frontAxleWeight: number;
  rearAxleWeight: number;
  isBalanced: boolean;
  recommendation: string;
}

export default function WeightDistributionCalculator() {
  const [values, setValues] = useState({
    trailerLength: '',
    loadWeight: '',
    loadPosition: ''
  });

  const [result, setResult] = useState<WeightDistributionResult | null>(null);

  const calculateDistribution = () => {
    const length = parseFloat(values.trailerLength);
    const weight = parseFloat(values.loadWeight);
    const position = parseFloat(values.loadPosition);

    const frontAxleWeight = (weight * (length - position)) / length;
    const rearAxleWeight = (weight * position) / length;
    const isBalanced = frontAxleWeight >= weight * 0.4 && frontAxleWeight <= weight * 0.6;

    setResult({
      frontAxleWeight,
      rearAxleWeight,
      isBalanced,
      recommendation: isBalanced 
        ? "Weight distribution is optimal"
        : "Adjust load position for better weight distribution"
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <Scale className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Weight Distribution Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trailer Length (m)
          </label>
          <input
            type="number"
            value={values.trailerLength}
            onChange={(e) => setValues({ ...values, trailerLength: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter length"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Load Weight (kg)
          </label>
          <input
            type="number"
            value={values.loadWeight}
            onChange={(e) => setValues({ ...values, loadWeight: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter weight"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Load Position from Front (m)
          </label>
          <input
            type="number"
            value={values.loadPosition}
            onChange={(e) => setValues({ ...values, loadPosition: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter position"
          />
        </div>
      </div>

      <button
        onClick={calculateDistribution}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Calculate Distribution
      </button>

      {result && (
        <div className={`mt-4 p-4 rounded-md ${result.isBalanced ? 'bg-green-50' : 'bg-yellow-50'}`}>
          <div className="flex items-center space-x-2">
            {!result.isBalanced && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
            <p className={result.isBalanced ? 'text-green-700' : 'text-yellow-700'}>
              {result.recommendation}
            </p>
          </div>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p>Front Axle Weight: {result.frontAxleWeight.toFixed(2)} kg</p>
            <p>Rear Axle Weight: {result.rearAxleWeight.toFixed(2)} kg</p>
          </div>
        </div>
      )}
    </div>
  );
}