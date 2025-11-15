'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import type { QuestionnaireData } from '@/lib/types';

export default function QuestionarioPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState<Partial<QuestionnaireData>>({
    age: 0,
    weight: 0,
    height: 0,
    gender: 'masculino',
    goal: 'perda',
    targetWeight: 0,
    activityLevel: 'sedentario',
    sleepHours: 8,
    waterIntake: 2,
    mealsPerDay: 3,
    dietaryRestrictions: [],
    favoriteFood: [],
    dislikedFood: [],
    healthConditions: [],
    medications: [],
    allergies: []
  });

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Finalizar questionário
      console.log('Questionário completo:', formData);
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Etapa {step} de {totalSteps}
              </span>
              <span className="text-sm font-medium text-emerald-600">
                {Math.round(progress)}% completo
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Card do Questionário */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Dados Básicos */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Vamos começar com o básico
                  </h2>
                  <p className="text-gray-600">
                    Essas informações nos ajudam a personalizar seu plano
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Idade
                    </label>
                    <input
                      type="number"
                      value={formData.age || ''}
                      onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="25"
                      min="10"
                      max="100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gênero
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({...formData, gender: e.target.value as any})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Peso Atual (kg)
                    </label>
                    <input
                      type="number"
                      value={formData.weight || ''}
                      onChange={(e) => setFormData({...formData, weight: parseFloat(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="70"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Altura (cm)
                    </label>
                    <input
                      type="number"
                      value={formData.height || ''}
                      onChange={(e) => setFormData({...formData, height: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="170"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Objetivos */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Qual é seu objetivo?
                  </h2>
                  <p className="text-gray-600">
                    Escolha o que melhor descreve sua meta
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { value: 'perda', label: 'Perder Peso', desc: 'Emagrecer de forma saudável' },
                    { value: 'ganho', label: 'Ganhar Massa', desc: 'Aumentar massa muscular' },
                    { value: 'manutencao', label: 'Manter Peso', desc: 'Manter peso atual e melhorar saúde' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFormData({...formData, goal: option.value as any})}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        formData.goal === option.value
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </div>
                        {formData.goal === option.value && (
                          <CheckCircle className="w-6 h-6 text-emerald-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Peso Desejado (kg)
                  </label>
                  <input
                    type="number"
                    value={formData.targetWeight || ''}
                    onChange={(e) => setFormData({...formData, targetWeight: parseFloat(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="65"
                    step="0.1"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Estilo de Vida */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Seu estilo de vida
                  </h2>
                  <p className="text-gray-600">
                    Conte-nos sobre sua rotina diária
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Nível de Atividade Física
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'sedentario', label: 'Sedentário', desc: 'Pouco ou nenhum exercício' },
                      { value: 'leve', label: 'Levemente Ativo', desc: '1-3 dias por semana' },
                      { value: 'moderado', label: 'Moderadamente Ativo', desc: '3-5 dias por semana' },
                      { value: 'intenso', label: 'Muito Ativo', desc: '6-7 dias por semana' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setFormData({...formData, activityLevel: option.value as any})}
                        className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                          formData.activityLevel === option.value
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">{option.label}</div>
                            <div className="text-xs text-gray-600">{option.desc}</div>
                          </div>
                          {formData.activityLevel === option.value && (
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horas de Sono
                    </label>
                    <input
                      type="number"
                      value={formData.sleepHours || ''}
                      onChange={(e) => setFormData({...formData, sleepHours: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="8"
                      min="4"
                      max="12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Litros de Água/dia
                    </label>
                    <input
                      type="number"
                      value={formData.waterIntake || ''}
                      onChange={(e) => setFormData({...formData, waterIntake: parseFloat(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="2"
                      step="0.5"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Hábitos Alimentares */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Hábitos alimentares
                  </h2>
                  <p className="text-gray-600">
                    Ajude-nos a criar um plano alimentar ideal para você
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantas refeições por dia?
                  </label>
                  <input
                    type="number"
                    value={formData.mealsPerDay || ''}
                    onChange={(e) => setFormData({...formData, mealsPerDay: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="3"
                    min="1"
                    max="8"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Restrições Alimentares
                  </label>
                  <div className="space-y-2">
                    {['Vegetariano', 'Vegano', 'Sem Glúten', 'Sem Lactose', 'Low Carb'].map((restriction) => (
                      <label key={restriction} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.dietaryRestrictions?.includes(restriction)}
                          onChange={(e) => {
                            const current = formData.dietaryRestrictions || [];
                            if (e.target.checked) {
                              setFormData({...formData, dietaryRestrictions: [...current, restriction]});
                            } else {
                              setFormData({...formData, dietaryRestrictions: current.filter(r => r !== restriction)});
                            }
                          }}
                          className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                        />
                        <span className="text-gray-700">{restriction}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Saúde */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Informações de saúde
                  </h2>
                  <p className="text-gray-600">
                    Essas informações são confidenciais e nos ajudam a criar recomendações seguras
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condições de Saúde (opcional)
                  </label>
                  <textarea
                    value={formData.healthConditions?.join(', ')}
                    onChange={(e) => setFormData({...formData, healthConditions: e.target.value.split(',').map(s => s.trim())})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Ex: Diabetes, Hipertensão (separe por vírgula)"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medicamentos em Uso (opcional)
                  </label>
                  <textarea
                    value={formData.medications?.join(', ')}
                    onChange={(e) => setFormData({...formData, medications: e.target.value.split(',').map(s => s.trim())})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Liste os medicamentos (separe por vírgula)"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alergias Alimentares (opcional)
                  </label>
                  <textarea
                    value={formData.allergies?.join(', ')}
                    onChange={(e) => setFormData({...formData, allergies: e.target.value.split(',').map(s => s.trim())})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Ex: Amendoim, Frutos do mar (separe por vírgula)"
                    rows={2}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {step === totalSteps ? 'Finalizar' : 'Próximo'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
