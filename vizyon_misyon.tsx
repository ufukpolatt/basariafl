'use client';

import React from 'react';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaGlobe, FaBrain, FaHandHoldingHeart, FaQuoteLeft } from 'react-icons/fa';

const missionCategories = [
  {
    title: 'Akademik Mükemmellik',
    icon: FaGraduationCap,
    items: [
      'Gelişim odaklı öğretim kadromuzla yenilikçi eğitim yaklaşımları sunuyoruz',
      'Öğrencilerimizin analitik düşünme ve sorgulama becerilerini geliştiriyoruz',
      'Uluslararası projeler ve güçlü yabancı dil programlarımızla evrensel bakış açısı kazandırıyoruz',
      'Teknolojiyi etkin kullanabilen yetkin bireyler yetiştiriyoruz'
    ]
  },
  {
    title: 'Kişisel Gelişim',
    icon: FaBrain,
    items: [
      'Öğrencilerimizin psikososyal gelişimlerini yakından takip ediyoruz',
      'Her öğrencimizin bireysel potansiyelini keşfetmesine yardımcı oluyoruz',
      'Psikolojik dayanıklılıklarını artıracak destek programları sunuyoruz'
    ]
  },
  {
    title: 'Çevre ve Toplumsal Sorumluluk',
    icon: FaHandHoldingHeart,
    items: [
      'Doğa temalı eğitim programlarımızla çevre bilincini geliştiriyoruz',
      'Çeşitlilik gösteren sosyal çalışmalarımızla farklılıklara saygılı bireyler yetiştiriyoruz',
      'Sorumluluk sahibi, toplumsal değerlere bağlı gençler mezun ediyoruz'
    ]
  }
];

const visionGoals = [
  { icon: FaGraduationCap, text: 'Güçlü akademik donanıma sahip' },
  { icon: FaGlobe, text: 'En az bir yabancı dili etkin kullanabilen' },
  { icon: FaChalkboardTeacher, text: 'Geleceğin teknolojilerine yön veren' },
  { icon: FaBrain, text: 'Tüketen değil üreten' },
  { icon: FaUsers, text: 'Çevre ve sosyal sorumluluk bilinci gelişmiş' },
  
];

export default function VizyonMisyon() {
  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen">
          {/* Hero Section with Parallax Effect */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
            
            <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white">
                  Vizyon & Misyon
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed text-white/90 mb-12">
                  Geleceği şekillendiren eğitim
                </p>
              </m.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          </section>

          {/* Vision Statement */}
          <section className="relative py-24 overflow-hidden">
            <div className="content-container relative z-10">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <FaQuoteLeft className="w-16 h-16 text-primary-500/20 mx-auto mb-8" />
                <p className="text-3xl sm:text-4xl font-light text-gray-800 leading-relaxed mb-8">
                  Özel Çanakkale Akademi Okulları olarak vizyonumuz; Atatürk ilke ve inkılapları ışığında, topluma ve geleceğe yön verecek bireyler yetiştirmektir.
                </p>
              </m.div>
            </div>
          </section>

          {/* Vision Goals with 3D Effect */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="content-container relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visionGoals.map((goal, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      className="bg-white backdrop-blur-lg rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100/50"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <goal.icon className="w-8 h-8 text-primary-600" />
                        </div>
                        <p className="text-xl text-gray-700 font-medium">{goal.text}</p>
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section with Floating Cards */}
          <section className="py-24 bg-gradient-to-b from-gray-100 via-primary-100 to-primary-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-5" />
            <div className="content-container relative z-10">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl font-bold text-primary-900 mb-8">Misyonumuz</h2>
                <p className="text-2xl text-primary-800 max-w-4xl mx-auto font-light">
                  Öğrencilerimizi geleceğe hazırlarken onların tüm yönleriyle gelişimini desteklemektir.
                </p>
              </m.div>

              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {missionCategories.map((category, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-primary-100"
                    >
                      <div className="flex flex-col items-center text-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                          <category.icon className="w-10 h-10 text-primary-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-primary-900">{category.title}</h3>
                        <ul className="space-y-4">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-left">
                              <span className="text-primary-500 mr-2 mt-1.5">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final Statement with Parallax */}
          <section className="relative py-32 overflow-hidden bg-gradient-to-b from-primary-200 to-primary-100">
            <div className="absolute inset-0 bg-pattern opacity-5" />
            <div className="content-container relative z-10">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="bg-white/90 backdrop-blur-lg p-12 rounded-2xl border border-primary-200 shadow-xl">
                  <p className="text-2xl text-primary-900 leading-relaxed font-light">
                    Bu misyonumuzla, öğrencilerimizin sadece akademik olarak değil, duygusal ve sosyal açıdan da dengeli bireyler olarak yetişmelerini hedefliyoruz.
                  </p>
                </div>
              </m.div>
            </div>
          </section>
        </div>
      </LazyMotion>
    </Layout>
  );
} 