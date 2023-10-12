function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = document.getElementById('binaryOutput');

    // Check if the input is a valid number
    if (isNaN(decimalInput)) {
        binaryOutput.textContent = 'Invalid input. Please enter a valid number.';
        return;
    }

    // Function to convert decimal to binary
    function decimalToBinary(decimal) {
        return (decimal >>> 0).toString(2);
    }

    // Get the binary equivalent
    const binaryValue = decimalToBinary(parseInt(decimalInput));

    binaryOutput.textContent = `Binary Equivalent: ${binaryValue}`;
}
