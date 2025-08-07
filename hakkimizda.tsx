'use client';

import React from 'react';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { FaQuoteRight } from 'react-icons/fa';

export default function KurucularMesaji() {
  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 py-24 sm:py-28 lg:py-32">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl top-0 left-0" />
            </div>
            <div className="content-container relative z-10">
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center text-white mb-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-primary-400 mr-2" />
                  Kurucularımızın Mesajı
                </div>
              </m.div>
            </div>
          </section>

          {/* Message Section */}
          <section className="relative -mt-20 pb-24">
            <div className="content-container">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-12">
                  <FaQuoteRight className="w-16 h-16 text-primary-500/20 mb-8" />
                  <div className="space-y-8 text-gray-700">
                    <div className="space-y-6">
                      <p className="text-2xl font-light leading-relaxed">
                        Değerli Velilerimiz ve Sevgili Öğrencilerimiz,
                      </p>
                      <p className="text-xl leading-relaxed">
                        15 yıldır Çanakkale'de eğitim alanında öncü bir kurum olarak hizmet veren Özel Çanakkale Akademi kurucuları olarak, 
                        sizlerle bu yolculuğu paylaşmaktan büyük onur duyuyoruz.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold text-primary-900">Eğitim Vizyonumuz</h2>
                      <p className="text-lg leading-relaxed">
                        Okulumuzda her bir öğrencimizin:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                        <li>Kişisel potansiyelini keşfetmesi</li>
                        <li>Topluma değer katan bireyler olarak yetişmesi</li>
                        <li>Hayatın karşılarına çıkaracağı zorluklara hazır olması</li>
                      </ul>
                      <p className="text-lg leading-relaxed">
                        için titizlikle tasarlanmış eğitim programları sunuyoruz.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold text-primary-900">Teknoloji Odaklı Yaklaşımımız</h2>
                      <p className="text-lg leading-relaxed">
                        Özel Çanakkale Akademi olarak, modern eğitimin gerektirdiği en yüksek kalitede teknolojik altyapıyı öğrencilerimizin hizmetine sunuyoruz. Öğrencilerimiz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                        <li>Yenilikçi eğitim teknolojileriyle öğreniyor</li>
                        <li>Dijital çağın gerektirdiği becerileri kazanıyor</li>
                        <li>Geleceğin iş dünyasına hazırlanıyor</li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold text-primary-900">Özgün İçerik ve Çeşitlilik</h2>
                      <p className="text-lg leading-relaxed">
                        Eğitim programlarımızda:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                        <li>Öğrencilerimizin öğrenme yolculuğunu zenginleştiren özgün içerikler</li>
                        <li>Bireysel gelişimlerine katkı sağlayan çeşitli etkinlikler</li>
                        <li>Yaşam boyu sürdürecekleri ilgi alanlarını keşfetme fırsatları</li>
                      </ul>
                      <p className="text-lg leading-relaxed">
                        sunuyoruz.
                      </p>
                    </div>

                    <div className="space-y-6 pt-8">
                      <p className="text-xl leading-relaxed">
                        Kurucular olarak, her bir öğrencimizin Özel Çanakkale Akademi'de sadece akademik başarı elde etmekle kalmayıp, 
                        hayatları boyunca kendilerine rehberlik edecek değerler ve beceriler kazanmasını hedefliyoruz.
                      </p>
                      <p className="text-xl leading-relaxed">
                        Eğitim yolculuğunuzda sizlere eşlik etmekten mutluluk duyuyoruz.
                      </p>
                    </div>

                    <div className="text-right pt-8 border-t border-gray-100">
                      <p className="text-xl font-medium text-gray-900">Saygılarımızla,</p>
                      <p className="text-2xl font-semibold text-primary-700 mt-2">Özel Çanakkale Akademi Kurucu Heyeti</p>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </section>
        </div>
      </LazyMotion>
    </Layout>
  );
} 