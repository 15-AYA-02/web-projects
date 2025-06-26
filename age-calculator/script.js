function calculateAge() {
  const birthDate = document.getElementById("birth-date").value;
  const result = document.getElementById("result");

  if (!birthDate) {
    result.textContent = "Please select your birth date.";
    return;
  }

  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
}
