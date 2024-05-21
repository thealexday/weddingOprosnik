const friendsBlock = document.querySelector('.form__friends-block');
const timingBlock = document.querySelector('.form__timing-block');
const photoBlock = document.querySelector('.form__photo-block');
const locationBlock = document.querySelector('.form__location-block');
const dressCodeBlock = document.querySelector('.form__dress-code-block');
const detailsBlock = document.querySelector('.form__details-block');
const wishesBlock = document.querySelector('.form__wishes-block');
const organizatorBlock = document.querySelector('.form__organizator-block');
const photoFormBlock = document.querySelector('.form__photo-form-block');
const weddingFormBlock = document.querySelector('.form__wedding-form-block')
const addBlockButton = document.querySelector('.form__add-block');

console.log(timingBlock)
console.log(photoBlock)
console.log(document.querySelector('.photo_block_needed'))
console.log(document.querySelector('.photo_block_not_needed'))


document.querySelector('.friends_block_needed').addEventListener('click', () => {
    friendsBlock.classList.add('visible')
})

document.querySelector('.friends_block_not_needed').addEventListener('click', () => {
    friendsBlock.classList.remove('visible')
})

document.querySelector('.timing_block_needed').addEventListener('click', () => {
    timingBlock.classList.add('visible')
})

document.querySelector('.timing_block_not_needed').addEventListener('click', () => {
    timingBlock.classList.remove('visible')
})
// фото блок
document.querySelector('.photo_block_needed').addEventListener('click', () => {
    photoBlock.classList.add('visible')
})

document.querySelector('.photo_block_not_needed').addEventListener('click', () => {
    photoBlock.classList.remove('visible')
})
// локация:
document.querySelector('.location_block_needed').addEventListener('click', () => {
    locationBlock.classList.add('visible')
})

document.querySelector('.location_block_not_needed').addEventListener('click', () => {
    locationBlock.classList.remove('visible')
})
// дресс-код:
document.querySelector('.dress-code_block_needed').addEventListener('click', () => {
    dressCodeBlock.classList.add('visible')
})

document.querySelector('.dress-code_block_not_needed').addEventListener('click', () => {
    dressCodeBlock.classList.remove('visible')
})
// детали:
document.querySelector('.details_block_needed').addEventListener('click', () => {
    detailsBlock.classList.add('visible')
})

document.querySelector('.details_block_not_needed').addEventListener('click', () => {
    detailsBlock.classList.remove('visible')
})

// пожелания:
document.querySelector('.wishes_block_needed').addEventListener('click', () => {
    wishesBlock.classList.add('visible')
})

document.querySelector('.wishes_block_not_needed').addEventListener('click', () => {
    wishesBlock.classList.remove('visible')
})
// организатор:
document.querySelector('.organizator_block_needed').addEventListener('click', () => {
    organizatorBlock.classList.add('visible')
})

document.querySelector('.organizator_block_not_needed').addEventListener('click', () => {
    organizatorBlock.classList.remove('visible')
})

// фото-форма:
document.querySelector('.photo-form_block_needed').addEventListener('click', () => {
    photoFormBlock.classList.add('visible')
})

document.querySelector('.photo-form_block_not_needed').addEventListener('click', () => {
    photoFormBlock.classList.remove('visible')
})


// форма:
document.querySelector('.wedding-form_block_needed').addEventListener('click', () => {
    weddingFormBlock.classList.add('visible')
})

document.querySelector('.wedding-form_block_not_needed').addEventListener('click', () => {
    weddingFormBlock.classList.remove('visible')
})

// кнопка очистить форму

document.querySelector('.button-reset').addEventListener('click', event => {
    document.querySelectorAll('.visible').forEach(el => {
        el.classList.remove('visible')
    })
})


//Кнопка добавить блок
let buttonId = 0;
let buttonAddBlock = null;


addBlockButton.addEventListener('click', (event) => {
    event.preventDefault()

    const addBlockBox = document.createElement('div')

    const title = document.createElement('h3');
    title.textContent = 'Название заголовка блока';
    title.classList.add('form__subtitle')

    const inputEl = document.createElement('input');
    inputEl.setAttribute('placeholder', 'Напишите сюда заголовок')
    inputEl.setAttribute('name', 'Заголовок доп блока')
    inputEl.classList.add('form__input-text')

    const pEl = document.createElement('h3')
    pEl.textContent = 'Ниже напишите описание Вашего блока'
    pEl.classList.add('form__subtitle')

    const textareaEl = document.createElement('textarea')
    textareaEl.setAttribute('placeholder', 'здесь пишем текст, который должен быть под заголовком');
    textareaEl.setAttribute('cols', '30');
    textareaEl.setAttribute('rows', '10')
    textareaEl.classList.add('form__textarea')

    addBlockButton.before(addBlockBox)
    addBlockBox.prepend(title)
    title.after(inputEl)
    inputEl.after(pEl)
    pEl.after(textareaEl)
})




