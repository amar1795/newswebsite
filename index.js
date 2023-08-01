console.log('hello');

const source='bbc-news';
const apikey='#';

let newsid = document.getElementById('newsid');
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml = "";
        articles.forEach(function(element,index) {
            newshtml += ` <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    <b>breaking news ${index+1}:</b>${element['title']}
                    </button>
                    </p>
                    <div class="collapse" id="collapse${index}">
                    <div class="card card-body">
                    ${element["content"]} <a href="${element['url']}" target="_blank">read more</a>
                    </div>
                    </div>
                    </div>`;
                    
        });
        newsid.innerHTML=newshtml;
    }
    else {
        console.log('some error has occured');
    }
}

xhr.send();





