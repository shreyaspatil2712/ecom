  // Get menu elements
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('menu-close');

  // Toggle menu visibility
  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('-translate-x-full');
  });

  // Close menu on click of close button
  menuClose.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
  });


  let activeThumbnail = null; // Track the currently active thumbnail

    function changeImage(imageSrc, thumbnailElement) {
        const thumbnails = document.querySelectorAll('.thumbnail');

        // Remove active classes from all thumbnails
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove('border-orange-500', 'backdrop-blur-sm', 'bg-white/30');
            thumbnail.classList.add('border-transparent');
        });

        // If there is an active thumbnail, remove its active classes
        if (activeThumbnail) {
            activeThumbnail.classList.remove('border-orange-500', 'backdrop-blur-sm', 'bg-white/30');
            activeThumbnail.classList.add('border-transparent');
        }

        // Add active class to the clicked thumbnail
        thumbnailElement.classList.remove('border-transparent');
        thumbnailElement.classList.add('border-orange-500', 'backdrop-blur-sm', 'bg-white/30');
        
        // Update the active thumbnail reference
        activeThumbnail = thumbnailElement;

        // Change the main image with a smooth opacity transition
        const mainImage = document.getElementById('mainImage');
        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = imageSrc;
            mainImage.style.opacity = 1;
        }, 300); // Adjust delay for smooth transition
    }


    
    let quantity = 0;
    let price = 125.00; // Price of one item
    let totalPrice = 0;
    let cartCount = 0;
    
    const quantityElement = document.getElementById('quantity');
    const cartCountElement = document.getElementById('cartCount');
    const cartItemsElement = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const cartWindow = document.getElementById('cartWindow');
    const emptyCartMessage = document.getElementById('emptyCartMessage'); // Empty cart message
    const cartDetails = document.getElementById('cartDetails'); // Cart total and checkout button
    
    // Increase quantity
    document.getElementById('plusBtn').addEventListener('click', () => {
        quantity++;
        quantityElement.innerText = quantity;
    });
    
    // Decrease quantity
    document.getElementById('minusBtn').addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.innerText = quantity;
        }
    });
    
    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (quantity > 0) {
            cartCount += quantity;
            totalPrice += price * quantity;
            
            // Update cart count and total price
            updateCartDisplay();
    
            // Add the item to the cart window
            cartItemsElement.innerHTML = `
                <div class="flex items-center justify-between mb-4">
                    <img src="images\\image-product-1-thumbnail.jpg" alt="Shoe" class="w-12 h-12 rounded-md">
                    <div class="flex-1 ml-4">
                        <p class="font-medium text-gray-700">Fall Limited Edition Sneakers</p>
                        <p>$${price.toFixed(2)} x ${cartCount} <span class="font-bold">$${(price * cartCount).toFixed(2)}</span></p>
                    </div>
                    <!-- Delete Button -->
                    <button onclick="removeFromCart()">
                        <img src="images\\icon-delete.svg" alt="Delete Icon" class="w-5 h-5">
                    </button>
                </div>
            `;
            
            // Reset quantity to 0
            quantity = 0;
            quantityElement.innerText = quantity;
        }
    });
    
    // Function to update the cart display (count and price)
    function updateCartDisplay() {
        cartCountElement.innerText = cartCount;
        totalPriceElement.innerText = totalPrice.toFixed(2);
    
        // Show or hide the orange circle based on cart count
        if (cartCount > 0) {
            cartCountElement.classList.remove('hidden'); // Show orange circle
            emptyCartMessage.classList.add('hidden'); // Hide empty cart message
            cartDetails.classList.remove('hidden'); // Show total and checkout button
        } else {
            cartCountElement.classList.add('hidden');    // Hide orange circle
            emptyCartMessage.classList.remove('hidden'); // Show empty cart message
            cartDetails.classList.add('hidden'); // Hide total and checkout button
        }
    }
    
    // Remove item from cart
    function removeFromCart() {
        totalPrice = 0;
        cartCount = 0;
        cartItemsElement.innerHTML = '';
        updateCartDisplay(); // Update the cart display to reflect changes
    }
    
    // Toggle cart window visibility
    function toggleCart() {
        cartWindow.classList.toggle('hidden');
    }
    
    // Initial call to hide total and show "Your cart is empty" if the cart starts with 0 items
    updateCartDisplay();
    


    const mainImage = document.getElementById('mainImage');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const closeLightbox = document.getElementById('closeLightbox');
    
    let currentImageIndex = 0;
    let imagesArray = [
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg'
    ];
    
    // Open the lightbox when the main image is clicked
    function openLightbox(imageSrc) {
        if(window.innerWidth > 640){
            currentImageIndex = imagesArray.indexOf(imageSrc);
            if (currentImageIndex === -1) {
                currentImageIndex = 0;
            }
            lightboxImage.src = imagesArray[currentImageIndex];
            lightboxModal.classList.remove('hidden');
        }
        
    }
    
    // Close the lightbox
    closeLightbox.addEventListener('click', () => {
        lightboxModal.classList.add('hidden');
    });
    
    // Navigate to the previous image
    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
        lightboxImage.src = imagesArray[currentImageIndex];
    });
    
    // Navigate to the next image
    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
        lightboxImage.src = imagesArray[currentImageIndex];
    });
    
    // Change the main image when clicking on thumbnails
    
    function changeImage(imageSrc) {
        mainImage.src = imageSrc;
        currentImageIndex = imagesArray.indexOf(imageSrc);
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
        mainImage.src = imagesArray[currentImageIndex];
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
        mainImage.src = imagesArray[currentImageIndex];
    }