#!/bin/bash

# Başarı Anadolu Fen Lisesi - Otomatik Deploy Script
echo "🚀 Başarı Anadolu Fen Lisesi - Deploy Başlatılıyor..."

# Git durumunu kontrol et
echo "📋 Git durumu kontrol ediliyor..."
git status

# Değişiklikleri commit et
echo "💾 Değişiklikler commit ediliyor..."
git add .
git commit -m "Otomatik güncelleme: $(date)"

# GitHub'a push et
echo "⬆️ GitHub'a push ediliyor..."
git push origin main

echo "✅ Deploy tamamlandı!"
echo "🌐 Site: https://ufukpolatt.github.io/basariafl"
echo "📱 GitHub: https://github.com/ufukpolatt/basariafl"
