const api = "https://62cfbda11cc14f8c087c4451.mockapi.io/api/list";
fetch(api)
  .then((response) => response.json())
  .then((datas) => {
    var html = datas.map((data) => {
      console.log(data.id);
      return `<a href="./product/product.html?id="${data.id}""
      ><button class="btn btn-primary" id="btn">${data.name}</button></a
      >`;
    });
    document.getElementById("list").innerHTML = html;
  });
