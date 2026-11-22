class TourOrder {
    constructor(clientName, phone, travelDate, hasAgreement) {
        this.clientName = clientName;
        this.phone = phone;
        this.travelDate = travelDate;
        this.hasAgreement = hasAgreement;
        this.submittedAt = new Date().toLocaleString();
    }

    printFormatted() {
        console.group("%cНовая заявка на тур", "color: #8f0000; font-size: 14px; font-weight: bold;");
        console.log(`%cИмя клиента:%c ${this.clientName}`, "font-weight: bold; color: #ffffff;", "color: #ffffff;");
        console.log(`%cТелефон:%c ${this.phone}`, "font-weight: bold; color: #ffffff;", "color: #ffffff;");
        console.log(`%cДата вылета:%c ${this.travelDate}`, "font-weight: bold; color: #ffffff;", "color: #ffffff;");
        console.log(`%cСогласие на ОД:%c ${this.hasAgreement ? 'Получено' : 'Отклонено'}`, "font-weight: bold; color: #ffffff;", "colorgb(255, 255, 255)000;");
        console.log(`%cВремя отправки:%c ${this.submittedAt}`, "font-weight: bold; color: #777;", "color: #777;");
        console.groupEnd();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#tour-form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.querySelector("#client-name").value;
            const phone = document.querySelector("#client-phone").value;
            const date = document.querySelector("#travel-date").value;
            const agreement = document.querySelector("#agreement").checked;

            const newOrder = new TourOrder(name, phone, date, agreement);

            newOrder.printFormatted();

            alert("Заявка успешно отправлена");
            form.reset();
        });
    }
});