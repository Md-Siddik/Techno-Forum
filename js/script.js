function allPost(){
    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    .then(allPost => allPost.json())
    .then(post => seePost(post.posts))
}

allPost();

const cards = document.getElementById('discuss-cards');
let markAsRead = 0;
const readCount = document.getElementById('readCount');
const markRead = document.getElementById('markAsRead');

function checkActive(post) {
    if (post.isActive === true) {
        return 'badge-success';
    }
    else {
        return 'badge-error'
    }
}

function seePost(posts) {
    for (post of posts) {
        const title = post.title;
        const view = post.view_count;
        const items = document.createElement('div');
        items.innerHTML = `
        <div id="${post.id}" class="border-2 rounded-3xl flex gap-8 p-8 bg-[#f2f2ff]">
            <div class="indicator">
                <div class="grid w-28 h-28 bg-base-300 relative">
                    <span class="indicator-item badge ${checkActive(post)} absolute top-1 right-1"></span>
                    <img class="rounded-3xl" src="${post.image}" alt="">
                </div>
            </div>
            <div>
                <div class="w-[550px] border-b-[3px] border-dashed border-gray-400">
                    <div class="flex gap-4">
                        <p># ${post.category}</p>
                        <p>Author : ${post.author.name}</p>
                    </div>
                    <h1 class="text-xl font-bold py-3">${title}</h1>
                    <p class="pb-4">${post.description}</p>
                </div>
                <div class="flex justify-between pt-6">
                    <div class="flex gap-6">
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <span>${post.comment_count}</span>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>${view}</span>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>${post.posted_time} min</span>
                        </div>
                    </div>
                    <div>
                        <img src="images/mail.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        `;
        cards.appendChild(items);
        const clickedCard = document.getElementById(post.id);

        clickedCard.addEventListener('click', function () {
            markAsRead = markAsRead + 1;
            clickedCard.classList.add('border-gray-400');
            readCount.innerText = markAsRead;
            console.log(clickedCard.id);
            const readRecord = document.createElement('div');
            readRecord.innerHTML = `
                <div class="flex bg-white p-4 rounded-2xl mb-4">
                    <div>
                        <p class="font-bold">${title}</p>
                    </div>
                    <div class="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>${view}</span>
                    </div>
                </div>
            `
            markRead.appendChild(readRecord);
        })
    }
}

function allLatestPost(latestPost){
    for(latest of latestPost){

    }
}