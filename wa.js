function pd() {
  document.body.innerHTML = `
  <div class="card2" id="menu">
      <button class="menu" onclick="menu()">≡</button>
    </div>
    <div class="card3" id="menu1">
      <button class="menu" onclick="menu1()">x</button>
    </div>
    <div class="card1" id="menup">
      <button class="menu1" onclick="menuutama()">Halaman Utama</button>
    </div>
  <br>
  <br>
  <br>
  <br>
  <br>
          <div class="container">
          <div class="cardpf">
 <h2 class"judul">Profile Developer</h2>
          <img src="hadzz.png" class="icon">
          <p>
         Hai, kenalin aku hadzz ( Creator dari web ini😹 )
        </p>
        <br>
        <br>
        <h4>Medsos :</h4>
        <button class="tombolbiasa1" onclick="tt()">Tiktok</button>
        <button class="tombolbiasa1" onclick="ig()">Instagram</button>
        <button class="tombolbiasa1" onclick="cw()">Channel Wa</button>
        <button class="tombolbiasa1" onclick="kontak()">Kontak</button>
 </div>
  `;
}
function kontak() {
  alert("Mau ngapain mencet kontak😹");
}
function tt() {
  window.location.href = "https://vm.tiktok.com/ZSH3rNVV8Xadv-b1oba/";
}
function ig() {
  window.location.href = "https://www.instagram.com/hadz_xyz?igsh=MTBoa215ZjlvY2pweQ==";
}
function cw() {
  window.location.href = "https://whatsapp.com/channel/0029Vb5NPjpBA1esfYHPxF2r";
}
