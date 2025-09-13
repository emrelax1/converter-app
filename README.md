# Dönüştürücü Uygulaması(Converter App)

### Genel Bakış

Dönüştürücü Uygulaması, ağırlık, sıcaklık, uzunluk ve hacim gibi çeşitli kategorilerde birim dönüşümleri gerçekleştiren web tabanlı bir uygulamadır. Kullanıcılar bir kategori seçebilir, bir değer girebilir, kaynak ve hedef birimleri seçebilir ve dönüştürülmüş sonucu anında görebilir. Uygulama, dinamik birim seçimi ve gerçek zamanlı dönüşüm özellikleriyle temiz, duyarlı bir kullanıcı arayüzüne sahiptir.

### Özellikler

- Birim Kategorileri: Aşağıdaki dönüşümleri destekler:
- Ağırlık (Kilogram, Gram, Pound)
- Sıcaklık (Kelvin, Celsius, Fahrenheit)
- Uzunluk (Metre, Santimetre, Feet, İnç)
- Hacim (Litre, Mililitre, Galon)

1. Dinamik Açılır Menüler: Seçilen kategoriye göre birim seçeneklerini otomatik olarak günceller ve giriş ile çıkış için aynı birimin seçilmesini engeller.
2. Gerçek Zamanlı Dönüşüm: Kullanıcılar yazarken veya birimleri değiştirirken değerleri dönüştürür.
3. Yer Değiştirme Fonksiyonu: Kaynak ve hedef birimlerin tek tıklamayla değiştirilmesini sağlar.
4. Negatif Değer Desteği: Sıcaklık dönüşümleri (Celsius ve Fahrenheit) için negatif değerleri destekler.
5. Duyarlı Tasarım: Farklı ekran boyutlarına, mobil cihazlar dahil, uyum sağlar.
6. Modern Kullanıcı Arayüzü: Degrade arka plan, yuvarlatılmış köşeler ve üzerine gelindiğinde efektlerle şık bir tasarıma sahiptir.

### Kullanılan Teknolojiler

- HTML: Web uygulamasının yapısı.
- CSS: Flexbox ve medya sorguları kullanılarak modern, duyarlı tasarım.
- JavaScript: Dinamik birim seçimi, dönüşüm hesaplamaları ve giriş yönetimi için mantık.

### Kurulum

1.  Depoyu klonlayın:git clone <depo-url>
2.  Proje klasörüne gidin:cd converter-app
3.  index.html dosyasını bir web tarayıcısında açın veya bir yerel sunucu kullanarak çalıştırın (örneğin, VS Code Live Server eklentisi ile).

### Kullanım

- Uygulamayı tarayıcıda açın.
- Açılır menüden bir dönüşüm kategorisi seçin (örneğin, Ağırlık Dönüşümü).
- Giriş alanına bir sayı girin.
- Dönüştürmek istediğiniz birimi ve hedef birimi seçin.
- Sonuç otomatik olarak sonuç alanında görüntülenecektir.
- Birimleri değiştirmek için takas simgesine tıklayın.

### Dosya Yapısı

index.html: Uygulamanın ana HTML yapısı.
style.css: Uygulamanın stil ve düzeni.
javascript.js: Dinamik birim seçimi ve diğer işlevsellikler için JavaScript kodu.
calculater.js: Dönüşüm hesaplamaları için JavaScript kodu.
exchange.png: Birim takası için kullanılan simge.

### Notlar

Dönüşüm çarpanları calculater.js dosyasında tanımlanmıştır. Yeni birim dönüşümleri eklemek için bu dosyayı güncelleyin.
Sıcaklık birimleri için negatif değer girişine izin verilir, diğer birimler için minimum değer 0'dır.
Aynı birimin giriş ve çıkış için seçilmesi engellenmiştir.

### Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya sorunları bildirin. Yeni özellik önerileri veya hata düzeltmeleri memnuniyetle karşılanır.
