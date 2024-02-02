// script.js

function goToTeacherSignUp() {
  window.location.href = "./signup_teacher.html";
}

function goToStudentSignUp() {
  window.location.href = "./signup_student.html";
}

function finishOnboarding() {
  // Perform any necessary tasks related to completing the onboarding process

  // Simulate a successful sign-up (replace this with your actual sign-up logic)
  const isSignUpSuccessful = true;

  if (isSignUpSuccessful) {
    // Redirect to the school portal dashboard after successful signup
    goToDashboard();
    return; // Add this line to exit the function after redirection
  }

  // If sign-up is not successful, you may want to handle it accordingly

  // Optionally, prevent the automatic transition to the next step
  // If your app has a logic for tracking completed onboarding steps, you can use that logic here
  // For now, we'll just prevent the automatic transition
  // Comment or remove the following line if you want the next step to be displayed
  return false;
}

function nextStep() {
  // Add logic for navigating to the next step
  const activeStep = document.querySelector(".onboarding-step.active");
  const nextStep = activeStep.nextElementSibling;

  if (nextStep) {
    activeStep.classList.remove("active");
    nextStep.classList.add("active");
  }
}

function prevStep() {
  // Add logic for navigating to the previous step
  const activeStep = document.querySelector(".onboarding-step.active");
  const prevStep = activeStep.previousElementSibling;

  if (prevStep) {
    activeStep.classList.remove("active");
    prevStep.classList.add("active");
  }
}

function submitStudentSignUp(event) {
  // Perform student sign-up logic here

  // Simulate a successful sign-up (replace this with your actual sign-up logic)
  const isSignUpSuccessful = true;

  if (isSignUpSuccessful) {
    // Redirect to the school portal dashboard after successful signup
    goToDashboard();
  }

  // Prevent the form from submitting (remove this line if you want the form to submit)
  event.preventDefault();
}

function submitTeacherSignUp(event) {
  // Perform teacher sign-up logic here

  // Simulate a successful sign-up (replace this with your actual sign-up logic)
  const isSignUpSuccessful = true;

  if (isSignUpSuccessful) {
    // Redirect to the school portal dashboard after successful signup
    goToDashboard();
  }

  // Prevent the form from submitting (remove this line if you want the form to submit)
  event.preventDefault();
}

function goToDashboard() {
  window.location.href = "./dashboard.html";
}
