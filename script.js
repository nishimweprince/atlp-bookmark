// Variables

document.getElementById("form-container").addEventListener('submit', saveBookmark);
// document.getElementById('modalbtn').addEventListener('click', showModal);

let modalWrap = null;

function showModal(){

modalWrap = document.createElement('div');

modalWrap.innerHTML = `

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

`;

document.body.append(modalWrap);

let modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
modal.show();
}




function saveBookmark(e){
    e.preventDefault();

    let sitename = document.getElementById("sitename").value;
    let siteurl = "https://www." + document.getElementById("siteurl").value;
    let category = document.getElementById("category").value;

    if (category == "Please choose a category"){
        window.prompt("Please select a category!");
    }

    let bookmark = {
        name: sitename,
        url: siteurl,
        category: category
    }

    console.log(bookmark);

    let bookmarks = [];

    if (localStorage.getItem('bookmarks') == null) {

        bookmarks.push(bookmark);
    
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    }

    else {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    location.reload()
    console.log(bookmark);

}

function getBookmarks(){
    let bookmarks = [];
    
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookmarksSocials = document.getElementById("socialmedia-list");
    let bookmarksEducation = document.getElementById("education-list");
    let bookmarksEntertainment = document.getElementById("entertainment-list");
    let bookmarksOther = document.getElementById("other-list");

    console.log(bookmarks);

    
    for (let i=0; i<bookmarks?.length; i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;
        let category = bookmarks[i].category;

        let li = document.createElement('li');
        let link = document.createElement('a');
        li.className = "list-group-item";
        link.append(name);
        link.href = url;
        li.append(link);
        

        if (category == "Social Media"){
            bookmarksSocials.append(li);
        }
        else if(category == "Education"){
            bookmarksEducation.append(li);
        }
        else if (category == "Entertainment"){
            bookmarksEntertainment.append(li);
        }
        else if (category == "Other"){
            bookmarksOther.append(li);
        }
        else{
            break;
        }

        console.log(li);
    }


}