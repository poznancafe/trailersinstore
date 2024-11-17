import React, { useState } from 'react';
import { Scale, AlertTriangle } from 'lucide-react';

interface PayloadResult {
  maxPayload: number;
  payloadPerAxle: number;
  isValid: boolean;
  message: string;
}

export default function PayloadCalculator() {
  const [values, setValues] = useState({
    tareWeight: '',
    atm: '',
    numAxles: ''
  });

  const [result, setResult] = useState<PayloadResult | null>(null);

  const calculatePayload = () => {
    const tare = parseFloat(values.tareWeight);
    const atm = parseFloat(values.atm);
    const axles = parseInt(values.numAxles);
    
    const maxPayload = atm - tare;
    const payloadPerAxle = maxPayload / axles;
    const isValid = maxPayload > 0 && payloadPerAxle <= 3500; // Example axle limit

    setResult({
      maxPayload,
      payloadPerAxle,
      isValid,
      message: isValid 
        ? "Payload distribution is within safe limits"
        : "Warning: Payload exceeds recommended axle capacity"
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <Scale className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Payload Distribution Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tare Weight (kg)
          </label>
          <input
            type="number"
            value={values.tareWeight}
            onChange={(e) => setValues({ ...values, tareWeight: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tare weight"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ATM (kg)
          </label>
          <input
            type="number"
            value={values.atm}
            onChange={(e) => setValues({ ...values, atm: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ATM"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Axles
          </label>
          <input
            type="number"
            value={values.numAxles}
            onChange={(e) => setValues({ ...values, numAxles: e.target.value })}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of axles"
          />
        </div>
      </div>

      <button
        onClick={calculatePayload}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Calculate Payload
      </button>

      {result && (
        <div className={`mt-4 p-4 rounded-md ${result.isValid ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-center space-x-2">
            {!result.isValid && <AlertTriangle className="h-5 w-5 text-red-500" />}
            <p className={result.isValid ? 'text-green-700' : 'text-red-700'}>
              {result.message}
            </p>
          </div>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p>Maximum Payload: {result.maxPayload.toFixed(2)} kg</p>
            <p>Payload per Axle: {result.payloadPerAxle.toFixed(2)} kg</p>
          </div>
        </div>
      )}
    </div>
  );
}