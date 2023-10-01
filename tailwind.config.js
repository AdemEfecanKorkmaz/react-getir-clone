/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',         /* Daha hızlı derlemeyi sağlıyor */
  darkMode : true,     /* Karanlık modu kapatıyor */
  content: [            /* Giriş ve çıkış css dosyalarını yazıyoruz */
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: theme => ({
          'brand-color' : '#4c3398',
          "header-hover-color" : "#5d3ebc",
          "secondary-color" : "#7849f7",
          "brand-yellow" : "#ffd300",
          "header-color" : "#dbdbff",
          "gray-background" : "#fafafa",
          "border-gray-color" : "#dfdee2",
          "custom-dark-gray" : "#838287",
          "section-title-color" : "#191919",
          "categories-item-border" : "#1919191a",
          "categories-item-text-darkgray" : "#3e3e3e",
          "cards-text-darkgray" : "#697488",
          "footer-socialmedia-icons-darkgray" : "#697488",
          "footer-border-bottom" : "#f3f0fe"
      }),

      backgroundImage: theme => ({
        "home-cards-section-bg" : 'url("https://cdn.getir.com/getirweb-images/common/illustration/doodle.png")'
      }),
    },
  },
  plugins: [],
}

