const api = "https://62cfbda11cc14f8c087c4451.mockapi.io/api/product";
fetch(api)
  .then((response) => response.json())
  .then((datas) => {
    var html = datas.map((data) => {
      return ` `;
    });
    document.getElementById("row").innerHTML = html;
  });
