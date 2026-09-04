import strengthImage from '../assets/images/home/P1_3.png';
import cardioImage from '../assets/images/home/P1_4.png';
import personalImage from '../assets/images/home/P1_5.png';
import functionalImage from '../assets/images/classes/p1.png';
import hiitImage from '../assets/images/classes/p2.png';
import crossImage from '../assets/images/classes/p3.png';
import weightLossImage from '../assets/images/classes/p4.png';
import mobilityImage from '../assets/images/classes/p5.png';

export const programs = [
  {
    id: 'strength-training',
    name: 'Strength Training',
    category: 'Strength',
    level: 'Beginner to Advanced',
    duration: '50 min',
    description: 'Structured lifting sessions for muscle, power, and better movement.',
    image: strengthImage,
    alt: 'Athlete lifting weights in a gym',
  },
  {
    id: 'cardio',
    name: 'Cardio',
    category: 'Conditioning',
    level: 'All Levels',
    duration: '40 min',
    description: 'Heart-rate focused training that improves stamina and daily energy.',
    image: cardioImage,
    alt: 'Athlete doing cardio training',
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    category: 'Coaching',
    level: 'Custom',
    duration: '60 min',
    description: 'One-on-one coaching tailored to your body, goals, and schedule.',
    image: personalImage,
    alt: 'Trainer coaching a gym member',
  },
  {
    id: 'functional-training',
    name: 'Functional Training',
    category: 'Strength',
    level: 'Intermediate',
    duration: '45 min',
    description: 'Practical strength, balance, and core work for real-world performance.',
    image: functionalImage,
    alt: 'Functional fitness training area',
  },
  {
    id: 'hiit',
    name: 'HIIT',
    category: 'Conditioning',
    level: 'Intermediate',
    duration: '30 min',
    description: 'Fast, efficient intervals designed to challenge your engine.',
    image: hiitImage,
    alt: 'High intensity interval training class',
  },
  {
    id: 'cross-training',
    name: 'Cross Training',
    category: 'Performance',
    level: 'Advanced',
    duration: '55 min',
    description: 'A powerful mix of strength, conditioning, and athletic movement.',
    image: crossImage,
    alt: 'Cross training workout',
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    category: 'Coaching',
    level: 'All Levels',
    duration: '45 min',
    description: 'Sustainable training plans that support fat loss and confidence.',
    image: weightLossImage,
    alt: 'Gym member training for weight loss',
  },
  {
    id: 'mobility-recovery',
    name: 'Mobility & Recovery',
    category: 'Recovery',
    level: 'All Levels',
    duration: '35 min',
    description: 'Improve range of motion, reduce stiffness, and recover with intention.',
    image: mobilityImage,
    alt: 'Mobility and recovery training',
  },
];
