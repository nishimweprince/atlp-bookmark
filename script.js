// Variables

document.getElementById("form-container").addEventListener('submit', getBookmarks);



function saveBookmark(e){

    let sitename = document.getElementById("sitename").value;
    let siteurl = document.getElementById("siteurl").value;
    let category = document.getElementById("category").value;

    let bookmark = {
        name: sitename,
        url: siteurl,
        category: category
    }

    console.log(bookmark);

    if (localStorage.getItem('bookmarks') == null) {

        let bookmarks = [];

        bookmarks.push(bookmark);
    
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    }

    else {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    console.log(category);

}

function getBookmarks(){
    let bookmarks = [];
    
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookmarksSocials = document.getElementById("socialmedia-list");
    let bookmarksEducation = document.getElementById("education-list");
    let bookmarksEntertainment = document.getElementById("entertainment-list");
    let bookmarksOther = document.getElementById("other-list");

    console.log(bookmarks);

    
    for (let i=0; i<bookmarks.length; i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;
        let category = bookmarks[i].category;

        let li = document.createElement('li');
        li.className = "list-group-item";
        li.innerHTML = name;

        if (category == "Social Media"){
            bookmarksSocials.append(name);
        }
        else if(category == "Education"){
            bookmarksEducation.append(name);
        }
        else if (category == "Entertainment"){
            bookmarksEntertainment.append(name);
        }
        else if (category == "Other"){
            bookmarksOther.append(name);
        }
        else{
            break;
        }
    }


}