/* Brooke's Blissful Bites: menu data, drawings, cart (demo mode, no checkout yet) */

const ART = {
  logo: `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="49" fill="#8fadea"/><circle cx="50" cy="50" r="38" fill="#5e7fc6"/><circle cx="50" cy="50" r="38" fill="none" stroke="#c9d6f6" stroke-width="1"/><defs><path id="arc" d="M18 50a32 32 0 0 1 64 0"/></defs><text font-family="Cinzel,serif" font-size="8" letter-spacing="1.6" fill="#eef2ff"><textPath href="#arc" startOffset="50%" text-anchor="middle">PREMIUM QUALITY</textPath></text><text x="50" y="52" text-anchor="middle" font-family="Fraunces,serif" font-size="11" fill="#fff">Brooke's</text><text x="50" y="63" text-anchor="middle" font-family="Fraunces,serif" font-size="11" fill="#fff">Blissful</text><text x="50" y="74" text-anchor="middle" font-family="Fraunces,serif" font-size="11" fill="#fff">Bites</text><path d="M40 37q10-7 20 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>`,

  hero: `<svg viewBox="0 0 220 200" aria-hidden="true"><ellipse cx="110" cy="186" rx="80" ry="9" fill="#e4e2f7"/><path d="M48 150q62 18 124 0v22q-62 16-124 0z" fill="#b9c6ef"/><ellipse cx="110" cy="150" rx="62" ry="12" fill="#c9d3f4"/><path d="M42 118h136v26q-68 22-136 0z" fill="#fff" stroke="#d5d0f2" stroke-width="2"/><path d="M38 96h144q4 22-6 26-60 14-132 0-10-4-6-26z" fill="#c9c3ef"/><path d="M36 92q74-58 148 0q-74 16-148 0z" fill="#d8d3f6"/><circle cx="96" cy="58" r="13" fill="#5e74c4"/><circle cx="120" cy="54" r="15" fill="#4b5fa8"/><circle cx="108" cy="72" r="11" fill="#6f86d2"/><circle cx="117" cy="49" r="3" fill="#8ea2e2"/><path d="M130 40q18-20 36-8-14 16-36 8z" fill="#a8b8ee" stroke="#7f93d6" stroke-width="1.5"/><path d="M132 40q14-6 30-8" stroke="#7f93d6" stroke-width="1.5" fill="none"/><path d="M84 52q-14-22 6-30 6 16-6 30z" fill="#a8b8ee" stroke="#7f93d6" stroke-width="1.5"/></svg>`,

  cake: `<svg viewBox="0 0 160 130" aria-hidden="true"><ellipse cx="80" cy="116" rx="64" ry="9" fill="#fff"/><rect x="28" y="66" width="104" height="48" rx="9" fill="#cfcaf3"/><rect x="28" y="86" width="104" height="6" fill="#fff" opacity=".8"/><rect x="44" y="34" width="72" height="36" rx="9" fill="#ebe8fb"/><path d="M44 42q8 10 14 0t14 2 14-2 14 2 16-2v-4a8 8 0 0 0-8-6H52a8 8 0 0 0-8 8z" fill="#fff"/><circle cx="70" cy="28" r="7" fill="#4b5fa8"/><circle cx="84" cy="26" r="8" fill="#5e74c4"/><circle cx="95" cy="30" r="6" fill="#4b5fa8"/><path d="M72 20q8-12 18-6" stroke="#7f93d6" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,

  tiramisu: `<svg viewBox="0 0 160 130" aria-hidden="true"><rect x="22" y="40" width="116" height="74" rx="12" fill="#fff" stroke="#cfcaf3" stroke-width="3"/><rect x="28" y="84" width="104" height="24" rx="4" fill="#c49a73"/><rect x="28" y="70" width="104" height="14" fill="#f7efe2"/><rect x="28" y="60" width="104" height="10" fill="#c49a73"/><rect x="28" y="48" width="104" height="12" rx="3" fill="#f7efe2"/><rect x="28" y="44" width="104" height="7" rx="3" fill="#7a5541"/><g fill="#5a3d2e"><circle cx="44" cy="47" r="1.5"/><circle cx="62" cy="46" r="1.5"/><circle cx="82" cy="48" r="1.5"/><circle cx="100" cy="46" r="1.5"/><circle cx="118" cy="47" r="1.5"/></g></svg>`,

  cookies: `<svg viewBox="0 0 160 130" aria-hidden="true"><circle cx="102" cy="58" r="36" fill="#d8b183"/><circle cx="62" cy="76" r="40" fill="#e9c697"/><g fill="#6b4a3a"><rect x="44" y="60" width="9" height="8" rx="2" transform="rotate(14 48 64)"/><rect x="72" y="58" width="8" height="8" rx="2"/><rect x="58" y="84" width="9" height="8" rx="2" transform="rotate(-18 62 88)"/><rect x="82" y="92" width="8" height="7" rx="2"/><rect x="38" y="88" width="7" height="7" rx="2"/><rect x="112" y="40" width="8" height="7" rx="2"/><rect x="118" y="66" width="7" height="7" rx="2"/></g><path d="M34 70q6-10 16-12" stroke="#f6dcb6" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,

  cheesecake: `<svg viewBox="0 0 160 130" aria-hidden="true"><ellipse cx="80" cy="114" rx="66" ry="9" fill="#fff"/><path d="M26 66l104-26v56L26 110z" fill="#fbf4e6"/><path d="M26 98l104-14v12L26 110z" fill="#d9ae78"/><path d="M26 66l104-26 6 8L30 74z" fill="#7f93d6"/><path d="M40 70q4 10-2 14M66 64q5 9 0 13M96 56q4 10-1 14" stroke="#7f93d6" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="58" cy="58" r="6" fill="#4b5fa8"/><circle cx="88" cy="50" r="6" fill="#5e74c4"/><circle cx="114" cy="44" r="5" fill="#4b5fa8"/></svg>`,

  macarons: `<svg viewBox="0 0 160 130" aria-hidden="true"><ellipse cx="80" cy="118" rx="58" ry="7" fill="#fff"/><g><ellipse cx="80" cy="102" rx="46" ry="12" fill="#a9b9ee"/><rect x="38" y="88" width="84" height="10" rx="5" fill="#fff"/><ellipse cx="80" cy="86" rx="46" ry="12" fill="#b9c6f2"/></g><g><ellipse cx="80" cy="66" rx="40" ry="11" fill="#cfcaf3"/><rect x="44" y="53" width="72" height="9" rx="4.5" fill="#fff"/><ellipse cx="80" cy="52" rx="40" ry="11" fill="#dcd7f7"/></g><g><ellipse cx="80" cy="34" rx="32" ry="9" fill="#e7cfa7"/><rect x="51" y="23" width="58" height="8" rx="4" fill="#fff"/><ellipse cx="80" cy="22" rx="32" ry="9" fill="#efdcbc"/></g></svg>`,

  brownies: `<svg viewBox="0 0 160 130" aria-hidden="true"><ellipse cx="80" cy="116" rx="64" ry="8" fill="#fff"/><rect x="24" y="70" width="56" height="42" rx="6" fill="#6b4a3a"/><rect x="24" y="70" width="56" height="10" rx="5" fill="#80594a"/><rect x="82" y="70" width="56" height="42" rx="6" fill="#e2bf84"/><rect x="82" y="70" width="56" height="10" rx="5" fill="#ecd09f"/><g fill="#6b4a3a"><circle cx="98" cy="92" r="3"/><circle cx="118" cy="98" r="3"/><circle cx="126" cy="86" r="2.5"/></g><rect x="50" y="26" width="58" height="42" rx="6" fill="#5a3d30" transform="rotate(-6 79 47)"/><path d="M56 34l22-2M66 44l26-4M58 54l18-2" stroke="#7d5a49" stroke-width="2.5" stroke-linecap="round" transform="rotate(-6 79 47)"/></svg>`,

  muffins: `<svg viewBox="0 0 160 130" aria-hidden="true"><path d="M42 66h76l-10 50H52z" fill="#8fa6e3"/><path d="M54 66l4 50M68 66l2 50M82 66v50M96 66l-2 50M110 66l-4 50" stroke="#6f86d2" stroke-width="3"/><path d="M34 70q-6-46 46-48 52 2 46 48z" fill="#6b4a3a"/><g fill="#3e2a21"><rect x="56" y="40" width="9" height="8" rx="2"/><rect x="84" y="32" width="9" height="8" rx="2"/><rect x="98" y="50" width="8" height="8" rx="2"/><rect x="66" y="56" width="8" height="7" rx="2"/></g><path d="M48 46q8-14 22-16" stroke="#8a6656" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,

  bread: `<svg viewBox="0 0 160 130" aria-hidden="true"><ellipse cx="80" cy="114" rx="66" ry="9" fill="#fff"/><path d="M18 88q0-56 62-58 62 2 62 58 0 20-62 22-62-2-62-22z" fill="#d9a466"/><path d="M26 84q2-44 54-48 52 4 54 48" fill="#e8bb7f"/><path d="M48 52q22 14 16 46M80 42q20 18 10 58M110 54q-14 14-8 44" stroke="#f6e1bd" stroke-width="5" fill="none" stroke-linecap="round"/><g fill="#fff" opacity=".7"><circle cx="40" cy="70" r="1.6"/><circle cx="66" cy="62" r="1.6"/><circle cx="100" cy="70" r="1.6"/><circle cx="122" cy="80" r="1.6"/></g></svg>`
};

const MENU = [
  { id:"cake", name:"Layer Cakes", art:"cake", blurb:"Homemade layer cake for birthdays and every other reason. Tell Brooke the flavor and design in your order note.",
    sizes:[["2 layer",45],["3 layer",55]] },
  { id:"tiramisu", name:"Tiramisu", art:"tiramisu", blurb:"Espresso-soaked ladyfingers, mascarpone cream, cocoa on top.",
    sizes:[["Small",10],["Large",25]] },
  { id:"cookies", name:"Cookies", art:"cookies", blurb:"Soft, thick cookies sold by the dozen.",
    sizes:[["1 dozen",20]], flavors:["Chocolate Chip","Double Chocolate","Oatmeal Butterscotch","Raspberry Linzer","Blueberry Cream Cheese","Tiramisu"] },
  { id:"cheesecakes", name:"Cheesecakes", art:"cheesecake", blurb:"Creamy cheesecake on a buttery graham crust.",
    sizes:[["Mini (each)",3],["8 inch whole",30]] },
  { id:"macarons", name:"Macarons", art:"macarons", blurb:"French macarons, crisp outside and chewy in the middle.",
    sizes:[["Half dozen",20],["1 dozen",40]], flavors:["Biscoff","Lemon","Strawberry","Ube","Pistachio","Vanilla Bean","Dulce de Leche","Chocolate"] },
  { id:"brownies", name:"Brownies & Blondies", art:"brownies", blurb:"Fudgy brownies or chewy blondies.",
    sizes:[["Half dozen",10],["1 dozen",20]], flavors:["Brownies","Blondies","Half and half"] },
  { id:"muffins", name:"Muffins", art:"muffins", blurb:"Big bakery-style muffins by the dozen.",
    sizes:[["1 dozen",25]], flavors:["Double Chocolate Chunk","Coffee Cake","Chocolate Peanut Butter","Blueberry Cheesecake"] },
  { id:"bread", name:"Fresh Bread", art:"bread", blurb:"Sourdough loaves, or regular artisan bread if sourdough isn't your thing.",
    sizes:[["Artisan loaf",8],["Sourdough loaf",10]], flavors:["Chocolate Chip","Rosemary","Garlic Parmesan","Jalapeño Cheddar"] }
];

/* logo + drawings */
document.querySelectorAll("[data-art]").forEach(el => { el.innerHTML = ART[el.dataset.art] || ""; });

/* ---------- cart ---------- */
const KEY = "bbb-cart";
let cart = [];
try { cart = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { cart = []; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} };
const money = n => "$" + (Number.isInteger(n) ? n : n.toFixed(2));

function drawCart(){
  const count = cart.reduce((s,l)=>s+l.qty,0);
  document.querySelectorAll("[data-count]").forEach(b=>b.textContent=count);
  const box = document.querySelector(".lines");
  if(!box) return;
  if(!cart.length){ box.innerHTML = `<p class="empty">Your box is empty. Pick something sweet.</p>`; }
  else box.innerHTML = cart.map((l,i)=>`
    <div class="line">
      <b>${l.name}</b><span class="lp">${money(l.price*l.qty)}</span>
      <small>${l.size}${l.flavor?" · "+l.flavor:""}</small>
      <div class="qty"><button data-q="${i}" data-d="-1" aria-label="One less">−</button><span>${l.qty}</span><button data-q="${i}" data-d="1" aria-label="One more">+</button></div>
    </div>`).join("");
  const tot = document.querySelector("[data-total]");
  if(tot) tot.textContent = money(cart.reduce((s,l)=>s+l.price*l.qty,0));
}
function addLine(item){
  const same = cart.find(l=>l.name===item.name&&l.size===item.size&&l.flavor===item.flavor);
  same ? same.qty++ : cart.push({...item, qty:1});
  save(); drawCart();
}
document.addEventListener("click", e=>{
  const q = e.target.closest("[data-q]");
  if(q){ const l = cart[+q.dataset.q]; l.qty += +q.dataset.d; if(l.qty<1) cart.splice(+q.dataset.q,1); save(); drawCart(); }
  if(e.target.closest("[data-open-cart]")) document.body.classList.add("cart-open");
  if(e.target.closest("[data-close-cart]")) document.body.classList.remove("cart-open");
});
document.addEventListener("keydown", e=>{ if(e.key==="Escape") document.body.classList.remove("cart-open"); });

/* ---------- shop grid ---------- */
const grid = document.querySelector(".products");
if(grid){
  grid.innerHTML = MENU.map(p=>`
    <article class="prod" id="${p.id}">
      <div class="pic">${ART[p.art]}</div>
      <div>
        <h3>${p.name}</h3>
        <p class="desc">${p.blurb}</p>
        ${p.sizes.length>1?`<p class="opt-label">Size</p><div class="sizes">${p.sizes.map((s,i)=>`<label><input type="radio" name="${p.id}-size" value="${i}" ${i===0?"checked":""}><span>${s[0]}</span></label>`).join("")}</div>`:`<p class="opt-label">${p.sizes[0][0]}</p>`}
        ${p.flavors?`<p class="opt-label">Flavor</p><select aria-label="${p.name} flavor">${p.flavors.map(f=>`<option>${f}</option>`).join("")}</select>`:""}
        <div class="buy"><span class="price">${money(p.sizes[0][1])}</span><button class="add" data-add="${p.id}">Add to box</button></div>
      </div>
    </article>`).join("");

  grid.addEventListener("change", e=>{
    const card = e.target.closest(".prod"); const p = MENU.find(m=>m.id===card.id);
    const i = +(card.querySelector("input:checked")?.value || 0);
    card.querySelector(".price").textContent = money(p.sizes[i][1]);
  });
  grid.addEventListener("click", e=>{
    const b = e.target.closest("[data-add]"); if(!b) return;
    const card = b.closest(".prod"); const p = MENU.find(m=>m.id===card.id);
    const i = +(card.querySelector("input:checked")?.value || 0);
    addLine({ name:p.name, size:p.sizes[i][0], price:p.sizes[i][1], flavor:card.querySelector("select")?.value || "" });
    b.textContent = "Added"; b.classList.add("done");
    setTimeout(()=>{ b.textContent = "Add to box"; b.classList.remove("done"); }, 1200);
  });
}
drawCart();
