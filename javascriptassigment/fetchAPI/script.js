const loader = document.getElementById('skeleton-loader');
const dataList = document.getElementById('data');
// ..............................................
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    setTimeout(function(){
      loader.style.display = "none"
      dataList.style.display = "flex"
   }, 1500)

    data.forEach(data => {
      const listItem = document.createElement('li');
      listItem.innerHTML = JSON.stringify(data);
      dataList.appendChild(listItem);

    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

