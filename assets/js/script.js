// ----------- CREATE CHIP ------------- //
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inputField");
  const chipContainer = document.getElementById("chipContainer");
  const searchButton = document.getElementById("searchButton");

  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addChip();
    }
  });

  searchButton.addEventListener("click", function () {
    addChip();
  });

  function addChip() {
    const inputValue = inputField.value.trim();
    if (inputValue !== "") {
      createChip(inputValue);
      inputField.value = ""; // Clear the input field
    }
  }

  function createChip(value) {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.innerText = value;

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("closebtn");
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function () {
      chip.style.display = "none";
    };

    chip.appendChild(closeBtn);
    chipContainer.appendChild(chip);
  }
});
// ----------- END CREATE CHIP ------------- //

// ----------- SHOW HIDE PASSWORD ------------- //
$(document).ready(function () {
  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password i").addClass("bx-hide");
      $("#show_hide_password i").removeClass("bx-show");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password i").removeClass("bx-hide");
      $("#show_hide_password i").addClass("bx-show");
    }
  });
});

$(document).ready(function () {
  $("#show_hide_confirm_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_confirm_password input").attr("type") == "text") {
      $("#show_hide_confirm_password input").attr("type", "password");
      $("#show_hide_confirm_password i").addClass("bx-hide");
      $("#show_hide_confirm_password i").removeClass("bx-show");
    } else if (
      $("#show_hide_confirm_password input").attr("type") == "password"
    ) {
      $("#show_hide_confirm_password input").attr("type", "text");
      $("#show_hide_confirm_password i").removeClass("bx-hide");
      $("#show_hide_confirm_password i").addClass("bx-show");
    }
  });
});
// ----------- END SHOW HIDE PASSWORD ------------- //

// ----------- INPUT VERIFICATION ------------- //
function goBack() {
  // Your back button functionality here
  console.log("Back button clicked");
}

function moveToNext(current, nextFieldID) {
  if (current.value.length === current.maxLength) {
    const nextField = document.getElementById(nextFieldID);
    if (nextField) {
      nextField.focus();
    }
  }
}

function moveToBack(event, prevFieldID, currentFieldID) {
  if (event.key === "Backspace") {
    const currentField = document.getElementById(currentFieldID);
    if (currentField && currentField.value === "") {
      const prevField = document.getElementById(prevFieldID);
      if (prevField) {
        prevField.focus();
      }
    }
  }
}

function startCountdown(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0; // Reset timer if it reaches 0
    }
  }, 1000);
}

$(document).ready(function () {
  $("#modalInputCodeVerification").on("shown.bs.modal", function () {
    var countdownDuration = 10 * 60; // 10 minutes in seconds
    var display = document.querySelector("#countdown");
    startCountdown(countdownDuration, display);
  });
});

// ----------- END INPUT VERIFICATION ------------- //

// ----------- DATE PICKER ------------- //

$(document).ready(function () {
  $("#startDatePengiriman").datepicker({
    uiLibrary: "bootstrap4",
    icons: {
      rightIcon: '<img src="assets/images/icons/calendar-days.svg" />',
    },
  });

  $("#endDatePengiriman").datepicker({
    uiLibrary: "bootstrap4",
    icons: {
      rightIcon: '<img src="assets/images/icons/calendar-days.svg" />',
    },
  });
});

// ----------- END DATE PICKER ------------- //

// ----------- SELECT 2 ------------- //
$(".single-select").select2({
  theme: "bootstrap4",
  width: $(this).data("width")
    ? $(this).data("width")
    : $(this).hasClass("w-100")
    ? "100%"
    : "style",
  placeholder: $(this).data("placeholder"),
  allowClear: Boolean($(this).data("allow-clear")),
});
// ----------- END SELECT 2 ------------- //
