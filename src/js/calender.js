//sunday to saturday : 0 ~ 6
const today = new Date();
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//해당 달의 1번째 요일
let firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

const getlastDay = function () {
  if (today.getFullYear() % 4 === 0) {
    return leapYear[today.getMonth()];
  } else {
    return notLeapYear[today.getMonth()];
  }
};

//해당 달의 마지막 일수
let lastDay = getlastDay();

function setCalender(firstday, lastDay) {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const todayfocus = today.getDate();

  // const todayFocus = year + "-" + month + "-" + today.getDate();

  document.querySelector(".calender_header").innerHTML =
    year + "년 " + month + "월";

  let num = firstday + 1;
  let calHtml = "<tr>";

  while (firstday > 0) {
    calHtml += "<td class=clearfix>&nbsp</td>";
    firstday--;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (num % 7 === 0) {
      calHtml += `<td><time datetime =${
        year + "-" + month + "-" + i
      }>${i}</time></td></tr>`;
      num++;
    } else {
      if (num % 7 !== 1) {
        calHtml += `<td><time datetime=${
          year + "-" + month + "-" + i
        }>${i}</time></td>`;
        num++;
      } else {
        calHtml += `<tr><td><time datetime=${
          year + "-" + month + "-" + i
        }>${i}</time></td>`;
        num++;
      }
    }
  }

  document.querySelector(".calender_tbody").innerHTML = calHtml;
  document.querySelectorAll("time")[todayfocus - 1].style.color = "blue";
  // function event() {}
}

setCalender(firstDay, lastDay);
