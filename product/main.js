const api = "https://62cfbda11cc14f8c087c4451.mockapi.io/api/product";
fetch(api)
  .then((response) => response.json())
  .then((datas) => {
    var html = datas.map((data) => {
      return ` <div class="col-2" style="width: 19%">
      <div class="card" >
        <img
          src="${data.img}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <div class="start"><i class="ph-star"></i> ${data.start}</div>
          <p class="price">${data.price} đ</p>
          <p class="card-text">
            ${data.des}
          </p>
          <div class="btn-add">
                <a href="#" class="btn btn-primary" onclick="addToCart()">Add to Cart</a
                ><a href="./information/index.html" class="btn btn-primary">Order Now</a>
              </div>
        </div>
      </div>
    </div>`;
    });
    document.getElementById("row").innerHTML = html;
  });

function addToCart() {
  alert("thêm vao cart thành công");
}
