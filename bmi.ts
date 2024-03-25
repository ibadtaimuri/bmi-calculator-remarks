// BMI Calculator - Metric System
// BMI = weight (kg) / [height (m)]² {Metric System}
// BMI = 703 × weight (lbs) / [height (in)]² {Imperial System}
console.log(`BMI Calculator`)
console.log(`Note: Weight in Kg and Height in meters`)
let weight: number = 110;
let height: number = 1.85;
console.log(`Height(m): ${height}`)
console.log(`Weight(Kg): ${weight}`)
console.log(`BMI: ${bmiCalculator(height, weight)}`)
console.log(bmiRemarks(bmiCalculator(height, weight)))

function bmiCalculator(height, weight) {
    let bmi;
    if (height > 0.5 && height <= 2.5) {
        bmi = weight / (height * height)
        return bmi
    } else {
        return `Invalid Height`
    }
}

function bmiRemarks(bmi) {
    if (bmi < 18.5) {
        return `Remarks: Risk of nutritional deficiencies and other health issues`
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Remarks: Healthy, Try to maintain it`
    } else if (bmi >= 25 && bmi <= 29.9) {
        return `Remarks: May have an increased risk of health conditions such as heart disease and diabetes`
    } else if (bmi >= 30) {
        if (bmi >= 30 && bmi <= 34.9) {
            return `Remarks: CLASS I - Moerate Obesity`
        } else if (bmi >= 35 && bmi <= 39.9) {
            return `Remarks: CLASS II - Severe Obesity`
        } else if (bmi >= 40) {
            return `Remarks: CLASS III - Very Severe Obesity`
        }
    }
}