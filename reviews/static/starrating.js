
// csrf token

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
                }
            }
        }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

// Stars 
const ratingStars  = [...document.querySelectorAll(".stars span")];

function executeRating(stars) {
  const starClassActive = "active";
  const starClassInactive = "inactive";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      fetch_star_num(i);
      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
      
    };
  });
}
executeRating(ratingStars);

// Drag and drop Files 
const dropArea = document.getElementById('drop-area');
const fileList = document.getElementById('fileList');
const fileInput = document.getElementById("id_profile_image");

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();    
}

dropArea.addEventListener('dragover', () => {
    dropArea.classList.add('highlight');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('highlight');
});

dropArea.addEventListener('drop', () => {
    dropArea.classList.remove('highlight');
});

dropArea.addEventListener('drop', handleDrop);
fileInput.addEventListener('change', (e) =>{
    handleFiles(e.target.files);
});

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = e.dataTransfer.files;
    handleFiles(files);
}

function handleFiles(files) {
    fileList.innerHTML = '';
    [...files].forEach(file => {
        const item = document.createElement('div');
        item.textContent = `📄 ${file.name}`;
        fileList.appendChild(item);
    });
}


function fetch_star_num(stars){
  fetch("/", {
    method: 'POST',
    credentials: 'same-origin',
    headers:{
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRFToken': csrftoken,
  },
    body: JSON.stringify({'star_num':stars}) //JavaScript object of data to POST
  })
  .then(response => {
        return response.json() //Convert response to JSON
  })
  .then(data => {
    console.log(data)
  //Perform actions with the response data from the view
  })
}
