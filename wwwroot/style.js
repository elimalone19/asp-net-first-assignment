function calculate() {
    let assignments = document.getElementById('assignments').value;
    let groupProjects = document.getElementById('groupProjects').value;
    let quizzes = document.getElementById('quizzes').value;
    let exams = document.getElementById('exams').value;
    let intex = document.getElementById('intex').value;

    // calculate grade (percent)

    let result = ((Number(assignments) / 100) * 1000) + ((Number(groupProjects) / 100) * 200)
        + ((Number(quizzes) / 100) * 200) + ((Number(exams) / 100) * 400) + ((Number(intex) / 100) * 200)

    let grade = (result / 2000) * 100

    document.getElementById('percent').innerHTML = String(grade) + '%'

    // calculate grade (letter)

    if (grade >= 93) {
        document.getElementById('grade').innerHTML = 'A'
    } else if (grade < 93 && grade >= 90) {
        document.getElementById('grade').innerHTML = 'A-'
    } else if (grade < 90 && grade >= 87) {
        document.getElementById('grade').innerHTML = 'B+'
    } else if (grade < 87 && grade >= 83) {
        document.getElementById('grade').innerHTML = 'B'
    } else if (grade < 83 && grade >= 80) {
        document.getElementById('grade').innerHTML = 'B-'
    } else if (grade < 80 && grade >= 77) {
        document.getElementById('grade').innerHTML = 'C+'
    } else if (grade < 77 && grade >= 73) {
        document.getElementById('grade').innerHTML = 'C'
    } else if (grade < 73 && grade >= 70) {
        document.getElementById('grade').innerHTML = 'C-'
    } else if (grade < 70 && grade >= 67) {
        document.getElementById('grade').innerHTML = 'D+'
    } else if (grade < 67 && grade >= 63) {
        document.getElementById('grade').innerHTML = 'D'
    } else if (grade < 63 && grade >= 60) {
        document.getElementById('grade').innerHTML = 'D-'
    } else {
        document.getElementById('grade').innerHTML = 'E'
    }
}