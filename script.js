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

}

function getBookmarks(e){
    e.preventDefault();
    let bookmarks = localStorage.getItem('bookmarks');

    console.log(bookmarks);
}