// Tipos do aplicativo de emagrecimento

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  goal: 'perda' | 'ganho' | 'manutencao';
  activityLevel: 'sedentario' | 'leve' | 'moderado' | 'intenso';
  createdAt: Date;
}

export interface QuestionnaireData {
  // Dados básicos
  age: number;
  weight: number;
  height: number;
  gender: 'masculino' | 'feminino' | 'outro';
  
  // Metas
  goal: 'perda' | 'ganho' | 'manutencao';
  targetWeight: number;
  
  // Estilo de vida
  activityLevel: 'sedentario' | 'leve' | 'moderado' | 'intenso';
  sleepHours: number;
  waterIntake: number;
  
  // Hábitos alimentares
  mealsPerDay: number;
  dietaryRestrictions: string[];
  favoriteFood: string[];
  dislikedFood: string[];
  
  // Saúde
  healthConditions: string[];
  medications: string[];
  allergies: string[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  period: 'mensal' | 'trimestral' | 'anual';
  features: string[];
  popular?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface DailyProgress {
  date: Date;
  caloriesConsumed: number;
  caloriesTarget: number;
  exerciseCompleted: boolean;
  mealsLogged: number;
  waterGlasses: number;
}
