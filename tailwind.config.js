module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'soldier': "url('https://desque.sfo3.cdn.digitaloceanspaces.com/districtsecurityforce/DistrictSecurityForce_Wallpaper-1024x576.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
