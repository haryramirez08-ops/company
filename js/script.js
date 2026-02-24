// Scroll Animation
window.addEventListener("scroll", ()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

// Translation
const translations = {
id:{
nav_home:"Beranda",
nav_about:"Tentang",
nav_services:"Layanan",
nav_contact:"Kontak",
hero_title:"Pertanian Berkelanjutan untuk Masa Depan",
hero_sub:"Membangun Ekosistem Hijau & Produktif",
about_title:"Tentang Kami",
about_text:"PT PROJECT EKOSISTEM SRIDADI bergerak di bidang pertanian dan perkebunan berkelanjutan dengan fokus pada inovasi, kualitas, dan kelestarian lingkungan.",
services_title:"Layanan Kami",
contact_title:"Hubungi Kami"
},
jp:{
nav_home:"ホーム",
nav_about:"会社概要",
nav_services:"サービス",
nav_contact:"お問い合わせ",
hero_title:"持続可能な農業の未来へ",
hero_sub:"グリーンで生産的なエコシステムを構築",
about_title:"私たちについて",
about_text:"PT PROJECT EKOSISTEM SRIDADIは持続可能な農業とプランテーション分野で事業を展開しています。",
services_title:"私たちのサービス",
contact_title:"お問い合わせ"
}
};

function setLanguage(lang){
document.querySelectorAll("[data-id]").forEach(el=>{
el.textContent = translations[lang][el.getAttribute("data-id")];
});
}
const video = document.getElementById("heroVideo");
const button = document.getElementById("soundToggle");

button.addEventListener("click", ()=>{
video.muted = !video.muted;

if(video.muted){
button.textContent = "🔇";
}else{
button.textContent = "🔊";
}
});