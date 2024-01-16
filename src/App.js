import { useState } from "react";

// Fatura adresini güncellemeyi mümkün kılın (diğer özellikleri silmeden)

//Fatura adresini güncellemek için, kullanıcı tarafından yapılan değişiklikleri takip etmek ve bu değişiklikleri setCard fonksiyonu aracılığıyla state içinde güncellemek gerekiyor.
//setCard fonksiyonunu çağırarak fatura adresindeki değişiklikleri takip etmek için gerekli olan ek kodları ekleyelim:
export default function CardDetails() {
  const [card, setCard] = useState({
    number: "4242424242424242",
    expiration: "04/26",
    cvc: "424",
    country: "Türkiye",
    postalCode: "42424"
  });

  const handleCountryChange = (e) => {
    // Fonksiyon, bir olay (event) nesnesi olan 'e' parametresini alır.
    const newCountry = e.target.value;

    //ulke degisirse posta kodunu sifirlamak icin
    const newPostalCode = newCountry !== card.country ? "" : card.postalCode;

    // 'prevCard' değişkeni, 'setCard' fonksiyonunu kullanarak
    // önceki 'card' durumunu (state) kopyalar.
    setCard((prevCard) => ({
      ...prevCard, // mevcut nese uzerinde calismak referanslari etkileyecegi icin Mevcut kart durumunu kopyalayalim
      country: newCountry, // 'country' özelliğini, olayın tetiklendiği öğenin değeriyle günceller
      postalCode: newPostalCode
    }));
  };

  const handlePostalCodeChange = (e) => {
    setCard((prevCard) => ({
      ...prevCard,
      postalCode: e.target.value
    }));
    // Postal kodu girildiğinde uyarıyı kapat
  };

  return (
    <div className="py-4 max-w-sm mx-auto">
      <fieldset>
        <legend className="block text-sm font-medium leading-6 text-gray-900">
          Kart Detayları
        </legend>
        <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
          <div
            type="text"
            className="px-2 relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          >
            {card.number}
          </div>
          <div className="flex -space-x-px">
            <div className="w-1/2 min-w-0 flex-1">
              <div
                type="text"
                className="px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              >
                {card.expiration}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div
                type="text"
                className="px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              >
                {card.cvc}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6 bg-white">
        <legend className="block text-sm font-medium leading-6 text-gray-900">
          Fatura adresi
        </legend>
        <div className="mt-2 -space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="country" className="sr-only">
              Ülke
            </label>
            <select
              id="country"
              name="country"
              className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
              defaultValue={card.country}
              onChange={handleCountryChange}
            >
              <option>İtalya</option>
              <option>Türkiye</option>
              <option>Meksika</option>
            </select>
          </div>
          <div>
            <label htmlFor="postal-code" className="sr-only">
              ZIP/Posta kodu
            </label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              className="px-2 relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="ZIP / Posta kodu"
              value={card.postalCode}
              onChange={handlePostalCodeChange}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
