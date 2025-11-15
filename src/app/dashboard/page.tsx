'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Target, TrendingDown, Flame, Droplet, Trophy, Calendar, ChevronRight, Award, Zap } from 'lucide-react';
import Navbar from '@/components/custom/navbar';

export default function DashboardPage() {
  const [userData] = useState({
    name: 'João Silva',
    currentWeight: 85,
    targetWeight: 75,
    caloriesTarget: 2000,
    caloriesConsumed: 1450,
    waterTarget: 8,
    waterConsumed: 5,
    streak: 7
  });

  const progressPercentage = ((userData.caloriesConsumed / userData.caloriesTarget) * 100).toFixed(0);
  const weightLoss = userData.currentWeight - userData.targetWeight;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Olá, {userData.name}! 👋
            </h1>
            <p className="text-gray-600">
              Continue assim! Você está no caminho certo para alcançar seus objetivos.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Peso Atual */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  -{weightLoss}kg
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {userData.currentWeight}kg
              </div>
              <div className="text-sm text-gray-600">
                Meta: {userData.targetWeight}kg
              </div>
            </div>

            {/* Calorias */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {progressPercentage}%
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {userData.caloriesConsumed}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                de {userData.caloriesTarget} kcal
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Água */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {userData.waterConsumed}/{userData.waterTarget}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {userData.waterConsumed * 250}ml
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Meta: {userData.waterTarget * 250}ml
              </div>
              <div className="flex gap-1">
                {Array.from({ length: userData.waterTarget }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full ${
                      i < userData.waterConsumed
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sequência */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <Trophy className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {userData.streak} dias
              </div>
              <div className="text-sm text-gray-600">
                Sequência ativa 🔥
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Ações Rápidas */}
            <div className="lg:col-span-2 space-y-6">
              {/* Refeições de Hoje */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Refeições de Hoje</h2>
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                    + Adicionar
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Café da Manhã', calories: 450, time: '08:00', completed: true },
                    { name: 'Almoço', calories: 650, time: '12:30', completed: true },
                    { name: 'Lanche', calories: 350, time: '16:00', completed: true },
                    { name: 'Jantar', calories: 550, time: '19:30', completed: false }
                  ].map((meal, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        meal.completed
                          ? 'border-emerald-200 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          checked={meal.completed}
                          className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                          readOnly
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{meal.name}</div>
                          <div className="text-sm text-gray-600">{meal.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{meal.calories} kcal</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exercícios */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Exercícios de Hoje</h2>
                  <Link href="#" className="text-emerald-600 font-semibold hover:text-emerald-700">
                    Ver Todos
                  </Link>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Caminhada', duration: '30 min', calories: 150, completed: true },
                    { name: 'Treino de Força', duration: '45 min', calories: 300, completed: false }
                  ].map((exercise, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        exercise.completed
                          ? 'border-teal-200 bg-teal-50'
                          : 'border-gray-200 hover:border-teal-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          checked={exercise.completed}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                          readOnly
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{exercise.name}</div>
                          <div className="text-sm text-gray-600">{exercise.duration}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">-{exercise.calories} kcal</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Conquistas Recentes */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-emerald-600" />
                  <h3 className="font-bold text-gray-900">Conquistas</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: '7 Dias Seguidos', icon: '🔥' },
                    { name: 'Primeira Semana', icon: '⭐' },
                    { name: 'Meta de Água', icon: '💧' }
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="font-medium text-gray-900">{achievement.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upgrade Premium */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 shadow-lg text-white">
                <div className="mb-4">
                  <Trophy className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Upgrade para Premium</h3>
                  <p className="text-emerald-100 text-sm">
                    Desbloqueie planos personalizados, consultas com nutricionistas e muito mais!
                  </p>
                </div>
                <Link
                  href="/planos"
                  className="block w-full py-3 bg-white text-emerald-600 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                >
                  Ver Planos
                </Link>
              </div>

              {/* Progresso Semanal */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Progresso Semanal</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Calorias</span>
                      <span className="font-semibold text-gray-900">85%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Exercícios</span>
                      <span className="font-semibold text-gray-900">70%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-600" style={{ width: '70%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Água</span>
                      <span className="font-semibold text-gray-900">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-600" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
