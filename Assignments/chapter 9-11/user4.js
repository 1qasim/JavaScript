var fuelQty = prompt("Enter how much fuel in your car");
if (fuelQty <= 0.25) {
    alert("Please refill the fuel in your car");
}
else if (fuelQty > 0.25) {
    alert("No need to refill");
}