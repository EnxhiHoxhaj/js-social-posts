const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// selezioniamo il nostro contenitore dal DOM

let feedSocial = document.getElementById("container");

// ciclo sul nuovo array per estrarre tutti i valori

posts.forEach((singlePost) => {
    // console.log(post.author);
    feedSocial.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${singlePost.author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singlePost.author.name}</div>
                    <div class="post-meta__time">${singlePost.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singlePost.content}</div>
        <div class="post__image">
            <img src="${singlePost.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${singlePost.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="${singlePost.id}" class="js-likes-counter">${singlePost.likes}</b> persone
                </div>
            </div> 
        </div>   
    
    </div>`;
    
});



// seleziono i div dove aggiungere click 
let likeButton = document.querySelectorAll(".like-button");
let contatori =document.querySelectorAll(".js-likes-counter");
// aggiungere un click
for(let i = 0; i < likeButton.length; i++) {
    let bottone = likeButton [i];
    bottone.addEventListener("click", 
        function(e) {
            e.preventDefault();
            bottone.classList.add("like-button--liked");
            // ricavare i contatori
            let contLikes = contatori[i]
            let numeLikes = parseInt(contLikes.innerHTML);
            // console.log(numeLikes);
            // incrementiamo il numero di likes
            numeLikes++;
            contLikes.innerHTML = numeLikes;
        }
    );
    
}
