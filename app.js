const form = document.querySelector('#form1');
const input = document.querySelector('#input');
const list = document.querySelector('#list');


form.addEventListener('submit', function (e) {

    e.preventDefault(); // Prevent the default form submission behavior
    
    const container = document.createElement('div');
    container.classList.add('direction');
    container.classList.add('delete');

    const check = document.createElement('input');
    check.type = 'checkbox';

    check.addEventListener('change', function() {
        if (this.checked) {
            const container = this.parentElement;
            container.remove();
        }
    });

    const listName = input.value;
    const newLi = document.createElement('li');
    newLi.textContent = listName;

    container.appendChild(newLi);
    container.appendChild(check);

    list.appendChild(container);
    input.value = "";




});
