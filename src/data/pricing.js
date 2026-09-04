export const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$29',
    period: '/month',
    description: 'A simple plan for consistent solo training.',
    features: ['Gym access', 'Locker room', 'Standard support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$59',
    period: '/month',
    description: 'Our recommended plan for guided progress.',
    features: ['All Basic features', 'Group classes', 'Trainer consultation'],
    recommended: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$99',
    period: '/month',
    description: 'Premium support for serious performance goals.',
    features: [
      'All Pro features',
      'Personal training',
      'Nutrition support',
      'Priority booking',
    ],
  },
];
