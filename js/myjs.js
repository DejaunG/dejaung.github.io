const button = document.querySelector('.btn--delete');

let modal;
let backdrop;

button.addEventListener('click', showmodalHandler);

function showmodalHandler() {
    if (modal) {
        return;
    }
    modal = document.createElement('div');
    modal.className = 'modal';

    const modalText = document.createElement('p');
    modalText.textContent = 'Are you sure you want to delete?';

    const modalDeleteButton = document.createElement('button');
    modalDeleteButton.textContent = 'Cancel';
    modalDeleteButton.className = 'btn btn--alt';
    modalDeleteButton.addEventListener('click', closeModalHandler);

    const modalConfirmButton = document.createElement('button');
    modalConfirmButton.textContent = 'Confirm Delete';
    modalConfirmButton.className = 'btn btn--delete';
    modalConfirmButton.addEventListener('click', confirmmodalHandler);

    modal.append(modalText);
    modal.append(modalDeleteButton);
    modal.append(modalConfirmButton);

    document.body.append(modal);

    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    backdrop.addEventListener('click', closeModalHandler);
    document.body.append(backdrop);
}

function closeModalHandler() {
    modal.remove();
    backdrop.remove();
    modal = null;
    backdrop = null;
}

function confirmmodalHandler() {
    // Handle the deletion logic.
    const card = document.querySelector('.card');
    card.remove();

    closeModalHandler();
}
