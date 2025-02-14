var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// script.js
document.getElementById('toggleButton').addEventListener('click', function() {
    var infoSection = document.getElementById('infoSection');
    if (infoSection.classList.contains('hidden')) {
        infoSection.classList.remove('hidden');
    } else {
        infoSection.classList.add('hidden');
    }
});
   // Theme Toggle
   function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.querySelector('.theme-toggle i').classList.toggle('fa-sun');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}



// Info Section Toggle
document.getElementById('toggleButton').addEventListener('click', function() {
    const infoSection = document.getElementById('infoSection');
    const chevron = this.querySelector('i');
    infoSection.classList.toggle('active');
    chevron.classList.toggle('fa-chevron-up');
});

// Load saved preferences
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        document.querySelector('.theme-toggle i').classList.add('fa-sun');
    }
    

   
 
});
 // دالة لحساب العمر
 function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // إذا كان عيد الميلاد لم يأتِ بعد هذا العام
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// تاريخ ميلادك (YYYY-MM-DD)
const birthdate = "2002-09-18";

// حساب العمر
const age = calculateAge(birthdate);

// عرض العمر داخل عنصر <b>
document.querySelector('b').textContent = age;
function openModal() {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = "./images/myphoto_1.jpeg";
  }
  
  // إغلاق المودال
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  
  // إغلاق المودال عند النقر خارج الصورة
  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      closeModal();
    }
  }
