document.addEventListener("DOMContentLoaded", () => {

    let bng = document.querySelector('#bangla');
    let eng = document.querySelector('#english');
    let math = document.querySelector('#math');
    let scn = document.querySelector('#science');
    let sclgy = document.querySelector('#sociology');
    let relgn = document.querySelector('#religion');

    let submit = document.querySelector('#submit');
    let reset = document.querySelector('#reset');

    let gradeBng = document.querySelector('#grade-bng');
    let gpaBng = document.querySelector('#gpa-bng');
    let gradeEng = document.querySelector('#grade-eng');
    let gpaEng = document.querySelector('#gpa-eng');
    let gradeMath = document.querySelector('#grade-math');
    let gpaMath = document.querySelector('#gpa-math');
    let gradeScn = document.querySelector('#grade-science');
    let gpaScn = document.querySelector('#gpa-science');
    let gradeSclgy = document.querySelector('#grade-sociology');
    let gpaSclgy = document.querySelector('#gpa-sociology');
    let gradeRelgn = document.querySelector('#grade-religion');
    let gpaRelgn = document.querySelector('#gpa-religion');

    let totalGrade = document.querySelector('#total-grade');
    let totalGpa = document.querySelector('#total-gpa');

    class gradingMarks {
        constructor(bng, eng, math, scn, sclgy, relgn) {
    
            //Condition for Bangla
            if((bng <= 100) && (bng >= 80)) {
                gradeBng.append("A+");
                gpaBng.append("5.00");
            }
            else if((bng <= 79) && (bng >= 75)) {
                gradeBng.append("A");
                gpaBng.append("4.75");
            }
            else if((bng <= 74) && (bng >= 70)) {
                gradeBng.append("A-");
                gpaBng.append("4.50");
            }
            else if((bng <= 69) && (bng >= 65)) {
                gradeBng.append("B+");
                gpaBng.append("4.25");
            }
            else if((bng <= 64) && (bng >= 60)) {
                gradeBng.append("B");
                gpaBng.append("4.00");
            }
            else if((bng <= 59) && (bng >= 55)) {
                gradeBng.append("B-");
                gpaBng.append("3.75");
            }
            else if((bng <= 54) && (bng >= 50)) {
                gradeBng.append("C+");
                gpaBng.append("3.50");
            }
            else if((bng <= 49) && (bng >= 45)) {
                gradeBng.append("C");
                gpaBng.append("3.25");
            }
            else if((bng <= 44) && (bng >= 40)) {
                gradeBng.append("C-");
                gpaBng.append("3.00");
            }
            else if((bng <= 44) && (bng >= 33)) {
                gradeBng.append("D");
                gpaBng.append("2.50");
            }
            else {
                gradeBng.append("FAIL");
                gpaBng.append("FAIL");
            }

            //Condition for English
            if((eng <= 100) && (eng >= 80)) {
                gradeEng.append("A+");
                gpaEng.append("5.00");
            }
            else if((eng <= 79) && (eng >= 75)) {
                gradeEng.append("A");
                gpaEng.append("4.75");
            }
            else if((eng <= 74) && (eng >= 70)) {
                gradeEng.append("A-");
                gpaEng.append("4.50");
            }
            else if((eng <= 69) && (eng >= 65)) {
                gradeEng.append("B+");
                gpaEng.append("4.25");
            }
            else if((eng <= 64) && (eng >= 60)) {
                gradeEng.append("B");
                gpaEng.append("4.00");
            }
            else if((eng <= 59) && (eng >= 55)) {
                gradeEng.append("B-");
                gpaEng.append("3.75");
            }
            else if((eng <= 54) && (eng >= 50)) {
                gradeEng.append("C+");
                gpaEng.append("3.50");
            }
            else if((eng <= 49) && (eng >= 45)) {
                gradeEng.append("C");
                gpaEng.append("3.25");
            }
            else if((eng <= 44) && (eng >= 40)) {
                gradeEng.append("C-");
                gpaEng.append("3.00");
            }
            else if((eng <= 44) && (eng >= 33)) {
                gradeEng.append("D");
                gpaEng.append("2.50");
            }
            else {
                gradeEng.append("FAIL");
                gpaEng.append("FAIL");
            }

            //Condition for Math
            if((math <= 100) && (math >= 80)) {
                gradeMath.append("A+");
                gpaMath.append("5.00");
            }
            else if((math <= 79) && (math >= 75)) {
                gradeMath.append("A");
                gpaMath.append("4.75");
            }
            else if((math <= 74) && (math >= 70)) {
                gradeMath.append("A-");
                gpaMath.append("4.50");
            }
            else if((math <= 69) && (math >= 65)) {
                gradeMath.append("B+");
                gpaMath.append("4.25");
            }
            else if((math <= 64) && (math >= 60)) {
                gradeMath.append("B");
                gpaMath.append("4.00");
            }
            else if((math <= 59) && (math >= 55)) {
                gradeMath.append("B-");
                gpaMath.append("3.75");
            }
            else if((math <= 54) && (math >= 50)) {
                gradeMath.append("C+");
                gpaMath.append("3.50");
            }
            else if((math <= 49) && (math >= 45)) {
                gradeMath.append("C");
                gpaMath.append("3.25");
            }
            else if((math <= 44) && (math >= 40)) {
                gradeMath.append("C-");
                gpaMath.append("3.00");
            }
            else if((math <= 44) && (math >= 33)) {
                gradeMath.append("D");
                gpaMath.append("2.50");
            }
            else {
                gradeMath.append("FAIL");
                gpaMath.append("FAIL");
            }

            //Condition for Science
            if((scn <= 100) && (scn >= 80)) {
                gradeScn.append("A+");
                gpaScn.append("5.00");
            }
            else if((scn <= 79) && (scn >= 75)) {
                gradeScn.append("A");
                gpaScn.append("4.75");
            }
            else if((scn <= 74) && (scn >= 70)) {
                gradeScn.append("A-");
                gpaScn.append("4.50");
            }
            else if((scn <= 69) && (scn >= 65)) {
                gradeScn.append("B+");
                gpaScn.append("4.25");
            }
            else if((scn <= 64) && (scn >= 60)) {
                gradeScn.append("B");
                gpaScn.append("4.00");
            }
            else if((scn <= 59) && (scn >= 55)) {
                gradeScn.append("B-");
                gpaScn.append("3.75");
            }
            else if((scn <= 54) && (scn >= 50)) {
                gradeScn.append("C+");
                gpaScn.append("3.50");
            }
            else if((scn <= 49) && (scn >= 45)) {
                gradeScn.append("C");
                gpaScn.append("3.25");
            }
            else if((scn <= 44) && (scn >= 40)) {
                gradeScn.append("C-");
                gpaScn.append("3.00");
            }
            else if((scn <= 44) && (scn >= 33)) {
                gradeScn.append("D");
                gpaScn.append("2.50");
            }
            else {
                gradeScn.append("FAIL");
                gpaScn.append("FAIL");
            }

            //Condition for Sociology
            if((sclgy <= 100) && (sclgy >= 80)) {
                gradeSclgy.append("A+");
                gpaSclgy.append("5.00");
            }
            else if((sclgy <= 79) && (sclgy >= 75)) {
                gradeSclgy.append("A");
                gpaSclgy.append("4.75");
            }
            else if((sclgy <= 74) && (sclgy >= 70)) {
                gradeSclgy.append("A-");
                gpaSclgy.append("4.50");
            }
            else if((sclgy <= 69) && (sclgy >= 65)) {
                gradeSclgy.append("B+");
                gpaSclgy.append("4.25");
            }
            else if((sclgy <= 64) && (sclgy >= 60)) {
                gradeSclgy.append("B");
                gpaSclgy.append("4.00");
            }
            else if((sclgy <= 59) && (sclgy >= 55)) {
                gradeSclgy.append("B-");
                gpaSclgy.append("3.75");
            }
            else if((sclgy <= 54) && (sclgy >= 50)) {
                gradeSclgy.append("C+");
                gpaSclgy.append("3.50");
            }
            else if((sclgy <= 49) && (sclgy >= 45)) {
                gradeSclgy.append("C");
                gpaSclgy.append("3.25");
            }
            else if((sclgy <= 44) && (sclgy >= 40)) {
                gradeSclgy.append("C-");
                gpaSclgy.append("3.00");
            }
            else if((sclgy <= 44) && (sclgy >= 33)) {
                gradeSclgy.append("D");
                gpaSclgy.append("2.50");
            }
            else {
                gradeSclgy.append("FAIL");
                gpaSclgy.append("FAIL");
            }

            //Condition for Religion
            if((relgn <= 100) && (relgn >= 80)) {
                gradeRelgn.append("A+");
                gpaRelgn.append("5.00");
            }
            else if((relgn <= 79) && (relgn >= 75)) {
                gradeRelgn.append("A");
                gpaRelgn.append("4.75");
            }
            else if((relgn <= 74) && (relgn >= 70)) {
                gradeRelgn.append("A-");
                gpaRelgn.append("4.50");
            }
            else if((relgn <= 69) && (relgn >= 65)) {
                gradeRelgn.append("B+");
                gpaRelgn.append("4.25");
            }
            else if((relgn <= 64) && (relgn >= 60)) {
                gradeRelgn.append("B");
                gpaRelgn.append("4.00");
            }
            else if((relgn <= 59) && (relgn >= 55)) {
                gradeRelgn.append("B-");
                gpaRelgn.append("3.75");
            }
            else if((relgn <= 54) && (relgn >= 50)) {
                gradeRelgn.append("C+");
                gpaRelgn.append("3.50");
            }
            else if((relgn <= 49) && (relgn >= 45)) {
                gradeRelgn.append("C");
                gpaRelgn.append("3.25");
            }
            else if((relgn <= 44) && (relgn >= 40)) {
                gradeRelgn.append("C-");
                gpaRelgn.append("3.00");
            }
            else if((relgn <= 44) && (relgn >= 33)) {
                gradeRelgn.append("D");
                gpaRelgn.append("2.50");
            }
            else {
                gradeRelgn.append("FAIL");
                gpaRelgn.append("FAIL");
            }


            //Final GPA Calculation
            let finalMark = parseInt((bng + eng + math + scn + sclgy + relgn) / 6);

            //Condition for Final Mark
            if((finalMark <= 100) && (finalMark >= 80)) {
                totalGrade.append("A+");
                totalGpa.append("5.00");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 79) && (finalMark >= 75)) {
                totalGrade.append("A");
                totalGpa.append("4.75");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 74) && (finalMark >= 70)) {
                totalGrade.append("A-");
                totalGpa.append("4.50");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 69) && (finalMark >= 65)) {
                totalGrade.append("B+");
                totalGpa.append("4.25");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 64) && (finalMark >= 60)) {
                totalGrade.append("B");
                totalGpa.append("4.00");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 59) && (finalMark >= 55)) {
                totalGrade.append("B-");
                totalGpa.append("3.75");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 54) && (finalMark >= 50)) {
                gradeGrade.append("C+");
                totalGpa.append("3.50");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 49) && (finalMark >= 45)) {
                totalGrade.append("C");
                totalGpa.append("3.25");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 44) && (finalMark >= 40)) {
                totalGrade.append("C-");
                totalGpa.append("3.00");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else if((finalMark <= 44) && (finalMark >= 33)) {
                totalGrade.append("D");
                totalGpa.append("2.50");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
            else {
                totalGrade.append("FAIL");
                totalGpa.append("FAIL");
                totalGrade.classList.add('border-bottom');
                totalGpa.classList.add('border-bottom');
            }
        }
    }

    reset.addEventListener('click', () => {
        window.location.reload();
    });

    submit.addEventListener('click', () => {

            bng = +bng.value;
            eng = +eng.value;
            math = +math.value;
            scn = +scn.value;
            sclgy = +sclgy.value;
            relgn = +relgn.value;

        const marks = new gradingMarks(bng, eng, math, scn, sclgy, relgn);

    });
    
});