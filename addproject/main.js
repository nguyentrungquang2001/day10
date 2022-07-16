let ojb = [];
function local() {
  let img1 = document.getElementById("1").value;
  let img2 = document.getElementById("2").value;
  let name = document.getElementById("3").value;
  let des = document.getElementById("4").value;
  let dess = document.getElementById("5").value;
  let add = document.getElementById("6").value;
  ojb.push({ img1, img2, name, des, dess, add });
  let a = localStorage.setItem("stor", JSON.stringify(ojb));
  let b = JSON.parse(localStorage.getItem("stor"));
  console.log(b[0]);
  var html = b.map((item) => {
    return `<tr>
      <th scope="row">${item.img1}</th>
      <td>${item.img2} </td>
      <td>${item.name}</td>
      <td>${item.des}</td>
      <td>${item.dess}</td>
      <td>${item.add}</td>
    </tr> `;
  });
  document.getElementById("tbody").innerHTML = html;
}
