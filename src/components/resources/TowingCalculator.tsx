import React, { useState } from 'react';
import { Scale, AlertTriangle } from 'lucide-react';

interface TowingResult {
  isValid: boolean;
  combinedWeight: number;
  message: string;
}

export default function TowingCalculator() {
  const [values, setValues] = useState({
    gvm: '',
    gcm: '',
    towingCapacity: '',
    trailerAtm: ''
  });

  const [result, setResult] = useState<TowingResult | null>(null);

  const calculateTowing = () => {
    const gvm = parseFloat(values.gvm);
    const gcm = parseFloat(values.gcm);
    const towingCapacity = parseFloat(values.towingCapacity);
    const trailerAtm = parseFloat(values.trailerAtm);

    const combinedWeight = gvm + trailerAtm;
    const isValid = combinedWeight <= gcm && trailerAtm <= towingCapacity;

    setResult({
      isValid,
      combinedWeight,
      message: isValid 
        ? "Your setup is within safe towing limits."
        : "Warning: This combination exceeds recommended towing limits."
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <Scale className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Towing Compatibility Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle GVM (kg)
          </label>
          <input
            type="number"
            value={values.gvm}
            onChange={(e) => setValues({ ...values, gvm: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GVM"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle GCM (kg)
          </label>
          <input
            type="number"
            value={values.gcm}
            onChange={(e) => setValues({ ...values, gcm: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GCM"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Towing Capacity (kg)
          </label>
          <input
            type="number"
            value={values.towingCapacity}
            onChange={(e) => setValues({ ...values, towingCapacity: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter towing capacity"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trailer ATM (kg)
          </label>
          <input
            type="number"
            value={values.trailerAtm}
            onChange={(e) => setValues({ ...values, trailerAtm: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter trailer ATM"
          />
        </div>
      </div>

      <button
        onClick={calculateTowing}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Calculate
      </button>

      {result && (
        <div className={`mt-4 p-4 rounded-md ${result.isValid ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-center space-x-2">
            {!result.isValid && <AlertTriangle className="h-5 w-5 text-red-500" />}
            <p className={result.isValid ? 'text-green-700' : 'text-red-700'}>
              {result.message}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Combined Weight: {result.combinedWeight} kg
          </p>
        </div>
      )}
    </div>
  );
}