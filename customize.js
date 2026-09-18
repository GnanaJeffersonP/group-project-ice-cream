let state = {
    vessel: { name: 'Waffle Cone', price: 40, emoji: '🧇' },
    scoops: {},
    toppings: []
};

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

function selectOption(element, group) {
    const parent = element.parentElement;
    parent.querySelectorAll('.option-card').forEach(el => {
        el.classList.remove('selected');
    });
    element.classList.add('selected');

    const radio = element.querySelector('input');
    radio.checked = true;

    let emojiSpan = element.querySelector('.emoji');
    let emoji = emojiSpan ? emojiSpan.innerText : '🧇';

    state.vessel = { name: radio.value, price: parseInt(radio.dataset.price), emoji: emoji };
    calculateTotal();
}

function updateScoop(flavor, price, change, emoji) {
    let current = state.scoops[flavor] ? state.scoops[flavor].count : 0;
    let totalScoops = Object.values(state.scoops).reduce((sum, s) => sum + s.count, 0);

    if (change > 0 && totalScoops >= 3) {
        alert("Maximum 3 scoops allowed per creation!");
        return;
    }

    current += change;
    if (current < 0) current = 0;

    let elementId = 'scoop-' + flavor.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
    let el = document.getElementById(elementId);
    if (el) {
        el.innerText = current;
    }

    if (current > 0) {
        state.scoops[flavor] = { count: current, price: price, emoji: emoji };
    } else {
        delete state.scoops[flavor];
    }
    calculateTotal();
}

function toggleTopping(element) {
    const checkbox = element.querySelector('input');
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        element.classList.add('selected');
    } else {
        element.classList.remove('selected');
    }
    calculateTotal();
}

function calculateTotal() {
    let subtotal = state.vessel.price;

    let scoopListHTML = '';
    let totalScoopsCount = 0;
    let visualStackHTML = state.vessel.emoji;

    for (let [flavor, data] of Object.entries(state.scoops)) {
        subtotal += data.count * data.price;
        totalScoopsCount += data.count;
        scoopListHTML += `<li style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>${data.count}x ${flavor}</span><strong style="color:#db2777;">₹${data.count * data.price}</strong></li>`;
        
        for(let i=0; i<data.count; i++) {
            visualStackHTML += data.emoji;
        }
    }

    if (totalScoopsCount === 0) {
        scoopListHTML = '<li style="color:#aaa; font-style:italic;">No scoops selected yet</li>';
    }

    let progressPercent = (totalScoopsCount / 3) * 100;
    let progressBar = document.getElementById('scoop-progress');
    let counterText = document.getElementById('scoop-counter-text');
    if(progressBar) progressBar.style.width = progressPercent + '%';
    if(counterText) counterText.innerText = totalScoopsCount + ' / 3 Scoops';

    state.toppings = [];
    let toppingListHTML = '';
    document.querySelectorAll('#toppings-grid input:checked').forEach(cb => {
        let price = parseInt(cb.dataset.price);
        let name = cb.value;
        state.toppings.push({ name, price });
        subtotal += price;
        toppingListHTML += `<li style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>${name}</span><strong style="color:#db2777;">₹${price}</strong></li>`;
    });
    if (state.toppings.length === 0) {
        toppingListHTML = '<li style="color:#aaa; font-style:italic;">No toppings added</li>';
    }

    document.getElementById('visual-stack').innerText = visualStackHTML;
    document.getElementById('summary-vessel').innerText = `${state.vessel.name} (₹${state.vessel.price})`;
    document.getElementById('summary-scoops').innerHTML = scoopListHTML;
    document.getElementById('summary-toppings').innerHTML = toppingListHTML;
    
    let totalPriceEl = document.getElementById('total-price');
    totalPriceEl.innerText = `₹${subtotal}`;
    totalPriceEl.classList.add('pulse-animation');
    setTimeout(() => totalPriceEl.classList.remove('pulse-animation'), 300);
}

function addToCart() {
    let totalScoopsCount = Object.values(state.scoops).reduce((sum, s) => sum + s.count, 0);
    if (totalScoopsCount === 0) {
        alert("Please select at least 1 scoop for your custom ice cream!");
        return;
    }

    let subtotal = state.vessel.price;
    for (let data of Object.values(state.scoops)) {
        subtotal += data.count * data.price;
    }
    state.toppings.forEach(t => subtotal += t.price);

    let customItem = {
        id: 'custom-' + Date.now(),
        name: 'Custom Ice Cream (' + state.vessel.name + ')',
        vessel: state.vessel,
        scoops: state.scoops,
        toppings: state.toppings,
        price: subtotal,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('scoopCart')) || [];
    cart.push(customItem);
    localStorage.setItem('scoopCart', JSON.stringify(cart));

    document.getElementById('successModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}