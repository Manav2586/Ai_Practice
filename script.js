$(function(){
  const services = [
    'General Pest Control','Termite Inspection','Termite Barrier Treatment','Rodent Control','Cockroach Control',
    'Ant Control','Spider Treatment','Bed Bug Removal','Flea & Tick Control','Wasp Nest Removal',
    'Mosquito Management','Commercial Pest Program','Pre-Construction Treatment','End of Lease Pest Control','Emergency Pest Response'
  ];

  const icon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"></path><circle cx="12" cy="12" r="4"></circle></svg>`;
  const rows = services.map((s)=>`
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <article class="service-card">
        <div class="service-icon">${icon}</div>
        <h3 class="h6 mb-0">${s}</h3>
      </article>
    </div>
  `).join('');
  $('#services .row').append(rows);

  $('.hero-slider').owlCarousel({
    items:1,loop:true,autoplay:true,autoplayTimeout:5000,dots:true,nav:false
  });

  $('.testimonial-slider').owlCarousel({
    loop:true,margin:20,autoplay:true,autoplayTimeout:4500,dots:true,
    responsive:{0:{items:1},768:{items:2},1200:{items:3}}
  });

  $('.brand-slider').owlCarousel({
    loop:true,margin:16,autoplay:true,autoplayTimeout:1,smartSpeed:3500,slideTransition:'linear',autoplayHoverPause:false,
    responsive:{0:{items:2},576:{items:3},768:{items:4},1200:{items:6}}
  });

  const counterObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        $(entry.target).find('.counter').each(function(){
          const $this=$(this); const target=+$this.data('count');
          $({countNum:0}).animate({countNum:target},{
            duration:1800,easing:'swing',
            step:function(){$this.text(Math.floor(this.countNum));},
            complete:function(){$this.text(target);}
          });
        });
        counterObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.4});

  const usp = document.querySelector('.usp-section');
  if(usp) counterObserver.observe(usp);
});
