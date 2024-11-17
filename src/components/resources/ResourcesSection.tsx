import React, { useState } from 'react';
import { Calculator, Truck, Scale, DollarSign } from 'lucide-react';
import TowingCalculator from './TowingCalculator';
import WeightDistributionCalculator from './WeightDistributionCalculator';
import BallWeightCalculator from './BallWeightCalculator';
import PayloadCalculator from './PayloadCalculator';

const calculatorCategories = [
  {
    id: 'towing',
    title: 'Towing Calculators',
    icon: Truck,
    items: ['Towing Compatibility', 'Weight Distribution', 'Ball Weight']
  },
  {
    id: 'weight',
    title: 'Weight Calculators',
    icon: Scale,
    items: ['Payload Distribution', 'Axle Load', 'Tire Load']
  },
  {
    id: 'cost',
    title: 'Cost Calculators',
    icon: DollarSign,
    items: ['Fuel Consumption', 'Cost of Ownership', 'Depreciation']
  }
];

export default function ResourcesSection() {
  const [activeCalculator, setActiveCalculator] = useState('towing');

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trailer Resources & Calculators</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Use our comprehensive set of calculators and tools to ensure safe and efficient trailer operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {calculatorCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id} 
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setActiveCalculator(category.id)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <Calculator className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="space-y-8">
          <TowingCalculator />
          <WeightDistributionCalculator />
          <BallWeightCalculator />
          <PayloadCalculator />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/guides/towing-safety" className="p-4 border rounded-md hover:bg-gray-50">
              <h4 className="font-medium mb-2">Towing Safety Guide</h4>
              <p className="text-sm text-gray-600">Essential tips for safe trailer towing</p>
            </a>
            <a href="/guides/maintenance" className="p-4 border rounded-md hover:bg-gray-50">
              <h4 className="font-medium mb-2">Maintenance Checklist</h4>
              <p className="text-sm text-gray-600">Keep your trailer in top condition</p>
            </a>
            <a href="/guides/regulations" className="p-4 border rounded-md hover:bg-gray-50">
              <h4 className="font-medium mb-2">Regulations & Compliance</h4>
              <p className="text-sm text-gray-600">Stay up to date with trailer regulations</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}