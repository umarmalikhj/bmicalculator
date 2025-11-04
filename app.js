document.getElementById("calc").addEventListener("click", function () {
    const height = parseFloat(document.getElementById("heightInFeet").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!weight || !height) {
        alert("Enter Both Height And Weight");
        return;
    };

    const result = calculateBMI(weight, height);
    const desc = bmiCategory(result);

    alert("Your BMI Is: " + result);
    alert(desc.Category + "\n" + desc.Status);

});

function calculateBMI(weight, heightInFeet) {
    const heightInMeters = heightInFeet * 0.3048;
    const bmi = weight / (heightInMeters ** 2);
    return bmi.toFixed(2);
};

function bmiCategory(bmi) {
    let bmiDesc;
    if (bmi >= 40) {
        bmiDesc = {
            Category: "Morbidly Obese (Class III)",
            Status: "Severe Risk | Needs Medical Attention"
        }
        return bmiDesc;
    }

    else if (bmi >= 35 && bmi <= 39.9) {
        bmiDesc = {
            Category: "Catergory: Obese (Class II)",
            Status: "Health Status: High Risk of Chronic Diseases"
        }
        return bmiDesc;
    }

    else if (bmi >= 30 && bmi <= 34.9) {
        bmiDesc = {
            Category: "Catergory: Obese (Class I)",
            Status: "Health Status: Increased Risk of Health Issues"
        }
        return bmiDesc;
    }

    else if (bmi >= 25 && bmi <= 29.2) {
        bmiDesc = {
            Category: "Catergory: Overweight",
            Status: "Health Status: Slightly Above Healthy Range"
        }
        return bmiDesc;
    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiDesc = {
            Category: "Catergory: Normal Weight",
            Status: "Health Status: Healthy, Ideal Range"
        }
        return bmiDesc;
    }

    else if (bmi <= 18.5) {
        bmiDesc = {
            Category: "Catergory: Underweight",
            Status: "Health Status: May Indicate Malnutrition or Weakness"
        }
        return bmiDesc;
    }
}