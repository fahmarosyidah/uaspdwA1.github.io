function simpanHargaMenu(menuId) {
    var hargaMenu = document.getElementById('harga-menu' + menuId).value;
    // Lakukan proses penyimpanan harga menu ke database atau penyimpanan lainnya
    alert('Harga menu berhasil disimpan!');
  }
  
  var questions = [
    {
      nama: "John Doe",
      email: "johndoe@example.com",
      subjek: "Pertanyaan tentang menu",
      pertanyaan: "Apakah ada menu vegetarian di cafe ini?",
      balasan: ""
    },
    {
      nama: "Jane Smith",
      email: "janesmith@example.com",
      subjek: "Reservasi meja",
      pertanyaan: "Apakah bisa melakukan reservasi meja untuk 6 orang pada tanggal 15 Juni?",
      balasan: ""
    }
    // Tambahkan data pertanyaan lainnya di sini
  ];
  
  function tampilkanPertanyaan() {
    var container = document.getElementById("daftar-pertanyaan");
  
    questions.forEach(function (question, index) {
      var questionItem = document.createElement("div");
      questionItem.classList.add("pertanyaan-item");
  
      var nama = document.createElement("span");
      nama.innerHTML = "Nama: " + question.nama + "<br>";
  
      var email = document.createElement("span");
      email.innerHTML = "Email: " + question.email + "<br>";
  
      var subjek = document.createElement("span");
      subjek.innerHTML = "Subjek: " + question.subjek + "<br>";
  
      var pertanyaan = document.createElement("p");
      pertanyaan.innerHTML = "Pertanyaan: " + question.pertanyaan + "<br>";
  
      var balasanLabel = document.createElement("span");
      balasanLabel.innerHTML = "Balasan: ";
  
      var balasanInput = document.createElement("input");
      balasanInput.type = "text";
      balasanInput.placeholder = "Tulis balasan...";
      balasanInput.id = "balasan-" + index;
  
      var balasButton = document.createElement("button");
      balasButton.innerText = "Balas";
      balasButton.onclick = function () {
        var balasan = document.getElementById("balasan-" + index).value;
        questions[index].balasan = balasan;
        // Tambahkan kode untuk mengirim balasan ke pelanggan (misalnya, melalui email)
  
        // Tampilkan balasan di elemen pertanyaan
        var balasanElement = document.createElement("p");
        balasanElement.innerHTML = "<strong>Admin:</strong> " + balasan;
        questionItem.appendChild(balasanElement);
  
        // Sembunyikan input dan tombol balas setelah membalas pertanyaan
        balasanLabel.style.display = "none";
        balasanInput.style.display = "none";
        balasButton.style.display = "none";
      };
  
      questionItem.appendChild(nama);
      questionItem.appendChild(email);
      questionItem.appendChild(subjek);
      questionItem.appendChild(pertanyaan);
      questionItem.appendChild(balasanLabel);
      questionItem.appendChild(balasanInput);
      questionItem.appendChild(balasButton);
  
      // Tampilkan balasan jika sudah ada
      if (question.balasan !== "") {
        var balasanElement = document.createElement("p");
        balasanElement.innerHTML = "<strong>Admin:</strong> " + question.balasan;
        questionItem.appendChild(balasanElement);
      }
  
      container.appendChild(questionItem);
    });
  }
  