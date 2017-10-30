var cakedayMinDate = new Date();
cakedayMinDate.setDate(cakedayMinDate.getDate() + 1);
var cakedayMaxDate = new Date();
cakedayMaxDate.setDate(cakedayMinDate.getDate() + 60);

var picker = new Pikaday({
    field: document.getElementById("order-date"),
    firstDay: 0,
    minDate: cakedayMinDate,
    maxDate: cakedayMaxDate
});