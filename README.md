VERSION FRANCAISE ***********************************************

MODAL 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DESCRIPTION: Modale avec fond sombre permettant d'afficher un message particulier et fermer celui-ci en cliquant sur le bouton ou en dehors.
  Idéal pour afficher des informations importantes ou des messages d'erreur de manière élégante et non intrusive dans une application React.
  Vous pouvez l'intégrer facilement dans vos projets en passant les props nécessaires pour personnaliser son comportement et son contenu.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Auteur: Stephen Thomas
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Version : 0.0.8
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Mots-clefs: "react", "components", "modal"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Propriétés (Props) :
    - isOpen : Un booléen qui détermine si la boîte modale est visible ou non. Lorsque cette valeur est à true, la boîte modale est affichée. Lorsqu'elle est à false, la boîte modale est masquée.
    - content : Le contenu de la boîte modale, généralement un titre ou un message.
    - onClose : Une fonction de rappel (callback) qui sera appelée lorsque l'utilisateur clique en dehors de la boîte modale ou sur le bouton "Close". Cette fonction est utilisée pour fermer la boîte modale.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Apparence :
    - La boîte modale est centrée verticalement et horizontalement à l'écran, légèrement transparente pour montrer le contenu en arrière-plan.
    - Le contenu de la boîte modale est affiché sur un fond blanc avec des coins arrondis et une ombre légère, ce qui la rend visuellement attrayante.
    - Un bouton "Close" est fourni en bas de la boîte modale pour permettre à l'utilisateur de la fermer.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Utilisation :
    - Pour afficher la boîte modale, passez isOpen à true en utilisant les propriétés (props) du composant.
    - Personnalisez le contenu en passant le texte souhaité via la prop content.
    - Pour fermer la boîte modale, vous pouvez soit cliquer en dehors de la boîte modale (grâce à l'événement onClick sur le fond sombre), soit en cliquant sur le bouton "Close".
    - La fonction onClose passée en tant que prop sera appelée lorsque la boîte modale est fermée.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
LIENS:
- Npm package avalaible on npm website: https://www.npmjs.com/package/npm-modal_by_stephen-thomas-2023
- Npm package avalaible on GitHub : https://github.com/stepheniki/modal_by_Stephen_Thomas/tree/main/modal
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSTALLATION DE L'APP REACT:
- npm create-react-app my-app
- cd my-app
- npm start
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
UNE FOIS QUE L'APP REACT EST CRÉÉE, INSTALLEZ LE COMPOSANT:
- npm i npm-modal_by_stephen-thomas-2023
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
IMPORTEZ LE COMPOSANT DANS VOTRE APPLICATION:
- import { Modal } from 'npm-modal_by_stephen-thomas-2023';
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



ENGLISH VERSION***********************************************
MODAL

DESCRIPTION : Modal is a component that displays a darkened overlay with a specific message and can be closed by clicking the close button or outside the modal. Ideal for elegantly displaying important information or error messages in a React application. You can easily integrate it into your projects by passing the necessary props to customize its behavior and content.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Author: Stephen Thomas
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Keywords: "react", "components", "modal"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Version: 0.0.8
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Props:
- isOpen: A boolean that determines whether the modal is visible or not. When this value is true, the modal is displayed. When it's false, the modal is hidden.
- content: The content of the modal, typically a title or message.
- onClose: A callback function that will be called when the user clicks outside the modal or the "Close" button. This function is used to close the modal.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Appearance:
- The modal is centered both vertically and horizontally on the screen and slightly transparent to show the background content.
- The modal content is displayed on a white background with rounded corners and a subtle shadow, making it visually appealing.
- A title is displayed in an <h2> element above the content.
- A "Close" button is provided at the bottom of the modal to allow the user to close it.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Usage:
- To display the modal, set isOpen to true using the component's props.
- Customize the content by passing the desired text via the content prop.
- To close the modal, you can either click outside the modal (thanks to the onClick event on the dark overlay) or click the "Close" button.
- The onClose function passed as a prop will be called when the modal is closed.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
LINKS:
- Npm package available on npm website: npm-modal_by_stephen-thomas-2023
- Npm package available on GitHub: GitHub Repository
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSTALLATION OF REACT APP:
Create a new React app:
- npm create-react-app my-app
- cd my-app
- npm start
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ONCE THE REACT APP IS CREATED, INSTALL THE COMPONENT:
- npm i npm-modal_by_stephen-thomas-2023
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
IMPORT THE COMPONENT INTO YOUR APPLICATION:
- import { Modal } from 'npm-modal_by_stephen-thomas-2023';

  

