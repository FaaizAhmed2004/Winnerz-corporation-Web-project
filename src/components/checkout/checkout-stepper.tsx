'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
}

interface CheckoutStepperProps {
  steps: Step[];
  currentStep: number;
}

export function CheckoutStepper({ steps, currentStep }: CheckoutStepperProps) {
  return (
    <div className="mb-8">
      <nav aria-label="Progress">
        <ol className="flex items-center">
          {steps.map((step, index) => (
            <li key={step.id} className={`relative ${index !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
              <div className="flex items-center">
                <div className="relative flex h-8 w-8 items-center justify-center">
                  {index < currentStep ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600"
                    >
                      <Check className="h-5 w-5 text-white" />
                    </motion.div>
                  ) : index === currentStep ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    </motion.div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                      <div className="h-2.5 w-2.5 rounded-full bg-transparent" />
                    </div>
                  )}
                </div>
                <div className="ml-4 min-w-0 flex-1">
                  <p className={`text-sm font-medium ${
                    index <= currentStep ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute left-4 top-8 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}