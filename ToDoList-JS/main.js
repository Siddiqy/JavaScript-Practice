document.addEventListener("DOMContentLoaded", () => {
    
    let input = document.querySelector('.toDoInput');
    let add = document.querySelector('.toDoAdd');
    let listContainer = document.querySelector('.toDOList'); 

    add.addEventListener('click', function() {
        var listItem = document.createElement('p');
        listItem.classList.add('list-style');
        listItem.innerText = input.value;
        input.value = "";
        listContainer.appendChild(listItem);

        listItem.addEventListener('click', () => {
            listItem.style.textDecoration = 'line-through';
        })

        listItem.addEventListener('dblclick', () => {
            listContainer.removeChild(listItem);
        })
    });
});