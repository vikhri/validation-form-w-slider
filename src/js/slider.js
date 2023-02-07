document.addEventListener("DOMContentLoaded", () => {
 
    let slider = document.getElementById("slider");
    let quantity = document.getElementById('quantity');
  
  noUiSlider.create(slider, {
    start: [40],
    step: 1,
    connect: 'lower',
    range: {
        'min': [0],
        'max': [100]
    },
    format: {
      to: (value) => {
        return value;
      },
      from: (value) => {
        return value;
      }
    }
  
  });
  
  
  slider.noUiSlider.on('update', () => {
    quantity.value = slider.noUiSlider.get();
  
  });
  
  quantity.addEventListener('input', (e) => {
    slider.noUiSlider.set(e.target.value);
  });
  
  });
   