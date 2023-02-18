export {};

const modalOverlay = document.querySelector(".overlay") as HTMLDivElement;
const modalWindow = document.querySelector(".modal_window") as HTMLDivElement;
const modalCloseBtn = document.querySelector(".close_modal") as HTMLSpanElement;
const rulesBtn = document.querySelector(".rules_btn") as HTMLButtonElement;

const openModal = () => {
    console.log("CLOCKED");
    modalOverlay.classList.remove("hidden");
    modalWindow.classList.remove("hidden");
};
const closeModal = () => {
    modalOverlay.classList.add("hidden");
    modalWindow.classList.add("hidden");
};

rulesBtn.addEventListener("click", openModal);

modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) closeModal();
});
