document.addEventListener("DOMContentLoaded", () => {
    
    let submit = document.querySelector('.submit-btn');
    let books = document.querySelector('.bookList');

    submit.addEventListener('click', () => {
        
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let isbn = document.querySelector('#isbn').value;
        let price = document.querySelector('#price').value;

        let html = "";
        html += '<td>' + title + '</td>';
        html += '<td>' + author +'</td>';
        html += '<td>' + isbn + '</td>';
        html += '<td>' + price + '</td>';

        const bookInfo = document.createElement('tr');
        bookInfo.classList.add('list-style');
        bookInfo.innerHTML = html;

        this.title.value = " ";
        this.author.value = " ";
        this.isbn.value = " ";
        this.price.value = " ";

        books.appendChild(bookInfo);

        bookInfo.addEventListener('dblclick', () => {
            books.removeChild(bookInfo);
        });
    });
    
});