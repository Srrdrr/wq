let Ism = prompt("Ismingizni kiriting");
let Chislo = prompt("Bironta harf kiriting");

if (Имя && Число) {
    if (Имя.toLowerCase().includes(Число.toLowerCase())) {
        alert(`Ismingizda '${Chislo}' harf mavjud.`);
    } else {
        alert(`Ismingizda ${Chislo} harf mavjud emas.`);
    }
}