const data={
    custom:
    [
        {
            title:"Enhancements and Features",
            image:"images/Enhancements and Features.png",
            desc:"Modern grooming, natural beauty. Jerin’s Parlour delivers expert, personalized beauty care with premium products.",
            tags:["React","Node.js","Firebase","MongoDB"],
            live:"https://app-review-285a6.web.app/",
            github:"https://github.com/ibrahimkholilullah-web/App-review-client",
            whatsapp:"https://wa.me/8801635712824"
        },
        {
            title:"Global Art History",
            image:"images/Global Art History.png",
            desc:"Explores artistic traditions across cultures, examining interconnected influences in historical and contemporary contexts.",
            tags:["React","Node.js","Firebase","MongoDB"],
            live:"https://national-history.firebaseapp.com/",
            github:"https://github.com/ibrahimkholilullah-web/global-Art-History",
            whatsapp:""
        },
        {
            title:"Travel World",
            image:"images/Travel World.png",
            desc:"Explore diverse destinations, cultural experiences, adventures, history, cuisine, and unforgettable memories.",
            tags:["Firebase","React.js"],
            live:"https://b10-a10-projects.web.app/",
            github:"https://github.com/ibrahimkholilullah-web/Trevel-World",
            whatsapp:""
        }
    ],

    wordpress:[
        {
            title:"Solution (Electric purse repair)",
            image:"images/Solution Electric purse repair.png",
            desc:"Ensured cross-browser compatibility and mobile responsiveness.",
            tags:["Smartphones","Elementor","Elementor pro", "Game Console"],
            live:"https://wi-fix.be/",
            github:"https://github.com/ibrahimkholilullah-web",
            whatsapp:"https://wa.me/8801635712824"
        },
        {
            title:"Horse training",
            image:"images/Horse training.png",
            desc:"Horse training and grooming. Fast and user-friendly WordPress publishing platform.",
            tags:["Custom Payment","CMS", "Elementor pro", "Figma convert"],
            live:"https://actofservicedocumentary.com/",
            github:"https://github.com/ibrahimkholilullah-web",
            whatsapp:"https://wa.me/8801635712824"
        },
        {
            title:"Travel blogs ",
            image:"images/travel blogs.png",
            desc:"At Hypnotic Vacations, we craft dream journeys that awaken your spirit and soothe your soul. Let the world hypnotize you.",
            tags:["WordPress","Elementor pro","Domain Set-Up"],
            live:"https://hypnoticvacations.com/",
            github:"https://github.com/ibrahimkholilullah-web",
            whatsapp:"https://wa.me/8801635712824"
        }
    ],

shopify:[
    {
        title:"Fashion Store",
        image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
        desc:"Premium Shopify ecommerce store focused on conversions.",
        tags:["Shopify","Liquid"],
        live:"#",
        github:"#",
        whatsapp:"#"
    },
    {
        title:"Single Product Store",
        image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        desc:"High converting Shopify single product experience.",
        tags:["CRO","Shopify"],
        live:"#",
        github:"",
        whatsapp:"#"
    },
    {
        title:"Dropshipping Store",
        image:"https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        desc:"Complete Shopify store setup with optimized shopping flow.",
        tags:["Apps","Marketing"],
        live:"#",
        github:"#",
        whatsapp:""
    }
]

};


const projects=document.getElementById("projects");

function loadProjects(type){
    projects.innerHTML="";
    data[type].forEach(item=>{
        projects.innerHTML+=`
        <div class="card">
        <div class="card-image">
        <img src="${item.image}">
        <div class="card-overlay">
        <h3>${item.title}</h3>
        <p>
        ${item.desc}
        </p>
        <div class="tags">
           ${item.tags.map(tag=>`<span>${tag}</span>`).join("")}
        </div>
        <div class="actions">
           ${item.live ? `<a href="${item.live}" target="_blank">Live</a>`:""}
           ${item.github ? `<a href="${item.github}" target="_blank">GitHub</a>`:""}
           ${item.whatsapp ? `<a href="${item.whatsapp}" target="_blank">WhatsApp</a>`:""}
        </div>
        </div>
        </div>
        </div>`;
});

}




document.querySelectorAll(".tab-btn").forEach(button=>{

    button.addEventListener("click",()=>{
    document.querySelectorAll(".tab-btn")
    .forEach(btn=>btn.classList.remove("active"));
    button.classList.add("active");
    loadProjects(button.dataset.type);

});
});

loadProjects("custom");


