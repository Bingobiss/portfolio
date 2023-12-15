 // Sélectionnez toutes les images
 const images = document.querySelectorAll('.img-fluid');

 // Parcourez chaque image et ajoutez un gestionnaire d'événement de clic
 images.forEach(image => {
     image.addEventListener('click', () => {
         // Changez la taille de l'image lorsqu'elle est cliquée
         if (!image.classList.contains('enlarge')) {
             // Ajoutez la classe 'enlarge' pour agrandir l'image
             image.classList.add('enlarge');
         } else {
             // Supprimez la classe 'enlarge' pour revenir à la taille d'origine
             image.classList.remove('enlarge');
         }
     });
 });