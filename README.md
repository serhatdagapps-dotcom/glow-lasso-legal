# GLOW LASSO — GitHub Pages Legal & Support Site

Bu klasör doğrudan GitHub Pages için hazırlanmıştır. Build aracı veya bağımlılık gerekmez.

## İçerik
- `index.html` — GLOW LASSO legal/support ana sayfası
- `privacy.html` — Privacy Policy
- `kvkk.html` — KVKK Aydınlatma Metni
- `terms.html` — Terms of Use
- `ads.html` — Advertising & Consent
- `support.html` — Support / Contact + Delete My Data açıklaması
- `translations.js` — uygulamadaki mevcut 30 dil legal metinleriyle eşlenmiş içerik
- `app-ads.txt.template` — AdMob doğrulaması için şablon; **şimdilik yayınlamayın/yeniden adlandırmayın**

## Yayınlama
1. GitHub'da public bir repo oluşturun (ör. `glow-lasso-legal`).
2. Bu ZIP'in **içindeki dosyaları repo köküne** yükleyin.
3. GitHub → Settings → Pages → Deploy from a branch → `main` / `(root)` seçin.
4. GitHub Pages URL'si oluşunca şu URL'leri kullanın:
   - Privacy Policy URL: `.../privacy.html`
   - Support URL: `.../support.html`
   - Terms: `.../terms.html`
   - KVKK: `.../kvkk.html`
   - Advertising & Consent: `.../ads.html`
5. Oluşan GitHub Pages URL'sini ChatGPT'ye gönderin; uygulamanın legal ekranlarına ve iOS release ayarlarına bağlanacaktır.

## app-ads.txt — önemli
`app-ads.txt.template` bilerek gerçek `app-ads.txt` değildir. Glow Lasso AdMob kaydı oluşturulup doğru publisher ID doğrulandıktan sonra satırdaki `pub-XXXXXXXXXXXXXXXX` değiştirilmelidir.

Ayrıca AdMob için `app-ads.txt` geliştirici web sitesinin **domain kökünde** bulunmalıdır (`https://example.com/app-ads.txt`). Eğer GitHub Pages adresiniz `username.github.io/glow-lasso-legal/` şeklindeyse proje klasöründeki dosya domain root sayılmaz. Bu durumda `app-ads.txt` dosyasını `username.github.io` kök sitesine veya kullandığınız özel domainin köküne koyun.

## Kaynak eşleşmesi
Privacy/KVKK/Terms/Advertising metinleri mevcut GLOW LASSO uygulamasındaki `LegalStrings` içeriğinden alınmıştır. Veri sorumlusu `Serhat DAĞ`, iletişim `serhatdagapps@gmail.com` olarak sabittir. Site 30 dili destekler ve Arapça/Urduca için RTL uygular.

## Teknik not
Site çerez bannerı, analytics scripti veya üçüncü taraf font/CDN eklemez. Statik HTML/CSS/JS'dir.
