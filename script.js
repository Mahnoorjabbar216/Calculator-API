function addNumbers() {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;

      // Validation check
    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        showModal("⚠️ Please enter valid numbers before proceeding.");
        return; // Stop execution
    }
      const soapRequest =
        `<?xml version="1.0" encoding="utf-8"?>
         <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
           <soap:Body>
             <Add xmlns="http://tempuri.org/">
               <intA>${num1}</intA>
               <intB>${num2}</intB>
             </Add>
           </soap:Body>
         </soap:Envelope>`;
      fetch("https://proxy.cors.sh/http://www.dneonline.com/calculator.asmx", {
        method: "POST",
        headers: {
            'x-cors-api-key': 'temp_e8a8b25b37067792c7cb2b809aabe2f3',
          "Content-Type": "text/xml; charset=utf-8",
          "SOAPAction": "http://tempuri.org/Add"
        },
        body: soapRequest
      })
      .then(res => res.text())
      .then(data => {
        // Extract result from SOAP XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const result = xmlDoc.getElementsByTagName("AddResult")[0].textContent;
        document.getElementById('result').innerText = "Result: " + result;
        document.getElementById('result').style.display = 'block';  // Show result div
      })
      .catch(err => {
        document.getElementById('result').innerText = "Error: " + err;
      });
    }

//subtract two numbers
function subtractNumbers() {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;

      // Validation check
    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        showModal("⚠️ Please enter valid numbers before proceeding.");
        return; // Stop execution
    }
      const soapRequest =
        `<?xml version="1.0" encoding="utf-8"?>
         <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
           <soap:Body>
             <Subtract xmlns="http://tempuri.org/">
               <intA>${num1}</intA>
               <intB>${num2}</intB>
             </Subtract>
           </soap:Body>
         </soap:Envelope>`;
      fetch("https://proxy.cors.sh/http://www.dneonline.com/calculator.asmx", {
        method: "POST",
        headers: {
            'x-cors-api-key': 'temp_e8a8b25b37067792c7cb2b809aabe2f3',
          "Content-Type": "text/xml; charset=utf-8",
          "SOAPAction": "http://tempuri.org/Subtract"
        },
        body: soapRequest
      })
      .then(res => res.text())
      .then(data => {
        // Extract result from SOAP XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const result = xmlDoc.getElementsByTagName("SubtractResult")[0].textContent;
        document.getElementById('result').innerText = "Result: " + result;
        document.getElementById('result').style.display = 'block';  // Show result div
      })
      .catch(err => {
        document.getElementById('result').innerText = "Error: " + err;
      });
    }

//mutiplying number
function multiplyNumbers() {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      // Validation check
    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        showModal("⚠️ Please enter valid numbers before proceeding.");
        return; // Stop execution
    }
      const soapRequest =
        `<?xml version="1.0" encoding="utf-8"?>
         <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
           <soap:Body>
             <Multiply xmlns="http://tempuri.org/">
               <intA>${num1}</intA>
               <intB>${num2}</intB>
             </Multiply>
           </soap:Body>
         </soap:Envelope>`;
      fetch("https://proxy.cors.sh/http://www.dneonline.com/calculator.asmx", {
        method: "POST",
        headers: {
            'x-cors-api-key': 'temp_e8a8b25b37067792c7cb2b809aabe2f3',
          "Content-Type": "text/xml; charset=utf-8",
          "SOAPAction": "http://tempuri.org/Multiply"
        },
        body: soapRequest
      })
      .then(res => res.text())
      .then(data => {
        // Extract result from SOAP XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const result = xmlDoc.getElementsByTagName("MultiplyResult")[0].textContent;
        document.getElementById('result').innerText = "Result: " + result;
        document.getElementById('result').style.display = 'block';  // Show result div
      })
      .catch(err => {
        document.getElementById('result').innerText = "Error: " + err;
      });
    }

//diving numbers
function divideNumbers() {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      // Validation check
    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        showModal("⚠️ Please enter valid numbers before proceeding.");
        return; // Stop execution
    }
      const soapRequest =
        `<?xml version="1.0" encoding="utf-8"?>
         <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
           <soap:Body>
             <Divide xmlns="http://tempuri.org/">
               <intA>${num1}</intA>
               <intB>${num2}</intB>
             </Divide>
           </soap:Body>
         </soap:Envelope>`;
      fetch("https://proxy.cors.sh/http://www.dneonline.com/calculator.asmx", {
        method: "POST",
        headers: {
            'x-cors-api-key': 'temp_e8a8b25b37067792c7cb2b809aabe2f3',
          "Content-Type": "text/xml; charset=utf-8",
          "SOAPAction": "http://tempuri.org/Divide"
        },
        body: soapRequest
      })
      .then(res => res.text())
      .then(data => {
        // Extract result from SOAP XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const result = xmlDoc.getElementsByTagName("DivideResult")[0].textContent;
        document.getElementById('result').innerText = "Result: " + result;
        document.getElementById('result').style.display = 'block';  // Show result div
      })
      .catch(err => {
        document.getElementById('result').innerText = "Error: " + err;
      });
    }

function showModal(message) {
    document.getElementById("modalMessage").innerText = message;
    document.getElementById("customModal").style.display = "block";
}

// Close modal when clicking "X"
document.getElementById("closeModal").onclick = function() {
    document.getElementById("customModal").style.display = "none";
};

// Close modal when clicking outside the box
window.onclick = function(event) {
    if (event.target === document.getElementById("customModal")) {
        document.getElementById("customModal").style.display = "none";
    }
};
