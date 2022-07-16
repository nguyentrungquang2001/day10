const api = "https://62cfbda11cc14f8c087c4451.mockapi.io/api/product";

fetch(api)
  .then((response) => response.json())
  .then((datas) => {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
      const valueI = e.target.value.toUpperCase();
      // console.log(valueI);
      let userSearch = datas.filter((value) => {
        // console.log(value.name.toUpperCase().includes(valueI));
        return value.name.toUpperCase().includes(valueI);
      });
      console.log(userSearch);

      var html = userSearch.map((data) => {
        return `<tr>
        <td>${b[i]}</td>
        <td>${b[i]}</td>
        <td>${b[i]}</td>
        <td>${b[i]}</td>
        <td>${b[i]}</td>
        <td>${b[i]}</td>
        
      </tr>`;
      });
      document.getElementById("tbody").innerHTML = html;
    });
  });
